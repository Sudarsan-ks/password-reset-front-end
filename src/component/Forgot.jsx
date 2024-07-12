import React from 'react'
import axios from 'axios';
import { API } from '../global';
import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';


export function Forgot() {

  const onFinish = async (values) => {
    try {
      await axios.post(`${API}/user/forgotPassword`, values)
      message.success("Email Sent Sucessfully")
    }
    catch (err) {
      message.error("Invalid Email ID")
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgotPage">
        <Form
          name="normal_forgot"
          className="forgot-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <label type="email"><b>Enter your registered Email ID:</b></label>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email to Reset!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="forgot-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}


