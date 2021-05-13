import React from 'react'
import UseFireStore from '../hooks/UseFireStore'
import './style.css'

const ImageGrid = () => {
    const {docs}=UseFireStore('images')
    console.log(docs)
    return (
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="uploade"/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
