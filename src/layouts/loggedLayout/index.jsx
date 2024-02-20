import { Button } from "antd";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from "react-router-dom";
import { LogoutButton } from "../../components";

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
  }));
  
const Index = () => {
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <h2 style={{color: 'white'}}>Artwork sharing platform</h2>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
                <LogoutButton />
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Outlet />
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Artwork sharing platform ©{new Date().getFullYear()} Created by VNK
            </Footer>
        </Layout>
    );
};

export default Index;
