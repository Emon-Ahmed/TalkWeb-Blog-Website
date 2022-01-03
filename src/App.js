import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/Shared/NotFound/NotFound';
import Posts from './Components/Home/HomeNastedRoutes/Posts/Posts/Posts';
import Home from './Components/Home/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Footer from './Components/Shared/Footer/Footer';
import AddPosts from './Components/Dashboard/User/AddPosts/AddPosts';
import AddProduct from './Components/Dashboard/Admin/AddProduct/AddProduct';
import Products from './Components/Home/HomeNastedRoutes/TalkWebShop/Products/Products';
import ManageAllProducts from './Components/Dashboard/Admin/ManageAllProducts/ManageAllProducts';
import ManageAllPostsByAdmin from './Components/Dashboard/Admin/ManageAllPostsByAdmin/ManageAllPostsByAdmin';
import { Account } from './Components/Home/Account/Account';



function App() {
  return (
    <div>
      
       <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
          <Route path="/" element={<Home> </Home>} />
          <Route path="home" element={<Home> </Home>} ></Route>
          <Route path="posts" element={<Posts></Posts>} > </Route>
          <Route path="addPost" element={<AddPosts></AddPosts>} />
          <Route path="products" element={<Products></Products>} />
          <Route path="addproduct" element={<AddProduct></AddProduct>} />
          <Route path="manageProducts" element={<ManageAllProducts></ManageAllProducts>} />
          <Route path="managePosts" element={<ManageAllPostsByAdmin></ManageAllPostsByAdmin>} />
          <Route path="account" element={ <Account /> } />

           {/*  <Route path="//" element={<Posts></Posts>} />
            <Route path="//posts" element={<Posts></Posts>} />           
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/teams" element={<Teams></Teams>} />   
            <Route path="/about" element={<About> </About>} />
            <Route path="/Contact" element={<Contact></Contact>} />

          
        
            <Route path="/dashboard" element={<PrivateRoute>  <Dashboard> </Dashboard> </PrivateRoute> } >

                <Route path="/dashboard/addPost" element={<PrivateRoute><AddPost></AddPost></PrivateRoute> } />
                <Route path="/dashboard/" element={<PrivateRoute><AddPost></AddPost></PrivateRoute> } />
                <Route path="/dashboard/managePosts" element={<PrivateRoute><ManagePosts></ManagePosts></PrivateRoute> } />
                <Route path="/dashboard/updatePost" element={<PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>} />
                <Route path="/dashboard/bloodDonorRegistration" element={<PrivateRoute><BloodDonorRegistration></BloodDonorRegistration></PrivateRoute>} />
                <Route path="/dashboard/updateBloodDonorRegistration" element={<PrivateRoute><UpdateBloodDonorRegistration></UpdateBloodDonorRegistration></PrivateRoute>} />
                <Route path="/dashboard/roktokonikaCleanTeamRegistration" element={<PrivateRoute><RoktokonikaCleanTeamRegistration></RoktokonikaCleanTeamRegistration></PrivateRoute>} />
                <Route path="/dashboard/roktokonikaSupportHumanityTeamRegistration" element={<PrivateRoute><RoktokonikaSupportHumanityTeamRegistration></RoktokonikaSupportHumanityTeamRegistration></PrivateRoute>} />


                <Route path="/dashboard/manageAllPosts"  element={<AdminRoute><ManageAllPosts></ManageAllPosts></AdminRoute> } />
                <Route path="/dashboard/addTeamMembers"  element={ <AdminRoute> <AddTeamMembers></AddTeamMembers> </AdminRoute> } />
                <Route path="/dashboard/manageTeamMembers"  element={ <AdminRoute><ManageTeamMembers></ManageTeamMembers> </AdminRoute>} />
                <Route path="/dashboard/updateAddTeamMembers"  element={ <AdminRoute> <UpdateAddTeamMemberInfo></UpdateAddTeamMemberInfo></AdminRoute>} />
                <Route path="/dashboard/manageAllBloodDonor"  element={<AdminRoute><ManageAllBloodDonor></ManageAllBloodDonor></AdminRoute>} />
                <Route path="/dashboard/manageAllRoktokonikaCleanTeam"  element={<AdminRoute><ManageAllRoktokonikaCleanTeam></ManageAllRoktokonikaCleanTeam></AdminRoute>} />
                <Route path="/dashboard/manageAllRoktokonikaSupportHumanityTeam"  element={<AdminRoute><ManageAllRoktokonikaSupportHumanityTeam></ManageAllRoktokonikaSupportHumanityTeam></AdminRoute>} />
                <Route path="/dashboard/makeAdmin"  element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>} />
           
            </Route>
                 */}
           
            
            
           {/* <Route path="home" element={<Home> </Home>} >
             <Route path="/p" element={<Posts></Posts>} />
              <Route path="posts" element={<Posts></Posts>} > </Route>
              <Route path="products" element={<Products></Products>} />
            </Route> 
            <Route path="/purchase/:productId" element={<Purchase></Purchase>} />
 */}
            <Route path="*" element={<NotFound></NotFound>}></Route>
        
          </Routes>
        <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
