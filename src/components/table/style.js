import Styled from 'styled-components';
import { PageHeader, Table } from 'antd';

const TableStyle = Styled(Table)`
 .ant-table .ant-table-thead th {
    background-color: #fff;
}
.ant-table-container table > thead > tr th:first-child {
    border-left: 1px solid rgb(241, 242, 246);
    border-radius: 4px 0px 0px 4px !important;
}
.ant-table-container table > thead > tr th {
    font-weight: 600;
    letter-spacing:0.3px;
    color: #8e9caa;
    border-top: 1px solid rgb(241, 242, 246);
}
.ant-table .ant-table-tbody tr:hover td {
    background-color: rgb(248, 249, 251);
}
.an.t-table .ant-table-tbody tr td {
    color: #3a3b3f;
}
.ant-table .ant-table-tbody tr:nth-child(odd){
    margin: 0 0px 0 0;
  padding: 1px 26px 12px 24px;
  background-color: rgb(248, 249, 251);

}
.ant-table-tbody > tr > td {
    font-weight:600;
    letter-spacing:0.3px;
    border-bottom: 1px solid rgb(151, 151, 151);
    color: #3a3b3f;
}
.date-started, .date-finished {
    font-weight: 500;
}
.ant-pagination-item-active {
    background: #D5E7F6 !important;
}

.ant-pagination-item-active a {
    color: #1890ff !important;
}
.ant-pagination-item a{
    color: rgb(101,113,123);
}
   .based{
    width: 10px;
    /* width: 10rem; */
    height: 10px;
    border-radius: 50%;
    background: red;
    display: inline-block;
    margin-right:5px;
   }
   
   .based-unverified{
    background: yellow;
   }
   .based-active{
    background: green;
   }
   .based-rejected{
    background: red;
   }
   .based-blocked{
    background: black;
   }
   
   .validatoricon{
    text-align: center;
    background: no-repeat;
    border: none;
   }
`;

export { TableStyle };