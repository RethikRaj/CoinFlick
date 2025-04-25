import { useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import fetchAllCoinList from "../../services/fetchAllCoinList";
import { useCoinsStore } from "../../store/coinsStore";
import { Link, useNavigate } from "react-router-dom";
import Fuse from "fuse.js";

const Search = ()=>{

    const coinsList = useCoinsStore((state)=>state.coinsList);
    const setCoinsList = useCoinsStore((state)=>state.setCoinsList);
    const navigate = useNavigate();

    const inputRef = useRef(null);

    const [searchResults, setSearchResults] = useState([]);

    const { isError, isLoading, data} = useFetch('coinsList',fetchAllCoinList,[]);

    useEffect(()=>{
        if(data){
            setCoinsList(data);
            // setSearchResults(data);
        }
    },[data, setCoinsList]);

    if(isError){
        <Alert type="error" message="Failed to fetch coins list" />
    }

    if(isLoading){
        return <div className="flex justify-center">
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    const handleSearch = ()=>{
        console.log(inputRef.current.value);
        const searchTerm = inputRef.current.value;
        navigate(`/details/${searchTerm}`);
    }

    const fuseOptions = {
        keys: ["name"],
        threshold : 0.3,
        shouldSort : true,
    }

    const handleChange = async (e)=>{
        const fuse = new Fuse(coinsList, fuseOptions);

        const searchTerm = e.target.value;

        setSearchResults(fuse.search(searchTerm));
    }

    return (
        <>
            <div className="dropdown w-full md:w-1/2">
                <input type="text" placeholder="Search..." className="input w-full px-4 py-2 text-sm rounded-box" ref={inputRef} onChange={handleChange}/>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm w-full max-h-[300px] overflow-scroll flex-nowrap">
                    {
                        searchResults.map((coin)=>{
                            return (
                                <li key={coin.item.id}>
                                    <Link to={`/details/${coin.item.name.toLowerCase()}`}>{coin.item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
            <button className="btn btn-ghost btn-circle" onClick={handleSearch}>
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />{" "}
                </svg>
            </button>
        </>
    )
}

export default Search;