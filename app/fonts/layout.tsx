import './globals.css'

export const metadata = {
  title: 'Excel Ribbon Learning Animation',
  description: 'Interactive Excel Ribbon Learning Tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
