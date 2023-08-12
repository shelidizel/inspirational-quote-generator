import { BgImage1, BgImage2, GradientBgCon } from '@/components/QuoteGenerator/quoteGeneratorElements'
import Head from 'next/head'
import Image from 'next/image'

import cloud1 from '../assets/cloud_weather.png';
import cloud2 from '../assets/cloud_thunder.png';

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

        <BgImage1
        src = {cloud1}
        height = "300"
        alt = "Cloudy background 1"
        />
        <BgImage2
        src = {cloud2}
        height = "300"
        alt = "Cloudy background 1"
        />
      </GradientBgCon>
    </>
  )
}
