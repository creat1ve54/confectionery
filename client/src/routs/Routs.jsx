import About from "../app/pages/About";
import Admin from "../app/pages/Admin";
import AdminProduct from "../app/pages/AdminProduct";
import AdminProductCard from "../app/pages/AdminProductCard";
import CardDetail from "../app/pages/CardDetail";
import Cart from "../app/pages/Cart";
import Catalog from "../app/pages/Catalog";
import Error from "../app/pages/Error";
import Main from "../app/pages/Main";

export const publishRoutes = [
  {
    path: "/",
    Component: Main,
  },
  {
    path: "*",
    Component: Error,
  },
  {
    path: "/admin",
    Component: Admin,
  },
  {
    path: "/catalog",
    Component: Catalog,
  },
  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/card-detail/:cardNameTranslate",
    Component: CardDetail,
  },
  {
    path: "/about",
    Component: About,
  },
];

export const authRoutes = [
  {
    path: "/admin-product",
    Component: AdminProduct,
  },
  {
    path: "/admin-product/:cardNameTranslate",
    Component: AdminProductCard,
  },
];
