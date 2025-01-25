import {Routes, Route} from "react-router-dom";

import AddPackages from "./components/AddPackages.jsx";

import Send from "./components/Send.jsx";

import Add from "./components/Add.jsx"
import Renew from "./components/Renew.jsx";

import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SIdeBar.jsx";

import MemberView from "./components/MemberView.jsx";
import MembersList from "./components/MembersList.jsx";

import { SearchProvider } from "./utils/searchContent.jsx";
import PackageList from "./components/PackageList.jsx";

function App() {

  return (
      <SearchProvider>
          <div>
            <p className="text-2xl font-bold text-blue-500">Hello mom!</p>
              <SideBar />
              <NavBar /> 
          </div>
          <div className="navigation-btn-container"> 
              <Routes>
                  <Route path="/package" element={<PackageList/>}></Route>
                  <Route path="/package/add" element={<AddPackages/>} />
                  <Route path="/member" element={<MembersList/>} />
                  <Route path="/send" element={<Send/>} />
                  <Route path="/member/add" element={<Add/>} />
                  <Route path="/member/renew" element={<Renew/>} />
                  <Route path="/member/:id" element={<MemberView />} />
              </Routes> 
          </div>
      </SearchProvider>
  )
};

export default App;
