import Admin from "./pages/Admin.jsx";
import Auth from "./pages/Auth.jsx";
import Shop from "./pages/Shop.jsx";
import {ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, DEVISE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utilis/const.js";
import Basket from "./pages/Basket.jsx";
import DevisePage from "./pages/DevisePage.jsx";
import * as React from "react";

export const authRouters = [
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: ADMIN_ROUTE,
    Component: Admin
  }
]
export const publicRouters = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: AUTH_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: DEVISE_ROUTE+"/:id",
    Component: DevisePage
  }
]
