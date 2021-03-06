import { useState } from "react";
import { Layout } from 'antd';
import HamMenu from "../components/HamMenu"
import NavBar from "../components/NavBar"
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function Product({ match }) {
   const product = products.find(
      x => x.id === match.params.productId
   );
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
            <Header className="layout-header">
               <AppHeader title="Product Detail" />
               <NavBar isOnTouch={isOnTouch} />

            </Header>
            <Content className="layout-content">
               <ProductDetail product={product} />
            </Content>
            <Footer className="layout-footer">
               <AppFooter />
            </Footer>
         </Layout>
      </Layout>
   );
}

export default Product;
