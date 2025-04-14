import { create } from "zustand";

export const useCurrencyStore = create((set)=>{
    return {
        currency : 'usd',
        setCurrency: (currency)=>{
            return set((state)=>{
                return {...state,currency : currency}
            })
        }
    }
})