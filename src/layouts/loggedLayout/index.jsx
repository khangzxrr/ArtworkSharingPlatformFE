import { Avatar, Button } from "antd";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from "react-router-dom";
import { LogoutButton } from "../../components";
import { UserOutlined } from '@ant-design/icons';
import { isContainAdminRole, isContainCreatorRole, isContainUserRole, useAuthenticationStore } from "stores/authenticationStore";

const { Header, Content, Footer } = Layout;


const Index = () => {

    const account = useAuthenticationStore(state => state.account)

    const showRole = () => {
        if (isContainUserRole()) {
            return 'USER'
        }

        if (isContainCreatorRole()) {
            return 'CREATOR'
        }

        if (isContainAdminRole()) {
            return 'ADMIN'
        }

        return 'GUEST'
    }

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
                <h2 style={{ color: 'white' }}>Artwork sharing platform</h2>
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
                        <span><UserOutlined /> {account.login} - {showRole()}</span>
                        <Link to="/profile" />
                    </Menu.Item>
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
                </Menu>
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
