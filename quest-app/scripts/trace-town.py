#!/usr/bin/env python3
"""Trace the town: compose the 50x28 collision grid for the painted map.

Prints the tile rows (paste into src/data/world.ts) and renders
scripts/trace-preview.png — the painting tinted red (blocked) / blue
(water) with NPC markers — so you can see the collision over the art.
Edit the carve()/block() calls below, re-run, compare, paste.
In-game, press G for the same overlay live."""
from PIL import Image, ImageDraw, ImageFont

COLS, ROWS = 50, 28
grid = [['#'] * COLS for _ in range(ROWS)]

def carve(x0, y0, x1, y1, ch='.'):
    for y in range(y0, y1 + 1):
        for x in range(x0, x1 + 1):
            if 0 <= x < COLS and 0 <= y < ROWS:
                grid[y][x] = ch

def block(x0, y0, x1, y1, ch='#'):
    carve(x0, y0, x1, y1, ch)

# ---------------- carve the walkable town (positive space) ----------------
# top road entry + split
carve(20, 0, 27, 2)
# branch A: diagonal avenue, top-center -> crosswalk (7,10) -> left edge
carve(17, 2, 24, 3)
carve(15, 3, 22, 4)
carve(13, 4, 21, 5)   # includes sidewalk pocket for flower girl
carve(12, 5, 19, 6)
carve(11, 6, 17, 7)
carve(10, 7, 16, 8)
carve(8, 8, 14, 9)
carve(7, 9, 13, 10)
carve(5, 10, 11, 11)
carve(3, 11, 10, 12)
carve(0, 12, 8, 13)
# left-edge road running south
carve(0, 13, 4, 27)
# branch B: road down the right side of the hill garden
carve(23, 3, 27, 4)
carve(23, 4, 27, 9)
carve(23, 9, 28, 10)
# center east-west street along the hill base -> onsen steps junction
carve(9, 10, 24, 12)
carve(24, 10, 33, 12)
# central plaza (cafe terrace at its north edge)
carve(17, 12, 28, 18)
# cat yard (fenced; opening on the east side toward the plaza)
carve(13, 14, 18, 16)
# street: plaza -> station front
carve(21, 15, 25, 19)
carve(22, 19, 24, 22)
# corridor above station -> platform pocket (the kid + the train)
carve(26, 17, 33, 18)
carve(29, 19, 33, 21)
# street: plaza down-left toward Lawson
carve(9, 18, 21, 21)
# Lawson storefront sidewalk + bottom-left road bend
carve(5, 22, 16, 25)
carve(5, 25, 10, 26)

# ---------------- block the solid world back on top ----------------
# buildings / big masses
block(19, 11, 24, 13)   # cafe row building (terrace row 14 stays open)
block(26, 12, 28, 13)   # building right of the cafe
block(13, 11, 17, 13)   # cat house
block(29, 12, 37, 16)   # right-of-plaza house cluster
block(24, 19, 30, 22)   # station building
block(8, 20, 15, 23)    # Lawson building
block(16, 21, 20, 23)   # houses right of Lawson
block(17, 18, 19, 19)   # red-roof shed
block(14, 5, 16, 9)     # small lantern garden (fenced) left of the hill
# hill garden: elevated, stairs at its SE corner (monk stands at the top)
block(15, 5, 22, 9)
# onsen compound (pools drawn as water for the ripple overlay)
block(29, 3, 43, 10)
carve(31, 5, 33, 8, '~')
carve(40, 5, 42, 7, '~')
# yard fence: west + south, opening kept on the east
block(12, 14, 12, 16)
block(13, 17, 17, 17)
# parked vehicles (painted, static)
block(22, 0, 24, 1)     # white van, top
block(17, 4, 18, 5)     # grey van
block(9, 8, 11, 9)      # tan car
block(24, 8, 25, 9)     # red car by the hill
block(0, 13, 1, 15)     # blue car, left road
block(3, 14, 5, 15)     # taxi
block(4, 23, 6, 25)     # truck by Lawson (x7 stays open: painted pedestrian slot)
# market stall at the junction (baker's stand)
block(27, 9, 29, 10)
# platform kiosk / cart contraption
block(32, 19, 33, 20)
# sakura canopies overhanging walkways
block(5, 5, 7, 7)
block(15, 6, 16, 7)
block(12, 8, 13, 9)
block(5, 9, 6, 10)
block(4, 11, 6, 12)
block(8, 13, 9, 14)
block(21, 3, 22, 4)
block(19, 13, 20, 14)
block(5, 19, 7, 21)
block(15, 19, 16, 20)
block(21, 20, 22, 21)
block(26, 16, 27, 17)   # plaza SE sakura
block(28, 14, 28, 15)   # plaza NE sakura
block(6, 26, 10, 27)     # teal-roof shed, bottom edge

ascii_rows = [''.join(r) for r in grid]
print('\n'.join(f"      '{r}'," for r in ascii_rows))

# ---------------- preview over the painting ----------------
src = "/Users/rizalprashant/Desktop/languageapp/quest-app/public/bg/square.png"
img = Image.open(src).convert("RGB")
W, H = img.size
cw, ch = W / COLS, H / ROWS
ov = Image.new("RGBA", img.size, (0, 0, 0, 0))
d = ImageDraw.Draw(ov)
for y in range(ROWS):
    for x in range(COLS):
        box = [x * cw, y * ch, (x + 1) * cw, (y + 1) * ch]
        if grid[y][x] == '#':
            d.rectangle(box, fill=(255, 30, 30, 95))
        elif grid[y][x] == '~':
            d.rectangle(box, fill=(30, 90, 255, 110))
img = Image.alpha_composite(img.convert("RGBA"), ov)
d = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", 20)
except Exception:
    font = ImageFont.load_default()
NPCS = {
    'grandma': (21, 14), 'baker': (28, 11), 'shopkeeper': (12, 24),
    'catlady': (19, 15), 'flowergirl': (20, 4), 'oldman': (31, 11),
    'monk': (23, 9), 'kid': (31, 21), 'cat': (16, 16), 'START': (22, 16),
}
for name, (x, y) in NPCS.items():
    px, py = (x + 0.5) * cw, (y + 0.5) * ch
    col = (60, 255, 60) if name == 'START' else (255, 230, 40)
    d.ellipse([px - 7, py - 7, px + 7, py + 7], fill=col, outline=(0, 0, 0))
    d.text((px + 9, py - 12), name, fill=(255, 255, 255), font=font,
           stroke_width=2, stroke_fill=(0, 0, 0))
img.convert("RGB").save(__file__.rsplit("/", 1)[0] + "/trace-preview.png")
print("preview saved", file=__import__('sys').stderr)
