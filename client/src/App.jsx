import { Router, Routes, Route} from "react-router-dom";

import Settings from "./pages/Settings.jsx";
import Home from "./pages/Home.jsx";
import Send from "./pages/Send.jsx";
import Members from "./pages/Members.jsx";
import Manage from "./pages/Manage.jsx";

import Add from "./components/Add.jsx"
import Renew from "./components/Renew.jsx";

import NavBar from "./pages/NavBar.jsx";

import MemberView from "./components/MemberView.jsx";

function App() {

  return (
    <>
      <div>
        <NavBar/> 
      </div>
      <div className="navigation-btn-container"> 
        <Routes>
          <Route path="*" element={<Home/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/members" element={<Members/>} />
          <Route path="/send" element={<Send/>} />
          <Route path="/manage" element={<Manage/>} />
          <Route path="/manage/add" element={<Add/>} />
          <Route path="/manage/renew" element={<Renew/>} />
          <Route path="/member/:id" element={<MemberView />} />
        </Routes> 
      </div>
    </>
  )
};

export default App;
