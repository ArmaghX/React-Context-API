import React, {createContext, useState} from 'react';

export const DataContext = createContext();

const initData = {
    name: "Alvaro",
    age: 29
};

export const DataProvider = ( {children} ) => {
    const [data, setData] = useState(initData);
    return (
        <DataContext.Provider
            value={{data, setData}}
        >
            {children}
        </DataContext.Provider>
    )
};
