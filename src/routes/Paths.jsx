import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import ProductListingPage from '../pages/ProductListingPage';

// layout
import PageLayout from '../layouts/PageLayout';
import HomePage from '../pages/HomePage';

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} /> 
          <Route path="/produtos" element={<ProductListingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
