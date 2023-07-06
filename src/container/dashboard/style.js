import Styled from 'styled-components';

const Main = Styled.div`
    
    background-color: #fff;
    .map{
        height:270px;
    }
    .report{
        margin-top:10px;
        height:220px;
        display:flex;
        justify-content:space-between;
    }
    .dashboard{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        .ant-table table{ 
            tr{
            font-size: 8px;
        }
        tbody{
            font-size: 6px;
        }
    }
    }
    `;
    export {
        Main}