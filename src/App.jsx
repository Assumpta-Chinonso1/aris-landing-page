import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import NavCard from './Components/NavCard'
import assets from './assets/assets'
import Card from './Components/Card'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import HeroSection from './Components/HeroSection'



function App  () {

  const demos = [
    {
      title: 'Aris(Shopping List)',
      subtitle: 'I am a web designer',
      images: assets.portfolio1,
      link: "https://musical-pony-5be72a.netlify.app/"
    },
    {
      title: 'Aris(Shopping List)',
      subtitle: 'I am a web designer',
      images: assets.portfolio2,
      link: "https://musical-pony-5be72a.netlify.app/"
    },
    {
      title: 'Aris(Shopping List)',
      subtitle: 'I am a web designer',
      images: assets.portfolio3,
      link: "https://zesty-crisp-491624.netlify.app/"
    },
    {
      title: 'Aris(Shopping List)',
      subtitle: 'I am a web designer',
      images: assets.portfolio4,
      link: "https://sparkly-sopapillas-750d35.netlify.app/"
    },
    {
      title: 'Aris(Shopping List)',
      subtitle: 'I am a web designer',
      images: assets.portfolio5,
      link: "https://thriving-fenglisu-7a85c6.netlify.app/"
    },
    {
      title: 'Aris(Shopping List)',
      subtitle: 'I am a web designer',
      images: assets.portfolio6,
      link: "https://friendly-faloodeh-8a606c.netlify.app/"
    },
    {
      title: 'Aris(Shopping List)',
      subtitle: 'I am a web designer',
      images: assets.portfolio7,
      link: "https://comforting-entremet-df20d1.netlify.app/"
    },
    {
      title: 'Aris(Shopping List)',
      subtitle: 'I am a web designer',
      images: assets.portfolio8,
      link: "https://musical-alfajores-03fa1b.netlify.app/"
    },
  ]
  return (
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      
      <Hero/>
      
      <NavCard/>
      <div className="card_container">
        {demos.map((demo, index) => (
        <Card
        key={index}
        title ={demo.title}
        subtitle={demo.subtitle}
        images ={demo.images}
        link={demo.link}/>
        ))}
           <HeroSection/>
      </div>
      
    </div>
    
    </BrowserRouter>
  )
}

export default App
