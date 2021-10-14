import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {BiCopy} from "react-icons/bi"
import {FaDirections} from "react-icons/fa"


function Mapview(props) {
 
    return (
        <>
            
<div>
<h4 className="text-xl font-medium "> Call</h4>
<h5 className="text-red-400 font-medium">{props.phno}</h5>
</div>

<div >
<h4 className="text-xl font-medium "> Direction</h4>
<div className="w-full h-48">

<MapContainer center={props.mapLocation} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={props.mapLocation}>
    <Popup>
   {props.title}
    </Popup>
  </Marker>
</MapContainer>
</div>

</div>
<p>{props.address}</p>

<div className=" my-1 flex items-center gap-3">
<button className="flex items-center gap-3 px-3 py-2 text-gray-700 border rounded-lg border-gray-400"><BiCopy/> Copy  </button>
<button className="flex items-center gap-3 px-3 py-2 text-gray-700 border rounded-lg border-gray-400"><span className="text-red-600"><FaDirections/></span>Directions  </button>
</div>

        </>
    )
}

export default Mapview
