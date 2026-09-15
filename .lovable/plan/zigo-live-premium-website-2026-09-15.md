# Zigo Live premium website

## What I’ll build
- A polished dark-neon single-page Zigo Live website using the supplied poster as visual direction, with compact app-style visuals rather than a poster-sized composition.
- Sticky desktop navigation, a mobile menu, two-column opening area, benefit strip, features, role cards, About, contact, conversion banner, and compact footer.
- Dedicated legal placeholder pages for Privacy Policy, Child Safety Policy, and User Agreement.
- Direct Google Play links for the download, User, and Host actions.

## Application experience
- Animated, touch-friendly application dialogs for Partner, Coin Seller, and Agency.
- Required-field, email, phone, consent, and description validation with clear field-level feedback.
- Loading, duplicate-submit protection, friendly failure feedback, a success toast, and a polished confirmation dialog.
- Campaign attribution captured from UTM parameters, referring page, and landing page.

## Data and notifications
- Enable Lovable Cloud and create a secure onboarding-request table for Partner, Seller, and Agency applications.
- Validate and normalize submissions again on the server, limit repeated requests, include a hidden spam trap, and return only safe error messages.
- Store each accepted application with `PENDING` status and timestamps.
- Send a professional “New Zigo Lead / Application” alert to `stackearn@gmail.com` after a successful submission, once a sender domain is configured.

## Design and content details
- Extract the existing Zigo logo treatment faithfully from the supplied reference for brand use; the reference poster itself will not be embedded as a page image.
- Use semantic dark-purple, violet, electric-blue, pink, and magenta tokens; glass surfaces; restrained glow; subtle particles; compact mobile mockups; and accessible contrast.
- Add lightweight reveal and micro-interactions with reduced-motion support.
- Add unique page metadata, social metadata, canonical paths, and Organization structured data.

## Verification
- Verify desktop and mobile layouts, menu behavior, outbound links, all three forms, validation states, successful storage, and visible success/failure states.
- Confirm the preview builds cleanly and has no runtime or horizontal-overflow issues.

## One external prerequisite
- App-email delivery requires a real sender domain owned by Zigo. The site and lead storage can be completed immediately; notification emails begin after that domain is configured and verified.
