import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogItemPage from "./pages/BlogItemPage";
import Reservation from "./pages/Reservation";
import Contacts from "./pages/Contacts";
import "./styles/global.scss";

function App() {
  return (
    <>
      <div className="App">
        <Router basename="/projects/tasteeat/dist">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogItemPage />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
