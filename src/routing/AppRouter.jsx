import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CoinDetails from "../pages/CoinDetails";

const AppRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="details/:id" element={<CoinDetails />} />
            </Route>

        </Routes>
    )
    
}

export default AppRouter;