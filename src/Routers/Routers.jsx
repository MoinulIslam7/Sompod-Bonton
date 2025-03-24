import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Loading from '../pages/Loading/Landing';

const Home = lazy(() => import('../pages/Home/Home'));
const AboutUs = lazy(() => import('../pages/About/Aboutus'));
const PrivacyPolicy = lazy(() => import('../pages/Privacy-policy/Privacy-policy'));
const Rules = lazy(() => import('../pages/Rules/Rules'));
const Layout = lazy(() => import('../layout/Layout'));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const BlogDetails = lazy(() => import('../pages/Blog/BlogDetails'));

function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default Routers;
