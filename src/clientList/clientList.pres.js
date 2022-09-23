import React from 'react';
import {Button, List, ListItem, ListItemText, ListSubheader} from '@material-ui/core';
import {useClientListStyles} from "./clientList.styles";
import {useTheme} from "@material-ui/core/styles";
import {useClientList} from "./clientList.hooks";

const ClientList = props => {
    const classes = useClientListStyles();
    const theme = useTheme();
    const {onClientSelected} = useClientList()

    return (
        <List>
            <ListSubheader>Clients</ListSubheader>
            <ListItem button onClick={() => {
                onClientSelected("Regions")
            }}>
                <ListItemText>Regions</ListItemText>
            </ListItem>
        </List>
    )
}

export default ClientList;