import {React,useEffect} from 'react'
import Navbar from "../Navbar"
import Stats from './Stats'
import Awards from './Awards'
import Hero from './Hero'
import OpenAccount from '../OpenAccount'
import Education from './Education'
import Pricing from './Pricing'
import Footer from '../Footer'


function Homepage() {



    return (
       <>
       <Hero/>
       <Awards/>
       <Stats/>
       <Pricing/>
       <Education/>
       <OpenAccount/>
       </> 
    )
}

export default Homepage
