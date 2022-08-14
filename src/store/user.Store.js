import { http } from '@/utils'
import { makeAutoObservable } from 'mobx'

class UserStore {
  useInfo = {}
  constructor() {
    makeAutoObservable(this)
  }
  getUserInfo = async () => {
    // 调用接口获取数据
    const res = await http.get('/user/profile')
    this.useInfo = res.data
  }
}
export default UserStore