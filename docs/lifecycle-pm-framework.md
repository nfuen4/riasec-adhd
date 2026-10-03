# Project Management for Lifecycle Marketing
An applied framework built from *The Standard for Project Management and A Guide to the Project Management Body of Knowledge (PMBOK Guide), Seventh Edition* (Project Management Institute, 2021), Sections 1.2, 2.1–2.5 and 3.1–3.10. Section references (§) point to that book. Concepts are paraphrased; the lifecycle marketing applications and examples are original and illustrative.
> Generated from `src/data/lifecyclePM.js` by `npm run export:lifecycle-pm`. Edit the data file, not this document.

## 1. Where a lifecycle project sits
| Level | Ref | In the book | In lifecycle marketing | Example |
| --- | --- | --- | --- | --- |
| Portfolio | §1.2 | Projects, programs and operations managed together to reach strategic objectives. | The lifecycle strategy: where investment goes across Acquire, Onboard, Engage, Convert, Retain and Win back. | This year: fix onboarding first, then retention, then win-back. |
| Program | §1.2 | Related projects managed in a coordinated way to get benefits that managing them separately would not. | One stage of the customer lifecycle treated as a coordinated body of work. | The Onboarding Program: welcome series, behavioral nudges, in-app messages, activation reporting. |
| Project | §1.2 | A temporary effort to create a unique product, service or result, with a beginning and an end. | A campaign, an A/B test, a flow build, a migration. Anything that ends. | Rebuild the welcome series. Run a send-time test. Migrate the ESP. |
| Operations | §2.1.1 | Ongoing business activity that supports and is influenced by portfolios, programs and projects. | The always-on flows, recurring sends and day-to-day program health that projects hand off to. | The live welcome series, weekly newsletter, deliverability monitoring. |

### The value ladder (§2.1.1, §3.4)
| Step | In the book | Example |
| --- | --- | --- |
| Deliverable | What the project produces. | A 3-email win-back series is live in the ESP. |
| Outcome | The end result or consequence. Broader than the deliverable. | Lapsed subscribers resume using the product. |
| Benefit | A gain the organization realizes from the outcome. | Reactivated revenue above what a holdout group produced on its own. |
| Value | Worth or usefulness, which differs by stakeholder (§1.2). | Business: healthier retention. Subscriber: messages that are relevant. Society: respectful use of personal data. |
The book's own example (§3.4): software is the output, but the productivity gain only arrives if people are trained to use it. The lifecycle version: a flow going live is the output, but it only produces the outcome if the right people receive the right message at the right moment.

### Information flow (§2.1.2)
**Direction and handoff**
- **Leadership → Portfolio.** Strategy and the stages that matter most
- **Portfolio → Program and Project.** Desired outcomes, benefits and value
- **Project → Operations.** The deliverable, plus support and maintenance information
**Feedback**
- **Operations → Project.** Fixes, adjustments and updates (bounces, rendering bugs, flow drop-offs)
- **Project → Portfolio.** Performance and progress toward the outcomes
- **Portfolio → Leadership.** Portfolio performance and strategy advancement
A value delivery system works best when information moves both ways. The lifecycle takeaway: every project ends with a deliberate handoff to operations, and operations has a defined route to send problems back.

## 2. Who does what (§2.3)
| Function | Ref | Lifecycle role | What it does |
| --- | --- | --- | --- |
| Provide oversight and coordination | §2.3.1 | Lifecycle project or program manager | Orchestrates planning, monitoring and control. Also watches team well-being. |
| Present objectives and feedback | §2.3.2 | The requester (customer) and the subscriber (end user) | The book separates the customer, who requests or funds the work, from the end user, who experiences the deliverable. In lifecycle the end user is the subscriber, and their behavior is the feedback. |
| Facilitate and support | §2.3.3 | Project manager or senior team member | Runs reviews, builds consensus between brand, legal and growth, resolves conflicts. |
| Perform work and contribute insights | §2.3.4 | CRM specialists, copywriters, designers, developers, analysts | Builds the segments, content, logic and reports. |
| Apply expertise | §2.3.5 | Deliverability, privacy and data engineering specialists | Subject expertise, often part-time or external. |
| Provide business direction and insight | §2.3.6 | Program or product owner | Prioritizes the backlog by business value, dependencies and risk, and sets direction for each increment. |
| Provide resources and direction | §2.3.7 | Sponsor (Head of Growth, CMO) | Secures budget, tools and authority. Provides the escalation path. |
| Maintain governance | §2.3.8 | Legal, compliance and brand approvers | Approves recommendations and keeps the project tied to business objectives. |
One person can fill several functions, and one function can be spread across several people (§2.3). On a small test, a single marketer may cover most of them. On a program, naming who fills each one is the first sign the project is ready to start.

## 3. The environment around the project (§2.4)
**Internal**
- **Process assets (§2.4.1).** Email templates, QA checklists, naming conventions, brief templates
- **Data assets.** Segment definitions, past campaign results, prior holdout data
- **Knowledge assets.** Deliverability know-how, lessons learned from earlier sends
- **IT software.** ESP, CRM, CDP, analytics and testing tools
- **Resource availability.** Design and development capacity, send-volume limits, approved vendors
- **Governance documentation.** Consent policy, approval rules, brand guidelines
**External**
- **Marketplace conditions (§2.4.2).** Competitor promotions, seasonality, technology changes in mail clients
- **Social and cultural influences.** Public holidays and events that shape the send calendar
- **Regulatory environment.** Data protection, consent and marketing-communication law
- **Industry standards.** Mailbox provider sender requirements, accessibility standards
- **Financial considerations.** Offer margins, currency and tax effects on promotions

## 4. The project cycle

### 01 Charter the value (§3.4 · §2.1.1 · §3.3 · §2.2)
*Why this project, why now, and who has a stake in it?*
- State the business need, the justification and the strategy it serves.
- Fill in the value ladder: deliverable, outcome, benefit, value.
- List stakeholders and how each influences the work.
- Name who approves what (governance).
**Output:** One-page charter

### 02 Tailor and plan (§3.7 · §3.9 · §3.10 · §3.5 · §3.2)
*What is the smallest process that still protects the outcome?*
- Choose the tier (test, campaign, program) and the matching amount of process.
- Map how the work interacts with other flows, segments and tools.
- Log risks, both threats and opportunities, each with an owner.
- Agree team norms, review turnaround and roles.
**Output:** Tailored plan and risk register

### 03 Deliver in increments (§2.3.6 · §3.3 · §3.8)
*What can ship and be reviewed in this increment?*
- The direction-setting function orders the backlog by value, dependencies and risk.
- Stakeholders see each increment, not just the final result.
- Acceptance criteria are written before building and checked before sending.
**Output:** Reviewed increment that meets acceptance criteria

### 04 Hand off to operations (§2.1.2 · §3.5)
*Who runs this tomorrow, and what do they need to know?*
- Pass the live deliverable to operations with support and maintenance information.
- Document monitoring, ownership and how to report problems back.
- Check the deliverable against neighboring flows and frequency rules.
**Output:** Runbook and named operational owner

### 05 Realize and adapt (§3.4 · §3.7 · §2.4.1)
*Did the outcome and benefit arrive, and what changes next?*
- Compare results with the business case. Scale, adjust, or end the effort.
- Capture lessons learned as process and knowledge assets.
- Re-tailor the approach for the next project.
**Output:** Readout, decision and lessons learned

## 5. The principles as working checks

### §3.1 Be a diligent, respectful and caring steward
Act with integrity, care, trustworthiness and compliance, and consider financial, social and environmental effects.
- **Ask:** Would we be comfortable if the subscriber could see exactly why they received this message?
- **Warning sign:** Fake urgency, ignored opt-outs, or consent rules treated as someone else's problem.

### §3.2 Create a collaborative project team environment
Team agreements, structures and processes. Accountability is not shared; responsibility can be.
- **Ask:** Is there one accountable owner per deliverable and an agreed review turnaround?
- **Warning sign:** Copy sits in approval with no named approver or deadline.

### §3.3 Effectively engage with stakeholders
Engage proactively. Stakeholders can affect scope, schedule, cost, risk, quality and success, and their influence changes over time.
- **Ask:** Have the high-influence, neutral or skeptical stakeholders been engaged before build, not after?
- **Warning sign:** Legal or sales first sees the campaign the day before it sends.

### §3.4 Focus on value
Value, seen from the customer or end user's perspective, is the ultimate success indicator. Shift focus from deliverables to outcomes, and end the work if it no longer fits the business need.
- **Ask:** Can we state the outcome and benefit, not just the deliverable, and what result would make us stop?
- **Warning sign:** Success is defined as "the flow is live."

### §3.5 Recognize, evaluate and respond to system interactions
A project is a system inside larger systems. One change can cause several impacts, and teams should think beyond project end to the operational state.
- **Ask:** Which other flows, segments, frequency caps and integrations does this touch?
- **Warning sign:** A win-back launches into the same inbox as a sale, a product update and an onboarding series.

### §3.6 Demonstrate leadership behaviors
Anyone can lead. Leadership is not authority, and the style should fit the situation: directive in chaos, delegating to a capable team.
- **Ask:** Who leads in each situation: the incident, the creative debate, the priority conflict?
- **Warning sign:** Every decision waits on the most senior person in the room.

### §3.7 Tailor based on context
Use "just enough" process. Each project is unique, and tailoring is iterative throughout.
- **Ask:** Is any step here costing more than the risk it protects against?
- **Warning sign:** A ten-page plan for a subject-line test, or no plan for a platform migration.

### §3.8 Build quality into processes and deliverables
Quality means meeting acceptance criteria and fitness for use. Prevent and detect defects early.
- **Ask:** Were acceptance criteria written before building, and tested on real devices and real data?
- **Warning sign:** QA is "send me a test and I'll look."

### §3.9 Navigate complexity
Complexity comes from human behavior, system behavior, uncertainty and ambiguity, and technological innovation. It cannot be controlled, but teams can adapt.
- **Ask:** Which of the four sources is rising on this project, and what would we change if it did?
- **Warning sign:** Assuming the tooling will behave exactly as documented.

### §3.10 Optimize risk responses
Risks include opportunities and threats. Responses should be appropriate, cost effective, realistic, agreed and owned.
- **Ask:** Does every logged risk have a response someone owns, and is there at least one opportunity?
- **Warning sign:** A risk list of vague worries with no owners.

> The book has twelve principles. The two not shown here, "Embrace adaptability and resiliency" (§3.11) and "Enable change to achieve the envisioned future state" (§3.12), were not available in the text this section was built from and will be added from the full book.

## 6. Tailoring and controls
### Tailor the process to the project (§3.7)
The book names the business environment, team size, degree of uncertainty and complexity as the inputs to tailoring. The sizing and process below are an illustrative application, not from the book.
| Tier | Span | Use | Skip |
| --- | --- | --- | --- |
| Test | About 1–2 weeks | One-page charter, one reviewer, single holdout or control, readout in one page. | Dependency maps, steering reviews, formal risk register. |
| Campaign | About 2–6 weeks | Charter, dependency list, risk list, weekly check-in, checklist-based QA, readout. | Milestone steering reviews. |
| Program | About 6–16 weeks | Charter, milestone plan, stakeholder engagement plan, risk register, regular sponsor review, handoff runbook. | Nothing core. Tailor each milestone down as it repeats. |
### Watch for complexity (§3.9)
| Source | In the book | In lifecycle |
| --- | --- | --- |
| Human behavior | Conflicting agendas, differing norms, remote teams. | Brand, growth, legal and sales each want a different message, and subscribers behave unpredictably. |
| System behavior | Interdependencies among project elements create unforeseen issues. | ESP, CDP, CRM and analytics integrations. A field renamed in one system silently breaks segmentation in another. |
| Uncertainty and ambiguity | Unclear options and unknowns that blur cause and effect. | A result moves and no single cause is obvious: seasonality, a competitor, a list change, or the message itself. |
| Technological innovation | New technology disrupts tools, processes and ways of working. | Mail client privacy changes, AI-assisted content, new channels that change how performance is measured. |
### Eight dimensions of quality (§3.8)
| Dimension | The book asks | Lifecycle check |
| --- | --- | --- |
| Performance | Does it function as intended? | Trigger fires on the right event. Dynamic content renders correctly. |
| Conformity | Is it fit for use and to specification? | Brand, legal footer, accessibility and consent requirements are met. |
| Reliability | Does it produce consistent metrics each time? | Tracking parameters and event names are identical across sends. |
| Resilience | Can it cope with failure and recover? | Fallback content when a personalization field is empty. Alert if a feed breaks. |
| Satisfaction | Does it get positive end-user feedback? | Low complaint and unsubscribe rates. Works on mobile. |
| Uniformity | Does it match deliverables made the same way? | Same templates, naming and component library as other flows. |
| Efficiency | Most output for least input? | Reusable modules rather than one-off builds. |
| Sustainability | Positive economic, social and environmental impact? | Protects list health and avoids fatiguing the audience. |
### Risk responses (§3.10)
A good response is:
- Appropriate for the risk's significance
- Cost effective
- Realistic in this context
- Agreed by relevant stakeholders
- Owned by a named person
Risks run both ways. A threat is something that could hurt an objective; an opportunity is something that could help. Every charter should log at least one of each.

## 7. The one-page charter
| Field | What goes in it |
| --- | --- |
| Business need | Why the project exists, in terms of a business goal (§3.4) |
| Justification | Why it is worth the investment and why now, with assumptions (§3.4) |
| Strategy link | The lifecycle stage and strategy it serves (§3.4, §2.5) |
| Value ladder | Deliverable, outcome, benefit, value (§2.1.1) |
| Stakeholders | Who they are, their influence, how they will be engaged (§3.3) |
| Functions | Who fills each project function (§2.3) |
| Tailoring | Tier and the "just enough" process chosen (§3.7) |
| Risks | At least one threat and one opportunity, each with a response and owner (§3.10) |
| Acceptance criteria | What must be true before it ships (§3.8) |
| Handoff | Who runs it in operations and how problems come back (§2.1.2) |

## 8. Worked examples
Illustrative scenarios. Goals are design choices; no results are claimed.

### Onboarding rebuild
*B2B SaaS company with a free trial. Stage: Onboard. Tier: Program. About 12 weeks.*
**Business need.** Too many trial users sign up and never reach the first value moment.
**Justification.** Activation is the earliest point where lifecycle work changes revenue, and the current sequence is time-based rather than behavior-based.
**Strategy link.** Fix onboarding first in the lifecycle strategy.
**Value ladder**
- **Deliverable.** A behavior-triggered onboarding program (welcome email, nudges for unfinished setup steps) live to a test cell.
- **Outcome.** More trial users complete the first value event within 14 days.
- **Benefit.** Higher trial-to-paid conversion than the holdout group on the existing sequence.
- **Value.** Business: more retained customers. Subscriber: messages that match where they are stuck.
**Tailoring.** Program tier: milestone plan in three 4-week increments, fortnightly sponsor review, full risk register. Each increment is itself tailored down.
**System interactions.** Overlaps with in-app messages and sales outreach to the same trial users. Frequency rules and a shared suppression list are agreed before launch.
**Stakeholders**
- **Head of Product** (High influence, supportive). Joint review of the definition of "first value event" before build.
- **Customer Success** (Medium influence, neutral). Preview each increment. They hear trial users' real questions.
- **Legal** (High influence, neutral). Approve the consent basis for triggered messages up front.
**Risks**
- **Threat.** Trigger logic misfires and sends setup nudges to users who already finished. *Response:* Test every trigger against real event data before launch. Add a kill switch. *Owner:* CRM specialist.
- **Opportunity.** Nudge data shows which setup step blocks most users. *Response:* Share findings with Product as input to in-app onboarding. *Owner:* Program owner.
**Acceptance criteria**
- Performance: each trigger fires on the correct event in test.
- Resilience: fallback content when user name or plan is missing.
- Satisfaction: unsubscribe rate stays within the agreed guardrail.
**Handoff.** Lifecycle operations owns the live program. Runbook covers monitoring, the kill switch, and where to log drop-off issues.
**Realize and adapt.** Compare activation and conversion with the holdout at week 12. Decide to roll out to all signups, adjust, or stop.
**Where the RIASEC load falls**
- **A.** Message voice and design
- **I.** Finding where users stall
- **C.** Trigger-logic QA and documentation

### Win-back campaign
*Subscription box company. Stage: Win back. Tier: Campaign. About 3 weeks.*
**Business need.** A large group of subscribers has been inactive for 90+ days and is costing send volume without engaging.
**Justification.** Reactivating existing customers is a lower-cost path to revenue than acquiring new ones, and a sunset step protects list health.
**Strategy link.** Supports the retention and win-back stages of the lifecycle strategy.
**Value ladder**
- **Deliverable.** A three-message win-back series sent to the lapsed segment, with a sunset step for non-responders.
- **Outcome.** Lapsed subscribers return and purchase, and the rest leave the active list cleanly.
- **Benefit.** Reactivated revenue above the holdout, plus better list health.
- **Value.** Business: recovered customers and healthier deliverability. Subscriber: a clear, respectful way to opt back in or out.
**Tailoring.** Campaign tier: charter, dependency list, risk list, checklist QA, one readout. No steering reviews.
**System interactions.** Shares inboxes with the regular newsletter and promotions. Lapsed users are excluded from them during the series to avoid message collisions.
**Stakeholders**
- **Finance** (Medium influence, skeptical about discount cost). Agree the offer margin limit before building.
- **Customer Support** (Low influence, high impact). Supply the list of open tickets to suppress.
**Risks**
- **Threat.** A recent purchaser or someone with an open support ticket receives a "we miss you" email. *Response:* Build and test suppression logic, then verify the final segment count against the source. *Owner:* CRM specialist.
- **Opportunity.** Replies to the series reveal why people left. *Response:* Route replies to a shared inbox and summarize themes in the readout. *Owner:* Project manager.
**Acceptance criteria**
- Conformity: legal footer and unsubscribe present on every send.
- Reliability: tracking parameters identical across the three messages.
- Sustainability: sunset rule defined for non-responders.
**Handoff.** Rules for ongoing lapsed-subscriber handling move to operations as an always-on trigger if the readout supports it.
**Realize and adapt.** Compare reactivation with the holdout. Decide whether to make the series permanent, retune the offer, or retire it.
**Where the RIASEC load falls**
- **A.** Offer story and subject lines
- **E.** Framing the business case for Finance
- **C.** Suppression and sunset rules

### Cart-abandonment test
*Direct-to-consumer e-commerce brand. Stage: Convert. Tier: Test. About 10 days.*
**Business need.** Recovery emails lean on discounts that reduce margin.
**Justification.** A single-variable test is cheap and answers whether a non-discount message can recover similar revenue.
**Strategy link.** Improves the conversion stage without adding a new program.
**Value ladder**
- **Deliverable.** A variant of the second abandonment email that emphasizes free shipping instead of a discount.
- **Outcome.** Shoppers complete purchases without needing a price cut.
- **Benefit.** Equal or better recovered revenue per recipient, at higher margin.
- **Value.** Business: margin. Shopper: a clearer reason to return.
**Tailoring.** Test tier: one-page charter, one reviewer, the live flow as control. Sample size and run length fixed in advance. No dependency map, no formal register.
**System interactions.** The flow shares a trigger with the browse-abandonment series. The variant changes only the second message so the sequence stays coherent.
**Stakeholders**
- **Merchandising** (Medium influence, neutral). Confirm the shipping offer can run for the test window.
**Risks**
- **Threat.** The test is stopped early on a promising first read and a false winner is rolled out. *Response:* Write the decision rule before launch and run to the preset sample size. *Owner:* Analyst.
- **Opportunity.** Result generalizes to other triggered flows. *Response:* Record the result in the test library for reuse. *Owner:* Project manager.
**Acceptance criteria**
- Performance: both variants trigger and render correctly across major mail clients.
- Reliability: assignment between control and variant is random and logged.
- Efficiency: the variant reuses the existing template.
**Handoff.** If the variant wins, operations swaps it into the live flow and archives the old version.
**Realize and adapt.** Read out against the decision rule: roll out, retest, or keep the control.
**Where the RIASEC load falls**
- **I.** Test design and analysis
- **A.** Variant copy
- **C.** Sample-size discipline

### ESP migration
*Mid-size retailer moving platforms. Stage: Platform. Tier: Program. About 14 weeks.*
**Business need.** The current email platform no longer meets the team's needs and its contract is ending.
**Justification.** A mandated change with a fixed end date. It bypasses normal prioritization and is sequenced around other work.
**Strategy link.** Enabling work. It protects every lifecycle stage rather than serving one.
**Value ladder**
- **Deliverable.** Every flow, template and data field moved to the new platform, with the old one switched off.
- **Outcome.** The team runs all lifecycle programs on the new platform with no loss in performance.
- **Benefit.** Continuity of revenue-generating flows, and the capability the new platform adds.
- **Value.** Business: continuity and capability. Subscriber: no visible disruption.
**Tailoring.** Program tier with extra weight on quality and risk. Milestones tied to flows moved, with a parity check for each wave.
**System interactions.** Touches every other system: the CRM, analytics, web events and consent records. Field mappings are documented and tested before each wave.
**Stakeholders**
- **IT and Security** (High influence, cautious). Review data handling and access before any data moves.
- **Revenue owners of each flow** (High influence, protective). Sign off parity for their own flows before cutover.
**Risks**
- **Threat.** Sender reputation drops when volume moves to the new platform and some flows silently break. *Response:* Ramp volume in stages and run a parity checklist per flow before and after each move. *Owner:* Deliverability specialist.
- **Opportunity.** The inventory finds dead flows and duplicate templates that can be retired. *Response:* Retire them rather than migrating them, and record the savings. *Owner:* Project manager.
**Acceptance criteria**
- Conformity: each migrated flow matches its source specification.
- Uniformity: templates move into one shared component library.
- Resilience: rollback plan for each wave.
**Handoff.** Each flow transfers to operations as it is verified. Final runbook covers the new platform's monitoring and ownership.
**Realize and adapt.** Publish a parity readout, record lessons learned, and update templates and checklists for next time.
**Where the RIASEC load falls**
- **C.** Parity QA, the bulk of the work
- **I.** Audit and reconciliation
- **R.** Field mapping and integrations

