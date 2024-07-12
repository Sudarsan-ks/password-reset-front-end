import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { API } from "../global"
import axios from "axios"
import { useNavigate } from "react-router-dom";


export function Login() {
    const navigate = useNavigate()
    const handlelogin = async (values) => {
        try {
            await axios.post(`${API}/user/login`, values)
            message.success("Login Successfully")
            navigate("/display")
        }
        catch (err) {
            message.error("Invalid credential")
        }
    };

    return (
        <div className="login-container">
            <div className='LoginPage' >
                <div className="loginHead">
                    <p>HI, WELCOME</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handlelogin}
                >
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
                        <a className="login-form-forgot" href="" onClick={() => navigate("/forgotPassword")} >
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <a href="" onClick={() => navigate("/register")} >register now!</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}