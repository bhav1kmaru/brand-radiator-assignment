
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <SideBar />
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
