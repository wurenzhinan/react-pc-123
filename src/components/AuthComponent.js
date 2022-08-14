// 1.先判断token是否存在
// 2.如果存在 直接正常渲染
// 3.如果不存在 重定向到登录路由

// 高阶组件：把一个组件当作另一个组件的参数传入
// 然后通过一定的判断 返回新的数组
import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"
function AuthComponent ({ children }) {
  const isToken = getToken()
  if (isToken) {
    return (
      <>
        {children}
      </>
    )
  } else {
    // 重定向
    return <Navigate to="/login" replace />
  }
}

{/* <AuthComponent><Layout /></AuthComponent> */ }
//登录： <>{children}</>
// 未登录：<Navigate to="/login" replace />

export default AuthComponent
