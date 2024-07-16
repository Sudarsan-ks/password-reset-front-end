import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API } from '../global';
import { LockOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';



export function Register() {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleregister = async (values) => {
    setLoading(true)
    try {
      await axios.post(`${API}/user/register`, values)
      message.success("Registered Successfully")
      navigate("/")
    }
    catch (err) {
      message.error("This Email already registered");
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <div className="regiter-container">
      <div className='registerPage' >
        <div className="registerHead">
          <p><b>User Registration</b></p>
        </div>
        <Form
          name="normal_register"
          className="register-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleregister}
        >
          <label type="name"><b>Name:</b></label>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <label type="phone"><b>Phone Number:</b></label>
          <Form.Item
            name="phonenumber"
            rules={[
              {
                required: true,
                message: 'Please input your PhoneNumber!',
              },
            ]}
          >
            <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone" />
          </Form.Item>
          <label type="email"><b>Email:</b></label>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <label type="password"><b>Password:</b></label>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="register-form-button" loading={loading} >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

