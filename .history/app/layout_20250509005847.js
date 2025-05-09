import './globals.css'

export const metadata = {
  title: 'Navi',
  description: 'Navi - Your Campus Social Network',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-helvetica antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
