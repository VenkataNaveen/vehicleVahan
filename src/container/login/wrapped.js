import React from 'react';
import { Row, Col } from 'antd';
import { LoginWrapper } from './style';

const AuthLayout = WraperContent => {
  return () => {
    return (
        <LoginWrapper >
        <div  className='form-box'>
            <WraperContent/>
            </div>
            <img src={require('../../static/login/smart.jpg')} alt="" className='form-info'/>
        
      </LoginWrapper>
    );
  };
};

export default AuthLayout;
