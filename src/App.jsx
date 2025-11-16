import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Highlights from './components/Highlights'
import ContactFooter from './components/ContactFooter'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-6xl mx-auto px-6">
          <About />
          <Products />
          <Highlights />
        </div>
      </main>
      <ContactFooter />
    </div>
  )
}
