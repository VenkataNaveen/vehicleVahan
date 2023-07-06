import React, { Fragment, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, } from 'react-leaflet'
import { Main } from './style';
import L from 'leaflet';
import "leaflet-marker-rotation";
const Home = () => {
  const [lat, setLat] = useState(22.899397);
  const [lon, setLon] = useState(89.508279);
  const [heading, setHeading] = useState(30);
  var green=0,red=0,yellow=0;
  const returnicon=(color)=>{
    const item= {
      iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
      iconSize: [20, 40],
      iconAnchor: [18, 18],
      popupAnchor: [0, -10],
      shadowAnchor: [10, 10]
    };
    var img=''
    if(color==='red'){
   img= require('../../static/icons/redMarker.png');
   red++
    }
    if(color==='green'){
      img= require('../../static/icons/greenMarker.png');
      green++;
    }
    if(color==='yellow'){
      img= require('../../static/icons/yellow.jpg');
      yellow++;
    }
    item['iconUrl']=img;
    return  L.icon(item)
  }
  const geojsonData =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": { "type": "Point", "coordinates": [20.462521, 85.882988] },
        "properties": { "color": "green" }
      },{
        "type": "Feature",
        "geometry": { "type": "Point", "coordinates": [20.48470386969508, 85.84699600231762] },
        "properties": { "color": "red" }
      },{
        "type": "Feature",
        "geometry": { "type": "Point", "coordinates": [20.474733543836823, 85.8397862244856] },
        "properties": { "color": "yellow" }
      },{
        "type": "Feature",
        "geometry": { "type": "Point", "coordinates": [20.456006337206514, 85.91753840446472] },
        "properties": { "color": "green" }
      },{
        "type": "Feature",
        "geometry": { "type": "Point", "coordinates": [20.45535198904064, 85.91319556984057] },
        "properties": { "color": "red" }
      }]
  }
  const Markerdata=[]
  geojsonData.features.map(element => {
    element['icon']=returnicon(element.properties.color);
   return Markerdata.push(element)
  });

  useEffect(() => {
    // const interval = setInterval(() => {
    //   myfun();
    // }, 1000);
    // return () => {
    //   clearInterval(interval);
    // };
  }, [lat]);

  const defaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
    iconSize: [20, 40],
    iconAnchor: [18, 18],
    popupAnchor: [0, -10],
    shadowAnchor: [10, 10]
  });

 

  return (
    <Main>
      <div className='legend'>
      <span className='content'>  Total Vehicles: {geojsonData.features.length}</span>
      <span className='content'>  Total Active Vehicles: {green}</span>
      <span className='content'>  Total Vehicles Stop: {yellow}</span>
      <span className='content'>  Total InActive Vehicles: {red}</span>  
      </div>
      <MapContainer className="map" center={[20.462521, 85.882988]} zoom={12}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          Markerdata.map((data,index)=>{
            return (
            <>
             <Marker
          position={data.geometry.coordinates}
          icon={data.icon}
          
          key={index}
          rotationOrigin="center"
        >
         <Popup>
            {data.properties.color}
          </Popup>
          </Marker>
          </>)
           
          })
        }
       
      </MapContainer>
    </Main>
  );
}

export default Home;