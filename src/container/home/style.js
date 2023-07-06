import Styled from 'styled-components';

const Main = Styled.div`
    
    background-color: #fff;
    position:relative;
    .legend{
        position: absolute;
    z-index: 999;
    display: flex;
    flex-direction: column;
    right: 7px;
    background: #159e56;
    top: 10px;
    padding: 10px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    border-radius: 10px;
    .content {
        color: antiquewhite;
        font-weight: 600;
        letter-spacing: 1px;
    }
    }
    .map{
        height:500px;
    }
    `;
    export {
        Main}