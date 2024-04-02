import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { reducer } from "./Reducer";

const ApiProvider = createContext();

const Service_API_Provider = ({ children }) => {

    const api = `https://api.escuelajs.co/api/v1/products`;

    const initialState = {
        loading: true,
        api_data: []
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchapi = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            dispatch({
                type: "api_fetched",
                payload: {
                    load: false,
                    api: data
                }
            });
        } catch (error) {
            console.error("Error fetching API:", error);
        }
    }

    useEffect(() => {
        fetchapi();
    }, []);



    return (
        <ApiProvider.Provider value={{ state }}>
            {children}
        </ApiProvider.Provider>
    )
}

export const useProvider = () => {
    return useContext(ApiProvider);
}

export default Service_API_Provider;
