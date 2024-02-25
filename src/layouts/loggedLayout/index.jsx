import { Button } from "antd";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from "react-router-dom";
import { LogoutButton, PostButton } from "../../components";

const { Header, Content} = Layout;


const items = [
    {
        key: 'profile',
        label: 'profile'
    },
    {
        key: 'artworks',
        label: 'artworks'
    },
    {
        key: 'requests',
        label: 'requests'
    }, 
    {
        key: 'auction',
        label: 'auction'
    }
]

const Index = () => {
    return (
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "white" }}>Artwork sharing platform</h2>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{
              paddingLeft: 15,
              flex: 1,
              minWidth: 0,
            }}
          >
            <Menu.Item>
              <span>Profile</span>
              <Link to="/profile" />
            </Menu.Item>
            <Menu.Item>
              <span>Requests</span>
              <Link to="/requests" />
            </Menu.Item>
            <Menu.Item>
              <span>Artworks</span>
              <Link to="/artworks" />
            </Menu.Item>
            <Menu.Item>
              <span>Auction</span>
              <Link to="/auction" />
            </Menu.Item>
          </Menu>
          <PostButton />
          <LogoutButton />
        </Header>
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    );
};

export default Index;
