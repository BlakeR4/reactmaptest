import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import trails from "./../data/trail_lines.json";
import 'leaflet/dist/leaflet.css';

class Mymap extends Component{
state = { }

render(){
    return (<div><h1 style= {{textAlign: "center"}}>Test Map</h1>
    <MapContainer center={[39.629524, -79.955894]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
</MapContainer>
    
    
    
    
    </div>);
}

}

export default Mymap;