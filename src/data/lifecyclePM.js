/*
 * Applied framework: project management for lifecycle marketing.
 *
 * Source: The Standard for Project Management and A Guide to the Project
 * Management Body of Knowledge (PMBOK Guide), Seventh Edition (PMI, 2021),
 * Sections 1.2, 2.1–2.5 and 3.1–3.10. Section references (§) point there.
 * Concepts are paraphrased. Everything labeled "lifecycle" is an application
 * of the concept to lifecycle marketing, not text from the book.
 *
 * This file is plain data so it can drive both the site section
 * (src/components/LifecyclePM.jsx) and the Markdown export
 * (scripts/export-lifecycle-pm.mjs).
 */

export const source = {
  title: 'The Standard for Project Management and A Guide to the Project Management Body of Knowledge (PMBOK Guide), Seventh Edition',
  publisher: 'Project Management Institute, 2021',
  covers: 'Sections 1.2, 2.1–2.5 and 3.1–3.10',
};

/* ─── 1. System for value delivery (§2.1) ─── */
export const valueSystem = [
  {
    level: 'Portfolio', ref: '§1.2',
    book: 'Projects, programs and operations managed together to reach strategic objectives.',
    lifecycle: 'The lifecycle strategy: where investment goes across Acquire, Onboard, Engage, Convert, Retain and Win back.',
    example: 'This year: fix onboarding first, then retention, then win-back.',
  },
  {
    level: 'Program', ref: '§1.2',
    book: 'Related projects managed in a coordinated way to get benefits that managing them separately would not.',
    lifecycle: 'One stage of the customer lifecycle treated as a coordinated body of work.',
    example: 'The Onboarding Program: welcome series, behavioral nudges, in-app messages, activation reporting.',
  },
  {
    level: 'Project', ref: '§1.2',
    book: 'A temporary effort to create a unique product, service or result, with a beginning and an end.',
    lifecycle: 'A campaign, an A/B test, a flow build, a migration. Anything that ends.',
    example: 'Rebuild the welcome series. Run a send-time test. Migrate the ESP.',
  },
  {
    level: 'Operations', ref: '§2.1.1',
    book: 'Ongoing business activity that supports and is influenced by portfolios, programs and projects.',
    lifecycle: 'The always-on flows, recurring sends and day-to-day program health that projects hand off to.',
    example: 'The live welcome series, weekly newsletter, deliverability monitoring.',
  },
];

/* Deliverables → outcomes → benefits → value (§2.1.1, §3.4) */
export const valueLadder = [
  { step: 'Deliverable', book: 'What the project produces.', lifecycle: 'A 3-email win-back series is live in the ESP.' },
  { step: 'Outcome', book: 'The end result or consequence. Broader than the deliverable.', lifecycle: 'Lapsed subscribers resume using the product.' },
  { step: 'Benefit', book: 'A gain the organization realizes from the outcome.', lifecycle: 'Reactivated revenue above what a holdout group produced on its own.' },
  { step: 'Value', book: 'Worth or usefulness, which differs by stakeholder (§1.2).', lifecycle: 'Business: healthier retention. Subscriber: messages that are relevant. Society: respectful use of personal data.' },
];

export const valueLadderNote =
  'The book\'s own example (§3.4): software is the output, but the productivity gain only arrives if people are trained to use it. The lifecycle version: a flow going live is the output, but it only produces the outcome if the right people receive the right message at the right moment.';

/* ─── 2. Information flow (§2.1.2) ─── */
export const informationFlow = {
  down: [
    ['Leadership → Portfolio', 'Strategy and the stages that matter most'],
    ['Portfolio → Program and Project', 'Desired outcomes, benefits and value'],
    ['Project → Operations', 'The deliverable, plus support and maintenance information'],
  ],
  up: [
    ['Operations → Project', 'Fixes, adjustments and updates (bounces, rendering bugs, flow drop-offs)'],
    ['Project → Portfolio', 'Performance and progress toward the outcomes'],
    ['Portfolio → Leadership', 'Portfolio performance and strategy advancement'],
  ],
  note: 'A value delivery system works best when information moves both ways. The lifecycle takeaway: every project ends with a deliberate handoff to operations, and operations has a defined route to send problems back.',
};

/* ─── 3. Functions on a project (§2.3) ─── */
export const functions = [
  { ref: '§2.3.1', name: 'Provide oversight and coordination', lifecycle: 'Lifecycle project or program manager', does: 'Orchestrates planning, monitoring and control. Also watches team well-being.' },
  { ref: '§2.3.2', name: 'Present objectives and feedback', lifecycle: 'The requester (customer) and the subscriber (end user)', does: 'The book separates the customer, who requests or funds the work, from the end user, who experiences the deliverable. In lifecycle the end user is the subscriber, and their behavior is the feedback.' },
  { ref: '§2.3.3', name: 'Facilitate and support', lifecycle: 'Project manager or senior team member', does: 'Runs reviews, builds consensus between brand, legal and growth, resolves conflicts.' },
  { ref: '§2.3.4', name: 'Perform work and contribute insights', lifecycle: 'CRM specialists, copywriters, designers, developers, analysts', does: 'Builds the segments, content, logic and reports.' },
  { ref: '§2.3.5', name: 'Apply expertise', lifecycle: 'Deliverability, privacy and data engineering specialists', does: 'Subject expertise, often part-time or external.' },
  { ref: '§2.3.6', name: 'Provide business direction and insight', lifecycle: 'Program or product owner', does: 'Prioritizes the backlog by business value, dependencies and risk, and sets direction for each increment.' },
  { ref: '§2.3.7', name: 'Provide resources and direction', lifecycle: 'Sponsor (Head of Growth, CMO)', does: 'Secures budget, tools and authority. Provides the escalation path.' },
  { ref: '§2.3.8', name: 'Maintain governance', lifecycle: 'Legal, compliance and brand approvers', does: 'Approves recommendations and keeps the project tied to business objectives.' },
];

export const functionsNote =
  'One person can fill several functions, and one function can be spread across several people (§2.3). On a small test, a single marketer may cover most of them. On a program, naming who fills each one is the first sign the project is ready to start.';

/* ─── 4. The project environment (§2.4) ─── */
export const environment = {
  internal: [
    ['Process assets (§2.4.1)', 'Email templates, QA checklists, naming conventions, brief templates'],
    ['Data assets', 'Segment definitions, past campaign results, prior holdout data'],
    ['Knowledge assets', 'Deliverability know-how, lessons learned from earlier sends'],
    ['IT software', 'ESP, CRM, CDP, analytics and testing tools'],
    ['Resource availability', 'Design and development capacity, send-volume limits, approved vendors'],
    ['Governance documentation', 'Consent policy, approval rules, brand guidelines'],
  ],
  external: [
    ['Marketplace conditions (§2.4.2)', 'Competitor promotions, seasonality, technology changes in mail clients'],
    ['Social and cultural influences', 'Public holidays and events that shape the send calendar'],
    ['Regulatory environment', 'Data protection, consent and marketing-communication law'],
    ['Industry standards', 'Mailbox provider sender requirements, accessibility standards'],
    ['Financial considerations', 'Offer margins, currency and tax effects on promotions'],
  ],
};

/* ─── 5. The project cycle ─── */
export const cycle = [
  {
    num: '01', name: 'Charter the value', refs: '§3.4 · §2.1.1 · §3.3 · §2.2',
    question: 'Why this project, why now, and who has a stake in it?',
    does: [
      'State the business need, the justification and the strategy it serves.',
      'Fill in the value ladder: deliverable, outcome, benefit, value.',
      'List stakeholders and how each influences the work.',
      'Name who approves what (governance).',
    ],
    artifact: 'One-page charter',
  },
  {
    num: '02', name: 'Tailor and plan', refs: '§3.7 · §3.9 · §3.10 · §3.5 · §3.2',
    question: 'What is the smallest process that still protects the outcome?',
    does: [
      'Choose the tier (test, campaign, program) and the matching amount of process.',
      'Map how the work interacts with other flows, segments and tools.',
      'Log risks, both threats and opportunities, each with an owner.',
      'Agree team norms, review turnaround and roles.',
    ],
    artifact: 'Tailored plan and risk register',
  },
  {
    num: '03', name: 'Deliver in increments', refs: '§2.3.6 · §3.3 · §3.8',
    question: 'What can ship and be reviewed in this increment?',
    does: [
      'The direction-setting function orders the backlog by value, dependencies and risk.',
      'Stakeholders see each increment, not just the final result.',
      'Acceptance criteria are written before building and checked before sending.',
    ],
    artifact: 'Reviewed increment that meets acceptance criteria',
  },
  {
    num: '04', name: 'Hand off to operations', refs: '§2.1.2 · §3.5',
    question: 'Who runs this tomorrow, and what do they need to know?',
    does: [
      'Pass the live deliverable to operations with support and maintenance information.',
      'Document monitoring, ownership and how to report problems back.',
      'Check the deliverable against neighboring flows and frequency rules.',
    ],
    artifact: 'Runbook and named operational owner',
  },
  {
    num: '05', name: 'Realize and adapt', refs: '§3.4 · §3.7 · §2.4.1',
    question: 'Did the outcome and benefit arrive, and what changes next?',
    does: [
      'Compare results with the business case. Scale, adjust, or end the effort.',
      'Capture lessons learned as process and knowledge assets.',
      'Re-tailor the approach for the next project.',
    ],
    artifact: 'Readout, decision and lessons learned',
  },
];

/* ─── 6. The principles as working checks (§3.1–3.10) ─── */
export const principles = [
  {
    ref: '§3.1', name: 'Be a diligent, respectful and caring steward',
    book: 'Act with integrity, care, trustworthiness and compliance, and consider financial, social and environmental effects.',
    check: 'Would we be comfortable if the subscriber could see exactly why they received this message?',
    redFlag: 'Fake urgency, ignored opt-outs, or consent rules treated as someone else\'s problem.',
  },
  {
    ref: '§3.2', name: 'Create a collaborative project team environment',
    book: 'Team agreements, structures and processes. Accountability is not shared; responsibility can be.',
    check: 'Is there one accountable owner per deliverable and an agreed review turnaround?',
    redFlag: 'Copy sits in approval with no named approver or deadline.',
  },
  {
    ref: '§3.3', name: 'Effectively engage with stakeholders',
    book: 'Engage proactively. Stakeholders can affect scope, schedule, cost, risk, quality and success, and their influence changes over time.',
    check: 'Have the high-influence, neutral or skeptical stakeholders been engaged before build, not after?',
    redFlag: 'Legal or sales first sees the campaign the day before it sends.',
  },
  {
    ref: '§3.4', name: 'Focus on value',
    book: 'Value, seen from the customer or end user\'s perspective, is the ultimate success indicator. Shift focus from deliverables to outcomes, and end the work if it no longer fits the business need.',
    check: 'Can we state the outcome and benefit, not just the deliverable, and what result would make us stop?',
    redFlag: 'Success is defined as "the flow is live."',
  },
  {
    ref: '§3.5', name: 'Recognize, evaluate and respond to system interactions',
    book: 'A project is a system inside larger systems. One change can cause several impacts, and teams should think beyond project end to the operational state.',
    check: 'Which other flows, segments, frequency caps and integrations does this touch?',
    redFlag: 'A win-back launches into the same inbox as a sale, a product update and an onboarding series.',
  },
  {
    ref: '§3.6', name: 'Demonstrate leadership behaviors',
    book: 'Anyone can lead. Leadership is not authority, and the style should fit the situation: directive in chaos, delegating to a capable team.',
    check: 'Who leads in each situation: the incident, the creative debate, the priority conflict?',
    redFlag: 'Every decision waits on the most senior person in the room.',
  },
  {
    ref: '§3.7', name: 'Tailor based on context',
    book: 'Use "just enough" process. Each project is unique, and tailoring is iterative throughout.',
    check: 'Is any step here costing more than the risk it protects against?',
    redFlag: 'A ten-page plan for a subject-line test, or no plan for a platform migration.',
  },
  {
    ref: '§3.8', name: 'Build quality into processes and deliverables',
    book: 'Quality means meeting acceptance criteria and fitness for use. Prevent and detect defects early.',
    check: 'Were acceptance criteria written before building, and tested on real devices and real data?',
    redFlag: 'QA is "send me a test and I\'ll look."',
  },
  {
    ref: '§3.9', name: 'Navigate complexity',
    book: 'Complexity comes from human behavior, system behavior, uncertainty and ambiguity, and technological innovation. It cannot be controlled, but teams can adapt.',
    check: 'Which of the four sources is rising on this project, and what would we change if it did?',
    redFlag: 'Assuming the tooling will behave exactly as documented.',
  },
  {
    ref: '§3.10', name: 'Optimize risk responses',
    book: 'Risks include opportunities and threats. Responses should be appropriate, cost effective, realistic, agreed and owned.',
    check: 'Does every logged risk have a response someone owns, and is there at least one opportunity?',
    redFlag: 'A risk list of vague worries with no owners.',
  },
];

export const principlesNote =
  'The book has twelve principles. The two not shown here, "Embrace adaptability and resiliency" (§3.11) and "Enable change to achieve the envisioned future state" (§3.12), were not available in the text this section was built from and will be added from the full book.';

/* ─── 7. Tailoring (§3.7) ─── */
export const tailoring = {
  factors: 'The book names the business environment, team size, degree of uncertainty and complexity as the inputs to tailoring. The sizing and process below are an illustrative application, not from the book.',
  tiers: [
    {
      name: 'Test', span: 'About 1–2 weeks',
      process: 'One-page charter, one reviewer, single holdout or control, readout in one page.',
      skip: 'Dependency maps, steering reviews, formal risk register.',
    },
    {
      name: 'Campaign', span: 'About 2–6 weeks',
      process: 'Charter, dependency list, risk list, weekly check-in, checklist-based QA, readout.',
      skip: 'Milestone steering reviews.',
    },
    {
      name: 'Program', span: 'About 6–16 weeks',
      process: 'Charter, milestone plan, stakeholder engagement plan, risk register, regular sponsor review, handoff runbook.',
      skip: 'Nothing core. Tailor each milestone down as it repeats.',
    },
  ],
};

/* ─── 8. Complexity (§3.9) ─── */
export const complexity = [
  { source: 'Human behavior', book: 'Conflicting agendas, differing norms, remote teams.', lifecycle: 'Brand, growth, legal and sales each want a different message, and subscribers behave unpredictably.' },
  { source: 'System behavior', book: 'Interdependencies among project elements create unforeseen issues.', lifecycle: 'ESP, CDP, CRM and analytics integrations. A field renamed in one system silently breaks segmentation in another.' },
  { source: 'Uncertainty and ambiguity', book: 'Unclear options and unknowns that blur cause and effect.', lifecycle: 'A result moves and no single cause is obvious: seasonality, a competitor, a list change, or the message itself.' },
  { source: 'Technological innovation', book: 'New technology disrupts tools, processes and ways of working.', lifecycle: 'Mail client privacy changes, AI-assisted content, new channels that change how performance is measured.' },
];

/* ─── 9. Quality dimensions (§3.8) ─── */
export const quality = [
  { dim: 'Performance', book: 'Does it function as intended?', lifecycle: 'Trigger fires on the right event. Dynamic content renders correctly.' },
  { dim: 'Conformity', book: 'Is it fit for use and to specification?', lifecycle: 'Brand, legal footer, accessibility and consent requirements are met.' },
  { dim: 'Reliability', book: 'Does it produce consistent metrics each time?', lifecycle: 'Tracking parameters and event names are identical across sends.' },
  { dim: 'Resilience', book: 'Can it cope with failure and recover?', lifecycle: 'Fallback content when a personalization field is empty. Alert if a feed breaks.' },
  { dim: 'Satisfaction', book: 'Does it get positive end-user feedback?', lifecycle: 'Low complaint and unsubscribe rates. Works on mobile.' },
  { dim: 'Uniformity', book: 'Does it match deliverables made the same way?', lifecycle: 'Same templates, naming and component library as other flows.' },
  { dim: 'Efficiency', book: 'Most output for least input?', lifecycle: 'Reusable modules rather than one-off builds.' },
  { dim: 'Sustainability', book: 'Positive economic, social and environmental impact?', lifecycle: 'Protects list health and avoids fatiguing the audience.' },
];

/* ─── 10. Risk (§3.10) ─── */
export const risk = {
  criteria: ['Appropriate for the risk\'s significance', 'Cost effective', 'Realistic in this context', 'Agreed by relevant stakeholders', 'Owned by a named person'],
  note: 'Risks run both ways. A threat is something that could hurt an objective; an opportunity is something that could help. Every charter should log at least one of each.',
};

/* ─── 11. The one-page charter ─── */
export const charter = [
  ['Business need', 'Why the project exists, in terms of a business goal (§3.4)'],
  ['Justification', 'Why it is worth the investment and why now, with assumptions (§3.4)'],
  ['Strategy link', 'The lifecycle stage and strategy it serves (§3.4, §2.5)'],
  ['Value ladder', 'Deliverable, outcome, benefit, value (§2.1.1)'],
  ['Stakeholders', 'Who they are, their influence, how they will be engaged (§3.3)'],
  ['Functions', 'Who fills each project function (§2.3)'],
  ['Tailoring', 'Tier and the "just enough" process chosen (§3.7)'],
  ['Risks', 'At least one threat and one opportunity, each with a response and owner (§3.10)'],
  ['Acceptance criteria', 'What must be true before it ships (§3.8)'],
  ['Handoff', 'Who runs it in operations and how problems come back (§2.1.2)'],
];

/* ─── 12. Worked examples ─── */
export const examples = [
  {
    id: 'onboarding', tab: 'Onboarding rebuild', context: 'B2B SaaS company with a free trial',
    stage: 'Onboard', tier: 'Program', length: '12 weeks',
    need: 'Too many trial users sign up and never reach the first value moment.',
    justification: 'Activation is the earliest point where lifecycle work changes revenue, and the current sequence is time-based rather than behavior-based.',
    strategy: 'Fix onboarding first in the lifecycle strategy.',
    ladder: {
      deliverable: 'A behavior-triggered onboarding program (welcome email, nudges for unfinished setup steps) live to a test cell.',
      outcome: 'More trial users complete the first value event within 14 days.',
      benefit: 'Higher trial-to-paid conversion than the holdout group on the existing sequence.',
      value: 'Business: more retained customers. Subscriber: messages that match where they are stuck.',
    },
    tailoring: 'Program tier: milestone plan in three 4-week increments, fortnightly sponsor review, full risk register. Each increment is itself tailored down.',
    stakeholders: [
      { who: 'Head of Product', note: 'High influence, supportive', engage: 'Joint review of the definition of "first value event" before build.' },
      { who: 'Customer Success', note: 'Medium influence, neutral', engage: 'Preview each increment. They hear trial users\' real questions.' },
      { who: 'Legal', note: 'High influence, neutral', engage: 'Approve the consent basis for triggered messages up front.' },
    ],
    interactions: 'Overlaps with in-app messages and sales outreach to the same trial users. Frequency rules and a shared suppression list are agreed before launch.',
    risks: {
      threat: { what: 'Trigger logic misfires and sends setup nudges to users who already finished.', response: 'Test every trigger against real event data before launch. Add a kill switch.', owner: 'CRM specialist' },
      opportunity: { what: 'Nudge data shows which setup step blocks most users.', response: 'Share findings with Product as input to in-app onboarding.', owner: 'Program owner' },
    },
    quality: ['Performance: each trigger fires on the correct event in test.', 'Resilience: fallback content when user name or plan is missing.', 'Satisfaction: unsubscribe rate stays within the agreed guardrail.'],
    handoff: 'Lifecycle operations owns the live program. Runbook covers monitoring, the kill switch, and where to log drop-off issues.',
    realize: 'Compare activation and conversion with the holdout at week 12. Decide to roll out to all signups, adjust, or stop.',
    load: { A: 'Message voice and design', I: 'Finding where users stall', C: 'Trigger-logic QA and documentation' },
  },
  {
    id: 'winback', tab: 'Win-back campaign', context: 'Subscription box company',
    stage: 'Win back', tier: 'Campaign', length: '3 weeks',
    need: 'A large group of subscribers has been inactive for 90+ days and is costing send volume without engaging.',
    justification: 'Reactivating existing customers is a lower-cost path to revenue than acquiring new ones, and a sunset step protects list health.',
    strategy: 'Supports the retention and win-back stages of the lifecycle strategy.',
    ladder: {
      deliverable: 'A three-message win-back series sent to the lapsed segment, with a sunset step for non-responders.',
      outcome: 'Lapsed subscribers return and purchase, and the rest leave the active list cleanly.',
      benefit: 'Reactivated revenue above the holdout, plus better list health.',
      value: 'Business: recovered customers and healthier deliverability. Subscriber: a clear, respectful way to opt back in or out.',
    },
    tailoring: 'Campaign tier: charter, dependency list, risk list, checklist QA, one readout. No steering reviews.',
    stakeholders: [
      { who: 'Finance', note: 'Medium influence, skeptical about discount cost', engage: 'Agree the offer margin limit before building.' },
      { who: 'Customer Support', note: 'Low influence, high impact', engage: 'Supply the list of open tickets to suppress.' },
    ],
    interactions: 'Shares inboxes with the regular newsletter and promotions. Lapsed users are excluded from them during the series to avoid message collisions.',
    risks: {
      threat: { what: 'A recent purchaser or someone with an open support ticket receives a "we miss you" email.', response: 'Build and test suppression logic, then verify the final segment count against the source.', owner: 'CRM specialist' },
      opportunity: { what: 'Replies to the series reveal why people left.', response: 'Route replies to a shared inbox and summarize themes in the readout.', owner: 'Project manager' },
    },
    quality: ['Conformity: legal footer and unsubscribe present on every send.', 'Reliability: tracking parameters identical across the three messages.', 'Sustainability: sunset rule defined for non-responders.'],
    handoff: 'Rules for ongoing lapsed-subscriber handling move to operations as an always-on trigger if the readout supports it.',
    realize: 'Compare reactivation with the holdout. Decide whether to make the series permanent, retune the offer, or retire it.',
    load: { A: 'Offer story and subject lines', E: 'Framing the business case for Finance', C: 'Suppression and sunset rules' },
  },
  {
    id: 'cart', tab: 'Cart-abandonment test', context: 'Direct-to-consumer e-commerce brand',
    stage: 'Convert', tier: 'Test', length: '10 days',
    need: 'Recovery emails lean on discounts that reduce margin.',
    justification: 'A single-variable test is cheap and answers whether a non-discount message can recover similar revenue.',
    strategy: 'Improves the conversion stage without adding a new program.',
    ladder: {
      deliverable: 'A variant of the second abandonment email that emphasizes free shipping instead of a discount.',
      outcome: 'Shoppers complete purchases without needing a price cut.',
      benefit: 'Equal or better recovered revenue per recipient, at higher margin.',
      value: 'Business: margin. Shopper: a clearer reason to return.',
    },
    tailoring: 'Test tier: one-page charter, one reviewer, the live flow as control. Sample size and run length fixed in advance. No dependency map, no formal register.',
    stakeholders: [
      { who: 'Merchandising', note: 'Medium influence, neutral', engage: 'Confirm the shipping offer can run for the test window.' },
    ],
    interactions: 'The flow shares a trigger with the browse-abandonment series. The variant changes only the second message so the sequence stays coherent.',
    risks: {
      threat: { what: 'The test is stopped early on a promising first read and a false winner is rolled out.', response: 'Write the decision rule before launch and run to the preset sample size.', owner: 'Analyst' },
      opportunity: { what: 'Result generalizes to other triggered flows.', response: 'Record the result in the test library for reuse.', owner: 'Project manager' },
    },
    quality: ['Performance: both variants trigger and render correctly across major mail clients.', 'Reliability: assignment between control and variant is random and logged.', 'Efficiency: the variant reuses the existing template.'],
    handoff: 'If the variant wins, operations swaps it into the live flow and archives the old version.',
    realize: 'Read out against the decision rule: roll out, retest, or keep the control.',
    load: { I: 'Test design and analysis', A: 'Variant copy', C: 'Sample-size discipline' },
  },
  {
    id: 'esp', tab: 'ESP migration', context: 'Mid-size retailer moving platforms',
    stage: 'Platform', tier: 'Program', length: '14 weeks',
    need: 'The current email platform no longer meets the team\'s needs and its contract is ending.',
    justification: 'A mandated change with a fixed end date. It bypasses normal prioritization and is sequenced around other work.',
    strategy: 'Enabling work. It protects every lifecycle stage rather than serving one.',
    ladder: {
      deliverable: 'Every flow, template and data field moved to the new platform, with the old one switched off.',
      outcome: 'The team runs all lifecycle programs on the new platform with no loss in performance.',
      benefit: 'Continuity of revenue-generating flows, and the capability the new platform adds.',
      value: 'Business: continuity and capability. Subscriber: no visible disruption.',
    },
    tailoring: 'Program tier with extra weight on quality and risk. Milestones tied to flows moved, with a parity check for each wave.',
    stakeholders: [
      { who: 'IT and Security', note: 'High influence, cautious', engage: 'Review data handling and access before any data moves.' },
      { who: 'Revenue owners of each flow', note: 'High influence, protective', engage: 'Sign off parity for their own flows before cutover.' },
    ],
    interactions: 'Touches every other system: the CRM, analytics, web events and consent records. Field mappings are documented and tested before each wave.',
    risks: {
      threat: { what: 'Sender reputation drops when volume moves to the new platform and some flows silently break.', response: 'Ramp volume in stages and run a parity checklist per flow before and after each move.', owner: 'Deliverability specialist' },
      opportunity: { what: 'The inventory finds dead flows and duplicate templates that can be retired.', response: 'Retire them rather than migrating them, and record the savings.', owner: 'Project manager' },
    },
    quality: ['Conformity: each migrated flow matches its source specification.', 'Uniformity: templates move into one shared component library.', 'Resilience: rollback plan for each wave.'],
    handoff: 'Each flow transfers to operations as it is verified. Final runbook covers the new platform\'s monitoring and ownership.',
    realize: 'Publish a parity readout, record lessons learned, and update templates and checklists for next time.',
    load: { C: 'Parity QA, the bulk of the work', I: 'Audit and reconciliation', R: 'Field mapping and integrations' },
  },
];
