import React,{useState} from 'react'

// Components
import ReviewModal from './ReviewModal'

function AddReviewCard() {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      if (!localStorage.zomatoUser) {
        return alert("Please sign in to post a review");
      }
  
      setIsOpen(true);
    };
  
  
   
    return (
        <>
        <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
                        <h3 className="text=xl font-medium">
                    Rate Your Experience For
                </h3>
              <div className="flex gap-4 items-center">
              <div className="flex gap-1 items-center">
                <input type="radio" name="review" id="dining"/>
                    <label htmlFor="dining">Dining</label>
                </div>

                <div className="flex gap-1 items-center">
                <input type="radio" name="review" id="delivery"/>
                    <label htmlFor="delivery">Delivery</label>
                </div>

              </div>
          
              <button onClick={openModal} className="text-red-400">Write A Review</button>
        </>
    )
}

export default AddReviewCard
