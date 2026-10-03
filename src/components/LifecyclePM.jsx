import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText, Map, Hammer, ShieldCheck, LineChart, Layers, Rocket, FlaskConical,
} from 'lucide-react';

/* ─── The framework: The Lifecycle Loop ─── */
const phases = [
  {
    key: 'brief', num: '01', icon: FileText, iconClass: 'card__icon--coral',
    name: 'Brief', lead: 'A · E', timebox: '≤ 1 day',
    question: 'Who is this for, at which lifecycle stage, and what changes if it works?',
    outputs: ['One-page brief (5 fields)', 'One primary metric + guardrail', 'Holdout decision'],
    adhd: 'A creative brief works as a control system: it collapses infinite possibility into one target. Writing it first is what keeps the build from sprawling.',
  },
  {
    key: 'map', num: '02', icon: Map, iconClass: 'card__icon',
    name: 'Map', lead: 'I', timebox: '≤ 2 days',
    question: 'What does the customer journey look like, and what has to exist for it to run?',
    outputs: ['Journey / flow diagram', 'Dependency list (data, ESP, creative, legal)', 'Named owner per dependency'],
    adhd: 'Pattern recognition is the strength here. Cap the phase with a time-box so mapping novelty does not turn into a research rabbit hole.',
  },
  {
    key: 'build', num: '03', icon: Hammer, iconClass: 'card__icon--amber',
    name: 'Build', lead: 'R · A', timebox: '1–2 week sprints',
    question: 'What is the smallest slice that can ship and be seen?',
    outputs: ['Shippable slice every sprint', 'Segments, content and logic in the ESP', 'Preview links shared with stakeholders'],
    adhd: 'Visible output and tactile feedback sustain engagement. Every sprint ends with something a human can look at, never just "progress".',
  },
  {
    key: 'launch', num: '04', icon: ShieldCheck, iconClass: 'card__icon--coral',
    name: 'Launch', lead: 'C (supporting)', timebox: '≤ 1 day',
    question: 'Is it safe to send, and can I prove it?',
    outputs: ['Completed QA checklist', 'Seed-list test sends', 'Second pair of eyes sign-off'],
    adhd: 'Conventional work is the lowest natural fit, so remove willpower from it. A fixed checklist plus a reviewer makes QA mechanical instead of vigilance-based.',
  },
  {
    key: 'learn', num: '05', icon: LineChart, iconClass: 'card__icon',
    name: 'Learn', lead: 'I · S', timebox: 'Readout within 48 h of the data window',
    question: 'Did it work against the holdout, and do we scale, iterate or kill it?',
    outputs: ['One-page readout', 'Scale / iterate / kill decision', 'Next project seeded into the backlog'],
    adhd: 'A readout with a real audience provides the activation signal that internal-only work lacks. Sharing it also closes the loop so the next project can start clean.',
  },
];

/* ─── Project tiers ─── */
const tiers = [
  {
    icon: FlaskConical, iconClass: 'card__icon--amber',
    name: 'Test', span: '≤ 2 weeks',
    body: 'A single variable against a control: subject line, offer, send time, one block of content.',
    loop: 'All five phases, compressed. Brief and Map fit on one page.',
    examples: ['Cart-abandonment offer test', 'Welcome email send-time test'],
  },
  {
    icon: Rocket, iconClass: 'card__icon--coral',
    name: 'Campaign', span: '2–6 weeks',
    body: 'A multi-touch effort aimed at one segment with one goal: a win-back series, a launch, a promotion.',
    loop: 'One full loop. Build runs in one or two sprints.',
    examples: ['Lapsed-subscriber win-back', 'Product launch announcement'],
  },
  {
    icon: Layers, iconClass: 'card__icon',
    name: 'Program', span: '6–16 weeks',
    body: 'An always-on system or a structural change: onboarding, a lifecycle scoring model, an ESP migration.',
    loop: 'Sliced into 4-week milestones. Each milestone runs its own loop and ships a visible artifact.',
    examples: ['Onboarding rebuild', 'ESP migration'],
  },
];

/* ─── Brief template ─── */
const briefFields = [
  ['Stage', 'Acquire · Onboard · Engage · Convert · Retain · Win back'],
  ['Audience', 'Segment definition, size and exclusions (suppressions)'],
  ['Goal', 'One primary metric, one guardrail metric, a target agreed up front'],
  ['Hypothesis', '"If we [change], then [segment] will [behavior], because [reason]."'],
  ['Decision rule', 'What result means scale, iterate or kill, and who decides'],
];

/* ─── Worked examples ─── */
const examples = [
  {
    id: 'onboarding', tab: 'Onboarding rebuild', stage: 'Onboard', tier: 'Program', length: '12 weeks',
    brief: {
      goal: 'Raise day-14 activation among new trial users. Guardrail: unsubscribe rate on onboarding emails.',
      hypothesis: 'If onboarding messages are triggered by what a user has and has not done, rather than by days since signup, more users reach the first value event, because the message matches where they are stuck.',
      holdout: '10% of new signups stay on the existing time-based sequence for the full 12 weeks.',
    },
    slices: [
      { when: 'Weeks 1–4', artifact: 'Journey map and a rewritten welcome email live to the test cell.', phases: 'Brief, Map, Build, Launch' },
      { when: 'Weeks 5–8', artifact: 'Behavior-triggered nudges (no first project created, no teammate invited) live.', phases: 'Build, Launch' },
      { when: 'Weeks 9–12', artifact: 'Activation readout against holdout and a decision on rolling out to all signups.', phases: 'Learn' },
    ],
    risk: 'Long horizon without feedback. The 4-week slices and the always-running holdout provide the proof-of-movement the project would otherwise lack.',
    load: { A: 'Message and voice design', I: 'Finding where users stall', C: 'Trigger logic QA' },
  },
  {
    id: 'winback', tab: 'Win-back campaign', stage: 'Win back', tier: 'Campaign', length: '3 weeks',
    brief: {
      goal: 'Reactivate subscribers inactive for 90+ days. Guardrail: spam complaint rate and list health.',
      hypothesis: 'If lapsed subscribers hear what has changed since they left, in a short three-touch series, a meaningful share will return, because the original reason for leaving may no longer apply.',
      holdout: '10% of the lapsed segment receives nothing, so reactivation can be separated from organic return.',
    },
    slices: [
      { when: 'Days 1–2', artifact: 'One-page brief with segment definition and suppressions (open support tickets, recent purchasers).', phases: 'Brief, Map' },
      { when: 'Days 3–10', artifact: 'Three-touch series built, previewed with stakeholders and test-sent to seed list.', phases: 'Build, Launch' },
      { when: 'Days 11–21', artifact: 'Series sent. Non-openers sunset after the final touch. Readout shared.', phases: 'Launch, Learn' },
    ],
    risk: 'The send is the whole project, so a QA miss reaches the entire audience. Suppression logic is the most important item on the checklist.',
    load: { A: 'Subject lines and offer story', E: 'Framing the business case', C: 'Suppression and sunset rules' },
  },
  {
    id: 'cart', tab: 'Cart-abandonment test', stage: 'Convert', tier: 'Test', length: '10 days',
    brief: {
      goal: 'Increase recovered-cart revenue per recipient. Guardrail: margin and unsubscribe rate.',
      hypothesis: 'If the second reminder emphasizes free shipping instead of a discount, recovered revenue per recipient will hold while margin improves, because the objection is cost-to-deliver rather than price.',
      holdout: 'The existing flow is the control. No separate holdout is needed because the control already runs.',
    },
    slices: [
      { when: 'Day 1', artifact: 'Brief: one variable, one metric, sample size and run length fixed in advance.', phases: 'Brief, Map' },
      { when: 'Days 2–3', artifact: 'Variant built and test-sent. QA checklist complete.', phases: 'Build, Launch' },
      { when: 'Days 4–10', artifact: 'Run to the pre-set sample size without peeking. Readout and decision.', phases: 'Learn' },
    ],
    risk: 'Stopping early on a promising early read. The decision rule is written before launch so the result decides, not the mood.',
    load: { I: 'Test design and analysis', A: 'Variant copy', C: 'Sample-size discipline' },
  },
  {
    id: 'esp', tab: 'ESP migration', stage: 'Platform', tier: 'Program', length: '14 weeks',
    brief: {
      goal: 'Move all automations to the new ESP with no loss in deliverability. Guardrail: inbox placement and send volume parity.',
      hypothesis: 'A segment-by-segment migration with a gradual sender-reputation ramp keeps deliverability stable, because each volume increase is verified before the next.',
      holdout: 'Not applicable. This is a mandated project, so it bypasses prioritization scoring and is sequenced around the other work.',
    },
    slices: [
      { when: 'Weeks 1–4', artifact: 'Inventory of every flow, template and data field, plus the first automation live in the new ESP.', phases: 'Brief, Map, Build' },
      { when: 'Weeks 5–9', artifact: 'Highest-volume flows migrated in waves. A running tally of flows live is shared weekly.', phases: 'Build, Launch' },
      { when: 'Weeks 10–14', artifact: 'Remaining flows moved, old platform decommissioned, parity readout published.', phases: 'Launch, Learn' },
    ],
    risk: 'This is the "pure maintenance" pattern the site warns about: Conventional-heavy, long, and thin on visible audience. The weekly tally, paired work on audit tasks and checklist-driven QA exist to counter exactly that.',
    load: { C: 'Parity QA (the bulk of the work)', I: 'Audit and reconciliation', R: 'Data field and integration plumbing' },
  },
];

/* ─── Prioritization worked example ─── */
const candidates = [
  { name: 'Cart-abandonment offer test', tier: 'Test',     impact: 2, confidence: 4, effort: 1 },
  { name: 'Lapsed-subscriber win-back',  tier: 'Campaign', impact: 3, confidence: 4, effort: 2 },
  { name: 'Anniversary / milestone emails', tier: 'Campaign', impact: 3, confidence: 3, effort: 2 },
  { name: 'Onboarding rebuild',          tier: 'Program',  impact: 5, confidence: 3, effort: 4 },
]
  .map(c => ({ ...c, score: (c.impact * c.confidence) / c.effort }))
  .sort((a, b) => b.score - a.score);

/* ─── helpers ─── */
const fade = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

const Reveal = ({ children, className = '' }) => (
  <motion.div
    variants={fade} initial="hidden" whileInView="visible"
    viewport={{ once: true, margin: '-80px' }} className={className}
  >{children}</motion.div>
);

const Sub = ({ children }) => <h3 className="lpm__subhead">{children}</h3>;

/* ══════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════ */
export default function LifecyclePM() {
  const [active, setActive] = useState(examples[0].id);
  const ex = examples.find(e => e.id === active);

  return (
    <>
      {/* ── The Loop ── */}
      <Sub>The Lifecycle Loop</Sub>
      <p className="lpm__lede">
        Five phases, each with a time-box and a required output. Lifecycle work is repeated by nature (every
        project ends by seeding the next), so the framework is a loop rather than a one-way plan.
      </p>
      <div className="lpm__phases">
        {phases.map(({ key, num, icon: Icon, iconClass, name, lead, timebox, question, outputs, adhd }) => (
          <Reveal key={key} className="card lpm__phase">
            <div className="lpm__phase-head">
              <div className={`card__icon ${iconClass}`}><Icon size={20} /></div>
              <span className="lpm__num">{num}</span>
            </div>
            <h4 className="card__title">{name}</h4>
            <div className="lpm__meta">
              <span className="riasec-badge badge-A">{lead}</span>
              <span className="lpm__timebox">{timebox}</span>
            </div>
            <p className="card__body lpm__question">{question}</p>
            <ul className="card__list">{outputs.map(o => <li key={o}>{o}</li>)}</ul>
            <div className="callout">{adhd}</div>
          </Reveal>
        ))}
      </div>

      {/* ── Tiers ── */}
      <Sub>Size the project before you plan it</Sub>
      <p className="lpm__lede">
        The loop scales to three project sizes. The rule that matters: anything longer than four weeks is sliced
        into four-week milestones, and each milestone ships something visible.
      </p>
      <div className="grid-3">
        {tiers.map(({ icon: Icon, iconClass, name, span, body, loop, examples: exs }) => (
          <Reveal key={name} className="card">
            <div className={`card__icon ${iconClass}`}><Icon size={20} /></div>
            <span className="card__label">{span}</span>
            <h4 className="card__title">{name}</h4>
            <p className="card__body">{body}</p>
            <p className="card__body"><strong className="lpm__strong">How the loop runs:</strong> {loop}</p>
            <ul className="card__list">{exs.map(x => <li key={x}>{x}</li>)}</ul>
          </Reveal>
        ))}
      </div>

      {/* ── Brief template ── */}
      <Sub>The one-page brief</Sub>
      <p className="lpm__lede">
        Every project, whatever its size, starts with these five fields. If a field cannot be filled in, the
        project is not ready to build.
      </p>
      <Reveal className="card lpm__brief">
        {briefFields.map(([k, v]) => (
          <div key={k} className="lpm__brief-row">
            <span className="lpm__brief-key">{k}</span>
            <span className="lpm__brief-val">{v}</span>
          </div>
        ))}
      </Reveal>

      {/* ── Worked examples ── */}
      <Sub>The framework applied: four worked examples</Sub>
      <p className="lpm__lede">
        Illustrative projects showing the brief, the milestone slices and the main risk for each. Goals and
        guardrails are stated as design choices; no results are claimed.
      </p>
      <div className="lpm__tabs" role="tablist" aria-label="Worked examples">
        {examples.map(e => (
          <button
            key={e.id} role="tab" id={`tab-${e.id}`} aria-selected={active === e.id}
            aria-controls={`panel-${e.id}`}
            className={`lpm__tab ${active === e.id ? 'lpm__tab--active' : ''}`}
            onClick={() => setActive(e.id)}
          >{e.tab}</button>
        ))}
      </div>
      <div className="card lpm__panel" role="tabpanel" id={`panel-${ex.id}`} aria-labelledby={`tab-${ex.id}`}>
        <div className="lpm__chips">
          <span className="riasec-badge badge-R">{ex.stage}</span>
          <span className="riasec-badge badge-I">{ex.tier}</span>
          <span className="riasec-badge badge-A">{ex.length}</span>
        </div>

        <div className="lpm__cols">
          <div>
            <span className="card__label">Brief</span>
            <dl className="lpm__dl">
              <dt>Goal</dt><dd>{ex.brief.goal}</dd>
              <dt>Hypothesis</dt><dd>{ex.brief.hypothesis}</dd>
              <dt>Holdout</dt><dd>{ex.brief.holdout}</dd>
            </dl>
          </div>
          <div>
            <span className="card__label">Milestone slices</span>
            <ol className="lpm__slices">
              {ex.slices.map(s => (
                <li key={s.when}>
                  <span className="lpm__when">{s.when}</span>
                  <span>{s.artifact}</span>
                  <span className="lpm__ph">{s.phases}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="callout"><strong className="lpm__strong">Main risk:</strong> {ex.risk}</div>

        <div>
          <span className="card__label">Where the RIASEC load falls</span>
          <ul className="card__list lpm__load">
            {Object.entries(ex.load).map(([k, v]) => <li key={k}><strong className="lpm__strong">{k}</strong> · {v}</li>)}
          </ul>
        </div>
      </div>

      {/* ── Prioritization ── */}
      <Sub>Choosing what to run next</Sub>
      <p className="lpm__lede">
        Score each candidate 1–5 for impact, confidence and effort, then rank by (impact × confidence) ÷ effort.
        Scores below are illustrative.
      </p>
      <Reveal className="card lpm__tablewrap">
        <table className="lpm__table">
          <thead>
            <tr><th>Rank</th><th>Project</th><th>Tier</th><th>Impact</th><th>Confidence</th><th>Effort</th><th>Score</th></tr>
          </thead>
          <tbody>
            {candidates.map((c, i) => (
              <tr key={c.name}>
                <td>{i + 1}</td><td>{c.name}</td><td>{c.tier}</td>
                <td>{c.impact}</td><td>{c.confidence}</td><td>{c.effort}</td>
                <td className="lpm__score">{c.score.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="callout">
          Dividing by effort always favors small tests, which is a feature (fast feedback) and a trap (the
          onboarding rebuild never starts). The fix is a standing rule: reserve one program-tier slot per
          quarter that is exempt from ranking. Mandated work such as an ESP migration is also outside the
          ranking and is sequenced around the rest.
        </div>
      </Reveal>
    </>
  );
}
