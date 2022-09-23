import React, {useEffect} from 'react';
import ClientDetails from './clientDetails.pres';
import {useClientDetails} from "./clientDetails.hooks";

const ClientDetailsContainer = () => {
    const {baseVals, loadDefaults, addDefault} = useClientDetails();

    useEffect(() => {
        if (baseVals === null) {
            console.log('loading defaults');
            console.log('loading defaults');
            loadDefaults()
        }
    }, [baseVals])
    return (
        <ClientDetails
            baseVals={baseVals}
            addAnotherDefault={addDefault}
        />
    )
}

export default ClientDetailsContainer;