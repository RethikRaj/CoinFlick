import { useQuery } from "@tanstack/react-query";

/**
 * 
 * @param {*} uniquekey : queryKey for react query
 * @param {*} queryFunction : function to be called
 * @param {*} queryFunctionParams : array of parameters to be passed to queryFunction
 */
function useFetch(uniquekey, queryFunction, queryFunctionParams){
    const { isError, isLoading, data } = useQuery({
        queryKey: [uniquekey, ...queryFunctionParams],
        queryFn: () => queryFunction(...queryFunctionParams),
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2, // 2 minutes . Even if cache time is set , data is refetched but ui is updated immediately from cache and if some inconsistencies happen then ui is updated again
        staleTime: 1000 * 60 * 2, // In this time period , data is not refetched because it is considered as fresh 
    })

    return {
        isError, isLoading, data
    }
}

export default useFetch;