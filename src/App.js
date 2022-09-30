import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import TopNav from './components/nav/TopNav';
import News from "./pages/News"
import NewsDetails from "./pages/NewsDetails"
import Favorites from "./pages/Favorites"
import About from "./pages/About"
import NotFound404 from "./pages/NotFound404"
import Footer from "./components/footer/Footer"
import { useSelector } from "react-redux";
import Comments from './pages/Comments';
import { ToastContainer } from 'react-toastify';

function App() {
  const isDark = useSelector((s) => s.theme.isDark);

  return (
    <div className={` ${isDark ? "app-container dark" : "app-container light"} `}>
      <TopNav />
      <ToastContainer autoClose={400} hideProgressBar={true} />
      <Routes>
        <Route path="/" element={<Navigate to="/news" />} />
        <Route path="/news" element={<News category="general" />} />
        <Route path="/science" element={<News category="science" />} />
        <Route path="/health" element={<News category="health" />} />
        <Route path="/sports" element={<News category="sports" />} />
        <Route path="/entertainment" element={<News category="entertainment" />} />
        <Route path="/technology" element={<News category="technology" />} />
        <Route path="/business" element={<News category="business" />} />
        <Route path="/news/:newsTitle" element={<NewsDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
