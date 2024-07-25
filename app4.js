import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js";
import About from "./src/components/Aboutus.js";
import  Contact from "./src/components/Contact.js";
import Body from "./src/components/Body.js";
import Error from "./src/components/Error.js";
import Restuarantmenu from "./src/components/Restuarantmenu.js";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import Grocery from "./src/components/Grocery.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";
import Cart from "./src/components/Cart.js";
import Footer from "./src/components/Footer.js";

// // import Grocery from "./components/Grocery.js";

// const Grocery = lazy(() => import("./components/Grocery.js"));

const App = () => {
  return(
    <Provider store={appStore}>
  <div className="bg-black">
    <Header />
    <Outlet/>
    <Footer />
    
  </div>
  </Provider>
  );
}
const appRouter = createBrowserRouter([
{
  path : "/",
  element:<App />,
  children:[
    {
      path:"/",
      element :<Body />,
    },
    {
      path:"/About",
      element : <About />,
      
    },
    {
      path:"/Contact",
      element : <Contact/>,
    },
    {
      path:"/grocery",
      element : <Suspense fallback={ <h1>Loading....wait some time</h1>}
      ><Grocery/></Suspense>,
    },
    // {
    //   path:"/grocery",
    //   element : <Grocery />,
    // },
    {
      path:"/restuarants/:resId",
      element : <Restuarantmenu />,
    },
    {
      path: "/cart",
      element: <Cart />
    },
  ],
  errorElement : <Error />,
},
]);
//prajlksdllkf
const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(<RouterProvider router={appRouter} />);
