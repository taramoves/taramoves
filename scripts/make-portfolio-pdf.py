# -*- coding: utf-8 -*-
"""Generate a French PDF portfolio of all art projects."""

from __future__ import annotations

import re
import shutil
from pathlib import Path
from urllib.parse import unquote as url_unquote

from fpdf import FPDF
from fpdf.enums import XPos, YPos
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
FR_DIR = ROOT / "src" / "content" / "projects" / "fr"
PUBLIC = ROOT / "public"
OUT_DIR = ROOT / "portfolio"
OUT = OUT_DIR / "tara-rose-morris-portfolio-fr.pdf"
TMP_IMG = OUT_DIR / "_tmp_imgs"
FONT_REG = Path("C:/Windows/Fonts/arial.ttf")
FONT_BOLD = Path("C:/Windows/Fonts/arialbd.ttf")


def unquote(s: str):
    s = s.strip()
    if (s.startswith('"') and s.endswith('"')) or (s.startswith("'") and s.endswith("'")):
        return s[1:-1]
    if s == "true":
        return True
    if s == "false":
        return False
    if re.fullmatch(r"\d+", s):
        return int(s)
    return s


def parse_frontmatter(raw: str):
    m = re.match(r"^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$", raw)
    if not m:
        return {}, raw.strip()
    yaml, body = m.group(1), m.group(2).strip()
    data: dict = {}
    current_list = None
    current_obj = None
    for line in yaml.splitlines():
        if re.match(r"^\s*-\s+", line) and current_list is not None:
            item = re.sub(r"^\s*-\s+", "", line).strip()
            if ":" in item:
                current_obj = {}
                current_list.append(current_obj)
                k, v = item.split(":", 1)
                current_obj[k.strip()] = unquote(v)
            else:
                current_list.append(unquote(item))
                current_obj = None
            continue
        if re.match(r"^\s{2,}\w", line) and current_obj is not None:
            trimmed = line.strip()
            if ":" in trimmed:
                k, v = trimmed.split(":", 1)
                current_obj[k.strip()] = unquote(v)
            continue
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key, value = key.strip(), value.strip()
        current_obj = None
        if value == "":
            current_list = []
            data[key] = current_list
        elif value.startswith("[") and value.endswith("]"):
            data[key] = [unquote(x.strip()) for x in value[1:-1].split(",") if x.strip()]
            current_list = None
        else:
            data[key] = unquote(value)
            current_list = None
    return data, body


def latest_year(year) -> int:
    matches = re.findall(r"\d{4}", str(year or ""))
    return max(map(int, matches)) if matches else 0


def asset_path(web_path: str | None) -> Path | None:
    if not web_path:
        return None
    candidate = PUBLIC / Path(url_unquote(web_path.lstrip("/")))
    return candidate if candidate.exists() else None


def clean_body(md: str) -> str:
    text = re.sub(r"<!--[\s\S]*?-->", "", md).strip()
    text = re.sub(r"^##\s+", "", text, flags=re.M)
    text = re.sub(r"\*\*(.+?)\*\*", r"\1", text)
    return text


def load_projects():
    projects = []
    for path in FR_DIR.glob("*.md"):
        raw = path.read_text(encoding="utf-8")
        data, body = parse_frontmatter(raw)
        projects.append({"slug": path.stem, "data": data, "body": clean_body(body)})
    projects.sort(
        key=lambda p: (-latest_year(p["data"].get("year")), -(p["data"].get("order") or 0))
    )
    return projects


class PortfolioPDF(FPDF):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.add_font("Body", "", str(FONT_REG))
        self.add_font("Body", "B", str(FONT_BOLD))

    def footer(self):
        self.set_y(-12)
        self.set_font("Body", "", 8)
        self.set_text_color(80, 80, 80)
        self.cell(0, 8, str(self.page_no()), align="C")


def prepare_image(img_path: Path, max_side=1600) -> Path:
    TMP_IMG.mkdir(parents=True, exist_ok=True)
    out = TMP_IMG / f"{img_path.stem}_{img_path.stat().st_mtime_ns}.jpg"
    if out.exists():
        return out
    with Image.open(img_path) as im:
        im = im.convert("RGB")
        im.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
        im.save(out, "JPEG", quality=82, optimize=True)
    return out


def draw_rule(pdf: FPDF):
    pdf.set_x(pdf.l_margin)
    y = pdf.get_y()
    pdf.set_draw_color(0, 0, 0)
    pdf.set_line_width(0.3)
    pdf.line(pdf.l_margin, y, pdf.w - pdf.r_margin, y)
    pdf.ln(3)


def text(pdf: FPDF, content: str, size=10, style="", leading=4.4):
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Body", style, size)
    pdf.set_text_color(0, 0, 0)
    pdf.multi_cell(pdf.epw, leading, content)


def add_image_fit(pdf: FPDF, img_path: Path, max_h_mm=62):
    prepared = prepare_image(img_path)
    with Image.open(prepared) as im:
        w_px, h_px = im.size
    aspect = h_px / w_px
    w = pdf.epw
    h = w * aspect
    if h > max_h_mm:
        h = max_h_mm
        w = h / aspect
    x = pdf.l_margin + (pdf.epw - w) / 2
    y = pdf.get_y()
    pdf.set_draw_color(0, 0, 0)
    pdf.set_line_width(0.4)
    pdf.rect(x, y, w, h)
    pdf.image(str(prepared), x=x, y=y, w=w, h=h)
    pdf.set_xy(pdf.l_margin, y + h + 2.5)


def build():
    projects = load_projects()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if TMP_IMG.exists():
        shutil.rmtree(TMP_IMG)

    pdf = PortfolioPDF(orientation="P", unit="mm", format="Letter")
    pdf.set_auto_page_break(auto=True, margin=12)
    pdf.set_margins(14, 12, 14)

    # Cover
    pdf.add_page()
    pdf.set_draw_color(0, 0, 0)
    pdf.set_line_width(0.6)
    pdf.rect(10, 10, pdf.w - 20, pdf.h - 20)

    pdf.set_xy(20, 40)
    pdf.set_font("Body", "B", 28)
    pdf.multi_cell(pdf.epw - 8, 12, "TARA ROSE MORRIS")
    pdf.ln(4)
    pdf.set_x(20)
    pdf.set_font("Body", "", 11)
    pdf.multi_cell(
        pdf.epw - 8,
        6,
        "Artiste en nouveaux médias · animatrice · conceptrice de projections",
    )
    pdf.ln(2)
    pdf.set_x(20)
    pdf.set_font("Body", "B", 12)
    pdf.multi_cell(pdf.epw - 8, 7, "PORTFOLIO — PROJETS ARTISTIQUES SÉLECTIONNÉS")
    pdf.ln(2)
    pdf.set_x(20)
    pdf.set_font("Body", "", 10)
    pdf.multi_cell(pdf.epw - 8, 6, "Version française")

    pdf.set_xy(20, pdf.h - 55)
    pdf.set_font("Body", "", 10)
    for line in [
        "Montréal · Toronto",
        "taramoves@gmail.com",
        "taramoves.com",
        "instagram.com/taramoves",
    ]:
        pdf.set_x(20)
        pdf.cell(0, 6, line, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    # TOC
    pdf.add_page()
    text(pdf, "PROJETS", size=16, style="B", leading=10)
    draw_rule(pdf)
    pdf.ln(2)
    for i, p in enumerate(projects, 1):
        d = p["data"]
        title = str(d.get("title", p["slug"])).upper()
        year = str(d.get("year", ""))
        y = pdf.get_y()
        pdf.set_xy(pdf.l_margin, y)
        pdf.set_font("Body", "", 9)
        pdf.cell(12, 8, f"{i:02d}")
        pdf.set_font("Body", "B", 11)
        pdf.cell(pdf.epw - 40, 8, title[:50])
        pdf.set_font("Body", "", 10)
        pdf.cell(28, 8, year, align="R", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        pdf.set_draw_color(0, 0, 0)
        pdf.line(pdf.l_margin, pdf.get_y(), pdf.w - pdf.r_margin, pdf.get_y())

    # Projects — keep each project on a single page when possible.
    for i, p in enumerate(projects, 1):
        d = p["data"]
        pdf.add_page()
        text(pdf, f"{i:02d} / {len(projects):02d}", size=8, leading=4.2)

        title = str(d.get("title", "")).upper()
        text(pdf, title, size=15, style="B", leading=6.2)

        summary = str(d.get("summary") or "")
        if summary:
            text(pdf, summary, size=9, leading=4.2)

        pdf.ln(1)
        cover = asset_path(d.get("cover"))
        if cover:
            try:
                add_image_fit(pdf, cover, max_h_mm=55)
            except Exception as e:
                print(f"Cover skip {cover.name}: {e}")

        facts = [
            ("Année", d.get("year")),
            ("Médium", d.get("medium")),
            ("Rôle", d.get("role")),
            ("Lieu", d.get("location")),
        ]
        facts = [(k, str(v)) for k, v in facts if v]
        if facts:
            draw_rule(pdf)
            label_w = 24
            for label, value in facts:
                y = pdf.get_y()
                pdf.set_xy(pdf.l_margin, y)
                pdf.set_font("Body", "", 7)
                pdf.set_text_color(70, 70, 70)
                pdf.cell(label_w, 4.2, label.upper())
                pdf.set_font("Body", "", 9)
                pdf.set_text_color(0, 0, 0)
                pdf.multi_cell(pdf.epw - label_w, 4.2, value)
            draw_rule(pdf)

        body = p["body"]
        if body:
            pdf.ln(1)
            text(pdf, body, size=9, leading=4.2)

        presentations = d.get("presentations") or []
        if isinstance(presentations, list) and presentations:
            pdf.ln(1)
            text(pdf, "PRÉSENTATIONS", size=8, style="B", leading=4.2)
            draw_rule(pdf)
            for pr in presentations:
                if not isinstance(pr, dict):
                    continue
                bits = [pr.get("date"), pr.get("title"), pr.get("location"), pr.get("format")]
                line = " · ".join(str(b) for b in bits if b)
                text(pdf, f"- {line}", size=8, leading=3.8)

        credits = d.get("credits") or []
        if isinstance(credits, list) and credits:
            pdf.ln(1)
            text(pdf, "CRÉDITS", size=8, style="B", leading=4.2)
            draw_rule(pdf)
            for c in credits:
                if not isinstance(c, dict):
                    continue
                text(pdf, f"{c.get('name', '')} — {c.get('role', '')}", size=8, leading=3.8)

        gallery = d.get("gallery") or []
        if isinstance(gallery, list):
            imgs = []
            for g in gallery:
                if isinstance(g, dict):
                    gp = asset_path(g.get("src"))
                    if gp:
                        imgs.append(gp)
            if imgs:
                pdf.ln(1.5)
                cols = min(len(imgs), 4)
                gap = 1.5
                cell_w = (pdf.epw - gap * (cols - 1)) / cols
                cell_h = 24
                # Disable auto page break so gallery stays on this project page.
                pdf.set_auto_page_break(auto=False)
                y = pdf.get_y()
                x = pdf.l_margin
                for idx, gp in enumerate(imgs):
                    if idx > 0 and idx % cols == 0:
                        y += cell_h + gap
                        x = pdf.l_margin
                    try:
                        prepared = prepare_image(gp, max_side=800)
                        pdf.set_draw_color(0, 0, 0)
                        pdf.rect(x, y, cell_w, cell_h)
                        pdf.image(str(prepared), x=x, y=y, w=cell_w, h=cell_h)
                    except Exception as e:
                        print(f"Gallery skip {gp.name}: {e}")
                    x += cell_w + gap
                pdf.set_xy(pdf.l_margin, y + cell_h + 2)
                pdf.set_auto_page_break(auto=True, margin=12)

    # Contact end page
    pdf.add_page()
    pdf.set_draw_color(0, 0, 0)
    pdf.set_line_width(0.6)
    pdf.rect(10, 10, pdf.w - 20, pdf.h - 20)
    pdf.set_xy(20, pdf.h - 70)
    pdf.set_font("Body", "B", 16)
    pdf.cell(0, 10, "CONTACT", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.set_font("Body", "", 11)
    for line in [
        "taramoves@gmail.com",
        "taramoves.com",
        "instagram.com/taramoves",
    ]:
        pdf.set_x(20)
        pdf.cell(0, 7, line, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    pdf.output(OUT)
    if TMP_IMG.exists():
        shutil.rmtree(TMP_IMG)
    print(f"Wrote {OUT}")
    print("Projects:", ", ".join(str(p["data"].get("title", p["slug"])) for p in projects))
    print(f"Size: {OUT.stat().st_size / 1_000_000:.2f} MB")


if __name__ == "__main__":
    build()
