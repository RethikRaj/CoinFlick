import { create } from "zustand";

export const useCoinsStore = create((set)=>{
    return {
        coinsList : [],
        setCoinsList : (coinsList)=>{
            return set((state)=>{
                return {...state, coinsList : coinsList}
            })
        }
    }
})