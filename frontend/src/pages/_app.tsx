import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Entry point of application
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp