import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import { BrowserRouter, Routes as Switch, Route} from "react-router-dom";
import { Home } from "./Pages/home";
import { Login } from "./Pages/login";

export function PageRoutes(){
    return (
         <BrowserRouter>
         <Suspense fallback={<CircularProgress/>}>
            <Switch>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/"} element={<Login/>}/>
            </Switch>
         </Suspense>
         </BrowserRouter>
    );
}