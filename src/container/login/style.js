import Styled from 'styled-components';

const LoginWrapper =Styled.div`
 height:100vh;
 width:100%;
  display: flex;
  h1,h5{
    color: rgb(0 0 0 / 47%);
  }
 .form-box{
  width:50%;
  display: flex;
    justify-content: center;
    align-items: center;
  .form-item{
    height: 80vh;
    width: 60vh;
    background: #fff;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .header{display: flex;
    flex-direction: column;
    align-items: flex-start;}
 }
 .form-info{
  display:flex;
  width:50%;
 }
.ant-modal-mask {
background-color: yellow;
}
/* .ant-form-item {
  width:100%;
  padding: 0 30px;
} */
.ant-input, .ant-input-affix-wrapper, .ant-input:focus, .ant-input-focused {
  border-color: RGB(23, 163, 160 , 0.2) !important;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  background: transparent;
  color: RGB(9, 9, 9 , 0.50) !important;
  font-size: 16px;
  padding-left: 0;
  box-shadow: none;
   
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #f1fafa inset !important;
    font-size: 16px;
}
a.forgot-pass-link {
  color: RGB(110, 110, 110, 0.5);
}
a:focus{
  color: #000 !important;
}
.ant-btn:focus{
  background:#35b0aa !important;
}
.ant-input-password {
  margin-bottom: 5px;
}
input:-webkit-autofill::first-line {
  font-size: 16px !important;
  color: RGB(9, 9, 9 , 0.50) !important;
}

 .ant-col-16 {
    max-width:100%
}
.ant-col-8 {
    max-width:100%;
}
.ant-form-item-label > label{
  color: rgba(0, 0, 0, 0.50);
  font-size: 13px;
    width: 100%;
    font-weight: 500;
}
.ant-form-item-row {
    flex-direction: column;
}
.signintxt{
  font-size: 13px;
    text-align: left;
    color: #fff;
    padding-left: 5%;
}
.formLogin {
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  width:350px;
  align-content: space-around;
  padding: 17px; */
}
.footerLogin {
  background: #F3FAFA;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #B1B4B5;
}
.signInBtn {
    text-align:right;
    align-self:end;
}
.err {
  margin: 4px 0 0 0;
  font-size: 13px;
  color: #e64646;
}
.ant-col-offset-8 {
    margin:0;
}
.loginspace {
  display: flex;
  flex-direction:column;
  width:300px;
}
.userspace {
  margin: 9px;
    width: 26px;
}
.items {
  display: flex;
  flex-direction:row;
}
.items .ant-form-item-control-input-content{
  display: flex;
  padding-left: 8px;
}
.items .ant-form-item-control-input-content img:first-child {
  margin-right: 10px;
} 
.ant-form-item-row{
  width:100%;
}

.forgot{
  text-align:right;
}
.error{
    color: rgb(255,0,0);  
    text-align: center;
  }
`;

export { LoginWrapper };
