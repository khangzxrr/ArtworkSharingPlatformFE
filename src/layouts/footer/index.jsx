import { Layout } from "antd";
import React from "react"; 

const { Footer } = Layout; 

const Index = () => {
    <Layout>
        <Footer style={{ textAlign: 'center'}}>
        Artwork sharing platform ©{new Date().getFullYear()} Created by VNK
        </Footer> 
    </Layout>
}

export default Index;