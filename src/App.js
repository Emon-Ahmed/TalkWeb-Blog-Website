import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Posts from "./Components/Home/HomeNastedRoutes/Posts/Posts/Posts";
import Home from "./Components/Home/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
import Footer from "./Components/Shared/Footer/Footer";
import AddPosts from "./Components/Dashboard/User/AddPosts/AddPosts";
import AddProduct from "./Components/Dashboard/Admin/AddProduct/AddProduct";
import Products from "./Components/Home/HomeNastedRoutes/TalkWebShop/Products/Products";
import ManageAllProducts from "./Components/Dashboard/Admin/ManageAllProducts/ManageAllProducts";
import ManageAllPostsByAdmin from "./Components/Dashboard/Admin/ManageAllPostsByAdmin/ManageAllPostsByAdmin";
import Purchase from "./Components/Home/HomeNastedRoutes/TalkWebShop/Purchase/Purchase";
import ManageAllOrders from "./Components/Dashboard/Admin/ManageAllOrders/ManageAllOrders";
import Sponsors from "./Components/Home/Sponsors/Sponsors";
import TermsOfUse from "./Components/Home/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./Components/Home/PrivacyPolicy/PrivacyPolicy";
import Faq from "./Components/Home/Faq/Faq";
import About from "./Components/Home/AboutAndContact/About/About";
import Contact from "./Components/Home/AboutAndContact/Contact/Contact";
import { Singup } from "./Components/Home/Account/Singup";
import { Singin } from "./Components/Home/Account/Singin";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { setUser } from "./Redux/Action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/singup" element={<Singup />} />
          <Route path="/singin" element={<Singin />} />
          <Route path="/" element={<Home> </Home>} />
          <Route path="home" element={<Home> </Home>}></Route>
          <Route path="posts" element={<Posts></Posts>}></Route>
          <Route path="addPost" element={<AddPosts></AddPosts>} />
          <Route path="products" element={<Products></Products>} />
          <Route path="addproduct" element={<AddProduct></AddProduct>} />
          <Route path="manageProducts"element={<ManageAllProducts></ManageAllProducts>} />
          <Route path="managePosts" element={<ManageAllPostsByAdmin></ManageAllPostsByAdmin>}/>
          <Route path="purchase/:purchaseId" element={<Purchase></Purchase>} />
          <Route path="manageAllOrders" element={<ManageAllOrders></ManageAllOrders>}/>
          <Route path="faq" element={<Faq></Faq>} />
          <Route path="privacyPolicy" element={<PrivacyPolicy></PrivacyPolicy>}/>
          <Route path="termsOfUse" element={<TermsOfUse></TermsOfUse>} />
          <Route path="sponsors" element={<Sponsors></Sponsors>} />
          <Route path="about" element={<About></About>} />
          <Route path="contact" element={<Contact></Contact>} />
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
