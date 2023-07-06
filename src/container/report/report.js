import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col, Radio, Table,Card, Calendar, DatePicker } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';

const Report =({options}) => {
   const dispatch = useDispatch();
   var elem=true;
  const [xseries,setXseries]=useState([])
  const [yseries,setYseries]=useState([])


    return (
 <Card >
 <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
 </Card>

    )
};

export default Report;