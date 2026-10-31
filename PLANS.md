# State relocation SEO rollout

## Goal

Publish a useful Portuguese language relocation page for every US state, connected to the national buyer page and built as static HTML that search engines can discover and index.

## Requirements

1. One stable URL per state under `/agenciamento/`.
2. Unique title, description, canonical URL, headings, regional context, buyer questions, and frequently asked questions for each state.
3. Clear Alabama direct service and local professional collaboration language for the other states.
4. Internal links from the national page and between relevant state pages.
5. Static generation, structured data, crawlable links, and sitemap inclusion.
6. No invented market statistics, testimonials, rankings, licensing claims, or guaranteed outcomes.
7. Desktop and mobile interaction testing before production deployment.

## Work plan

1. Build and validate the fifty state content model.
2. Create the static state route and reusable state page layout.
3. Add the state directory to the national page.
4. Validate titles, descriptions, canonicals, structured data, links, and rendered source.
5. Run lint, type checks, production build, and responsive browser QA.
6. Deploy through GitHub and Vercel, then verify the production URLs and deployment commit.

## Status

Content, routes, lead flow, metadata, structured data, internal links, and Portuguese UI are complete and live.

## Buyer conversion pass

### Goal

Turn high intent buyer visits into useful, contextual requests without requiring buyers to repeat information or surrender contact details before receiving value.

### Completed implementation

1. Added four compact buyer paths beneath the homepage hero.
2. Replaced the unavailable homes search dead end with a personal search brief that requires a first name and one reply method.
3. Changed the Portuguese planner result into a visible relocation summary and reduced its contact gate to one reply method.
4. Added uncertain timing and budget choices, fixed the missing detailed budget range, and aligned local introduction language with buyer authorization.
5. Added a contextual planning tools handoff that preserves the selected worksheet in the contact request.
6. Added contextual area guide requests and enabled buyer planning tools in desktop and mobile navigation.
7. Added source attribution and verified provider responses before showing lead success.

### Verification

Targeted lint and TypeScript pass. The full 105 page production build passes. Desktop and mobile browser QA passed for the homepage, homes brief, planning tools handoff, contextual contact page, and Portuguese planner. No browser console errors or warnings were found. This conversion pass is live in production.

## Sitewide buyer concierge conversion pass

### Goal

Add one original, low friction buyer capture system across the website. The experience combines one question at a time qualification with a streamlined search interface, while giving buyers a useful plan before requesting contact information.

### Accepted design specification

1. A compact fixed launcher opens a 420 pixel desktop drawer or a mobile bottom sheet.
2. Three short questions collect the buyer goal, destination and timing.
3. The current route supplies relevant context such as an area, state, planning tool or property page.
4. A personalized buyer plan appears before the optional contact step.
5. Contact requires only a first name and one selected reply method.
6. English and Portuguese routes use localized copy and preserve the same interaction model.
7. The component uses the existing magenta, plum, peach, white and cool gray system with IBM Plex Serif and Inter typography.

### Implementation plan

1. Build a reusable route aware buyer concierge component and mount it from the application shell.
2. Add accessible dialog behavior, focus management, escape handling, progress state and session persistence.
3. Generate useful plan recommendations from the selected goal, location, timing and current page context.
4. Submit verified provider responses with source attribution, versioning and the full buyer plan.
5. Remove the older property detail pop up so buyers never encounter competing lead forms.
6. Run targeted lint, TypeScript, production build and desktop and mobile browser interaction testing.
7. Release through GitHub and Vercel, then verify the production domain and public routes.

### Status

Complete and live on `beccatravis.com` through merge commit `6bc7c57`. Targeted lint, TypeScript, the 106 page production build, desktop browser QA, 390 pixel mobile QA, 320 pixel compact QA, route-aware English and Portuguese checks, public HTTP checks and live browser console checks all passed. No test lead was submitted.
