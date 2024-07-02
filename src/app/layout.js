import style from '../../public/main.css'
import bootstrap from '../../public/bootstrap.min.css'

export default function RootLayout({ children }) {
    return (
      <html lang="en" className='background'>  
        <body>
          {children}
        </body>
      </html>
    )
  }