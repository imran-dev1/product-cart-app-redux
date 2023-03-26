import "./App.css";
import Navbar from "../src/components/Navbar";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
   const [isHome, setIsHome] = useState(true);
   return (
      <Provider store={store}>
         <div>
            <Navbar setIsHome={setIsHome}></Navbar>
            <div className={isHome ? "display-block" : "display-none"}>
               <HomePage></HomePage>
            </div>
            <div className={isHome ? "display-none" : "display-block"}>
               <CartPage></CartPage>
            </div>
         </div>
      </Provider>
   );
}

export default App;
