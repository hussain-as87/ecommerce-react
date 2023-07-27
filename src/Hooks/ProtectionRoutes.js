import {Navigate, Outlet,} from "react-router-dom";
import {useMemo} from "react";

export const ProtectionRoutes = ({element: Element, authType, children}) => {
    const storedUser = useMemo(() => localStorage.getItem('user'), []);
    const parsedUser = useMemo(() => (storedUser ? JSON.parse(storedUser) : null), []);
    const userRole = parsedUser?.role;

    if (!userRole) {
        return <Navigate to="/login"/>;
    }
    if (authType && userRole !== authType) {
        return <Navigate to="/"/>;
    }

    return (
        <>
            {children}
            <Outlet/>
        </>
    );
};
export const ProtectionLoginRoutes = ({children}) => {
    const token = useMemo(() => localStorage.getItem('token'), []);

    if (token) {
        return <Navigate to="/"/>;
    }

    return (
        <>
            {children}
            <Outlet/>
        </>
    );
};
