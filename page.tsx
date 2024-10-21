import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import About from './about/page'
import Portfolio from './portfolio/page'

export default function Home(){
  return(
    <div>
      
        <Header></Header>
        <Hero></Hero>
        <About></About>
        <Portfolio></Portfolio>
        <Footer></Footer>
    </div>
  )
}