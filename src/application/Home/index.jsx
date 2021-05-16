//src/appliction/Home/index.js
import React from 'react';
import { renderRoutes } from "react-router-config";
import {
  Top,
  Tab,
  TabItem,
} from './style';
import { NavLink } from 'react-router-dom';// 利用 NavLink 组件进行路由跳转
import './home.css'

function Home (props){
  const { route } = props;

  return (
    <div>
      <Top>
        <i className="iconfont icon-menu"></i>
        <span className="title">Web App</span>
        <i className="iconfont icon-magnifier"></i>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span > 推荐 </span></TabItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TabItem><span > 歌手 </span></TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem><span > 排行榜 </span></TabItem></NavLink>
      </Tab>
      { renderRoutes (route.routes) }
    </div>
  );
}
 
export default React.memo (Home);
