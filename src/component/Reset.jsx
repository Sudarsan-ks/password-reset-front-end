import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { LockOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { API } from '../global';
import axios from 'axios';

export function Reset() {

  const navigate = useNavigate()
  const { token } = useParams()
  const handlereset = async (values) => {
    try {
      const res = await axios.post(`${API}/user/resetPassword/${token}`, values)
      message.success("Password Reseted Successfully")
      navigate("/")
    }
    catch (err) {
      if (err.response && err.res.data.message === "Token has expired") {
        alert("The reset link has expired. Please request a new password reset.");
      } else {
        console.error("Error resetting password:", err);
        message.error("Error resetting password");
      }
    }
  };

  return (
    <div className="reset-container">
      <div className="resetPage">
        <Form
          name="normal_reset"
          className="reset-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handlereset}
        >
          <label type="password"><b>New Password:</b></label>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your New Password to Reset!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="New Password"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="reset-form-button">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}


