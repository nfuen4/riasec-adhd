import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src="./brain_bg.png" alt="" aria-hidden="true" loading="eager" />
      </div>

      <div className="container hero__inner">
        <motion.span
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="hero__eyebrow"
        >
          🧠 Career Intelligence for Neurodivergent Minds
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="hero__headline"
        >
          RIASEC &amp; <span className="text-gradient">ADHD</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="hero__sub"
        >
          A deep analysis of how the ADHD nervous system maps onto every RIASEC domain —
          and how to architect a career that deploys your advantages strategically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="hero__ctas"
        >
          <a href="#riasec"    className="btn btn--primary">Explore the Profiles</a>
          <a href="#avoid"     className="btn btn--ghost">Environments to Avoid</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="hero__stats"
        >
          {[
            { v: '6',    l: 'RIASEC Domains'    },
            { v: '7',    l: 'Risk Environments'  },
            { v: 'EAI',  l: 'Dominant Profile'   },
            { v: '∞',    l: 'Reframe Potential'  },
          ].map(({ v, l }) => (
            <div key={l} className="hero__stat">
              <span className="hero__stat-val">{v}</span>
              <span className="hero__stat-label">{l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#riasec"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="hero__scroll-cue"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
