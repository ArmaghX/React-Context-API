import React, {useContext} from 'react';
import {DataContext} from '../context/DataContext';

const data = {
    name: "Yeray",
    age: 28
};

const ChangeDataButton = () => {
    const {setData} = useContext(DataContext);
    return (
        <button onClick={() => setData(data)}>Change Data!</button>
    )
}

export default ChangeDataButton;

