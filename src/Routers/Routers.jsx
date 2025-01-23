import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Loading from '../pages/Loading/Landing';
const Home = lazy(() => import('../pages/Home/Home'));
const AboutUs = lazy(() => import('../pages/About/Aboutus'));
const PrivacyPolicy = lazy(() => import('../pages/Privacy-policy/Privacy-policy'));
const Rules = lazy(() => import('../pages/Rules/Rules'));
const Layout = lazy(() => import('../layout/Layout'));

function Routers() {
  return (
    <div>
      <Suspense fallback={<Loading />} >
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/rules" element={<Rules />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default Routers;
