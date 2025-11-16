import React from 'react'

export default function Header(){
  return (
    <header className="w-full py-4 px-6 border-b border-white/6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-[color:var(--vyom-orange)] flex items-center justify-center text-black font-bold">VG</div>
          <div>+
            <div className="font-semibold">VyomGarud</div>
            <div className="text-xs text-white/60">Advanced UAV Systems</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#highlights" className="hover:text-white">Highlights</a>
          <a href="#contact" className="px-3 py-2 border rounded-md border-white/6">Contact</a>
        </nav>
      </div>
    </header>
  )
}
