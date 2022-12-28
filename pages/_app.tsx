import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Hello EC
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
