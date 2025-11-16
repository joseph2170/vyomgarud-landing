import React from 'react'

export default function Card({title, subtitle, children}){
  return (
    <div className="card-bg p-5 rounded-xl shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-white/80">{subtitle}</p>
      <div className="mt-3 text-sm text-white/70">{children}</div>
    </div>
  )
}
