import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedAuth = localStorage.getItem('isAdminAuthenticated');
        if (storedAuth === 'true') {
            setIsAuthenticated(true);
            setUser({ username: 'admin' });
        }
    }, []);

    const login = (username, password) => {
        // Mock authentication
        if (username === 'admin' && password === 'password') {
            setIsAuthenticated(true);
            setUser({ username });
            localStorage.setItem('isAdminAuthenticated', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isAdminAuthenticated');
    };

    return (
        <AdminContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
};
