# Claude command — Aurora SACCO-focused landing page

Copy the prompt below into Claude Code while it is open in the workspace where you want the landing page built.

```text
You are a senior product designer, conversion copywriter, and frontend engineer. Work directly in this workspace and build a production-quality public landing page for Aurora, focused primarily on Ethiopian SACCOs and secondarily on the SMEs and members they finance.

Do not stop at a plan or mockup. Inspect the repository, understand the existing application, implement the page, and verify it. Preserve existing functionality, routes, authentication, and unrelated user changes.

PRODUCT CONTEXT

Aurora is a KYC-gated lending and settlement rail for Ethiopian SACCOs. Verified SACCOs can request institutional liquidity, receive approved funds through a controlled USDM rail, manage loans from a dedicated workspace, and track repayment and reconciliation. Fairway is the operator that verifies SACCOs, reviews requests, approves and disburses funds, and reconciles repayments. Cardano provides an auditable settlement layer. Privacy-preserving KERI/Veridian credentials prove verification without placing borrower personal information on-chain.

The SACCO is the primary customer and interface user. SMEs and SACCO members are the ultimate beneficiaries: SACCOs use Aurora liquidity to support short-term working-capital needs while retaining the local member relationship, underwriting responsibility, and loan-servicing role. Never present Aurora as lending directly to individual SMEs unless the repository proves that behavior.

Before writing copy, inspect the repository's README, current public page, SACCO dashboard and onboarding flows, loan-request flow, credentials flow, wallet and repayment screens, and any technical or product documentation. Treat the repository as the source of truth. If this workspace differs from the product context above, follow the implemented product and document the discrepancy.

PRIMARY GOAL

Make an Ethiopian SACCO leader, general manager, credit officer, or board member quickly understand:

1. what Aurora is;
2. how their SACCO benefits;
3. how the process works from verification to repayment;
4. how Aurora helps them serve SMEs and members;
5. why the system is trustworthy without requiring blockchain knowledge; and
6. what action to take next.

The primary CTA should be “Join the pilot” or “Register your SACCO” if a real registration/onboarding route exists. Otherwise use “Sign in to Aurora” and a truthful secondary pilot/contact CTA supported by the repository. Never create a dead CTA. The secondary CTA may be “See how it works.”

AUDIENCE AND MESSAGE PRIORITY

Write first for Ethiopian SACCO decision-makers with mixed technical literacy. Lead with access to transparent, manageable institutional liquidity—not cryptocurrency. Explain USDM, Cardano, verifiable credentials, KERI, or on-chain settlement only in plain language and only after the practical benefit is clear.

Message hierarchy:

- Aurora helps verified SACCOs access and manage liquidity for SME/member lending.
- The SACCO remains at the center of its member relationship and servicing process.
- Verification creates a trusted institutional profile.
- Requests, approvals, disbursements, schedules, and repayments are visible in one workspace.
- Confirmed settlement records create a stronger audit trail.
- Sensitive borrower information is not published on-chain.
- Fairway review and role-based controls provide human operational oversight.

Do not promise guaranteed funding, instant approval, lower interest, regulatory compliance, financial returns, financial inclusion outcomes, or nationwide availability unless the repository contains evidence. Do not invent SACCO counts, disbursement totals, repayment rates, partner logos, testimonials, awards, licenses, or impact statistics. Clearly label the product as a pilot where appropriate. Do not use fake dashboard numbers as proof; use truthful product states or clearly marked illustrative UI.

CONTENT REQUIREMENTS

Create a complete but focused landing page with a deliberate conversion narrative. Do not default mechanically to a generic hero/features/pricing/FAQ template. Include the following ideas in the most persuasive order you determine from research:

- Navigation with Aurora identity, concise section links, and a real CTA.
- A SACCO-first hero. Suggested territory: “More lending capacity for the businesses your SACCO already knows.” Support it with precise product copy, a pilot label, and an authentic product visual or interface composition.
- A concise “built for Ethiopian SACCOs” value section covering institutional liquidity, operational visibility, verified access, and member/SME impact.
- A clear process: verify the SACCO → request liquidity for an SME/member portfolio or beneficiary → Fairway reviews → approved funds are disbursed → track schedules and reconcile repayments.
- A “your SACCO stays in control” section that explains what the SACCO does versus what Aurora/Fairway does.
- An SME/member benefit section framed through the SACCO: working-capital access, local relationships, and a clearer process. Keep claims modest and defensible.
- A trust and transparency section explaining identity verification, privacy-preserving credentials, role-based access, audit history, and confirmed settlement in non-technical language.
- A product/workspace preview using real screenshots or truthful UI derived from the application. Show useful SACCO states such as onboarding, credential status, loan request, disbursement status, schedule, or repayment—not invented vanity analytics.
- A small pilot-readiness or eligibility block based only on actual onboarding requirements found in the repository.
- An FAQ that answers genuine objections: who Aurora is for, whether Aurora replaces the SACCO, what USDM/Cardano means in practice, what data goes on-chain, how approval works, and whether the product is live or a pilot.
- A strong final CTA and a sober footer.

Copy should be concrete, respectful, and locally relevant without stereotypes or generic “empower Africa” language. Prefer short sentences and operational clarity. Use “SACCO” prominently. Mention SMEs as the people and businesses served through SACCOs, not as a competing primary audience. Use Ethiopian English conventions; add Amharic only if the repository already supports localization or you implement it correctly with reviewed translations. Do not add decorative Amharic text as a visual prop.

DESIGN DIRECTION AND REQUIRED RESEARCH

Research before implementation. Review at least three strong, relevant references for trustworthy fintech, cooperative banking, institutional lending, or African financial infrastructure. If Refero tools are available, use them for style and landing-page pattern research. Otherwise use accessible web references or established design-system examples. Do not copy a single site.

Before coding, create a short internal decision ledger covering:

- the primary visual reference and the traits to preserve;
- one or two bounded details borrowed from secondary references;
- typography, palette, spacing, radius, border/shadow, imagery, and motion roles;
- the section order and the objection each section resolves;
- which product evidence supports each major claim.

Use one dominant visual direction: trustworthy Ethiopian institutional finance with contemporary infrastructure precision. The page should feel grounded, capable, and human—not like a speculative crypto launch. Preserve Aurora's existing brand where it is coherent, but improve it when needed for this landing page. If the current dark “Royal Aurora” glass style is retained, reduce decorative glass/gradient excess and make readability, warmth, and SACCO relevance the priority. Avoid purple SaaS gradients, floating generic cards, excessive pills, random glow effects, fake 3D coins, crypto imagery, handshake stock photos, generic African-pattern decoration, and an interchangeable AI-generated layout.

Create one memorable visual idea tied to the product, such as a clear liquidity journey from Fairway to SACCO to local businesses, or a verified-loan lifecycle rendered as an elegant editorial system. Keep it understandable without blockchain expertise.

Use real local assets when available. If photography is required and no suitable licensed assets exist, use an intentional stable placeholder with an art-direction note rather than weak or misleading imagery. Do not hotlink fragile remote images. Use the repository's icon system or a consistent established icon library; do not use emoji as interface icons.

IMPLEMENTATION REQUIREMENTS

- Determine the existing framework and conventions before editing. In the known Aurora repository this is Next.js App Router with React; adapt if this workspace differs.
- Reuse existing tokens and components when they help, but do not let legacy styles force a weak page.
- Keep the implementation maintainable and componentize repeated or semantically distinct sections.
- Preserve server/client component boundaries and avoid unnecessary client JavaScript.
- Make the page fully responsive at approximately 360px, 768px, 1024px, and wide desktop sizes.
- Meet WCAG AA contrast, semantic heading order, keyboard navigation, visible focus states, useful alt text, reduced-motion preferences, and at least 44px touch targets.
- Avoid layout shifts. Set stable dimensions/aspect ratios for media. Use optimized local images and fonts where the framework supports them.
- Motion should be restrained, meaningful, and hardware-friendly. Do not hide essential content behind animation.
- Ensure navigation anchors and all CTAs work.
- Update page metadata and social description to match the SACCO-first positioning.
- Do not alter authenticated SACCO or Fairway operations unless required to keep navigation working.
- Do not add dependencies unless clearly justified.

VERIFICATION

After implementation:

1. run the repository's typecheck/check command;
2. run relevant tests;
3. run a production build;
4. start the app and inspect the landing page in a browser at mobile and desktop widths if browser tooling is available;
5. check console errors, broken assets, overflow, keyboard focus, reduced motion, and every CTA destination;
6. fix issues found rather than merely reporting them.

FINAL RESPONSE

Return a concise summary containing:

- what you changed;
- the central SACCO-focused narrative and visual direction;
- files changed;
- verification commands and results;
- any claims or content intentionally omitted because evidence was unavailable;
- any remaining blocker that genuinely requires user input.
```

