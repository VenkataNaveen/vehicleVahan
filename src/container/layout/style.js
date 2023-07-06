import Styled from 'styled-components';

const LayoutWrapper =Styled.section`
 
//sheight: 100vh;
background: #fff;
.headeradjust {
    
    color: #65717b;
    line-height: 64px;
    background: #fff;
    box-shadow: rgb(146 153 184 / 9%) 0px 2px 30px;
    z-index: 999;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
}
.lefthead{
    padding-left: 18px;
    display: flex;
    align-items: center;
}
.rowheight{
  //  height: inherit;
}
.mainsectionwithmenu {
    margin-left: 309px;
    margin-top: 70px;
    width: 100%;
    transform: translateX(0%);
    transition: transform 500ms ease-in;
}
.mainsectionwithoutmenu {
    margin-left: 75px;
    margin-top: 70px;
    width: 100%;
    transform: translateX(0%);
    transition: transform 500ms ease-in;
}
.imgscre {
    width: 12%;
    height: 22px;
}
.menuicon{
margin-right:10px;
}
.profile-pic{
    width: 42px;
    height: 42px;
    overflow: hidden;
    border-radius: 50%;
    border: 3px solid;
    position: relative;
    bottom: 5px;
}
.profile-span{
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.column-6 {
    display: flex;
    justify-content: center;
}
.img-span{
    height: 48px;
    position: absolute;
    /* top: -8px; */
    /* right: -6px; */
    bottom: -5px;
    right: -6px;
}
`;

export { LayoutWrapper };