// import React, { useEffect, useState } from "react";
// import { NavLink, Route, Routes } from "react-router-dom";
// import Shop from "./pages/Shop/Shop";
// import Home from "./pages/Home/Home";
// import Header from "./components/Header";
// import "./App.css";
// import CloseIcon from "@mui/icons-material/Close";
// import google from "../public/images/google.svg";
// import facebook from "../public/images/faceboook.svg";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import Accaunt from "./pages/Accaunt/Accaunt";
// import PlantCare from "./pages/PlantCare";
// import Blogs from "./pages/Blogs";
// // import FlowerDetail from "./components/FlowerDetail";
// import FlowerList from "./components/FlowerList";
// import { data } from "./data/data";
// import { CartProvider } from "./context/CartContext";

// const App = () => {
//   const [modal, setModal] = useState(false);
//   const [login, setLogin] = useState(true);
//   const [register, setRegister] = useState(false);

//   const [view, setView] = useState(false);

//   const pass = document.querySelector(".pass");

//   const handleView = () => {
//     if (view === false) {
//       pass.type = "text";
//       setView(true);
//     } else {
//       pass.type = "password";
//       setView(false);
//     }
//   };

//   return (
//     <CartProvider>
//       <div>
//         <Header tolqin={setModal} />
//         <div
//           className={` ${
//             modal ? "flex" : "hidden"
//           } bg-[#000000b3] fixed z-40 top-0 left-0 w-full h-full duration-300 justify-center items-start`}
//         >
//           <div className=" flex rounded-md justify-center items-center">
//             <div className="flex flex-col rounded-md overflow-hidden mt-[10%] p-4  h-[600px] w-[500px] bg-white">
//               <div
//                 onClick={() => setModal(false)}
//                 className="flex justify-end cursor-pointer"
//               >
//                 <CloseIcon className="hover:text-green-800" />
//               </div>

//               <div className="flex justify-center gap-4 items-center">
//                 <h1
//                   className={
//                     (` cursor-pointer`,
//                     login
//                       ? "text-[#46A358] cursor-pointer text-[20px] font-medium"
//                       : "text-[#3D3D3D] cursor-pointer text-[20px] font-medium ")
//                   }
//                   onClick={() => setLogin(true) || setRegister(false)}
//                 >
//                   Login
//                 </h1>
//                 <h2>|</h2>
//                 <h1
//                   className={
//                     (`text-[20px] font-medium cursor-pointer`,
//                     register
//                       ? "text-[#46A358] cursor-pointer text-[20px] font-medium"
//                       : "text-[#3D3D3D] cursor-pointer text-[20px] font-medium ")
//                   }
//                   onClick={() => setRegister(true) || setLogin(false)}
//                 >
//                   Register
//                 </h1>
//               </div>

//               {login && (
//                 <form className="flex flex-col gap-4 justify-center items-center">
//                   <h1 className="font-normal text-[13px] mt-8 text-[#3D3D3D] text-center">
//                     Enter your username and password to login.
//                   </h1>

//                   <label
//                     className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
//                     htmlFor="email"
//                   >
//                     <input
//                       className="border-none outline-none"
//                       type="email"
//                       name=""
//                       id=""
//                       placeholder="almamun_uxui@outlook.com"
//                     />
//                   </label>
//                   <label
//                     className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
//                     htmlFor="password "
//                   >
//                     <input
//                       className="border-none outline-none pass"
//                       type="password"
//                       name=""
//                       id=""
//                       placeholder="Enter your password"
//                     />
//                     <div onClick={handleView}>
//                       <VisibilityOffIcon className="cursor-pointer eye" />
//                     </div>
//                   </label>

//                   <p className="text-[14px] font-normal text-[#46A358]">
//                     Forgot Password?
//                   </p>
//                   <NavLink
//                     className="flex w-2/3 bg-[#46A358] mt-10 rounded-md py-2"
//                     to="/accaunt"
//                   >
//                     <button
//                       onClick={() => setModal(false)}
//                       className="mx-auto  justify-center text-[#FFFFFF]  font-bold text-[16px]  text-center"
//                     >
//                       Login
//                     </button>
//                   </NavLink>

//                   <div className="flex justify-center items-center gap-4">
//                     <span className="block bg-[#EAEAEA] w-[100px] h-[1px]"></span>
//                     <p className="text-[#3D3D3D] text-[13px] font-normal">
//                       Or login with
//                     </p>
//                     <span className="block bg-[#EAEAEA] w-[100px] h-[1px]"></span>
//                   </div>

//                   <button className="border w-2/3 hover:bg-green-300 justify-center flex py-2 border-[#EAEAEA] rounded-lg">
//                     <img src={google} alt="" />
//                   </button>

//                   <button className="border w-2/3 hover:bg-green-300 justify-center flex py-2 border-[#EAEAEA] rounded-lg">
//                     <img src={facebook} alt="" />
//                   </button>
//                 </form>
//               )}

//               {register && (
//                 <form className="flex flex-col gap-4 justify-center items-center h-[656px]">
//                   <h1 className="font-normal text-[13px] mt-8 text-[#3D3D3D] text-center">
//                     Enter your email and password to register.
//                   </h1>

//                   <label
//                     className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
//                     htmlFor="text"
//                   >
//                     <input
//                       className="border-none outline-none"
//                       type="text"
//                       name=""
//                       id=""
//                       placeholder="Username"
//                     />
//                   </label>
//                   <label
//                     className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
//                     htmlFor="email"
//                   >
//                     <input
//                       className="border-none outline-none"
//                       type="email"
//                       name=""
//                       id=""
//                       placeholder="Enter your email address"
//                     />
//                   </label>
//                   <label
//                     className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
//                     htmlFor="password "
//                   >
//                     <input
//                       className="border-none outline-none pass"
//                       type="password"
//                       name=""
//                       id=""
//                       placeholder="Password"
//                     />
//                     <div onClick={handleView}>
//                       <VisibilityOffIcon className="cursor-pointer eye" />
//                     </div>
//                   </label>
//                   <label
//                     className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
//                     htmlFor="password "
//                   >
//                     <input
//                       className="border-none outline-none pass"
//                       type="password"
//                       name=""
//                       id=""
//                       placeholder="Confirm Password"
//                     />
//                   </label>
//                   <NavLink
//                     className="flex w-2/3 bg-[#46A358] mt-10 rounded-md py-2"
//                     to="/accaunt"
//                   >
//                     <button
//                       onClick={() => setModal(false)}
//                       className="mx-auto  justify-center text-[#FFFFFF]  font-bold text-[16px]  text-center"
//                     >
//                       Register
//                     </button>
//                   </NavLink>

//                   <div className="flex justify-center items-center gap-4">
//                     <span className="block bg-[#EAEAEA] w-[100px] h-[1px]"></span>
//                     <p className="text-[#3D3D3D] text-[13px] font-normal">
//                       Or login with
//                     </p>
//                     <span className="block bg-[#EAEAEA] w-[100px] h-[1px]"></span>
//                   </div>

//                   <button className="border w-2/3 hover:bg-green-300 justify-center flex py-2 border-[#EAEAEA] rounded-lg">
//                     <img src={google} alt="" />
//                   </button>

//                   <button className="border w-2/3 hover:bg-green-300 justify-center flex py-2 border-[#EAEAEA] rounded-lg">
//                     <img src={facebook} alt="" />
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/accaunt" element={<Accaunt />} />
//             <Route path="/plantcare" element={<PlantCare />} />
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/shop/flower/:id" element={<Shop />} />
//           </Routes>
//         </div>
//       </div>
//     </CartProvider>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import "./App.css";
import CloseIcon from "@mui/icons-material/Close";
import google from "../public/images/google.svg";
import facebook from "../public/images/faceboook.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Accaunt from "./pages/Accaunt/Accaunt";
import PlantCare from "./pages/PlantCare";
import Blogs from "./pages/Blogs";
import ShoppingCart from "./components/ShoppingCart";
import { CartProvider } from "./context/CartContext";

const App = () => {
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    const pass = document.querySelector(".pass");
    if (pass) {
      pass.type = view ? "text" : "password";
    }
  }, [view]);

  const handleView = () => {
    setView((prevView) => !prevView);
  };

  return (
    <>
      <Header tolqin={setModal} />
      <div
        className={` ${
          modal ? "flex" : "hidden"
        } bg-[#000000b3] fixed z-40 top-0 left-0 w-full h-full duration-300 justify-center items-start`}
      >
        <div className=" flex rounded-md justify-center items-center">
          <div className="flex flex-col rounded-md overflow-hidden mt-[10%] p-4  h-[600px] w-[500px] bg-white">
            <div
              onClick={() => setModal(false)}
              className="flex justify-end cursor-pointer"
            >
              <CloseIcon className="hover:text-green-800" />
            </div>

            <div className="flex justify-center gap-4 items-center">
              <h1
                className={
                  (` cursor-pointer`,
                  login
                    ? "text-[#46A358] cursor-pointer text-[20px] font-medium"
                    : "text-[#3D3D3D] cursor-pointer text-[20px] font-medium ")
                }
                onClick={() => setLogin(true) || setRegister(false)}
              >
                Login
              </h1>
              <h2>|</h2>
              <h1
                className={
                  (`text-[20px] font-medium cursor-pointer`,
                  register
                    ? "text-[#46A358] cursor-pointer text-[20px] font-medium"
                    : "text-[#3D3D3D] cursor-pointer text-[20px] font-medium ")
                }
                onClick={() => setRegister(true) || setLogin(false)}
              >
                Register
              </h1>
            </div>

            {login && (
              <form className="flex flex-col gap-4 justify-center items-center">
                <h1 className="font-normal text-[13px] mt-8 text-[#3D3D3D] text-center">
                  Enter your username and password to login.
                </h1>

                <label
                  className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
                  htmlFor="email"
                >
                  <input
                    className="border-none outline-none"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="almamun_uxui@outlook.com"
                  />
                </label>
                <label
                  className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
                  htmlFor="password "
                >
                  <input
                    className="border-none outline-none pass"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                  <div onClick={handleView}>
                    <VisibilityOffIcon className="cursor-pointer eye" />
                  </div>
                </label>

                <p className="text-[14px] font-normal text-[#46A358]">
                  Forgot Password?
                </p>
                <NavLink
                  className="flex w-2/3 bg-[#46A358] mt-10 rounded-md py-2"
                  to="/accaunt"
                >
                  <button
                    onClick={() => setModal(false)}
                    className="mx-auto  justify-center text-[#FFFFFF]  font-bold text-[16px]  text-center"
                  >
                    Login
                  </button>
                </NavLink>

                <div className="flex justify-center items-center gap-4">
                  <span className="block bg-[#EAEAEA] w-[100px] h-[1px]"></span>
                  <p className="text-[#3D3D3D] text-[13px] font-normal">
                    Or login with
                  </p>
                  <span className="block bg-[#EAEAEA] w-[100px] h-[1px]"></span>
                </div>

                <button className="border w-2/3 hover:bg-green-300 justify-center flex py-2 border-[#EAEAEA] rounded-lg">
                  <img src={google} alt="" />
                </button>

                <button className="border w-2/3 hover:bg-green-300 justify-center flex py-2 border-[#EAEAEA] rounded-lg">
                  <img src={facebook} alt="" />
                </button>
              </form>
            )}

            {register && (
              <form className="flex flex-col gap-4 justify-center items-center h-[656px]">
                <h1 className="font-normal text-[13px] mt-8 text-[#3D3D3D] text-center">
                  Enter your email and password to register.
                </h1>

                <label
                  className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
                  htmlFor="text"
                >
                  <input
                    className="border-none outline-none"
                    type="text"
                    name=""
                    id=""
                    placeholder="Username"
                  />
                </label>
                <label
                  className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
                  htmlFor="email"
                >
                  <input
                    className="border-none outline-none"
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email address"
                  />
                </label>
                <label
                  className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
                  htmlFor="password "
                >
                  <input
                    className="border-none outline-none pass"
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                  />
                  <div onClick={handleView}>
                    <VisibilityOffIcon className="cursor-pointer eye" />
                  </div>
                </label>
                <label
                  className="w-2/3 flex items-center justify-between rounded-[5px] py-2 px-3 border border-[#46A358]"
                  htmlFor="password "
                >
                  <input
                    className="border-none outline-none pass"
                    type="password"
                    name=""
                    id=""
                    placeholder="Confirm Password"
                  />
                </label>
                <NavLink
                  className="flex w-2/3 bg-[#46A358] mt-10 rounded-md py-2"
                  to="/accaunt"
                >
                  <button
                    onClick={() => setModal(false)}
                    className="mx-auto  justify-center text-[#FFFFFF]  font-bold text-[16px]  text-center"
                  >
                    Register
                  </button>
                </NavLink>

                <div className="flex justify-center items-center gap-4">
                  <span className="block bg-[#EAEAEA] w-[100px] h-[1px]"></span>
                  <p className="text-[#3D3D3D] text-[13px] font-normal">
                    Or login with
                  </p>
                  <span className="block bg-[#EAEAEA] w-[100px] h-[1px]"></span>
                </div>

                <button className="border w-2/3 hover:bg-green-300 justify-center flex py-2 border-[#EAEAEA] rounded-lg">
                  <img src={google} alt="" />
                </button>

                <button className="border w-2/3 hover:bg-green-300 justify-center flex py-2 border-[#EAEAEA] rounded-lg">
                  <img src={facebook} alt="" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <CartProvider>
        {/* <Router> */}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/accaunt" element={<Accaunt />} />
            <Route path="/plantcare" element={<PlantCare />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/shop/flower/:id" element={<Shop />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </div>
        {/* </Router> */}
      </CartProvider>
    </>
  );
};

export default App;
