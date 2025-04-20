const Alert = ({message, type})=>{
    return (
        <div role="alert" className={`alert alert-${type} alert-outline`}>
            <span>{type} :  {message}.</span>
        </div>
    )
}

export default Alert;