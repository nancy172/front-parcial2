import { Link } from "react-router-dom";

function  NotFound() {

    return (
        <>
            <h1>404 | NotFound </h1>
            <Link to="/">Regresar al home</Link>
        </>
    )
}

export default NotFound;