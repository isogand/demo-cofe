import "./Dashboard.css";
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Footer from './components/Footer/Footer'


function Dashboard() {
 
  return (  
    <Layout>
      <Products/>
      <Footer/>
    </Layout>
  );
}

export default Dashboard;
