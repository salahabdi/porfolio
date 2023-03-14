import React from "react"
import Cards from "./Cards"
import image from './assets/image.png'


export default function Projects() {
    return(
        <div>
             <Cards 
              image={image} 
              title='Project Title'
              description='Project Description'
              />
              
        </div>
        
    
       )
}