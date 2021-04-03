import { useState } from "react";
import { useContext } from "react";
import { Layout } from 'antd';
import HamMenu from "../components/HamMenu"
import NavBar from "../components/NavBar"
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import AppShop from "../components/shopbag"
import { StoreContext } from "../store"



const { Header, Content, Footer } = Layout;

function Cart() {
    const { state: { page: { title, products } } } = useContext(StoreContext);
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <Layout className="container main-layout">
            <Layout className="bg-gray">
                <HamMenu
                    onClick={() => setIsOnTouch(!isOnTouch)}
                    isOnTouch={isOnTouch}
                />
            </Layout>
            <Layout className="bg-gray">
                <Header className="layout-header shoph">
                    <AppHeader title={title} />
                    <NavBar isOnTouch={isOnTouch} />

                </Header>
                <Content className="layout-shop">
                    <AppShop />
                </Content>
                <Footer className="layout-footer shopf">
                    <AppFooter />
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Cart;
