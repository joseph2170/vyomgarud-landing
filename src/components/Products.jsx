import React from 'react'
import Card from './Card'

const items = [
  {title: 'Surveillance UAV', subtitle: 'High-res sensors for real-time intel'},
  {title: 'Autonomous Navigation', subtitle: 'Robust GPS-denied path planning'},
  {title: 'Terrain Mapping', subtitle: 'Lidar & photogrammetry payloads'},
  {title: 'Long-Endurance Platform', subtitle: 'Extended flight time, reliable comms'},
]

export default function Products(){
  return (
    <section id="products" className="mt-10 py-10">
      <h3 className="text-2xl font-semibold">Capabilities & Products</h3>
      <p className="text-white/80 mt-2">Modular platforms tailored for defense and industrial use.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {items.map((it, i) => (
          <Card key={i} title={it.title} subtitle={it.subtitle}>
            <ul className="list-disc pl-4 mt-2 text-white/70 text-sm">
              <li>Ruggedized airframe</li>
              <li>Encrypted comms</li>
              <li>AI-assisted flight</li>
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
