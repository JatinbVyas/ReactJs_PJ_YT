import { useState } from "react";
import "./App.css";
import CreatePostCP from "./components/CreatePostCP";
import FooterCP from "./components/FooterCP";
import HeaderCP from "./components/HeaderCP";
import PostList from "./components/PostList";
import SidebarCP from "./components/SidebarCP";
import PostListProvider from "./store/Postliststore";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SidebarCP
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SidebarCP>
        <div className="content">
          <HeaderCP></HeaderCP>

          <Outlet />

          <FooterCP></FooterCP>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
