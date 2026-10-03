import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  source, valueSystem, valueLadder, valueLadderNote, informationFlow, functions, functionsNote,
  environment, cycle, principles, principlesNote, tailoring, complexity, quality, risk, charter, examples,
} from '../data/lifecyclePM';

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
const Lede = ({ children }) => <p className="lpm__lede">{children}</p>;
const Ref = ({ children }) => <span className="lpm__ref">{children}</span>;
const Strong = ({ children }) => <strong className="lpm__strong">{children}</strong>;

const Pair = ({ label, children }) => (
  <>
    <dt>{label}</dt>
    <dd>{children}</dd>
  </>
);

/* ══════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════ */
export default function LifecyclePM() {
  const [active, setActive] = useState(examples[0].id);
  const ex = examples.find(e => e.id === active);

  return (
    <>
      {/* ── 1. System for value delivery ── */}
      <Sub>1. Where a lifecycle project sits</Sub>
      <Lede>
        The book describes a system for value delivery: portfolios, programs, projects and operations working
        together toward the organization&rsquo;s strategy (§2.1). Lifecycle marketing maps onto it directly.
      </Lede>
      <div className="lpm__grid4">
        {valueSystem.map(({ level, ref, book, lifecycle, example }) => (
          <Reveal key={level} className="card">
            <Ref>{ref}</Ref>
            <h4 className="card__title">{level}</h4>
            <p className="card__body lpm__small">{book}</p>
            <p className="card__body lpm__small"><Strong>In lifecycle:</Strong> {lifecycle}</p>
            <div className="callout">{example}</div>
          </Reveal>
        ))}
      </div>

      <h4 className="lpm__minihead">The value ladder <Ref>§2.1.1 · §3.4</Ref></h4>
      <div className="lpm__ladder">
        {valueLadder.map(({ step, book, lifecycle }, i) => (
          <Reveal key={step} className="card lpm__rung">
            <span className="lpm__num">Step {i + 1}</span>
            <h4 className="card__title">{step}</h4>
            <p className="card__body lpm__small">{book}</p>
            <p className="card__body lpm__small"><Strong>Example:</Strong> {lifecycle}</p>
          </Reveal>
        ))}
      </div>
      <p className="lpm__note">{valueLadderNote}</p>

      <h4 className="lpm__minihead">Information flow <Ref>§2.1.2</Ref></h4>
      <div className="grid-2">
        <Reveal className="card">
          <span className="card__label">Direction and handoff</span>
          <ul className="card__list">{informationFlow.down.map(([a, b]) => <li key={a}><Strong>{a}.</Strong> {b}</li>)}</ul>
        </Reveal>
        <Reveal className="card">
          <span className="card__label">Feedback</span>
          <ul className="card__list">{informationFlow.up.map(([a, b]) => <li key={a}><Strong>{a}.</Strong> {b}</li>)}</ul>
        </Reveal>
      </div>
      <p className="lpm__note">{informationFlow.note}</p>

      {/* ── 2. Functions ── */}
      <Sub>2. Who does what</Sub>
      <Lede>
        The book lists eight functions a project needs, which can be filled by one person or spread across many
        (§2.3). Here they are mapped to lifecycle roles.
      </Lede>
      <Reveal className="card lpm__tablewrap">
        <table className="lpm__table">
          <thead><tr><th>Function</th><th>Ref</th><th>Lifecycle role</th><th>What it does</th></tr></thead>
          <tbody>
            {functions.map(f => (
              <tr key={f.ref}><td>{f.name}</td><td>{f.ref}</td><td>{f.lifecycle}</td><td>{f.does}</td></tr>
            ))}
          </tbody>
        </table>
      </Reveal>
      <p className="lpm__note">{functionsNote}</p>

      {/* ── 3. Environment ── */}
      <Sub>3. The environment around the project</Sub>
      <Lede>
        Internal and external factors shape every project and can help, hinder or do neither (§2.4).
      </Lede>
      <div className="grid-2">
        <Reveal className="card">
          <span className="card__label">Internal</span>
          <ul className="card__list">{environment.internal.map(([a, b]) => <li key={a}><Strong>{a}.</Strong> {b}</li>)}</ul>
        </Reveal>
        <Reveal className="card">
          <span className="card__label">External</span>
          <ul className="card__list">{environment.external.map(([a, b]) => <li key={a}><Strong>{a}.</Strong> {b}</li>)}</ul>
        </Reveal>
      </div>

      {/* ── 4. The cycle ── */}
      <Sub>4. The project cycle</Sub>
      <Lede>
        Five steps that turn the book&rsquo;s concepts into a working sequence. Each step produces one artifact and
        cites the sections it draws on.
      </Lede>
      <div className="lpm__cycle">
        {cycle.map(({ num, name, refs, question, does, artifact }) => (
          <Reveal key={num} className="card lpm__step">
            <span className="lpm__num">{num}</span>
            <h4 className="card__title">{name}</h4>
            <Ref>{refs}</Ref>
            <p className="card__body lpm__q">{question}</p>
            <ul className="card__list">{does.map(d => <li key={d}>{d}</li>)}</ul>
            <div className="callout"><Strong>Output:</Strong> {artifact}</div>
          </Reveal>
        ))}
      </div>

      {/* ── 5. Principles ── */}
      <Sub>5. The principles as working checks</Sub>
      <Lede>
        Each principle becomes a question to ask before a project ships, and a warning sign that it has been
        ignored.
      </Lede>
      <div className="grid-3">
        {principles.map(({ ref, name, book, check, redFlag }) => (
          <Reveal key={ref} className="card">
            <Ref>{ref}</Ref>
            <h4 className="card__title">{name}</h4>
            <p className="card__body lpm__small">{book}</p>
            <p className="card__body lpm__small"><Strong>Ask:</Strong> {check}</p>
            <div className="callout"><Strong>Warning sign:</Strong> {redFlag}</div>
          </Reveal>
        ))}
      </div>
      <p className="lpm__note">{principlesNote}</p>

      {/* ── 6. Tailoring, complexity, quality, risk ── */}
      <Sub>6. Tailoring and controls</Sub>
      <h4 className="lpm__minihead">Tailor the process to the project <Ref>§3.7</Ref></h4>
      <Lede>{tailoring.factors}</Lede>
      <div className="grid-3">
        {tailoring.tiers.map(({ name, span, process, skip }) => (
          <Reveal key={name} className="card">
            <span className="card__label">{span}</span>
            <h4 className="card__title">{name}</h4>
            <p className="card__body lpm__small"><Strong>Use:</Strong> {process}</p>
            <p className="card__body lpm__small"><Strong>Skip:</Strong> {skip}</p>
          </Reveal>
        ))}
      </div>

      <h4 className="lpm__minihead">Watch for complexity <Ref>§3.9</Ref></h4>
      <div className="lpm__grid4">
        {complexity.map(({ source: s, book, lifecycle }) => (
          <Reveal key={s} className="card">
            <h4 className="card__title">{s}</h4>
            <p className="card__body lpm__small">{book}</p>
            <p className="card__body lpm__small"><Strong>In lifecycle:</Strong> {lifecycle}</p>
          </Reveal>
        ))}
      </div>

      <h4 className="lpm__minihead">Eight dimensions of quality <Ref>§3.8</Ref></h4>
      <Reveal className="card lpm__tablewrap">
        <table className="lpm__table">
          <thead><tr><th>Dimension</th><th>The book asks</th><th>Lifecycle check</th></tr></thead>
          <tbody>{quality.map(q => <tr key={q.dim}><td>{q.dim}</td><td>{q.book}</td><td>{q.lifecycle}</td></tr>)}</tbody>
        </table>
      </Reveal>

      <h4 className="lpm__minihead">Risk responses <Ref>§3.10</Ref></h4>
      <Reveal className="card">
        <span className="card__label">A good response is</span>
        <ul className="card__list">{risk.criteria.map(c => <li key={c}>{c}</li>)}</ul>
        <div className="callout">{risk.note}</div>
      </Reveal>

      {/* ── 7. Charter ── */}
      <Sub>7. The one-page charter</Sub>
      <Lede>
        Every project, whatever its size, starts from the same ten fields. If one cannot be filled in, the project
        is not ready to build.
      </Lede>
      <Reveal className="card lpm__brief">
        {charter.map(([k, v]) => (
          <div key={k} className="lpm__brief-row">
            <span className="lpm__brief-key">{k}</span>
            <span className="lpm__brief-val">{v}</span>
          </div>
        ))}
      </Reveal>

      {/* ── 8. Worked examples ── */}
      <Sub>8. The framework applied: four worked projects</Sub>
      <Lede>
        Each example is a filled-in charter plus how the cycle runs for that project. They are illustrative
        scenarios. Goals are stated as design choices and no results are claimed.
      </Lede>
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
          <span className="lpm__context">{ex.context}</span>
        </div>

        <div className="lpm__cols">
          <div>
            <span className="card__label">Charter the value <Ref>§3.4</Ref></span>
            <dl className="lpm__dl">
              <Pair label="Business need">{ex.need}</Pair>
              <Pair label="Justification">{ex.justification}</Pair>
              <Pair label="Strategy link">{ex.strategy}</Pair>
            </dl>
          </div>
          <div>
            <span className="card__label">Value ladder <Ref>§2.1.1</Ref></span>
            <dl className="lpm__dl">
              <Pair label="Deliverable">{ex.ladder.deliverable}</Pair>
              <Pair label="Outcome">{ex.ladder.outcome}</Pair>
              <Pair label="Benefit">{ex.ladder.benefit}</Pair>
              <Pair label="Value">{ex.ladder.value}</Pair>
            </dl>
          </div>
        </div>

        <div className="lpm__cols">
          <div>
            <span className="card__label">Tailor and plan <Ref>§3.7 · §3.5</Ref></span>
            <dl className="lpm__dl">
              <Pair label="Tailoring">{ex.tailoring}</Pair>
              <Pair label="System interactions">{ex.interactions}</Pair>
            </dl>
          </div>
          <div>
            <span className="card__label">Stakeholders <Ref>§3.3</Ref></span>
            <ul className="lpm__stake">
              {ex.stakeholders.map(s => (
                <li key={s.who}><Strong>{s.who}</Strong> <span className="lpm__muted">({s.note})</span><br />{s.engage}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lpm__cols">
          <div className="callout">
            <Strong>Threat.</Strong> {ex.risks.threat.what}<br />
            <Strong>Response:</Strong> {ex.risks.threat.response} <span className="lpm__muted">Owner: {ex.risks.threat.owner}.</span>
          </div>
          <div className="callout lpm__callout-amber">
            <Strong>Opportunity.</Strong> {ex.risks.opportunity.what}<br />
            <Strong>Response:</Strong> {ex.risks.opportunity.response} <span className="lpm__muted">Owner: {ex.risks.opportunity.owner}.</span>
          </div>
        </div>

        <div className="lpm__cols">
          <div>
            <span className="card__label">Acceptance criteria <Ref>§3.8</Ref></span>
            <ul className="card__list lpm__load">{ex.quality.map(q => <li key={q}>{q}</li>)}</ul>
          </div>
          <div>
            <span className="card__label">Hand off and realize <Ref>§2.1.2 · §3.4</Ref></span>
            <dl className="lpm__dl">
              <Pair label="Handoff">{ex.handoff}</Pair>
              <Pair label="Realize and adapt">{ex.realize}</Pair>
            </dl>
          </div>
        </div>

        <div>
          <span className="card__label">Where the RIASEC load falls</span>
          <ul className="card__list lpm__load">
            {Object.entries(ex.load).map(([k, v]) => <li key={k}><Strong>{k}</Strong> · {v}</li>)}
          </ul>
        </div>
      </div>

      <p className="lpm__source">
        Framework adapted from <em>{source.title}</em> ({source.publisher}), {source.covers}. Concepts are
        paraphrased; the lifecycle marketing applications and examples are original.
      </p>
    </>
  );
}
