import React, { memo } from 'react'
import { headersLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import{
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'

export default memo(function HYAppHeader() {

    //页面代码
    const showSelectItem = (item,index)=>{
        if(index<3){
        return (
            <NavLink to={item.link} exact>
              {item.title}
              <i className="sprite_01 icon"></i>
            </NavLink>
          )
        } else{
        return <a href={item.link}>{item.title}</a>
        }
    }





    //返回jsx
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01"></a>
                    <div className="select-list">
                        {
                            headersLinks.map((item,index)=>{
                                return(
                                    <div key={item.title} className='select-item'>
                                        {showSelectItem(item,index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>Right</HeaderRight>    
            </div>              

            <div className="divider"></div>
        </HeaderWrapper>
    )
})
// rmc 是快捷键
//<NavLink to='/'>发现音乐</NavLink>
//<NavLink to='/mine'>我的音乐</NavLink>
//<NavLink to='/friend'>我的朋友</NavLink> 
