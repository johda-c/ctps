import Link from 'next/link'

export default function PermitInfo() {
  return (
    <section id="permit" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Permit Information</h2>
          <p>Important information about transportation permits in Namibia.</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-6">Abnormal Load Permits</h3>
          <p className="mb-4">In Namibia, any vehicle or load that exceeds the following dimensions requires an abnormal load permit:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Width:</strong> Exceeding 2.5 meters</li>
            <li><strong>Height:</strong> Exceeding 4.3 meters</li>
            <li><strong>Length:</strong> Exceeding 18.5 meters for articulated vehicles</li>
            <li><strong>Weight:</strong> Exceeding 56,000 kg gross combination mass</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mb-6">Application Process</h3>
          <p className="mb-4">The application process typically involves:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Submission of vehicle and load details</li>
            <li>Route planning and approval</li>
            <li>Safety assessment</li>
            <li>Payment of applicable fees</li>
          </ul>

          <p>
            For detailed information about the permit application process, please{' '}
            <Link href="/#contact" className="text-primary underline hover:text-primary/80">
              contact us
            </Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
