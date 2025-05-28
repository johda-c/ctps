import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-5">Specialized logistics services since 2008.</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Contact</h3>
            <p className="text-gray-300 mb-3"><strong>Phone:</strong> +264 81 628 3329</p>
            <p className="text-gray-300 mb-3">
              <strong>Email:</strong><br />
              johanc.cloete@outlook.com<br />
              johanc.cloete@gmail.com
            </p>
            <p className="text-gray-300 mb-3"><strong>Address:</strong><br />Windhoek, Namibia</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/#home" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/#services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/#about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/#permit" className="text-gray-300 hover:text-white">Permit Information</Link></li>
              <li><Link href="/#contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700 text-gray-400">
          <p>© {new Date().getFullYear()} Capital Transport Permit Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
