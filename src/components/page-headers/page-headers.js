import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PageHeaderStyle } from './style';
import Search from 'antd/lib/transfer/search';
import { AutoComplete } from 'antd';

const PageHeader = props => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] =useState('');
  const { title, subTitle, routes, buttons, ghost, bgColor, className, onSearch, showsearch,options, autocomplete } = props;
 const onSelect = (data, option) => {
  setSelectedOption(option);
  setInputValue(option.label);
  onSearch(data)
};
const onChange = (data, option) => {
  setInputValue(data);
  //setSelectedOption(option); // to remove selected option when user types  something wich doesn't match with any option
};



useEffect((()=>{
  if(options && options.length){
  setInputValue(options[0].label);
  onSearch(options[0].value);
  }
}),[options])


  return (
    <>
      <div
        style={{
          backgroundColor: bgColor || '#F4F5F7',
          padding: '20px',
          marginBottom: '10px'
        }}
        className='headerstyle'
      >
        <PageHeaderStyle>
          <div className='group'>
        <div className="title">{title}</div>
        <div className="subTitle">{subTitle}</div>
        </div>
        <div className='searchBlock'>
       { autocomplete && <AutoComplete
      onSelect={onSelect}
      placeholder="Search Institute"
      options={options}
      getOptionLabel={option => option.label}
      defaultActiveFirstOption={true}
      className='searchInput'
      value={inputValue}
      allowClear={true}
      onChange={onChange}
      filterOption={(inputValue, option) =>
        option.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />}
      {  showsearch && <Search  placeholder="Search"  className='searchInput' onChange={onSearch}/>
        } 
        </div>
        
        </PageHeaderStyle>
      </div>
    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bgColor: PropTypes.string,
  className: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  // eslint-disable-next-line react/forbid-prop-types
  buttons: PropTypes.array,
  ghost: PropTypes.bool,
};

export { PageHeader };
