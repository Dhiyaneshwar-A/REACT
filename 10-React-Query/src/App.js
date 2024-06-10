import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import {Profile} from "./pages/Profile"
import { useState,createContext } from "react";
import {Navbar} from "./pages/Navbar"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
export const AppContext=createContext()

function App() {
const client = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus:false //switching window wont change data
  }
}});
const [username,setusername]=useState("Dhiyanesh");
  return (
    <div className="App">
      <AppContext.Provider value={{username,setusername}}>
        <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home username={username}/>}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/profile" element={<Profile username={username} setusername={setusername}/>}></Route>
            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
        </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
