import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import About from './pages/About';
import Causes from './pages/Causes';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ContentEditor from './pages/admin/ContentEditor';
import ProtectedRoute from './components/ProtectedRoute';
import { AdminProvider } from './context/AdminContext';
import { ContentProvider } from './context/ContentContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ContentProvider>
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="cause" element={<Causes />} />
              <Route path="blog" element={<Blog />} />
              <Route path="single-blog" element={<SingleBlog />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/content" element={<ContentEditor />} /> {/* Added ContentEditor route */}
              {/* Add more protected admin routes here */}
            </Route>
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </ContentProvider>
  );
}

export default App;
