import { Outlet, Navigate } from "react-router-dom";

import { isStorage } from "../app/helper/storage";

const PrivateRoute = () => {

    return (
        <>
            {
                isStorage() ? <Outlet /> : <Navigate to='/' />
            }
        </>
    )
}

export default PrivateRoute