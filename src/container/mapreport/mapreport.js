import React, { Fragment, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer,  } from 'react-leaflet'
import { Main } from './style';
import L from 'leaflet';
import "leaflet-marker-rotation";
import { Row,Col, Card } from 'antd';
const Mapreport=() =>{
    const [lat, setLat] = useState(22.899397);
    const [lon, setLon] = useState(89.508279);
    const [heading, setHeading] = useState(30);
  
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
      <Row className="map">
        <Col md={16}>
      <MapContainer className="map" center={[22.899397, 89.508279]} zoom={21}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[22.899397, 89.508279]}
          icon={defaultIcon}
          rotationOrigin="center"
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </Col>
      <Col md={8}>
        <Card className='map'></Card>
      </Col>
      </Row>
      </Main>
      
    );
}

export default Mapreport;