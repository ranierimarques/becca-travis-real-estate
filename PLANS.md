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

## Factual listing planner release

### Goal

Give a homeowner who is only exploring a useful listing-preparation result before any contact request. The tool must build a working property-description draft exclusively from facts the homeowner enters, make missing proof visible, and keep every input in the browser.

### Research and design decisions

1. Current seller portals emphasize valuation, agent matching, and broad checklists. This release differentiates with immediate, private utility: structured facts, a live draft, source prompts, and a printable preparation plan.
2. The page does not estimate value, suggest a price, introduce market statistics, or provide legal, tax, lending, or disclosure conclusions.
3. Free-text property details are screened for audience-focused, steering, superlative, and unverifiable wording before they can enter the draft.
4. The accepted visual specification uses the existing white, cool gray, plum, magenta, and restrained peach system; IBM Plex Serif headings; Inter UI copy; an open two-column desktop workspace; and a single-column mobile continuation.
5. The tool never asks for a name, phone number, email address, or street address and never sends or submits property data.

### Implementation plan

1. Add an indexable `/listing-planner` page with canonical metadata and static explanatory content.
2. Build reusable fact fields, draft generation, wording review, source/missing-fact prompts, browser-only persistence, copy, print, reset, and preparation-checklist interactions.
3. Add the planner to desktop and mobile seller navigation and introduce it before the existing seller inquiry form.
4. Suppress the buyer concierge on the seller planner so the page has one clear job.
5. Verify targeted lint, TypeScript, production build, keyboard behavior, copy/print/reset behavior, local persistence, desktop layout, 390 pixel mobile layout, and 320 pixel compact layout.
6. Release through GitHub and Vercel, then verify the public canonical URL, metadata, interactions, and console.

### Status

Implementation and pre-release validation are complete on `codex/factual-listing-planner`.
Targeted lint, TypeScript, a 107 page production build, generated HTML checks, JSON-LD
parsing, desktop browser QA, 390 pixel mobile QA, 320 pixel compact QA, persistence,
wording review, copy, and responsive layout checks passed. Production deployment and
public-domain verification are the remaining release gate. No test lead was submitted.

## Seller planner mobile revision

### Goal

Respond to the supplied mobile screenshot by making the page feel like a useful home sale
plan instead of a long listing description form. Keep the existing brand, private browser
storage, fact review, and factual copy safeguards.

### Implementation

1. Lead with a clear home sale promise and a short path into the planner.
2. Show only location, timing, and property type at first. Place measurements and home
   highlights in accessible optional sections.
3. Show a useful next step in the plan panel before any description is generated.
4. Tighten the result panel and align seller page, navigation, and search metadata with
   the new promise.
5. Keep the seller routes focused on their seller actions by removing the buyer plan
   launcher from the seller page.

### Status

Implementation and local verification are complete. Targeted lint, TypeScript, the 107
page production build, desktop and 390 and 320 pixel browser checks, disclosure behavior,
browser storage restoration, seller call to action styling, and buyer launcher route
checks passed. Public deployment verification is tracked in the release report.

## Live factual cleanup and buyer tools

### Goal

Audit the six issues raised in the October 31 pasted report against current production,
remove confirmed placeholder or misleading content, add useful buyer research tools where
the inputs and data sources are supportable, and verify the released site.

### Rules for this pass

1. Treat the pasted crawl as claims to check. Do not publish its property status, school
   assignments, reviews, demographic figures, tax rates, loan rates, or timing benchmarks
   without independent support.
2. Remove fake listings and unrelated local business or school data before replacing them.
3. Preserve the current brand, accessible mobile controls, and existing lead flow.
4. Keep official sources close to any numerical or map result. Do not imply a buyer can
   obtain private disclosures or insurance claims through a text button.
5. Confirm both the rendered page and the production deployment, not only a local build.

### Work plan

1. Audit live routes, source data, and the pasted claims.
2. Remove placeholder homes and stale community content; handle fake home URLs correctly.
3. Repair homepage voice, source labels, and verifiable professional identity metadata.
4. Build practical buyer research interactions using supported public inputs and clearly
   labeled estimates or links.
5. Run targeted checks, production build, responsive browser QA, and source spot checks.
6. Deploy through GitHub and Vercel, then check production routes, console, metadata,
   sitemap, and response codes.

### Status

Implementation and local verification are complete. The production release is pending.
The current pass removes the BridgeData test feed and its fake home detail pages, adds
four buyer research interactions, repairs the homepage search handoff, and replaces
unsupported rankings and sales claims. The area guide and homepage now use photographic
cards, including sourced Huntsville scenes with visible credits. Desktop, 390 pixel, and
320 pixel layouts have been checked locally. The newly generated portrait from Becca's
recent iPhone photo is saved for review and remains off the site until her post-preview
choice is clear.

## Listing planner optimization pass

### Goal

Improve first load performance, make OpenAI search access explicit, remove unsupported
social claims, and create a clearer optional seller handoff after the homeowner receives
the private planning value.

### Completed implementation

1. Moved the buyer concierge and optional property assistant out of the shared application
   bundle and load them only on routes that use them.
2. Kept both global chat experiences off the focused listing planner route.
3. Added an explicit `OAI-SearchBot` allow policy while preserving the sitewide crawler
   allow policy.
4. Replaced the planner social image that contained an illustrative price and address with
   the original planner photograph and added an `ImageObject` to the structured data.
5. Added a concise seller handoff after the review checklist and stated that planner data is
   not sent automatically.

### Verification

Targeted lint and TypeScript pass. The 107 page production build passes. The listing planner
first load decreased from 351 kB to 293 kB, and shared first load JavaScript decreased from
339 kB to 273 kB in the same local production build environment. The optimization release
is live on `beccatravis.com` through merge commit `c80c7f9`. Production canonical, robots,
sitemap, OAI SearchBot access, structured data, social image, desktop layout, 390 pixel
mobile layout, seller handoff, image delivery, and browser console checks passed. No test
lead was submitted.
