# Weather — Apple-Inspired Style Reference

> Minimalist weather dashboard inspired by Apple's visual language. Treat each section as a dark, spacious stage for clearly presented meteorological information, with large typography, restrained blue controls, rounded modules, and simple weather imagery.

**Theme:** dark

The interface uses a premium, minimalist visual style inspired by Apple's design language. The page combines deep black and charcoal surfaces with large, high-contrast typography and carefully spaced weather information. Blue is reserved for interactive controls, links, and selected states. Weather conditions are represented through simple icons and subtle visual elements rather than excessive decoration.

The main experience focuses on one task: selecting a country and city and clearly presenting the current weather information.

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#000000` | `--color-obsidian` | Main background and hero weather stage |
| Graphite | `#0e0e0e` | `--color-graphite` | Navigation and secondary dark surfaces |
| Carbon | `#1d1d1f` | `--color-carbon` | Weather information sections and panels |
| Steel | `#333336` | `--color-steel` | Borders and subtle interface elements |
| Slate | `#6e6e73` | `--color-slate` | Input borders and secondary text |
| Ash | `#86868b` | `--color-ash` | Supporting information and muted labels |
| Porcelain | `#f5f5f7` | `--color-porcelain` | Main text on dark backgrounds |
| White | `#ffffff` | `--color-white` | High-contrast text and weather values |
| Weather Blue | `#0071e3` | `--color-weather-blue` | Primary buttons and selected controls |
| Electric Blue | `#2997ff` | `--color-electric-blue` | Links and secondary interactive elements |
| Sky Blue | `#64b5f6` | `--color-sky-blue` | Weather-related visual accents |
| Warning Yellow | `#ffd60a` | `--color-warning-yellow` | Sun and warning weather indicators |
| Cloud Gray | `#b0b0b5` | `--color-cloud-gray` | Cloud and neutral weather icons |
| Rain Blue | `#4da3ff` | `--color-rain-blue` | Rain-related weather indicators |

---

# Tokens — Typography

### Weather Text

Use a clean sans-serif font inspired by Apple's SF Pro typography.

**Substitute:** Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.

Use the typography hierarchy to make the temperature the main visual element while keeping supporting weather information compact and readable.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| utility-nav | SF Pro Text | 400 | 12px | 1.33 | -0.12px | `--text-utility-nav` |
| body | SF Pro Text | 400 | 14px | 1.29 | -0.224px | `--text-body` |
| body-strong | SF Pro Text | 600 | 14px | 1.29 | -0.224px | `--text-body-strong` |
| navigation | SF Pro Text | 500 | 17px | 1.47 | -0.374px | `--text-navigation` |
| location | SF Pro Display | 500 | 24px | 1.20 | -0.20px | `--text-location` |
| weather-condition | SF Pro Display | 500 | 28px | 1.10 | -0.20px | `--text-condition` |
| weather-stat | SF Pro Display | 600 | 32px | 1.00 | -0.30px | `--text-weather-stat` |
| temperature | SF Pro Display | 600 | 80px | 1.00 | -1.20px | `--text-temperature` |
| temperature-xl | SF Pro Display | 600 | 96px | 1.00 | -1.44px | `--text-temperature-xl` |
| section-title | SF Pro Display | 600 | 48px | 1.08 | -0.60px | `--text-section-title` |

---

# Tokens — Spacing & Shapes

**Density:** comfortable

## Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 90 | 90px | `--spacing-90` |
| 144 | 144px | `--spacing-144` |

## Border Radius

| Element | Value |
|---------|-------|
| cards | 28px |
| weather-modules | 28px |
| links | 10px |
| pills | 9999px |
| inputs | 980px |
| buttons | 170px |
| navigation | 20px |
| compactButtons | 36px |

## Shadows

The interface should use minimal shadows.

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(40, 40, 40) 0px 0px 0px 1px` | `--shadow-subtle` |
| subtle-2 | `rgb(110, 110, 115) 0px 0px 0px 1px` | `--shadow-subtle-2` |

## Layout

- Section gap: 24px
- Card padding: 16px
- Weather card padding: 28px
- Element gap: 8px
- Main content max width: 1200px
- Mobile horizontal padding: 20px
- Desktop horizontal padding: 32px

---

# Components

## Global Navigation

**Role:** Main navigation of the website.

Use a `#000000` bar with a compact height of approximately 44px.

Navigation elements:

- Weather logo/name
- Inicio
- Clima
- Pronóstico
- Acerca de

Use `#f5f5f7` for primary navigation text and `#86868b` for secondary elements.

The navigation should remain simple and should not visually compete with the weather information.

---

## Weather Hero

**Role:** Main weather section.

Use a full-width `#000000` stage.

The hero should contain:

1. Main title.
2. Short description.
3. Country selector.
4. City selector.
5. Consultar button.

Example:

```text
Consulta el clima

Selecciona un país y una ciudad para conocer
las condiciones meteorológicas actuales.

[ México                  ▼ ]

[ Morelia                  ▼ ]

[ Consultar clima ]