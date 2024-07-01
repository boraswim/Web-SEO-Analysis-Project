import style from '../../public/main.css'

export default function RootLayout({ children }) {
    return (
      <html lang="en" className='background'>
        <body>{children}</body>
      </html>
    )
  }