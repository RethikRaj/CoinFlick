import { useNavigate } from "react-router-dom";
import { useCurrencyStore } from "../../store/currencyStore";
import Search from "../Search/Search";

function Navbar() {
    const setCurrency = useCurrencyStore((state)=>state.setCurrency);

    const navigate = useNavigate();

    const goToHome = ()=>{
        navigate("/")
    }

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start w-1/2 md:w-1/3">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li onClick={() => setCurrency('usd')}>
                            <a>usd</a>
                        </li>
                        <li onClick={() => setCurrency('inr')}>
                            <a>inr</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center" onClick={goToHome}>
                <a className="btn btn-ghost text-xl md:text-3xl">CoinFlick</a>
            </div>
            <div className="navbar-end w-1/2 md:2/3">
                <Search />
            </div>
        </div>
    );
}

export default Navbar;
