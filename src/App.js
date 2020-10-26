//导入第三方
import React, { memo } from 'react' 
import { renderRoutes } from 'react-router-config'
//导入功能类的：网络请求，actionCreators，utils
import routes from './router'

//导入组件
import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'
import {HashRouter} from 'react-router-dom'


export default memo(function App() {
  return (
    <HashRouter>
      <HYAppHeader />
      {renderRoutes(routes)}
      <HYAppFooter />
    </HashRouter>
  )
})

