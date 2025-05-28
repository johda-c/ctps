import './globals.css'

export const metadata = {
  title: 'Capital Transport Permit Solutions',
  description: 'Specialized logistics services since 2008. We assist transporters with abnormal load permits and logistics solutions in Namibia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
