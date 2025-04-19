import { ErrorBoundary } from "react-error-boundary"

function CustomErrorBoundaryUI({error , resetErrorBoundary}){
    return(
        <div>
            <h1>Something went wrong : {error.message}</h1> 
            <button onClick={resetErrorBoundary}>Try again</button> {/* onclick of this onreset is called */}
        </div>
    )
}

function CustomErrorBoundary({children}){
    return (
        <ErrorBoundary
            FallbackComponent={CustomErrorBoundaryUI}
            onReset={()=>{window.reload()}}
        >
            {children}
        </ErrorBoundary>
    )
}

export default CustomErrorBoundary;