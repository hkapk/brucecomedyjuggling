import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Media from "./components/Media";
import Reviews from "./components/Reviews";
import Events from "./components/Events";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const renderPage = () => {
    if (currentPage === "Home") return <Home />;
    if (currentPage === "About") return <About />;
    if (currentPage === "Media") return <Media />;
    if (currentPage === "Events") return <Events />;
    if (currentPage === "Contact") return <ContactForm />;
    if (currentPage === "Reviews") return <Reviews />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <div className="pt-24 text-center">Loading…</div>;

  return (
    <div className="pt-24 sm:pt-18">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={user ? <AdminPanel /> : <Navigate to="/login" />}
        />

        <Route path="*" element={renderPage()} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
