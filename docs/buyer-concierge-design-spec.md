# Buyer concierge design specification

## Reference concepts

- Desktop question state: `outputs/buyer-concierge-concepts/desktop-question.png`
- Desktop result state: `outputs/buyer-concierge-concepts/desktop-result.png`
- Mobile contact state: `outputs/buyer-concierge-concepts/mobile-contact.png`

## Visual direction

- True white drawer or sheet over the unchanged page.
- IBM Plex Serif headings and Inter controls and body copy.
- Magenta `#9D446E`, deep plum `#58243C`, peach `#FEA166`, white and the existing cool gray scale.
- One fixed drawer on desktop and one bottom sheet on mobile, without a nested card grid.
- 10 to 12 pixel control radii, thin gray borders, restrained shadow and generous spacing.
- Short drawer or sheet entry and subtle progress changes, disabled for reduced motion.

## Component families

1. Fixed `Build my buyer plan` or `Criar meu plano de compra` launcher.
2. Accessible drawer or bottom sheet with close, back and Escape support.
3. Three segment progress indicator.
4. Single choice rows that advance the flow.
5. Location field with a `Not sure yet` option.
6. Open numbered plan list with fine dividers.
7. Reply method selector that displays one contact field.
8. Inline success and recoverable error states.

## Interaction and data rules

- The homepage asks all three questions.
- Planning tools and homes pages preselect the relevant goal.
- Area, community and Portuguese state pages preselect both the goal and location.
- The useful buyer plan appears before any email or phone request.
- Contact requires a first name and either an email or phone, never both.
- The form sends route, page title, page context, selected answers, generated plan, attribution and form version.
- A success state requires both an HTTP success response and provider `success: true`.
- Answers persist only for the browser session and are cleared after a successful request.
- The national Portuguese planner and the contact page keep their dedicated forms and do not show a duplicate launcher.

## Responsive behavior

- Desktop uses a 420 pixel right drawer with the current page readable behind the overlay.
- Tablet and mobile use a bottom sheet capped at 92 dynamic viewport units.
- The mobile launcher uses a shorter label and stays clear of primary page controls.
- Form actions remain usable without horizontal clipping at 320 pixels wide.

## Accessibility

- Radix Dialog provides modal semantics, focus containment, Escape handling and focus return.
- All interactive controls have visible keyboard focus states.
- Back navigation preserves the buyer's answers.
- Errors are attached to their fields and announced with alert roles.
- Reduced motion preferences collapse the entry animations through the site's global style.

## Fidelity ledger

The production build was compared directly with the generated desktop and mobile concepts.

1. Desktop container: the concept suggested a narrow right rail; the accepted specification fixed it at 420 pixels, and the browser build measures 420 pixels.
2. Mobile container: the concept used a bottom sheet; the browser build measures 390 pixels wide and 662 pixels tall at a 390 by 844 viewport, with all contact actions visible.
3. Compact mobile: at 320 by 568 the sheet measures 320 pixels wide, has no horizontal overflow, and scrolls vertically to every plan action.
4. Type and color: the build preserves the concept's serif headings, sans serif controls, magenta/plum actions, pale pink icon fields, true white surface and cool gray dividers.
5. Question layout: the build preserves four single choice rows and three progress segments, but makes the rows more compact than the concept to reduce scrolling.
6. Plan layout: the build preserves the open numbered steps and keeps the generated advice visible before the contact action.
7. Contact layout: the build preserves the two channel selector and one conditional contact field. Consent appears before the submit action instead of after it so the authorization is visible before activation.
8. Header controls: the final mobile sheet uses the same back, progress and close controls as desktop instead of adding a decorative drag handle.
9. Above the fold page copy: no existing page headline, search copy or primary navigation text changed. The only new closed state element is the compact buyer plan launcher.
10. Interaction: the final build adds route-aware prefill, session resume, Escape close, focus return, inline validation, provider response verification and bilingual state-page behavior beyond the static concepts.

No material visual deviation remains from the accepted specification. The documented differences improve compactness, consent clarity or accessibility without changing the conversion model.
