import "./App.css";
import CreatePostCP from "./components/CreatePostCP";
import FooterCP from "./components/FooterCP";
import HeaderCP from "./components/HeaderCP";
import PostList from "./components/PostList";
import SidebarCP from "./components/SidebarCP";

function App() {
  return (
    <>
      <div className="app-container">
        <SidebarCP></SidebarCP>
        <div className="content">
          <HeaderCP></HeaderCP>
          <CreatePostCP></CreatePostCP>
          <PostList></PostList>
          <FooterCP></FooterCP>
        </div>
      </div>
    </>
  );
}

export default App;
