import React, {useState} from 'react'

export default function ContactFooter(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value})
  const handleSubmit = (e)=>{ e.preventDefault(); alert('Thanks! Message captured. (Implement backend to truly send)') }

  return (
    <footer id="contact" className="mt-12 bg-[color:var(--vyom-charcoal)] py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-semibold">Get in touch</h4>
          <p className="mt-2 text-white/80">For partnerships, sales, or technical enquiries contact us.</p>
          <div className="mt-4 text-sm text-white/70">
            <div>📧: info@vyomgarud.example</div>
            <div>📞: +91 8881444693</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-3 rounded-md bg-transparent border border-white/8" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 rounded-md bg-transparent border border-white/8" />
          <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Message" className="w-full p-3 rounded-md bg-transparent border border-white/8" />
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-[color:var(--vyom-orange)] text-black rounded-md">Send Message</button>
            <div className="text-sm text-white/60">© {new Date().getFullYear()} VyomGarud</div>
          </div>
        </form>
      </div>
    </footer>
  )
}
