// App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Section Imports
import HomePage from "./Pages/MainSection/Pages/HomePage/HomePage";
import Login from "./Pages/MainSection/Pages/Login/Login";
import VerficationCode from "./Pages/MainSection/Pages/Login/verficationCode";
import SignUp from "./Pages/MainSection/Pages/signUp/SignUp";
import SignupVerification from "./Pages/MainSection/Pages/signUp/SignupVerification";
import ServiceProviderAccessPage from "./Pages/MainSection/Pages/ServiceProviders/ServiceProviderAccessPage";
import ServiceProviderList from "./Pages/MainSection/Pages/ServiceProviders/ServiceProviderList";
import MainRequests from "./Pages/MainSection/Pages/Requests";
import ShoppingCart from "./Pages/MainSection/Pages/ShoppingCart";

// Admin Section Imports
import LogInPageAdmin from "./Pages/AdminSection/Pages/LogIn/LogIn.jsx";
import HomePageAdmin from "./Pages/AdminSection/Pages/Home";
import ServiceProviderAdmin from "./Pages/AdminSection/Pages/ServiceProvider/index";
import ServiceProviderRequestAdmin from "./Pages/AdminSection/Pages/Services/ProviderRequest";
import ServicesReviewAdmin from "./Pages/AdminSection/Pages/Services/ServicesReview";
import ServicesRequestAdmin from "./Pages/AdminSection/Pages/MoreServices/ServicesRequest";
import ServicesModal from "./Pages/AdminSection/Pages/MoreServices/ServiceModal";
import Discount from "./Pages/AdminSection/Pages/Discounts/Discount";
import SignupAdmin from "./Pages/AdminSection/Pages/Signup";

// Provider Section Imports
import LogInPageProvider from "./Pages/ProviderSection/Pages/Login";
import ProviderHome from "./Pages/ProviderSection/Pages/ProviderHome";
import UpdatePassword from "./Pages/ProviderSection/Pages/UpdatePassword";
import Profile from "./Pages/ProviderSection/Pages/Profile";
import ProviderTimeSlot from "./Pages/ProviderSection/Pages/ProviderTimeSlot";
import ListOfServices from "./Pages/ProviderSection/Pages/ListOfServices";
import OrdersDetail from "./Pages/ProviderSection/Pages/OrdersDetail";
import WalletMain from "./Pages/ProviderSection/Pages/Wallet";
import AddNewService from "./Pages/ProviderSection/Pages/AddNewService";
import ProviderServicesMain from "./Pages/ProviderSection/Pages/ProviderServicesMain";

function App() {
  // Main Routes Array
  const mainRoutes = [
    { path: "/main-home", element: <HomePage /> },
    { path: "/main-login", element: <Login /> },
    { path: "/main-verification", element: <VerficationCode /> },
    { path: "/main-signup", element: <SignUp /> },
    { path: "/main-signup-verification", element: <SignupVerification /> },
    { path: "/main-access-page", element: <ServiceProviderAccessPage /> },
    { path: "/main-service-providers", element: <ServiceProviderList /> },
    { path: "/main-request", element: <MainRequests /> },
    { path: "/main-shopping-cart", element: <ShoppingCart /> },
  ];

  // Admin Routes Array
  const adminRoutes = [
    { path: "/admin-login", element: <LogInPageAdmin /> },
    { path: "/admin-home", element: <HomePageAdmin /> },
    { path: "/admin-service-providers", element: <ServiceProviderAdmin /> },
    {
      path: "/admin-profile-requests",
      element: <ServiceProviderRequestAdmin />,
    },
    { path: "/admin-services-review", element: <ServicesReviewAdmin /> },
    { path: "/admin-services-request-list", element: <ServicesRequestAdmin /> },
    { path: "/admin-services-modal", element: <ServicesModal /> },
    { path: "/admin-discounts", element: <Discount /> },
    { path: "/admin-new-signup", element: <SignupAdmin /> },
  ];

  // Provider Routes Array
  const providerRoutes = [
    { path: "/provider-login", element: <LogInPageProvider /> },
    { path: "/provider-home", element: <ProviderHome /> },
    { path: "/provider-update-password", element: <UpdatePassword /> },
    { path: "/provider-profile", element: <Profile /> },
    { path: "/provider-time-slot", element: <ProviderTimeSlot /> },
    { path: "/provider-services-list", element: <ListOfServices /> },
    { path: "/provider-order-detail", element: <OrdersDetail /> },
    { path: "/provider-wallet", element: <WalletMain /> },
    { path: "/provider-add-services", element: <AddNewService /> },
    { path: "/provider-services", element: <ProviderServicesMain /> },
  ];

  return (
    <div>
      <Router>
        <Routes>
          {/* Main Routes */}
          {mainRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* Admin Routes */}
          {adminRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* Provider Routes */}
          {providerRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
