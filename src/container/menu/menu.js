import { Menu, Modal } from 'antd';
import React, { useState, Fragment,useEffect } from 'react';
import { NavLink, useRouteMatch,useNavigate, useLocation } from 'react-router-dom';
import { MenuWrapper } from './style';
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux';
// import FeatherIcon from 'feather-icons-react';

// import type { MenuProps } from 'antd';

// type MenuItem = Required<MenuProps>['items'][number];

const { SubMenu } = Menu;
const items = [
  {
    label:"Home",
    key:'1',
    icon:'home',
    navigate:'home'
  },
  {
    label:"Dashboard",
    key:'2',
    icon:'list',
    navigate:'dashboard'
  },
  {
    label:"Report",
    key:'3',
    icon:'check-square',
    navigate:'vehiclereport'
  },
  {
    label:"Details",
    key:'4',
    icon:'crop',
    navigate:'mapreport'
  },
  {
    label:"Antnele Support",
    key:'5',
    icon:'message-circle',
    navigate:'support'
  }
]
const MenuSidebar = ( {alignmentIcon})=>{
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [showMenu,setShowMenu]=useState("opendoor");
   // const [defaultKey,setDefaultKey]=useState("");
    const item= items.find(elem => elem.navigate ===location.pathname.split("/layout/")[1] );
    const [defaultKey,setDefaultKey]=useState(item.key);
   
    const logout = ()=>{

    }

      const addTransition = ()=>{
        if(showMenu !=='opendoor'){
          setShowMenu("opendoor")
        }else {
          setShowMenu("closedoor")
        }
      }
    return (
        <MenuWrapper>
        {/* <Menu   mode="vertical" 
        items={items}
        defaultOpenKeys={['1']}
        defaultSelectedKeys={['1']}
        style={{ width: 300,height:'100%' }}
         onClick={onClick} className={alignmentIcon=='align-left'?'opendoor':'closedoor'}>
        </Menu> */}
          <Menu
          className={alignmentIcon=='align-left'?'opendoor':'closedoor'}
         defaultOpenKeys={[defaultKey]}
         defaultSelectedKeys={[defaultKey]}
        
        style={{ width: 300,height:'100%',padding:'10px' }}
        mode="inline"
      > 
       {items.map((item, buttonIndex) =>{
       return <>
            {
              
              <Menu.Item key={item.key} title={item.label}
              className={alignmentIcon=='align-left'?'opendoor-cl':'closedoor-cl'}
               icon={<FeatherIcon icon={item.icon} key={buttonIndex + "menu"}></FeatherIcon>}>
              <NavLink to={item.navigate} key={buttonIndex + "NavLink"}>
                {item.label}
                </NavLink>
              </Menu.Item>
            }

        </>
})

      }
      {/* <Menu.Item key={7} title={'Log out'} onClick={onClick}
              className={alignmentIcon=='align-left'?'opendoor-cl':'closedoor-cl'}
               icon={<FeatherIcon icon={'log-out'} key={"7menu"}></FeatherIcon>}>
              <NavLink key={"7NavLink"} >
                Log Out
                </NavLink>
              </Menu.Item> */}
      </Menu>
        </MenuWrapper>
    )
}
 export default MenuSidebar;