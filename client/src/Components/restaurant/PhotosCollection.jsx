import React from 'react'


function PhotosCollection(props) {

    return (
        <>
      

        <div className="w-32 h-32 md:w-48 h-48 flex flex-col" onClick={props.openViewer}>
            <div className="w-full h-full overflow-hidden  rounded-lg">
                <img src={props.image} alt="menu" className="w-full h-full  rounded-lg transform  transition duration-500 hover:scale-110"/>
            </div>

           
        </div>
        </>
    )
}

export default PhotosCollection
