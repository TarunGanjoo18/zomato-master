import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageViewer from 'react-simple-image-viewer';


// Components
import PhotosCollection from '../../restaurant/PhotosCollection'

// redux actions
import { getImage } from "../../../Redux/Reducer/Image/Image.action";

function Photos() {
    const [photos, setPhotos] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
  
    const reduxState = useSelector(
      (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (reduxState) {
        dispatch(getImage(reduxState?.photos)).then((data) => {
          const images = [];
          data.payload.image.images.map(({ location }) => images.push(location));
          setPhotos(images);
        });
      }
    }, []);
    const closeViewer = () => setIsMenuOpen(false);
  
    const openViewer = () => setIsMenuOpen(true);
  
    return (
        <>
           {isMenuOpen && (
        <ImageViewer
          src={ photos }
          currentIndex={ CurrentImg }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeViewer }
        />
      )}
      <div className="flex flex-wrap gap-5">

            {
                photos.map((photo)=>(
                    <PhotosCollection image={photo} openViewer={openViewer}/>
                    ))
                }
                </div>
        </>
    )
}

export default Photos
