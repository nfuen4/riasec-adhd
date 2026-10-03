// Writes docs/lifecycle-pm-framework.md from src/data/lifecyclePM.js so the
// Markdown copy and the site section never drift apart.
// Usage: npm run export:lifecycle-pm
import { writeFileSync } from 'node:fs';
import {
  source, valueSystem, valueLadder, valueLadderNote, informationFlow, functions, functionsNote,
  environment, cycle, principles, principlesNote, tailoring, complexity, quality, risk, charter, examples,
} from '../src/data/lifecyclePM.js';

const esc = s => String(s).replace(/\|/g, '\\|');
const table = (head, rows) =>
  [`| ${head.join(' | ')} |`, `| ${head.map(() => '---').join(' | ')} |`, ...rows.map(r => `| ${r.map(esc).join(' | ')} |`)].join('\n');
const bullets = items => items.map(i => `- ${i}`).join('\n');

const out = [];
const add = (...x) => out.push(...x, '');

add('# Project Management for Lifecycle Marketing',
  `An applied framework built from *${source.title}* (${source.publisher}), ${source.covers}. Section references (§) point to that book. Concepts are paraphrased; the lifecycle marketing applications and examples are original and illustrative.`,
  '> Generated from `src/data/lifecyclePM.js` by `npm run export:lifecycle-pm`. Edit the data file, not this document.');

add('## 1. Where a lifecycle project sits',
  table(['Level', 'Ref', 'In the book', 'In lifecycle marketing', 'Example'], valueSystem.map(v => [v.level, v.ref, v.book, v.lifecycle, v.example])));
add('### The value ladder (§2.1.1, §3.4)',
  table(['Step', 'In the book', 'Example'], valueLadder.map(v => [v.step, v.book, v.lifecycle])), valueLadderNote);
add('### Information flow (§2.1.2)',
  '**Direction and handoff**', bullets(informationFlow.down.map(([a, b]) => `**${a}.** ${b}`)),
  '**Feedback**', bullets(informationFlow.up.map(([a, b]) => `**${a}.** ${b}`)), informationFlow.note);

add('## 2. Who does what (§2.3)',
  table(['Function', 'Ref', 'Lifecycle role', 'What it does'], functions.map(f => [f.name, f.ref, f.lifecycle, f.does])), functionsNote);

add('## 3. The environment around the project (§2.4)',
  '**Internal**', bullets(environment.internal.map(([a, b]) => `**${a}.** ${b}`)),
  '**External**', bullets(environment.external.map(([a, b]) => `**${a}.** ${b}`)));

add('## 4. The project cycle');
for (const c of cycle) {
  add(`### ${c.num} ${c.name} (${c.refs})`, `*${c.question}*`, bullets(c.does), `**Output:** ${c.artifact}`);
}

add('## 5. The principles as working checks');
for (const p of principles) {
  add(`### ${p.ref} ${p.name}`, p.book, `- **Ask:** ${p.check}`, `- **Warning sign:** ${p.redFlag}`);
}
add(`> ${principlesNote}`);

add('## 6. Tailoring and controls',
  '### Tailor the process to the project (§3.7)', tailoring.factors,
  table(['Tier', 'Span', 'Use', 'Skip'], tailoring.tiers.map(t => [t.name, t.span, t.process, t.skip])),
  '### Watch for complexity (§3.9)',
  table(['Source', 'In the book', 'In lifecycle'], complexity.map(c => [c.source, c.book, c.lifecycle])),
  '### Eight dimensions of quality (§3.8)',
  table(['Dimension', 'The book asks', 'Lifecycle check'], quality.map(q => [q.dim, q.book, q.lifecycle])),
  '### Risk responses (§3.10)', 'A good response is:', bullets(risk.criteria), risk.note);

add('## 7. The one-page charter', table(['Field', 'What goes in it'], charter));

add('## 8. Worked examples', 'Illustrative scenarios. Goals are design choices; no results are claimed.');
for (const e of examples) {
  add(`### ${e.tab}`, `*${e.context}. Stage: ${e.stage}. Tier: ${e.tier}. About ${e.length}.*`,
    `**Business need.** ${e.need}`, `**Justification.** ${e.justification}`, `**Strategy link.** ${e.strategy}`,
    '**Value ladder**',
    bullets([`**Deliverable.** ${e.ladder.deliverable}`, `**Outcome.** ${e.ladder.outcome}`, `**Benefit.** ${e.ladder.benefit}`, `**Value.** ${e.ladder.value}`]),
    `**Tailoring.** ${e.tailoring}`, `**System interactions.** ${e.interactions}`,
    '**Stakeholders**', bullets(e.stakeholders.map(s => `**${s.who}** (${s.note}). ${s.engage}`)),
    '**Risks**',
    bullets([
      `**Threat.** ${e.risks.threat.what} *Response:* ${e.risks.threat.response} *Owner:* ${e.risks.threat.owner}.`,
      `**Opportunity.** ${e.risks.opportunity.what} *Response:* ${e.risks.opportunity.response} *Owner:* ${e.risks.opportunity.owner}.`,
    ]),
    '**Acceptance criteria**', bullets(e.quality),
    `**Handoff.** ${e.handoff}`, `**Realize and adapt.** ${e.realize}`,
    '**Where the RIASEC load falls**', bullets(Object.entries(e.load).map(([k, v]) => `**${k}.** ${v}`)));
}

writeFileSync(new URL('../docs/lifecycle-pm-framework.md', import.meta.url), out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n');
console.log('Wrote docs/lifecycle-pm-framework.md');
