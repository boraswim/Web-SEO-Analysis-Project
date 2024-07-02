import style from '../../public/main.css'
import bootstrap from '../../public/bootstrap.min.css'

export default function RootLayout({ children }) {
    return (
      <html lang="en" className='background'>  
        <body>
          {children}
          <div className='position-absolute bottom-0 end-0 bg-light mx-auto p-2'>
            <b>Bora Sevim 2024</b>
          </div>
        </body>
      </html>
    )
  }