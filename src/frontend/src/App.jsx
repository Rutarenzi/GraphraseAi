import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import  "./App.css";
import Homepage from "./pages/homepage";
import NoteInputer from "./components/Mycomponent/NoteInputer";
import Layout from "./pages/layout";
import DashboardPage from "./pages/DashPage";
import { AuthContextProvider } from "./components/context/Mycontext";
import UpdatedInputer from "./components/Mycomponent/UpdatedInputer";


const routes = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: '/', element: <Homepage/>},
            {path:'/Home', element: <NoteInputer/>}

        ]
    },
    {
        path: '/',
        element: <AuthContextProvider><Layout/></AuthContextProvider>,
        children: [
            {path: 'Dashboard/', element: <DashboardPage/>},
            {path:'edit/:id', element: <UpdatedInputer/>}

        ] 
    }
]
const router = (
    <BrowserRouter>
        <Routes>
            {routes.map((route) =>(
                <Route key={route.path} path={route.path} element={route.element} >
                    {route.children.map((child) => (
                        <Route  key={child.path} path={child.path} element={child.element}/>
                    ))}
                </Route>
            ))}
        </Routes>
    </BrowserRouter>
);
const App =() =>{
  return router;
}

export default App;