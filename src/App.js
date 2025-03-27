
import React from "react";
import Heropage from './pages/Heropage';
import './App.css';
import Card from './pages/Card';
import Cardpage from "./components/Cardpage";
import Form from './pages/Form';
import Footer from "./pages/Footer";
import Content from "./pages/Content";

const App =() =>{
  return(
    <div>
      <Heropage/>
      <Cardpage/>
      <Content/>
    <Card/>
    <Form/>
    <Footer/>
    </div>
  )
}
export default App;
