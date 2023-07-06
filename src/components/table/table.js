import React from 'react';
import PropTypes from 'prop-types';
import { TableStyle } from './style';

const AntneleTable = (props) => {
 const {columns, dataSource,pagination,showHeader} =props;
    return <TableStyle
columns={columns}
 dataSource={dataSource}
 pagination={pagination}
 showHeader={showHeader}
 total={dataSource.length}
 showSizeChanger="false"
>

</TableStyle>
    
}

export default AntneleTable;