import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8">Contact us today.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <Link href="/#contact" className="btn btn-white">
            Contact Us
          </Link>
          <Link href="/#services" className="btn btn-outline">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
