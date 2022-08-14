import './index.scss'
// 思路：1.看官方文档 把echarts加入项目
// 如何在react获取dom节点 ->useRef
// 在什么地方获取dom节点 ->useEffect(执行时机在dom执行之后)
// 2.不抽离定制化参数 先把最小化的demo跑起来
// 3.按照需求，哪些参数需要自定义 抽象出来
import Bar from '@/components/Bar'
function Home () {
  return (
    <div>
      {/* 渲染Bar组件 */}
      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        yData={[50, 60, 70]}
        title='三大框架满意度'
      />
      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        yData={[50, 60, 70]}
        title='三大框架使用度'
      />
    </div>
  )
}

export default Home