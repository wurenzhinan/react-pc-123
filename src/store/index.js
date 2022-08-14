// 把所有的模块做统一处理
import ChannelStore from "./channel.Store"
import React from "react"
import LoginStore from "./login.Store"
import UserStore from "./user.Store"

// 导出一个统一的方法啊 useStore
class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
    this.channelStore = new ChannelStore()
    // ...可以继续添加
  }
}


// 实列化根
const rootStore = new RootStore()
// 导出useStore  context
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)


export { useStore }