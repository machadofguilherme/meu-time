import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import IPRoute from "../interfaces/IPRoute";

const PrivateRouter: React
    .FC<IPRoute> = ({ children }) => {
        const [isLogged, setIsLogged] = useState(false);
        const navigate = useNavigate();

        useEffect(() => {
            const key = localStorage
                .getItem('key');

            if (key) {
                setIsLogged(true);
                navigate('/app');
            } else {
                setIsLogged(false);
                navigate('/');
            }
        }, [navigate]);

        return (
            <>
                {isLogged ? children : <Home />}
            </>
        );
    }

export default PrivateRouter;

PrivateRouter.propTypes = {
    children: PropTypes.node.isRequired
}
