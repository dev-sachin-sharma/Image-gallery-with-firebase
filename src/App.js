import React from 'react'
import ImageGrid from './comps/ImageGrid'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'

function App() {
    return (
        <div className="App">
           <Title/> 
           <UploadForm/>
           <div className="flex">
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
               <div className="flex-child"></div>
           </div>
           <ImageGrid/>
        </div>
    )
}

export default App
