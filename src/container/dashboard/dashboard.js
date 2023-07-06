import React, { Fragment, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer,  } from 'react-leaflet'
import { Main } from './style';
import L from 'leaflet';
import "leaflet-marker-rotation";
import { Card, Col, Row } from 'antd';
import Report from '../report/report';
import AntneleTable from '../../components/table/table';
const Dashboard=() =>{
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
  const optionsA ={
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Vehicle Report'
    },
    subtitle: {
        align: 'left',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share profit'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Browsers',
            colorByPoint: true,
            data: [
                {
                    name: 'TS09AP01',
                    y: 63.06,
                    drilldown: 'TS09AP01'
                },
                {
                    name: 'TS09AP02',
                    y: 19.84,
                    drilldown: 'TS09AP02'
                },
                {
                    name: 'TS09AP03',
                    y: 4.18,
                    drilldown: 'TS09AP03'
                },
                {
                    name: 'TS09AP04',
                    y: 4.12,
                    drilldown: 'TS09AP04'
                },
                {
                    name: 'TS09AP05',
                    y: 2.33,
                    drilldown: 'TS09AP05'
                },
                {
                    name: 'TS09AP06',
                    y: 0.45,
                    drilldown: 'TS09AP06'
                },
                {
                    name: 'TS09AP07',
                    y: 1.582,
                    drilldown: null
                }
            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [
            {
                name: 'TS09AP01',
                id: 'TS09AP01',
                data: [
                    [
                        'v65.0',
                        0.1
                    ],
                    [
                        'v64.0',
                        1.3
                    ],
                    [
                        'v63.0',
                        53.02
                    ],
                    [
                        'v62.0',
                        1.4
                    ],
                    [
                        'v61.0',
                        0.88
                    ],
                    [
                        'v60.0',
                        0.56
                    ],
                    [
                        'v59.0',
                        0.45
                    ],
                    [
                        'v58.0',
                        0.49
                    ],
                    [
                        'v57.0',
                        0.32
                    ],
                    [
                        'v56.0',
                        0.29
                    ],
                    [
                        'v55.0',
                        0.79
                    ],
                    [
                        'v54.0',
                        0.18
                    ],
                    [
                        'v51.0',
                        0.13
                    ],
                    [
                        'v49.0',
                        2.16
                    ],
                    [
                        'v48.0',
                        0.13
                    ],
                    [
                        'v47.0',
                        0.11
                    ],
                    [
                        'v43.0',
                        0.17
                    ],
                    [
                        'v29.0',
                        0.26
                    ]
                ]
            },
            {
                name: 'TS09AP03',
                id: 'TS09AP03',
                data: [
                    [
                        'v58.0',
                        1.02
                    ],
                    [
                        'v57.0',
                        7.36
                    ],
                    [
                        'v56.0',
                        0.35
                    ],
                    [
                        'v55.0',
                        0.11
                    ],
                    [
                        'v54.0',
                        0.1
                    ],
                    [
                        'v52.0',
                        0.95
                    ],
                    [
                        'v51.0',
                        0.15
                    ],
                    [
                        'v50.0',
                        0.1
                    ],
                    [
                        'v48.0',
                        0.31
                    ],
                    [
                        'v47.0',
                        0.12
                    ]
                ]
            },
            {
                name: 'TS09AP06',
                id: 'TS09AP06',
                data: [
                    [
                        'v11.0',
                        6.2
                    ],
                    [
                        'v10.0',
                        0.29
                    ],
                    [
                        'v9.0',
                        0.27
                    ],
                    [
                        'v8.0',
                        0.47
                    ]
                ]
            },
            {
                name: 'TS09AP02',
                id: 'TS09AP02',
                data: [
                    [
                        'v11.0',
                        3.39
                    ],
                    [
                        'v10.1',
                        0.96
                    ],
                    [
                        'v10.0',
                        0.36
                    ],
                    [
                        'v9.1',
                        0.54
                    ],
                    [
                        'v9.0',
                        0.13
                    ],
                    [
                        'v5.1',
                        0.2
                    ]
                ]
            },
            {
                name: 'TS09AP04',
                id: 'TS09AP04',
                data: [
                    [
                        'v16',
                        2.6
                    ],
                    [
                        'v15',
                        0.92
                    ],
                    [
                        'v14',
                        0.4
                    ],
                    [
                        'v13',
                        0.1
                    ]
                ]
            },
            {
                name: 'TS09AP05',
                id: 'TS09AP05',
                data: [
                    [
                        'v50.0',
                        0.96
                    ],
                    [
                        'v49.0',
                        0.82
                    ],
                    [
                        'v12.1',
                        0.14
                    ]
                ]
            }
        ]
    }
};
const optionsB ={
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: '',
        innerSize: '70%',
        data: [
            ['TS09AP01', 73.86],
            ['TS09AP04', 11.97],
            ['TS09AP03', 5.52],
            ['TS09AP02', 2.98],
            ['TS09AP06', 1.90],
            {
                name: 'TS09AP07',
                y: 3.77,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
};
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Vehicle Type',
        dataIndex: 'vehicleType',
        key: 'vehicleType'
    },
    {
        title: 'Time',
        dataIndex: 'Time',
        key: 'Time'
    },
    {
        title: 'Average Speed',
        dataIndex: 'avgSpeed',
        key: 'avgSpeed'
    },
    {
        title: 'Distance',
        dataIndex: 'distance',
        key: 'distance'
    }     
];
const dataSource=[
    {
      "name": "TS09AP01",
      "vehicleType": "Car",
      "avgSpeed": "388 km/hr",
      "distance": "609 km",
      "key": "63e1e9861a8c9ffc64431ff2",
      "Time": "26-01-2023"
    },
    {
      "name": "TS09AP02",
      "vehicleType": "Car",
      "avgSpeed": "804 km/hr",
      "distance": "727 km",
      "key": "63e1e986f16eb027463802a9",
      "Time": "24-01-2023"
    },
    {
      "name": "TS09AP03",
      "vehicleType": "Car",
      "avgSpeed": "992 km/hr",
      "distance": "321 km",
      "key": "63e1e986ac950caae44b0561",
      "Time": "08-01-2023"
    },
    {
      "name": "TS09AP04",
      "vehicleType": "Car",
      "avgSpeed": "816 km/hr",
      "distance": "510 km",
      "key": "63e1e9868540584ab7ba4967",
      "Time": "14-01-2023"
    },
    {
      "name": "TS09AP05",
      "vehicleType": "Car",
      "avgSpeed": "781 km/hr",
      "distance": "391 km",
      "key": "63e1e986e9ab2cf134ccae22",
      "Time": "25-01-2023"
    },
    {
      "name": "TS09AP06",
      "vehicleType": "Car",
      "avgSpeed": "247 km/hr",
      "distance": "180 km",
      "key": "63e1e98673f20f35f09ca3fb",
      "Time": "02-01-2023"
    },
    {
      "name": "TS09AP07",
      "vehicleType": "Car",
      "avgSpeed": "563 km/hr",
      "distance": "728 km",
      "key": "63e1e9868761df7e382e0bd5",
      "Time": "02-02-2023"
    },
    {
      "name": "TS09AP08",
      "vehicleType": "Car",
      "avgSpeed": "194 km/hr",
      "distance": "770 km",
      "key": "63e1e9869ac96cc4c1b5532e",
      "Time": "31-01-2023"
    },
    {
      "name": "TS09AP09",
      "vehicleType": "Car",
      "avgSpeed": "494 km/hr",
      "distance": "877 km",
      "key": "63e1e986233a2a17c96f48c8",
      "Time": "07-01-2023"
    },
    {
      "name": "TS09AP010",
      "vehicleType": "Car",
      "avgSpeed": "283 km/hr",
      "distance": "961 km",
      "key": "63e1e9868680308d6a1de4a0",
      "Time": "06-02-2023"
    },
    {
      "name": "TS09AP011",
      "vehicleType": "Car",
      "avgSpeed": "326 km/hr",
      "distance": "376 km",
      "key": "63e1e986cddc0acd0143682f",
      "Time": "03-01-2023"
    }
  ];
    useEffect(() => {
      const interval = setInterval(() => {
        myfun();
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, [lat]);
  
    const defaultIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png",
      iconSize: [20, 40],
      iconAnchor: [18, 18],
      popupAnchor: [0, -10],
      shadowAnchor: [10, 10]
    });
  
    const myfun = () => {
      setLat(lat + 0.00001);
      setLon(lon + 0.00001);
      setHeading(heading + 5);
      console.log("angle:" + heading);
    };
    return (
        <Main>
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
      <Row className='report'>
        <Col md={7} >
        <Card className='dashboard'>
            <Report options={optionsA}/>
           </Card> 
        </Col>
        <Col md={7} >
            <Card className='dashboard'>
                <AntneleTable columns={columns} dataSource={dataSource} showHeader={true} pagination={{pageSize: 4}}/>
            </Card>
        </Col>
        <Col md={7} >
        <Card className='dashboard'>
        <Report options={optionsB} />
        </Card>
        </Col>
      </Row>
      </Main>
    );
}

export default Dashboard;