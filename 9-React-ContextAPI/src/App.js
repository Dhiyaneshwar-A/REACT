import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {Profile} from "./pages/Profile"
import { useState,createContext } from "react";
import {Navbar} from "./pages/Navbar"

export const AppContext=createContext()

function App() {
const [username,setusername]=useState("Dhiyanesh");
  return (
    <div className="App">
      <AppContext.Provider value={{username,setusername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home username={username}/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/profile" element={<Profile username={username} setusername={setusername}/>}></Route>
            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
