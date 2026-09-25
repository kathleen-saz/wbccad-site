---
version: alpha
name: "WBCcad Geist Precision Grid"
description: "A Geist-led, high-contrast system that turns CAD guides, model space and revision data into a precise Brazilian B2B software brand."
colors:
  primary: "#0070F3"
  ink: "#000000"
  paper: "#FFFFFF"
  white: "#FFFFFF"
  surface: "#FAFAFA"
  muted: "#666666"
  line: "#EAEAEA"
  blueprint: "#0070F3"
  blueprint-dark: "#0055B8"
  focus: "#FF6B2C"
typography:
  sans:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    lineHeight: "1.5"
  mono:
    fontFamily: "Geist Mono, SFMono-Regular, Consolas, monospace"
    lineHeight: "1.4"
rounded:
  DEFAULT: "8px"
  sm: "6px"
  md: "8px"
  lg: "12px"
spacing:
  section-gap: "10rem"
  page-max: "75rem"
components:
  button:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "8px"
    height: "48px"
  card:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "0px"
  focus:
    backgroundColor: "#FF6B2C"
    textColor: "#0A0A0A"
    width: "3px"
---

# WBCcad Geist Precision Grid Design System

## Overview

### Creative North Star

The site should feel like a precise Geist interface built around a real engineering project: a white system canvas, black model space, blue CAD selection, technical annotations, and grid guides that always carry information. The expression is calm and direct rather than futuristic.

### Product context and register

- **Audience and primary job:** Engineering, commercial, project, purchasing and production leaders evaluating software that connects layout work to proposals and bills of materials.
- **Target market(s) and evidence:** Brazil and Latin America, based on WBCcad's official Portuguese site and Workbench's stated distribution footprint. The public marketing site is Portuguese-first.
- **Locale(s) and language policy:** `pt-BR`. Product and industry terms retain established forms such as CAD, DWG and ERP.
- **Usage scene:** Primarily desktop research by B2B buyers, with complete mobile browsing for shared links and colleague review.
- **Register:** Brand marketing.
- **Memorable signature:** A dark CAD viewport inside the otherwise grayscale Geist system, with blue reserved for selected geometry.
- **Restraint:** The viewport carries the technical theatre; content sections use disciplined typography, rules and whitespace.
- **Anti-references:** Generic purple-gradient SaaS landing pages, neon cyberpunk, rounded card mosaics, stock-photo engineering teams, and ungrounded AI claims.
- **Token ownership/runtime mapping:** This file is the durable rationale; exact runtime tokens live in `app/globals.css` under `:root` with matching names and values.

## Colors

`ink` and `paper` create the high-contrast base. `surface` and `line` separate grid cells without relying on shadow. `blueprint` is the only expressive color and belongs to CAD selection, active geometry and technical focus—not large marketing fields. `focus` stays distinct for keyboard focus.

## Typography

Geist Sans carries navigation, headlines, body copy and actions. Geist Mono is reserved for file names, labels, dimensions, indexes and system-state annotations. Headlines use restrained weight and tight tracking; paragraphs stay below roughly 68 characters. Sentence case is preferred over decorative all-caps, except small technical labels.

## Layout

The desktop shell tops out at 75rem and uses edge-to-edge section fields within a 64px viewport margin. Major sections use asymmetric two-column grids, while content-rich sequences use literal rules and aligned baselines. At 760px, every sequence becomes one column and sticky positioning is removed. Media geometry is reserved so no loading shift is introduced.

## Elevation & Depth

Hierarchy comes from color fields, borders and overlap, not soft card shadows. The hero CAD viewport may use one deep shadow because it represents a floating application surface. Static marketing cards remain flat.

## Shapes

Marketing grid cells remain square so their guides align. Resting interface surfaces use 8–12px radii following Geist material roles: 8px controls, 12px application and CTA surfaces. Circular shapes are reserved for diagram nodes and check indicators.

## Components

### Foundational visual states

Links and controls receive visible hover movement or underline, orange focus-visible outlines, and a pressed return to their base position. No control depends on hover alone. Busy and disabled states are not currently required because every CTA is a direct link.

### Buttons and actions

Primary actions use ink with white text. Buttons are 48px tall, 8px rounded, and paired with a directional arrow. Blueprint blue does not compete with the primary action. Text links use a precise underline reveal.

### Navigation and data display

Navigation stays transparent over the hero with a lower rule. Module rows behave like a technical index: index, glyph, name, definition, direction. On mobile, definitions move below names without losing order or meaning.

### Forms and overlays

No forms or overlays are present. Contact actions lead to the maintained public WBCcad contact destination rather than creating a nonfunctional local form.

### Iconography

Inline custom SVG uses 1–1.5px geometric strokes and square caps. Icons reinforce labels and never replace essential copy.

### Motion

Motion is mechanical and slow: the selected CAD label drifts, the materials ticker advances, and a single orbital diagram rotates. Interaction feedback uses 200–250ms easing. All motion is removed under `prefers-reduced-motion`.

### Content and data visualization

The voice sounds like someone who has sat between commercial, engineering and production teams. It names the actual object and consequence: measure, layout, list, quote, catalog, factory. It avoids transformation language, fake quotations and generic claims. Numbers and dimensions use the mono face.

## Do's and Don'ts

- **Do:** Make every structural line or index communicate hierarchy, workflow or technical context.
- **Do:** Keep the CAD viewport as the one expressive, product-specific moment.
- **Don't:** add decorative gradients, glass cards, excessive pills or glow fields.
- **Don't:** use unsupported absolute claims or imply that a conceptual UI image is a live product screenshot.
