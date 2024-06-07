import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {Payment} from "./pages/Payment"
import {Navbar} from "./pages/Navbar"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
