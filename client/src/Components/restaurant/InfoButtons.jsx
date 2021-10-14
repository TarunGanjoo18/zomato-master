import React from 'react'
import classNames from 'classnames';
import { TiStarOutline } from "react-icons/ti";
function InfoButtons(props) {
    return (
        <>
        
<button className={classNames(" flex items-center gap-3  border border-red-400 px-4 py-2 rounded-lg",
{
"text-white bg-red-400" : props.isActive,
})}>
{props.children}
</button>

        </>
    )
}

export default InfoButtons
