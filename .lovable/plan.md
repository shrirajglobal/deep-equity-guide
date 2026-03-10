

# Plan Update: White Background with Blue Theme

## Change Summary
Switch from the dark (#0D0D0D) theme to a clean white background with blue accents throughout the app. Everything else from the approved plan remains unchanged.

## Design System Changes

### Color Palette (in `src/index.css`)
- **Background**: Pure white (`0 0% 100%`)
- **Primary/Accent**: Rich blue (`220 90% 50%`) — used for CTAs, key numbers, active states
- **Primary Foreground**: White text on blue buttons
- **Secondary**: Light blue tint (`220 60% 96%`) for cards, hover states
- **Muted text**: Slate grey (`220 15% 50%`)
- **Destructive**: Keep red for negative indicators
- **Success**: Keep green for positive indicators
- **Border/Input**: Light blue-grey (`220 20% 90%`)

### Typography
- Keep Source Code Pro for data/headlines and EB Garamond for narratives (loaded via Google Fonts)
- Text color: Dark navy (`220 60% 15%`) for readability on white

### Component Styling
- Cards: White with subtle blue-grey border and light shadow
- Form inputs: White background, blue-grey border, blue focus ring
- "Generate Analysis" button: Solid blue with white text (instead of gold)
- Loading sequence: Blue monospace text on white (instead of gold on black)
- Report: Clean white document with blue section headers and dividers
- Charts: Blue color scale (light-to-dark blue gradient) instead of gold

### General Approach
- All changes are CSS variable updates in `src/index.css` — no structural changes
- The dark mode variables will also be updated to a dark-blue variant for consistency, but the default will be light/white

Everything else — the form flow, AI analysis, report structure, Supabase storage, past reports — remains exactly as planned.

