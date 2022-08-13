import { Card, Form, Input, Checkbox, Button } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { useStore } from '@/store'
function Login () {
  const { loginStore } = useStore()
  const onFinish = (values) => {
    console.log('Success:', values)
    // value:放置的是所有表单项中用户输入的内容
    // todo:登录
    loginStore.getToken({
      mobile: values.usename,
      code: values.password
    })
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="login">
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt="" />
        {/* 登录表单 */}
        {/* 子项用到的触发事件  需要在form中都声明一下 */}
        <Form
          initialValues={{ remember: true }}
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true, message: '请输入手机号'
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true, message: '请输入密码'
              },
              {
                len: 6, message: '密码为6个字符', validateTrigger: 'onBlur'
              },
            ]}
          >
            <Input.Password size="large" placeholder='请输入密码' />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div >
  )
}
export default Login