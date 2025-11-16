import React from 'react'
import { motion } from 'framer-motion'
import image from "./image.png";

export default function Hero(){
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">

        <div className="md:w-1/2">
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}}
            className="text-4xl md:text-5xl font-bold leading-tight">
            VyomGarud<br/>
            <span className="text-[color:var(--vyom-orange)]">Precision UAV Systems</span>
          </motion.h1>

          <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8}}
            className="mt-6 text-white/80">
            Delivering military-grade autonomy and engineering reliability for surveillance, mapping, and critical missions.
          </motion.p>

          <motion.div className="mt-8 flex gap-4" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}}>
            <a href="#contact" className="px-5 py-3 bg-[color:var(--vyom-orange)] text-black font-semibold rounded-md shadow">
              Contact Sales
            </a>
            <a href="#products" className="px-5 py-3 border rounded-md border-white/10">
              Our Capabilities
            </a>
          </motion.div>
        </div>

        <div className="md:w-1/2">
          <motion.div
            initial={{scale:0.98, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{duration:0.8}}
            className="card-bg rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={image} alt="Drone" className="w-full h-full object-contain" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
