import Styled from 'styled-components';

const MenuWrapper =Styled.aside`
 //height: 92vh;
 position: fixed;
 margin-top:64px;
 height: 100vh;
    z-index: 999;
.opendoor{
    transform: translateX(0%);
    transition: transform 200ms ease-in;
}
    .closedoor {
  transform: translateX(-80%);
  width: calc(100%-20px);
 / transition: transform 200ms ease-in;
  /* transform: translateX(100%); */
}
.ant-layout-sider .ant-layout-sider-children .ant-menu .ant-menu-item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 15px !important;
}
.opendoor-cl{
   flex-direction:row;
}
.closedoor-cl{
    flex-direction:row-reverse !important;
}
.rowheight{
    height: inherit;
}
.linkinfo {
    position: relative;
    top: 4px;
}
.contentinfo{
    position: absolute;
    bottom: -7px;
    left: 34px;
}
.ant-menu-item a{
         color: rgb(101, 113, 123);
 }
 .ant-menu-item:hover{
         color:#0070ce;
         background-color: #D5E7F6;
    border-radius: 4px;
 }
    .ant-menu-item a:hover{
         color: #0070ce;
 }
 .ant-menu-item svg:hover{
    color:#8E9CAA;;
}
 
 .ant-menu-item.ant-menu-item-selected {
    background-color: #D5E7F6;
    color: #0070ce;
    border-radius: 4px;
}
.ant-menu .ant-menu-item.ant-menu-item-selected svg{
    color:#0070ce;
}
.ant-menu-item.ant-menu-item-selected a {
    color: #0070ce;
}
`;

export { MenuWrapper };