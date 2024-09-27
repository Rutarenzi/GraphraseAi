import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Contract } from "./utils/icp";
import { Provider } from 'react-redux';
import store from "./redux/store/store";
import { Toaster } from "./components/ui/toaster";

window.renderICPromise = Contract().then(()=>{
    ReactDom.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
        <Provider store={store}>
           <App/>
           <Toaster/>
        </Provider>
        </React.StrictMode>
    );
}).catch(console.error);
