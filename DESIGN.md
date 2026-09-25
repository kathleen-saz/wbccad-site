---
version: alpha
name: "WBCcad Precision Grid"
description: "A high-contrast industrial interface that turns the visual language of CAD drawings into an assured Brazilian B2B software brand."
colors:
  primary: "#2F5CFF"
  ink: "#0A0A0A"
  paper: "#F5F5F3"
  white: "#FFFFFF"
  muted: "#6B6B68"
  line: "#D8D8D4"
  blueprint: "#2F5CFF"
  blueprint-dark: "#1736A7"
  focus: "#FF6B2C"
typography:
  sans:
    fontFamily: "Sora, Helvetica Neue, Arial, sans-serif"
    lineHeight: "1.5"
  mono:
    fontFamily: "IBM Plex Mono, SFMono-Regular, Consolas, monospace"
    lineHeight: "1.4"
rounded:
  DEFAULT: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
spacing:
  section-gap: "10rem"
  page-max: "90rem"
components:
  button:
    backgroundColor: "#2F5CFF"
    textColor: "#FFFFFF"
    rounded: "0px"
    height: "52px"
  card:
    backgroundColor: "#FFFFFF"
    textColor: "#0A0A0A"
    rounded: "0px"
  focus:
    backgroundColor: "#FF6B2C"
    textColor: "#0A0A0A"
    width: "3px"
---

# WBCcad Precision Grid Design System

## Overview

### Creative North Star

The site should feel like an expert project file opened in a calm, exacting design studio: black model space, luminous blueprint selection color, technical annotations, and a grid that always carries real information. The expression is assured rather than futuristic.

### Product context and register

- **Audience and primary job:** Engineering, commercial, project, purchasing and production leaders evaluating software that connects layout work to proposals and bills of materials.
- **Target market(s) and evidence:** Brazil and Latin America, based on WBCcad's official Portuguese site and Workbench's stated distribution footprint. The public marketing site is Portuguese-first.
- **Locale(s) and language policy:** `pt-BR`. Product and industry terms retain established forms such as CAD, DWG and ERP.
- **Usage scene:** Primarily desktop research by B2B buyers, with complete mobile browsing for shared links and colleague review.
- **Register:** Brand marketing.
- **Memorable signature:** A living CAD viewport in the hero that makes the product category immediately tangible.
- **Restraint:** The viewport carries the technical theatre; content sections use disciplined typography, rules and whitespace.
- **Anti-references:** Generic purple-gradient SaaS landing pages, neon cyberpunk, rounded card mosaics, stock-photo engineering teams, and ungrounded AI claims.
- **Token ownership/runtime mapping:** This file is the durable rationale; exact runtime tokens live in `app/globals.css` under `:root` with matching names and values.

## Colors

`ink` and `paper` create the high-contrast base. `blueprint` is the single expressive brand color, used for active geometry, primary CTAs and large brand fields. `focus` is reserved for focus-visible rings so accessibility remains clear and distinct from the brand accent. `muted` and `line` support technical annotation without competing with the message.

## Typography

Sora carries headlines and body copy with compact technical geometry. IBM Plex Mono is reserved for file names, labels, dimensions, indexes and system-state annotations. Headlines use tight tracking and controlled short lines; paragraphs stay below roughly 68 characters. Sentence case is preferred over decorative all-caps, except small technical labels.

## Layout

The desktop shell tops out at 90rem and uses edge-to-edge section fields within a 64px viewport margin. Major sections use asymmetric two-column grids, while content-rich sequences use literal rules and aligned baselines. At 760px, every sequence becomes one column and sticky positioning is removed. Media geometry is reserved so no loading shift is introduced.

## Elevation & Depth

Hierarchy comes from color fields, borders and overlap, not soft card shadows. The hero CAD viewport may use one deep shadow because it represents a floating application surface. Static marketing cards remain flat.

## Shapes

Corners are square throughout to echo drafting sheets, panels and model-space tools. Small circular shapes are allowed only for diagram nodes and check indicators. Borders are crisp one-pixel rules; selected geometry may use two pixels.

## Components

### Foundational visual states

Links and controls receive visible hover movement or underline, orange focus-visible outlines, and a pressed return to their base position. No control depends on hover alone. Busy and disabled states are not currently required because every CTA is a direct link.

### Buttons and actions

Primary actions use the blueprint field with white text. The inverse CTA uses white on blueprint and inverts to ink on hover. Buttons are 52px tall, square, and paired with a directional arrow. Text links use a precise underline reveal.

### Navigation and data display

Navigation stays transparent over the hero with a lower rule. Module rows behave like a technical index: index, glyph, name, definition, direction. On mobile, definitions move below names without losing order or meaning.

### Forms and overlays

No forms or overlays are present. Contact actions lead to the maintained public WBCcad contact destination rather than creating a nonfunctional local form.

### Iconography

Inline custom SVG uses 1–1.5px geometric strokes and square caps. Icons reinforce labels and never replace essential copy.

### Motion

Motion is mechanical and slow: the selected CAD label drifts, the materials ticker advances, and a single orbital diagram rotates. Interaction feedback uses 200–250ms easing. All motion is removed under `prefers-reduced-motion`.

### Content and data visualization

The voice is direct, technically grounded and outcome-oriented. It avoids inflated transformation language. Numbers and dimensions use the mono face. Diagrams are conceptual and are labelled as visual interface elements rather than evidence of a live product session.

## Do's and Don'ts

- **Do:** Make every structural line or index communicate hierarchy, workflow or technical context.
- **Do:** Keep the CAD viewport as the one expressive, product-specific moment.
- **Don't:** add gradients, glass cards, excessive pills or decorative glow fields.
- **Don't:** use unsupported absolute claims or imply that a conceptual UI image is a live product screenshot.
