import './globals.css'

export const metadata = {
  title: 'Assistivteq',
  description: 'Mental Health First',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  )
}
