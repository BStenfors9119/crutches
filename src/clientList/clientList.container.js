import React, {useEffect} from 'react';
import ClientList from './clientList.pres';
import {useClientList} from "./clientList.hooks";

const ClientListContainer = () => {
    const {baseVals, loadDefaults, addDefault} = useClientList();

    useEffect(() => {
        if (baseVals === null) {
            console.log('loading defaults');
            console.log('loading defaults');
            loadDefaults()
        }
    }, [baseVals])
    return (
        <ClientList
            baseVals={baseVals}
            addAnotherDefault={addDefault}
        />
    )
}

export default ClientListContainer;