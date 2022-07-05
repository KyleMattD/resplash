import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  FireOutlined,
  QuestionOutlined,
  CameraOutlined,
  CodepenOutlined,
  ExperimentOutlined,
  PictureOutlined,
  VideoCameraOutlined,
  SkinOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { Wallpapers } from "./components/Wallpapers";
import { Renders } from "./components/Renders";
import { Experimental } from "./components/Experimental";
import { CurrentEvents } from "./components/CurrentEvents";
import { Nature } from "./components/Nature";
import { Business } from "./components/Business";
import { Film } from "./components/Film";
import { Fashion } from "./components/Fashion";
import { Architecture } from "./components/Architecture";
import { Textures } from "./components/Textures";

// component to render all the other functions
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={!collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<QuestionOutlined />}>
              Current Events
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" icon={<PictureOutlined />}>
              Wallpapers
              <Link to="/wallpapers" />
            </Menu.Item>
            <Menu.Item key="3" icon={<CodepenOutlined />}>
              3D Renders
              <Link to="/3d" />
            </Menu.Item>
            <Menu.Item key="4" icon={<FireOutlined />}>
              Textures & Patterns
              <Link to="/textures" />
            </Menu.Item>
            <Menu.Item key="5" icon={<ExperimentOutlined />}>
              Experimental
              <Link to="/experimental" />
            </Menu.Item>
            <Menu.Item key="6" icon={<HomeOutlined />}>
              Architecture
              <Link to="/architecture" />
            </Menu.Item>
            <Menu.Item key="7" icon={<CameraOutlined />}>
              Nature
              <Link to="/nature" />
            </Menu.Item>
            <Menu.Item key="8" icon={<LaptopOutlined />}>
              Business & Work
              <Link to="/business" />
            </Menu.Item>
            <Menu.Item key="9" icon={<SkinOutlined />}>
              Fashion
              <Link to="/fashion" />
            </Menu.Item>
            <Menu.Item key="10" icon={<VideoCameraOutlined />}>
              Film
              <Link to="/film" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ textAlign: "center", color: "white", fontSize: 32 }}>
            Resplash
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/" element={<CurrentEvents />} />
              <Route path="/wallpapers" element={<Wallpapers />} />
              <Route path="/3d" element={<Renders />} />
              <Route path="/textures" element={<Textures />} />
              <Route path="/experimental" element={<Experimental />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/nature" element={<Nature />} />
              <Route path="/business" element={<Business />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/film" element={<Film />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>Kyle Drotsky 2022</Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
