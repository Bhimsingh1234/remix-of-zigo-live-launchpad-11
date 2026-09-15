# Remix of Zigo Live Launchpad (11)

Create a premium, modern, highly responsive single-page landing website for a live streaming social platform called “Zigo Live”.

The website should feel like a professional funded startup / premium live-streaming platform, not like a basic template.

IMPORTANT BRANDING:
- Use the uploaded Zigo logo as the exact logo/brand reference.
- Do not redesign or distort the Zigo logo.
- Use a premium dark purple / black background with neon blue, violet, pink and magenta gradients.
- Use glassmorphism cards, subtle glowing borders, soft gradients, animated light particles/bokeh, smooth hover effects and modern typography.
- Use the previously designed Zigo landing-page poster as visual inspiration for the overall design language.
- Keep the poster/illustration elements relatively small and elegant. Do NOT make the page look like one giant poster.
- The website must look premium on desktop, tablet and mobile.
- Use smooth scroll animations and micro-interactions, but keep the website fast and lightweight.

WEBSITE STRUCTURE:

1. TOP NAVIGATION

Create a sticky transparent/glass navigation bar.

Left:
- Zigo logo
- “ZIGO LIVE”

Navigation:
- Home
- Features
- Join Zigo
- About
- Contact

Right:
- “Download App” glowing button

On mobile:
- Convert navigation into a clean hamburger menu.

--------------------------------------------------

2. HERO SECTION

Create a visually impressive hero section.

Left side:
Small badge:
“LIVE • CONNECT • GROW”

Main heading:

“Go Live.
Connect.
Grow.”

Highlight “Connect” and/or “Grow” using Zigo's neon gradient.

Description:

“Zigo Live brings people closer through live streaming, real-time chat, audio & video calls, virtual gifts and more. Meet new people, build connections and be part of a growing community.”

Add two premium app download buttons:

[ Download on App Store ]
[ Get it on Google Play ]

For Google Play, use this exact URL:

https://play.google.com/store/apps/details?id=com.stackearn.zigo.live

IMPORTANT:
- Clicking the Google Play button must directly open the above Play Store URL.
- The “Become a User” and “Become a Host” CTA buttons anywhere on the website must also directly redirect users to this exact Google Play URL.
- Do not open an internal form for User or Host.
- Use target="_blank" where appropriate.

Right side:
- Show premium Zigo Live mobile/app visuals.
- Use the previously generated landing-page design as inspiration.
- Use subtle live-stream UI elements, avatars, chat bubbles, hearts/gifts and glowing rings.
- Keep the visual compact and premium.
- Do not overcrowd the hero section.

Add subtle animated floating elements:
- hearts
- gift icons
- live badge
- chat bubbles
- small user avatars
- glowing particles

--------------------------------------------------

3. QUICK BENEFITS STRIP

Immediately below hero create a compact horizontal glassmorphism strip with 4 items:

24/7 Community
Real-time Connections
Live Entertainment
Earn & Grow

Use simple premium icons.

--------------------------------------------------

4. FEATURES SECTION

Heading:

“Everything You Need to Connect, Go Live & Grow”

Create attractive feature cards for:

- Live Streaming
- Audio & Video Calls
- Real-time Chat
- Virtual Gifts
- Coins & Wallet
- Follow & Connect
- Host Earnings
- Safe & Secure Community

Each card should have:
- premium icon
- short title
- 1–2 line description
- subtle hover animation

Do not write huge paragraphs.

--------------------------------------------------

5. JOIN ZIGO SECTION

This is one of the most important sections.

Heading:

“Become a Part of Zigo”

Subtitle:

“Whether you want to enjoy Zigo, showcase your talent, build a business or create new opportunities, there’s a place for you.”

Create 5 premium glassmorphism role cards.

CARD 1:
Become a User

Text:
“Join Zigo and explore live entertainment, connect with people, chat, enjoy live streams and discover new experiences.”

Button:
“Join Zigo →”

ACTION:
Directly redirect to:

https://play.google.com/store/apps/details?id=com.stackearn.zigo.live

CARD 2:
Become a Host

Text:
“Go live, showcase your talent, build your audience, receive virtual gifts and grow with Zigo.”

Button:
“Become a Host →”

ACTION:
Directly redirect to:

https://play.google.com/store/apps/details?id=com.stackearn.zigo.live

CARD 3:
Become a Partner

Text:
“Partner with Zigo and explore business, marketing, distribution and strategic growth opportunities.”

Button:
“Become a Partner →”

ACTION:
Open an animated Partner Application form on the same page or in a premium modal.

CARD 4:
Become a Coin Seller

Text:
“Build your own Zigo coin-selling business and serve Zigo users with flexible recharge opportunities.”

Button:
“Become a Seller →”

ACTION:
Open an animated Seller Application form.

CARD 5:
Become an Agency

Text:
“Build your host network, recruit talent, manage your team and grow your agency with Zigo.”

Button:
“Become an Agency →”

ACTION:
Open an animated Agency Application form.

IMPORTANT LAYOUT:
On desktop:
- First row: User + Host
- Second row: Partner + Coin Seller + Agency

This layout should visually emphasize User and Host as the main app entry points while keeping business opportunities below them.

On tablet/mobile:
- Automatically stack cards beautifully.
- Maintain equal card heights where possible.

--------------------------------------------------

6. PARTNER APPLICATION FORM

When the user clicks “Become a Partner”, open a premium animated modal or dedicated animated section.

Use a smooth scale/fade/slide animation.

Heading:

“Partner With Zigo”

Subtitle:

“Tell us about yourself and how you would like to work with Zigo.”

Fields:

Full Name *
Company / Business Name
Email Address *
Mobile Number *
WhatsApp Number *
Country *
State *
City
Partner Type *
Website
Instagram / Social Media
Business Experience
Expected Monthly Business / Investment Capacity
How would you like to partner with Zigo?
Message / Description *

Partner Type options:
- Business Partner
- Marketing Partner
- Distribution Partner
- Strategic Partner
- Investment Partner
- Technology Partner
- Other

Add:
“I agree that the information provided is accurate.”

Submit button:

“Submit Partnership Request →”

Show loading state while submitting.

Prevent duplicate submissions while the request is being processed.

Validate:
- required fields
- email format
- mobile number
- WhatsApp number
- minimum message length where appropriate

--------------------------------------------------

7. AGENCY APPLICATION FORM

When the user clicks “Become an Agency”, open the same style premium animated form.

Heading:

“Become a Zigo Agency”

Subtitle:

“Build your host network and grow your agency with Zigo.”

Fields:

Full Name *
Agency Name *
Email Address *
Mobile Number *
WhatsApp Number *
Country *
State *
City *
Number of Hosts / Talent
Previous Agency Experience
Current Platform / Agency Name
Website / Social Media
How did you hear about Zigo?
Description / Message *

Add optional:
- Instagram
- YouTube
- Facebook
- Other social profile

Submit button:

“Submit Agency Request →”

Use proper validation and loading state.

--------------------------------------------------

8. COIN SELLER APPLICATION FORM

Also create the seller form because Zigo will have a coin seller/reseller ecosystem.

Heading:

“Become a Zigo Coin Seller”

Fields:

Full Name *
Business Name
Email *
Mobile Number *
WhatsApp Number *
Country *
State *
City
Business Experience
Expected Monthly Recharge Volume
Current Recharge / Reselling Experience
Payment / Business Details
Description *

Submit:

“Apply as Coin Seller →”

Do NOT ask for sensitive financial information such as passwords, card numbers, bank PINs or OTPs.

--------------------------------------------------

9. FORM SUBMISSION BACKEND

This is NOT a frontend-only form.

Create a proper backend/API submission system.

Every submission must be stored in the database.

Create a collection/model such as:

OnboardingRequest

Fields:

_id
type
fullName
companyName
agencyName
email
mobileNumber
whatsappNumber
country
state
city
partnerType
website
socialMedia
experience
numberOfHosts
investmentCapacity
expectedMonthlyBusiness
currentPlatform
hearAboutZigo
description
status
adminNote
createdAt
updatedAt

type values:

USER
HOST
PARTNER
SELLER
AGENCY

For User and Host, no form is required because their CTA directly opens Google Play.

For Partner, Seller and Agency:
Save the submitted application with:

status: "PENDING"

--------------------------------------------------

10. ADMIN EMAIL

After every successful Partner / Seller / Agency form submission:

Send an email to:

stackearn@gmail.com

Subject examples:

“New Zigo Partner Application”
“New Zigo Agency Application”
“New Zigo Coin Seller Application”

The email must contain all submitted application information in a clean professional HTML email.

Include:

Application Type
Full Name
Company / Agency
Email
Mobile
WhatsApp
Country
State
City
Business Experience
Relevant type
Social links
Website
Investment / expected volume information
Description
Submission Date & Time

The email should clearly show:

“New Zigo Lead / Application”

Do not expose sensitive data in the email.

--------------------------------------------------

11. SUCCESS CONFIRMATION

After successful submission:

Show a beautiful animated success dialog.

Icon:
✓

Heading:

“Application Submitted Successfully!”

Message:

“Thank you for partnering with Zigo. Our team will review your request and contact you within 24 hours.”

Add:

“Your application has been received successfully.”

Button:

“Back to Zigo”

Also show a small success toast/notification:

“Your request has been submitted successfully.”

If the API fails, show:

“Something went wrong. Please try again.”

Do not show raw server errors to the user.

--------------------------------------------------

12. ABOUT ZIGO

Create a compact premium About section.

Heading:

“More Than Just a Live App”

Content:

“Zigo Live is built to bring people together through live streaming, real-time communication and digital experiences. Our goal is to create a platform where users can connect, creators can grow, agencies can build communities and partners can discover new opportunities.”

Use the Zigo visual identity.

--------------------------------------------------

13. CTA SECTION

Create a large premium CTA section:

“Ready to Be Part of Zigo?”

Subtitle:

“Download Zigo and start your journey today.”

Buttons:

[ Download Google Play ]
[ Become a Partner ]
[ Become an Agency ]

Google Play button must redirect to:

https://play.google.com/store/apps/details?id=com.stackearn.zigo.live

Partner and Agency buttons open their respective application forms.

--------------------------------------------------

14. FOOTER

Keep the footer compact.

DO NOT create a huge multi-column footer.

Use a clean single-line footer on desktop.

Example:

© 2026 Zigo Live · Privacy Policy · Child Safety Policy · User Agreement · Contact Us · Become a Partner · Become an Agency

On mobile:
Wrap naturally into 2–3 lines but keep it compact.

Create routes/pages for:

/privacy-policy
/child-safety-policy
/user-agreement

If those pages are not available yet, create clean placeholder pages that can later be replaced with final legal content.

--------------------------------------------------

15. CONTACT

Add a small contact section or contact information near the bottom.

Email:

stackearn@gmail.com

Provide a clean “Contact Zigo” CTA.

--------------------------------------------------

16. DESIGN SYSTEM

Use:

Background:
Deep black / dark purple

Primary gradients:
Purple
Violet
Magenta
Electric blue

Cards:
Glassmorphism
Transparent dark surfaces
Subtle borders
Soft neon glow

Buttons:
Gradient purple → pink
Rounded corners
Glow on hover
Smooth scale animation

Typography:
Modern premium sans-serif
Strong hierarchy
Excellent readability

Animations:
- Fade-in on scroll
- Slide-up cards
- Floating background particles
- Subtle glowing effects
- Button hover animation
- Modal scale/fade
- Form success animation

Avoid:
- Excessive animations
- Huge text everywhere
- Too many gradients
- Clutter
- Generic template appearance
- Slow heavy effects

--------------------------------------------------

17. RESPONSIVE REQUIREMENTS

Desktop:
- Premium wide layout
- Hero two-column
- Join Zigo cards arranged as 2 cards first row + 3 cards second row
- Smooth spacing

Tablet:
- Adaptive two-column layout
- Cards resize automatically

Mobile:
- Single-column layout
- Sticky/mobile navigation
- App download buttons full-width or stacked
- Forms optimized for touch
- No horizontal scrolling
- Fast loading

--------------------------------------------------

18. SEO

Implement proper SEO.

Page title:

“Zigo Live – Go Live, Connect & Grow”

Meta description:

“Join Zigo Live – a next-generation live streaming platform for live entertainment, real-time chat, calls, virtual gifts, hosts, agencies, sellers and business partners.”

Add:
- Open Graph metadata
- Twitter/social metadata
- Canonical URL placeholder
- Proper H1/H2/H3 hierarchy
- Organization schema
- Mobile-friendly metadata
- Fast loading
- Optimized images
- Lazy loading where appropriate

The landing page should be SEO-friendly and ready for future Google Ads, Meta Ads and social media campaigns.

--------------------------------------------------

19. TRACKING / LEAD ATTRIBUTION

Every Partner / Seller / Agency application should optionally store:

utm_source
utm_medium
utm_campaign
utm_content
referrer
landingPage

This will allow Zigo to know whether leads came from:

Google
Instagram
Facebook
YouTube
Organic Search
WhatsApp
Referral
Paid Campaign

--------------------------------------------------

20. SECURITY

Never expose email credentials or API keys in frontend code.

Use environment variables for:

EMAIL_HOST
EMAIL_USER
EMAIL_PASSWORD
EMAIL_FROM
ADMIN_EMAIL

The frontend should communicate with a secure backend API.

Implement:
- server-side validation
- rate limiting
- spam protection
- duplicate submission protection
- sanitization
- CORS configuration
- secure error handling

Do not expose database credentials.

--------------------------------------------------

21. FINAL UX GOAL

The entire website should immediately communicate:

Zigo is a real live-streaming platform.

Users can:
Download the app.

Hosts can:
Join and start their journey.

Agencies can:
Build and manage host networks.

Coin Sellers can:
Build a coin-selling business.

Partners can:
Explore business, marketing, strategic and investment opportunities.

The landing page should function as both:

1. Zigo's official brand website
2. Zigo's lead-generation and onboarding funnel

The final result must feel premium, trustworthy, modern, conversion-focused and ready for production.

Use the uploaded Zigo logo exactly as the brand identity reference and keep the previously created Zigo landing-page visual style as inspiration, but make the final website cleaner, more functional and more professional than the reference design.


CREATE THIS TYPES WEBSITE

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/605e042b-70f6-42b0-862c-24be46a7099f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
