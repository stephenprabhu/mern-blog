import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./components/articles/Articles";
import Footer from "./components/layout/Footer/Footer";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import WelcomeBanner from "./components/layout/WelcomeBanner/WelcomeBanner";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import NavProvider from "./store/NavProvider";
import ArticlePage from "./components/articles/ArticlePage/ArticlePage";
import Search from "./components/search/Search";
import Tags from "./components/tags/Tags";

function App() {
  return (
    <Router>
      <NavProvider>
      <div id="colorlib-page">
        <Sidebar />
        <div id="colorlib-main">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <WelcomeBanner />
                  <Articles />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/article-:slug" element={<ArticlePage />} />
            <Route path="/search-:searchTerm" exact element={<Search />} />
            <Route path="/tag-:tagName" element={<Tags />} />
          </Routes>
          <Footer />
        </div>
      </div>
      </NavProvider>
    </Router>
  );
}

export default App;
