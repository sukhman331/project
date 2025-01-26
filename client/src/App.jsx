import {Routes, Route} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

    const queryClient = new QueryClient();

    return (
        <SearchProvider>
            <div className="flex flex-row h-screen">
                <SideBar />
                <div className="flex flex-col flex-1">
                    <NavBar /> 
                    <div className="flex-1 overflow-y-auto p-3.5 "> 
                        <QueryClientProvider client={queryClient}>
                            <Routes>
                                <Route path="/package" element={<PackageList/>}></Route>
                                <Route path="/package/add" element={<AddPackages/>} />
                                <Route path="/member" element={<MembersList/>} />
                                <Route path="/send" element={<Send/>} />
                                <Route path="/member/add" element={<Add/>} />
                                <Route path="/member/renew" element={<Renew/>} />
                                <Route path="/member/:id" element={<MemberView />} />
                            </Routes> 
                        </QueryClientProvider>
                    </div>
                </div>
            </div>
        </SearchProvider>
    )
};

export default App;
