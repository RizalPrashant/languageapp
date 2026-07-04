# Custom Location Backgrounds

Drop an image in this folder and it replaces the procedural ground/walls for that
location. No code changes needed — missing files just fall back to the built-in look.
Objects, NPCs, the cat, warp markers, and the player are always drawn ON TOP of your art.

## Spec

| Thing   | Answer |
|---------|--------|
| Format  | **PNG** preferred (JPG works, but compresses badly when scaled) |
| Size    | **256 × 192 px** native, or any 4:3 multiple — `512×384`, `1024×768` (best for AI gen). Auto-scaled. |
| Where   | `quest-app/public/bg/` (this folder) |
| Naming  | Exactly the location id + `.png` (see table below) |

Each screen is a **16 × 12 grid of 16px tiles** (that's where 256×192 comes from).
At 1024×768, one game tile = one neat 64×64 square on your image.

## File names

| File          | Location            | Layout notes |
|---------------|---------------------|--------------|
| `bedroom.png` | Home · Your Room    | indoor |
| `house.png`   | Home (kitchen)      | indoor |
| `street.png`  | Street              | outdoor; light-colored paths |
| `park.png`    | Park                | outdoor; pond in the middle (tile rows 4–7) |
| `gym.png`     | Gym                 | indoor |
| `office.png`  | Work                | indoor |
| `store.png`   | Store               | indoor |
| `clinic.png`  | Clinic              | indoor |
| `ward.png`    | Hospital Ward       | indoor (only visible days 43–48) |
| `cafe.png`    | Café Tuesday        | indoor (opens day 65) |
| `hill.png`    | The Hill            | outdoor; path across the middle |

## The two rules that matter

1. **Paint only ground, walls, and ambience — no furniture, no trees, no people.**
   The engine draws every object and character on top. If you paint a table into
   the art, the sprite table floats over it and you get doubles.

2. **The picture must agree with where players can walk.** Collision is invisible
   and unchanged by your art.
   - **Indoor rooms**: top **2 tile rows** are wall (32px native / 128px at 4×),
     bottom 1 row is blocked, everything between is open floor.
   - **Outdoor screens**: 1-tile blocked border all around.
   - **Water** (park pond): paint it — the engine overlays animated ripples
     on water tiles automatically, over your art.

## Recommended workflow

**Screenshot → paint over → export.**

1. Open the game, stand in the room, screenshot the game canvas.
2. Use the screenshot as the base layer in your drawing app — or give it to an
   AI image tool as the reference: *"repaint this in [style], keep the exact
   layout, remove all furniture and characters."*
3. Export at 1024×768 (or 256×192), name it per the table, drop it here, refresh.

Alignment is perfect by construction because the screenshot already has the pond,
paths, and walls exactly where the game thinks they are.

## Style tip

Characters are chunky 16px pixel sprites. **Pixel-art or flat/simple painted
backgrounds blend beautifully; photoreal renders make the sprites look like
stickers.** Test one room first (the park is a fun candidate) before batching
all eleven.
