import logo from './logo.svg';
import './App.css';
import Navigation from './custom/Components/Navigation/Navigation';
import PageHome from './custom/Pages/PageHome';
import FooterMain from './custom/Components/Footer/FooterMain';

function App() {
  return <div className="">
  <Navigation />
  <div>
    <PageHome />
  </div>
  <FooterMain />  
  
</div>;
}

export default App;
