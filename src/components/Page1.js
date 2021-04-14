import React, {useContext} from 'react';
import {DataContext} from '../context/DataContext';

const Page1 = () => {
    const {data} = useContext(DataContext);
    return (
        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>
    )
}

export default Page1;


