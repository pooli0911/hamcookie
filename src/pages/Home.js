import { useState } from "react";
import { useContext } from "react";
import { Layout } from 'antd';
import HamMenu from "../components/HamMenu"
import NavBar from "../components/NavBar"
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { StoreContext } from "../store"



const { Header, Content, Footer } = Layout;



function Home() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  const { state: { page: { title, products } } } = useContext(StoreContext);
  return (
    <Layout className="container main-layout">
      <Layout>
        <Header className="layout-header ">
          <HamMenu
            onClick={() => setIsOnTouch(!isOnTouch)}
            isOnTouch={isOnTouch}
          />
          <AppHeader title="NORDIC NEST Shopping Cart" />
          <NavBar isOnTouch={isOnTouch} />
        </Header>
        <Content className="layout-content">
          <ProductList products={products} />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
