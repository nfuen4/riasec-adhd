import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css';
import {
  Wrench, Search, Palette, Users, TrendingUp, Settings,
  AlertTriangle, Clock, Building2, Layers, Activity, Eye, XCircle,
  Brain, Zap, Target, BarChart3,
} from 'lucide-react';

/* ─── helpers ───────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.4,0,0.2,1] } },
});

const Card = ({ children, delay = 0 }) => (
  <motion.div
    variants={fadeUp(delay)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
    className="card"
  >{children}</motion.div>
);

const Sect = ({ id, tag, title, subtitle, children }) => (
  <section id={id} className="section">
    <div className="container">
      <div className="section-header">
        {tag && <span className="section-tag">{tag}</span>}
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

/* ─── RIASEC domain data ────────────────── */
const domains = [
  {
    badge: 'R', badgeClass: 'badge-R', icon: Wrench, iconClass: 'card__icon--coral',
    label: 'Realistic', title: 'The Technical Mechanic',
    adhd: 'High alignment when there is visible output and tactile feedback. Hyperfocus activates on complex systems. Risk: repetitive maintenance drains fast.',
    strengths: ['Rapid hardware/software troubleshooting', 'Deep technical iteration under pressure', 'Hands-on prototyping and rapid experimentation'],
    careers: ['Product Engineering', 'Data Infrastructure', 'Technical Product Management'],
  },
  {
    badge: 'I', badgeClass: 'badge-I', icon: Search, iconClass: 'card__icon',
    label: 'Investigative', title: 'The Systematic Thinker',
    adhd: 'Explosive alignment during novel research phases. The ADHD brain\'s pattern-recognition speed becomes an investigative superpower. Risk: plateaus once territory is mapped.',
    strengths: ['Pattern recognition across large, noisy datasets', 'Connecting disparate research into synthesis', 'Hyperfocused deep dives that non-ADHD peers rarely sustain'],
    careers: ['Data Science', 'Product Analytics', 'Research & Strategy'],
  },
  {
    badge: 'A', badgeClass: 'badge-A', icon: Palette, iconClass: 'card__icon',
    label: 'Artistic', title: 'The Narrative Alchemist',
    adhd: 'The ADHD Artistic type operates on a creative brief like a control system — collapsing infinite possibility into a narrow target. Without a brief, output is unfocused. With one, it is exceptional.',
    strengths: ['High-volume ideation without ego attachment', 'Cross-domain creative synthesis', 'Direction and narrative vision at speed'],
    careers: ['Brand Strategy', 'Creative Direction', 'Content & Campaigns'],
  },
  {
    badge: 'S', badgeClass: 'badge-A', icon: Users, iconClass: 'card__icon',
    label: 'Social', title: 'The Connector',
    adhd: 'Social ADHD types are highly attuned to audience psychology — attention allocation, meaning assignment, emotional posture, identity fit, and perceived risk. Persuasion flows naturally when interest is genuine.',
    strengths: ['Reading emotional subtext in rooms and conversations', 'Spontaneous, authentic connection', 'High-stakes audience engagement and empathy'],
    careers: ['Customer Success', 'Sales Engineering', 'Community & Partnerships'],
  },
  {
    badge: 'E', badgeClass: 'badge-R', icon: TrendingUp, iconClass: 'card__icon--coral',
    label: 'Enterprising', title: 'The Strategic Driver',
    adhd: 'Peak domain alignment. ADHD Enterprising types thrive on vision, urgency, and high-stakes ambiguity. Hyperfocus activates on new initiatives. Execution risk is real but manageable with structure.',
    strengths: ['Rapid opportunity identification and framing', 'Energizing others through intensity and vision', 'Decisiveness in conditions of incomplete information'],
    careers: ['Go-to-Market Leadership', 'Product Management', 'Entrepreneurship'],
  },
  {
    badge: 'C', badgeClass: 'badge-I', icon: Settings, iconClass: 'card__icon',
    label: 'Conventional', title: 'The Systems Operator',
    adhd: 'Lowest natural alignment. The Conventional domain rewards routine precision — the structural opposite of how ADHD nervous systems activate. Sustainable only in short bursts or when paired with Enterprising/Investigative work.',
    strengths: ['Systematic QA during high-stakes launches', 'Rigorous documentation when intrinsically motivated', 'Process design (building systems vs. running them)'],
    careers: ['Avoid as primary domain — use as supporting function only'],
  },
];

/* ─── High-Risk Environments ────────────── */
const risks = [
  {
    num: '01', icon: XCircle,
    title: 'Pure Maintenance Roles',
    body: 'Any role where the primary task is maintaining a stable system without improving it. The diagnostic question: "What % of my week is making things that already work continue working, vs. making things that don\'t yet exist?" Any answer over 60% is structurally high-risk.',
    signal: '"You\'ll be managing our CRM" often means "you will maintain data integrity in a system no one is authorized to redesign."',
  },
  {
    num: '02', icon: Clock,
    title: 'Long Horizon Without Feedback',
    body: 'Projects with 12–18 month timelines and no visible milestones. The ADHD brain needs near-daily proof that effort is producing movement. Without it, effort disappears into a void — the nervous system interprets this as "the project doesn\'t exist."',
    signal: 'Structural corrective: impose artificial feedback loops. One shareable artifact per 4-week cycle. External accountability partners.',
  },
  {
    num: '03', icon: Building2,
    title: 'Heavily Bureaucratic Cultures',
    body: 'In bureaucratic environments, the ADHD individual spends a disproportionate share of their executive function budget on meta-tasks — navigating approval chains, deciphering processes, managing emotional regulation. None of this produces output.',
    signal: 'Diagnostic signal: if you feel productive in side projects but exhausted in your primary role, the problem is almost certainly environmental architecture, not personal capability.',
  },
  {
    num: '04', icon: Layers,
    title: 'Deep Single-Domain Specialization',
    body: 'Hyper-focus initially produces extraordinary depth. Two years in, when the domain is largely mapped, the novelty gradient flattens and the nervous system disengages. The sustainable architecture is T-shaped or π-shaped from day one.',
    signal: 'Sustainable path: 2–3 deep specializations spanning meaningfully different domains (e.g. lifecycle marketing + data analysis + AI implementation).',
  },
  {
    num: '05', icon: Activity,
    title: 'Flat Output Demand',
    body: 'A role requiring flat, moderate output maintained perfectly over 8 hours/day, 5 days/week is fundamentally mismatched to the ADHD biology. The ADHD system thrives on intensity cycling — deep sprint, then recovery.',
    signal: 'In flat-demand roles, ADHD individuals manufacture urgency by procrastinating until the deadline. This is the nervous system self-medicating, not poor time management.',
  },
  {
    num: '06', icon: Eye,
    title: 'High Monitoring & Low Autonomy',
    body: 'Awareness of being observed triggers the ADHD nervous system\'s authority-resistance pattern, compounding existing fragility. Increased monitoring → reduced output → manager increases monitoring further. A doom loop that ends with a PIP.',
    signal: 'Interview question to ask: "Do you measure success by process adherence and hours logged, or by outcomes delivered?" This is the highest-signal indicator of organizational fit.',
  },
  {
    num: '07', icon: Users,
    title: 'No Visible Audience',
    body: 'Work that is seen, reacted to, and responded to by humans generates an activation signal that purely internal work does not. Writing a campaign to 200K people is neurologically different from writing process docs that sit in a shared drive.',
    signal: 'This is not ego. It is a structural activation requirement. ADHD individuals thrive in customer-facing, public-output, and deadline-driven creative roles for this reason.',
  },
];

/* ══════════════════════════════════════════
   APP
══════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ── SECTION 1: RIASEC Profiles ── */}
      <Sect
        id="riasec"
        tag="Part I — Full Domain Profiles"
        title="The RIASEC Model Through an ADHD Lens"
        subtitle="Every domain mapped to the ADHD nervous system's activation profile — strengths, risks, and career alignment."
      >
        <div className="grid-3">
          {domains.map(({ badge, badgeClass, icon: Icon, iconClass, label, title, adhd, strengths, careers }, i) => (
            <Card key={label} delay={i * 0.05}>
              <span className={`riasec-badge ${badgeClass}`}>{badge} — {label}</span>
              <div className={`card__icon ${iconClass}`}><Icon size={20} /></div>
              <h3 className="card__title">{title}</h3>
              <p className="card__body">{adhd}</p>
              <div>
                <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent-magenta)', marginBottom: '.5rem' }}>Strengths</p>
                <ul className="card__list">
                  {strengths.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--accent-coral)', marginBottom: '.5rem' }}>Career Zones</p>
                <ul className="card__list">
                  {careers.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Sect>

      {/* ── SECTION 2: ADHD Lens ── */}
      <Sect
        id="adhd-lens"
        tag="Part II — The ADHD Advantage Model"
        title="How the ADHD Brain Processes Work"
        subtitle="The ADHD nervous system is not a deficient neurotypical system. It is a different operating architecture with distinct activation requirements."
      >
        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          {[
            {
              icon: Brain, iconClass: 'card__icon',
              label: 'Attention Allocation',
              title: 'What Becomes Salient',
              body: 'The ADHD brain does not allocate attention by importance — it allocates by novelty, urgency, and interest. What becomes salient and what disappears into the background is determined by the nervous system\'s activation state, not conscious priority-setting.',
            },
            {
              icon: Zap, iconClass: 'card__icon--coral',
              label: 'Meaning Assignment',
              title: 'Signal vs. Data',
              body: 'ADHD minds filter for what the facts mean (signal) rather than what the facts are (data). This produces extraordinary synthesis capability in ambiguous environments — and disengagement in environments that only reward data handling.',
            },
            {
              icon: Target, iconClass: 'card__icon--amber',
              label: 'Identity Fit',
              title: '"People Like Me Do This"',
              body: 'Identity congruence is a primary activation mechanism for the ADHD nervous system. Work that feels like an extension of core identity engages effortlessly. Work that feels like role-playing someone else depletes executive function rapidly.',
            },
          ].map(({ icon: Icon, iconClass, label, title, body }, i) => (
            <Card key={title} delay={i * 0.05}>
              <div className={`card__icon ${iconClass}`}><Icon size={20} /></div>
              <span className="card__label">{label}</span>
              <h3 className="card__title">{title}</h3>
              <p className="card__body">{body}</p>
            </Card>
          ))}
        </div>
        <div className="grid-2">
          {[
            {
              icon: BarChart3, iconClass: 'card__icon',
              label: 'Emotional Posture',
              title: 'Reading the Room',
              body: 'ADHD Enterprising and Social types are disproportionately attuned to the emotional state of their audience — whether it is defensive, curious, skeptical, hopeful, or ready. This is not a soft skill; it is a primary input into how the ADHD brain processes information about people. The limitation: this sensitivity is involuntary and can be overwhelming when the emotional environment is hostile or incoherent.',
            },
            {
              icon: Activity, iconClass: 'card__icon--coral',
              label: 'Perceived Risk & Agency',
              title: 'Safety & Self-Direction',
              body: 'The ADHD nervous system requires perceived agency over outcomes to stay engaged. Roles where the next step feels safe and self-directed generate sustained engagement. Roles where action is constrained by external gatekeeping produce the psychological reactance pattern — visible as procrastination, avoidance, or "laziness" — that is actually the nervous system refusing to execute without meaningful control.',
            },
          ].map(({ icon: Icon, iconClass, label, title, body }, i) => (
            <Card key={title} delay={i * 0.05}>
              <div className={`card__icon ${iconClass}`}><Icon size={20} /></div>
              <span className="card__label">{label}</span>
              <h3 className="card__title">{title}</h3>
              <p className="card__body">{body}</p>
            </Card>
          ))}
        </div>
      </Sect>

      {/* ── SECTION 3: Environments to Avoid ── */}
      <Sect
        id="avoid"
        tag="Part IV — Strategic Environment Design"
        title="High-Risk Environments to Avoid or Restructure"
        subtitle="This is not about limitation. It is about deploying finite cognitive energy strategically and protecting it from structural drains."
      >
        <div className="grid-3">
          {risks.map(({ num, icon: Icon, title, body, signal }, i) => (
            <Card key={num} delay={i * 0.04}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '.7rem', fontWeight: 800, color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>{num}</span>
                <div className="card__icon" style={{ background: 'rgba(251,113,133,0.1)', color: '#FB7185' }}><Icon size={18} /></div>
              </div>
              <h3 className="card__title">{title}</h3>
              <p className="card__body">{body}</p>
              <div className="callout">{signal}</div>
            </Card>
          ))}
        </div>
      </Sect>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} RIASEC × ADHD — A Career Intelligence Framework for Neurodivergent Minds</p>
      </footer>
    </>
  );
}
