import Styled from 'styled-components';
import { Modal } from 'antd';

const ModalStyledColord = () => `
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-footer button {
    background: #fff;
    color: #999;
    border: 1px solid #ffff;
  }
`;

const ModalStyled = Styled(Modal)`    
  ${() => type && ModalStyledColord()}
`;

export { ModalStyled, ModalStyledColord };
