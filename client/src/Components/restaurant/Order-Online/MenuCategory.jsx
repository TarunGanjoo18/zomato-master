import React from 'react'
import classNames from 'classnames'

function MenuCategory(props) {
    return (
        <>
            <div 
            className={classNames({" text-red-400 py-2 px-1 bg-red-50 border-r-4 border-red-400" : props.isActive})}  
           
             >   
                <h3  onClick={props.onClickHandler}
            id={props.name}>
                 {props.name} ({props.items.length})
                 </h3>
            </div>
        </>
    )
}

export default MenuCategory
