import Link from 'next/link'

export default function EmbargoCalendar() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>2025 Embargo Calendar</h2>
          <p>Important dates when abnormal load transportation is restricted.</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-6">Public Holidays</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>January 1:</strong> New Year's Day</li>
            <li><strong>March 21:</strong> Independence Day</li>
            <li><strong>April 18-21:</strong> Easter Weekend</li>
            <li><strong>May 1:</strong> Workers' Day</li>
            <li><strong>May 4:</strong> Cassinga Day</li>
            <li><strong>May 25:</strong> Africa Day</li>
            <li><strong>August 26:</strong> Heroes' Day</li>
            <li><strong>December 10:</strong> Human Rights Day</li>
            <li><strong>December 25-26:</strong> Christmas and Family Day</li>
          </ul>

          <p className="mb-4">
            Transportation of abnormal loads is generally not permitted on these days and may be restricted 
            on days immediately before and after major holidays.
          </p>

          <p>
            For specific embargo information related to your transportation needs, please{' '}
            <Link href="/#contact" className="text-primary underline hover:text-primary/80">
              contact our team
            </Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
