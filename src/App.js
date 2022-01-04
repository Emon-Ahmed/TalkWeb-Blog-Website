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
import PostDetails from "./Components/Home/HomeNastedRoutes/Posts/PostDetails/PostDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

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
          <Route path="/" element={<Home> </Home>} />
          <Route path="posts" element={<Posts></Posts>}/>
          <Route path="posts/:postId" element={<PrivateRoute> <PostDetails /> </PrivateRoute>}/>
          <Route path="addPost" element={<PrivateRoute><AddPosts /></PrivateRoute>} />
          <Route path="products" element={<Products></Products>} />
          <Route path="products/:productId" element={<PrivateRoute><Purchase /></PrivateRoute>} />
          <Route path="addproduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
          <Route path="manageProducts"element={<PrivateRoute><ManageAllProducts /></PrivateRoute>} />
          <Route path="managePosts" element={<PrivateRoute><ManageAllPostsByAdmin /></PrivateRoute>}/>
          <Route path="manageAllOrders" element={<PrivateRoute><ManageAllOrders /></PrivateRoute>}/>
          <Route path="faq" element={<Faq></Faq>} />
          <Route path="privacyPolicy" element={<PrivacyPolicy></PrivacyPolicy>}/>
          <Route path="termsOfUse" element={<TermsOfUse></TermsOfUse>} />
          <Route path="sponsors" element={<Sponsors></Sponsors>} />
          <Route path="about" element={<About></About>} />
          <Route path="contact" element={<Contact></Contact>} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/signin" element={<Singin />} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
