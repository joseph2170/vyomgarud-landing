import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="mt-12 py-10">
      <motion.div className="bg-[color:var(--vyom-charcoal)] card-bg p-6 rounded-xl shadow-sm" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        <h3 className="text-2xl font-semibold">Our Mission</h3>
        <p className="mt-3 text-white/80">VyomGarud engineers robust unmanned aerial systems for defense and industrial applications — combining precision hardware, resilient communications, and AI-driven autonomy to perform critical missions in harsh environments.</p>
      </motion.div>
    </section>
  )
}
