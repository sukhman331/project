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
import ToolBar from "./components/ToolBar.jsx";
import { ModalProvider, useModalContext } from "./utils/modalContext.jsx";
import Modal from "./components/Modal.jsx";
import { SelectProvider } from "./utils/selectContext.jsx";


function App() {

    const queryClient = new QueryClient();

    return (
        <SearchProvider>
        <ModalProvider>
        <SelectProvider>
            <QueryClientProvider client={queryClient}>
                <div className="flex flex-row h-screen font-sans">
                    <SideBar />
                    <div className="flex flex-1 flex-col dark:bg-dark_bg shadow-2xl z-20">
                        <NavBar /> 
                        <ToolBar />
                        <Modal />
                        <div className="flex-1 flex flex-col items-center overflow-y-auto p-4 "> 
                            <Routes>
                                <Route path="/package" element={<PackageList/>}></Route>
                                <Route path="/member" element={<MembersList/>} />
                                <Route path="/send" element={<Send/>} />
                                <Route path="/member/:id" element={<MemberView />} />
                            </Routes> 
                        </div>
                    </div>
                </div>
            </QueryClientProvider>
        </SelectProvider>
        </ModalProvider>
        </SearchProvider>
    )
};

export default App;
