import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import HeroesPage from './pages/HeroesPage';
import MapPage from './pages/MapPage';
import GalleryPage from './pages/GalleryPage';
import ReferencesPage from './pages/ReferencesPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="timeline" element={<TimelinePage />} />
        <Route path="heroes" element={<HeroesPage />} />
        <Route path="map" element={<MapPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="references" element={<ReferencesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;