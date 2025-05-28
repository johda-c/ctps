import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="bg-primary text-white py-20 text-center">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Capital Transport Permit Solutions</h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Specialized logistics services since 2008. We assist transporters with abnormal load permits and logistics solutions in Namibia.
        </p>
        <Link href="/#contact" className="btn btn-white">
          Contact Us
        </Link>
      </div>
    </section>
  )
}
