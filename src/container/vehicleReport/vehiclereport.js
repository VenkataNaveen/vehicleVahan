import { Card, PageHeader } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import AntneleTable from '../../components/table/table';
import { Main } from './style';
const VehicleReport=() =>{
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Vehicle Type',
            dataIndex: 'vehicleType',
            key: 'username'
        },
        {
            title: 'Departure',
            dataIndex: 'departure',
            key: 'Departure'
        },
        {
            title: 'Departure Time',
            dataIndex: 'departureTime',
            key: 'Departuretime'
        },
        {
            title: 'Arrival',
            dataIndex: 'arrival',
            key: 'arrival'
        },
        {
            title: 'Arrival Time',
            dataIndex: 'arrivalTime',
            key: 'arivaltime'
        },
        {
            title: 'Speed',
            dataIndex: 'speed',
            key: 'speed'
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
          "departure": "555 Coffey Street, Hayes, Arkansas, 7571",
          "departureTime": "18-01-2023",
          "arrival": "865 Glenwood Road, Rossmore, Georgia, 4184",
          "arrivalTime": "04-01-2023",
          "speed": "185 km/hr",
          "distance": "279 km",
          "key": "63e1e6f3bddd165790273110"
        },
        {
          "name": "TS09AP02",
          "vehicleType": "Car",
          "departure": "611 Chester Court, Allensworth, Texas, 4587",
          "departureTime": "20-01-2023",
          "arrival": "311 Llama Court, Frierson, California, 4550",
          "arrivalTime": "26-01-2023",
          "speed": "791 km/hr",
          "distance": "969 km",
          "key": "63e1e6f3ffd26b107fcc2232"
        },
        {
          "name": "Marlene Howard",
          "vehicleType": "Car",
          "departure": "422 Middagh Street, Bakersville, Guam, 5470",
          "departureTime": "30-01-2023",
          "arrival": "557 Harkness Avenue, Mayfair, Oklahoma, 8397",
          "arrivalTime": "17-01-2023",
          "speed": "559 km/hr",
          "distance": "393 km",
          "key": "63e1e6f36a1e1bc222937689"
        },
        {
          "name": "TS09AP03",
          "vehicleType": "Car",
          "departure": "962 Harwood Place, Spokane, Michigan, 9842",
          "departureTime": "03-02-2023",
          "arrival": "790 Boynton Place, Singer, Wisconsin, 3244",
          "arrivalTime": "08-01-2023",
          "speed": "692 km/hr",
          "distance": "241 km",
          "key": "63e1e6f30f0149cb91914ffe"
        },
        {
          "name": "TS09AP04",
          "vehicleType": "Car",
          "departure": "975 Bay Parkway, Spelter, North Dakota, 9801",
          "departureTime": "01-01-2023",
          "arrival": "344 Love Lane, Coultervillle, Louisiana, 2409",
          "arrivalTime": "24-01-2023",
          "speed": "608 km/hr",
          "distance": "978 km",
          "key": "63e1e6f33512d825cdd18944"
        },
        {
          "name": "TS09AP05",
          "vehicleType": "Car",
          "departure": "301 Johnson Avenue, Cobbtown, Marshall Islands, 3159",
          "departureTime": "31-01-2023",
          "arrival": "758 Keen Court, Fannett, New York, 8895",
          "arrivalTime": "19-01-2023",
          "speed": "605 km/hr",
          "distance": "546 km",
          "key": "63e1e6f39d9471d4f8ca13fe"
        },
        {
          "name": "TS09AP06",
          "vehicleType": "Car",
          "departure": "376 Crown Street, Zeba, American Samoa, 104",
          "departureTime": "28-01-2023",
          "arrival": "109 Woodrow Court, Savannah, District Of Columbia, 3507",
          "arrivalTime": "10-01-2023",
          "speed": "561 km/hr",
          "distance": "187 km",
          "key": "63e1e6f37e522b02ddc61360"
        },
        {
          "name": "TS09AP07",
          "vehicleType": "Car",
          "departure": "454 Linden Street, Gloucester, Oregon, 5364",
          "departureTime": "24-01-2023",
          "arrival": "215 Garden Street, Marshall, Rhode Island, 6602",
          "arrivalTime": "07-01-2023",
          "speed": "393 km/hr",
          "distance": "665 km",
          "key": "63e1e6f3910350a52c115be0"
        },
        {
          "name": "TS09AP078",
          "vehicleType": "Car",
          "departure": "611 Hunterfly Place, Monument, Colorado, 3318",
          "departureTime": "23-01-2023",
          "arrival": "508 Bartlett Place, Dana, Indiana, 9546",
          "arrivalTime": "03-01-2023",
          "speed": "528 km/hr",
          "distance": "803 km",
          "key": "63e1e6f312ffbd79e2343e3b"
        },
        {
          "name": "TS09AP079",
          "vehicleType": "Car",
          "departure": "713 Hyman Court, Coloma, Alaska, 6612",
          "departureTime": "10-01-2023",
          "arrival": "264 Allen Avenue, Caroline, Arizona, 3300",
          "arrivalTime": "17-01-2023",
          "speed": "810 km/hr",
          "distance": "515 km",
          "key": "63e1e6f3cb1c71152b21a0e0"
        },
        {
          "name": "TS09AP071",
          "vehicleType": "Car",
          "departure": "356 Clymer Street, Allentown, Kansas, 6546",
          "departureTime": "29-01-2023",
          "arrival": "529 Ferry Place, Bentonville, Montana, 6296",
          "arrivalTime": "28-01-2023",
          "speed": "124 km/hr",
          "distance": "488 km",
          "key": "63e1e6f33763a4ef69ea976c"
        }
      ];
    return <Main>
        <Card>
        <PageHeader
          ghost
          title= 'Vehicles'
          subTitle={<> {dataSource.length} {' vehicle'}</>}
          showsearch={false}
          autocomplete={false}
        /> 
            <AntneleTable columns={columns} dataSource={dataSource} showHeader={true} pagination={true} />
        </Card>
    </Main>
}

export default VehicleReport;