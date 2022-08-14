import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom"
import { history } from "./utils/history"
import Login from "@/pages/Login"
import AuthComponent from "./components/AuthComponent"
import './App.css'
import Article from "./pages/Article"
import Publish from "./pages/Publish"
import Home from "./pages/Home"
import GeekLayout from "@/pages/Layout"



function App () {
  return (
    // 路由配置
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          <Route path="/" element={
            <AuthComponent>
              <GeekLayout />
            </AuthComponent>
          }>
            <Route index element={<Home />}></Route>
            <Route path="article" element={<Article />}></Route>
            <Route path="publish" element={<Publish />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  )
}

export default App
