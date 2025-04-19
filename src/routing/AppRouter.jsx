import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { lazy , Suspense} from "react";
import CoinTableLoader from "../components/Loaders/CoinTableLoader";
import CustomErrorBoundary from "../components/CustomErrorBoundary/CustomErrorBoundary";



const Home = lazy(()=>import("../pages/Home"));
const CoinDetails = lazy(()=>import("../pages/CoinDetails"));
const AppRouter = ()=>{
    return (
        <CustomErrorBoundary>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={
                        <Suspense fallback={<CoinTableLoader/>}>
                            <Home />
                        </Suspense>
                    } 
                    />
                    <Route path="details/:id" element={
                        <Suspense fallback={
                            <h1>Loading....</h1>
                            // <div className="flex justify-center">
                            //     <h1>Fetching Coin Details Pageee...</h1>
                            //     <span className="loading loading-spinner text-primary"></span>
                            // </div>
                        }
                        >
                            <CoinDetails />
                        </Suspense>
                    } 
                    />
                </Route>

            </Routes>
        </CustomErrorBoundary>
        
    )
    
}

export default AppRouter;