import { ErrorBoundary } from "react-error-boundary"

function CustomErrorBoundaryUI({error , resetErrorBoundary}){
    console.log(error);
    return(
        <div className="h-[100vh] flex justify-center items-center px-6">
            <div role="alert" className="alert alert-error">
                <p>Something went wrong:</p>
                <div>{error?.message}</div>
                <button onClick={resetErrorBoundary} className="btn btn-error">Try again</button>
            </div>
         </div>
    )
}

function CustomErrorBoundary({children}){
    return (
        <ErrorBoundary
            FallbackComponent={CustomErrorBoundaryUI}
            onReset={()=>{window.location.reload()}}
        >
            {children}
        </ErrorBoundary>
    )
}

export default CustomErrorBoundary;