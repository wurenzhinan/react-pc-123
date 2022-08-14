// login module
import { getToken, http, setToken, removeToken } from '@/utils'
import { makeAutoObservable } from 'mobx'
class LoginStore {
  // 初始化（刷新）时，回执行，判断是否有token，防止直接令token等于''
  token = getToken() || ''
  constructor() {
    // 响应式
    makeAutoObservable(this)
  }
  getToken = async ({ mobile, code }) => {
    // 调用登录接口
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    // 存入token
    console.log(res.data)
    this.token = res.data.token
    // 存入ls
    setToken(this.token)
  }
  // 退出登录
  loginOut = () => {
    removeToken(this.token)
  }

}

export default LoginStore