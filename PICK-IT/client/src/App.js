import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import HomePage from 'scenes/homePage';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import SearchPage from 'scenes/searchPage';
import ProductPage from 'scenes/productPage';
import WishlistPage from 'scenes/wishlistPage';
import ShoppingCart from 'scenes/shoppingCartPage';
import HistoryPage from 'scenes/historyPage';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" /> } />
            <Route path="/search" element={<SearchPage />} />
<<<<<<< Updated upstream
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/whishlist" element={isAuth ? <WishlistPage /> : <Navigate to="/" />} />
            <Route path="/shoppingcart" element={isAuth ? <ShoppingCart/> : <Navigate to="/" />} />
            <Route path="/historyPurchase" element={isAuth ? <HistoryPage/> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;