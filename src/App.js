import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer></Footer>

      </BrowserRouter>,
    </div>
  );
}

export default App;
