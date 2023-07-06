import { Button, Checkbox, Form, Input, Spin } from 'antd';
import React , { useState }from 'react';
import { LoginWrapper} from './style';
import { NavLink, useRouteMatch,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';;
const Login = () =>{

  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState({ isError: false, message: "" });
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const handleSubmit =() =>{
    localStorage.setItem("islogged",true);
  }

  const navigateScreen = async(res)=> {
    navigate("/layout/home");
  }

    return (
  
      <div className='form-item'>
        <div className='header'> <h1>Welcome to Regeon</h1>
       <h5>create your account by filling the form below</h5></div>
        <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      layout="vertical"
      autoComplete="off"
      className="formLogin"
      name="login"
      form={form}
      onFinish={handleSubmit}
    >
      
      <Form.Item
      
        name="username"
        onChange={e => setUsername(e.target.value)}
        rules={[{  message: 'Please input your username!' }]}
        className="items"
      >
        {/* <img src={require('../../static/img/username.png')} alt="" className='userspace'/> */}
        <Input placeholder='Email'/>
      </Form.Item>

      <Form.Item
        name="password"
        onChange={e => setPassword(e.target.value)}
        rules={[{  message: 'Please input your password!' }]}
        className="items"
      >
        {/* <img src={require('../../static/img/pwd.png')} alt="" className='userspace'/> */}
        <Input.Password placeholder='Password'/>
      </Form.Item>
{isLoading?
( <Spin />):(
<div className='error'>
{error.message}
</div>
)
  
}


      
    </Form>
    <Button className="btn-signin signInBtn" htmlType="submit" type="primary" size="large" onClick={handleSubmit}>
         LOGIN
        </Button>
        </div>
     

    )
}
export default Login;