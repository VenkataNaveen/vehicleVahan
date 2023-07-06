import Styled from 'styled-components';


const PageHeaderStyle = Styled.div`
display: flex;
justify-content: space-between;
.group {display: flex;}
.headerstyle{
  border-radius: 2px;
    box-shadow: rgb(146 153 184 / 9%) 0px 2px 30px;
}
.title{
  display: block;
    float: left;
    margin-bottom: 0;
    padding-right: 12px;
    color: #3a3b3f;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
}
.subTitle{
  float: left;
  margin: 5px 0;
  margin-right: 12px;
  color: rgba(0,0,0,.45);
  font-size: 14px;
  line-height: 22px;
}
.searchBlock {
  width:400px;
  .ant-input-affix-wrapper{
    border-radius: 10px;
    height: 39px;
  }
  .ant-select-show-search.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    height: inherit;
    border-radius: 10px;
  }
  ..ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-inpu{
    font-size: 15px;
    color: #3a3b3f;
    height: 100%;
    font-weight: 400;
    font-family: sans-serif;
  }
  .ant-select{
    border-radius: 10px;
    height: 39px;
    width:inherit;
  }
}
`;

export { PageHeaderStyle };
