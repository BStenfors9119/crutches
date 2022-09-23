import React from 'react';
import {Button} from '@material-ui/core';
import {useClientDetailsStyles} from "./clientDetails.styles";
import {useTheme} from "@material-ui/core/styles";

const ClientDetails = props => {
    const classes = useClientDetailsStyles();
    const theme = useTheme();
    const {baseVals, addAnotherDefault} = props;

    console.log('baseVals');
    console.log(baseVals);

    let finalVal = baseVals === null ? "null" : baseVals;
    return (
        <div>
          Hello client details {finalVal}!
            <Button onClick={addAnotherDefault}>View Batches</Button>
        </div>
    )
}

export default ClientDetails;