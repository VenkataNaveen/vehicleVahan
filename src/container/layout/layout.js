
import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import MenuSidebar from '../menu/menu';
import {Row,Col, Dropdown, Modal} from 'antd';
import { LayoutWrapper } from './style';

import propTypes from 'prop-types';

import FeatherIcon from 'feather-icons-react';

 

const Layout= ({match} ) => {
    const [menuicon,setMenuicon]= useState({alignmentIcon:"align-right",
  contentClass:'mainsectionwithoutmenu'})
    const handleMenu = () => {
       if(menuicon.alignmentIcon==="align-right"){
    
        setMenuicon({alignmentIcon:"align-left",
        contentClass:'mainsectionwithmenu'})
       } else {
        setMenuicon({alignmentIcon:"align-right",
        contentClass:'mainsectionwithoutmenu'})
       }
      
    }
      
    return (
        <LayoutWrapper>
            <Row className="headeradjust">
            <Col md={18} className='lefthead'>
            <FeatherIcon size={30} icon={menuicon.alignmentIcon} className='menuicon' onClick={handleMenu} />
            <img src={require('../../static/header/logo.jpg')} alt="" className='imgscre'/>
          </Col>
          <Col md={4} className='column-6'>
           <span>
           <FeatherIcon icon="bell" size={20} />
           </span>
           <span className='profile-span'>
           <div className='profile-pic'>
           </div>
           </span>
           </Col>
            </Row>
        <Row className='rowheight'>
            <Col md={6}>
            <MenuSidebar alignmentIcon={menuicon.alignmentIcon}>
        </MenuSidebar>
            </Col>
            <Col md={30} className={menuicon.contentClass}>
              <Outlet />
           {/* <Institue /> */}
           {/* <Dashboard /> */}
            </Col>
        </Row>
        </LayoutWrapper>
    )
}
Layout.propTypes = {
    match: propTypes.object,
  };
export default Layout;