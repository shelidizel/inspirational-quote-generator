import { GradientBgCon } from '@/components/QuoteGenerator/quoteGeneratorElements'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inspirational Quote App</title>
        <meta name="description" content="Fun project built on nextjs typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { /* background */}
      <GradientBgCon>
        
      </GradientBgCon>
    </>
  )
}
