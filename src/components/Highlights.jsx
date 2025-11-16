import React from 'react'

export default function Highlights(){
  const highlights = [
    {title: 'Precision Engineering', text: 'Tight tolerances and certified components.'},
    {title: 'Secure Communications', text: 'End-to-end encrypted data links.'},
    {title: 'AI Autonomy', text: 'Onboard models for threat detection & path planning.'}
  ]
  return (
    <section id="highlights" className="mt-10 py-10">
      <h3 className="text-2xl font-semibold">Highlights</h3>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        {highlights.map((h, i) => (
          <div key={i} className="flex-1 card-bg p-5 rounded-lg">
            <h4 className="font-semibold">{h.title}</h4>
            <p className="mt-2 text-white/80">{h.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
