import React from 'react';
import {Button, List, ListItem, ListItemText, ListSubheader} from '@material-ui/core';
import {useSearchStyles} from "./search.styles";
import {useTheme} from "@material-ui/core/styles";

const Search = props => {
    const classes = useSearchStyles();
    const theme = useTheme();
    const {batches} = props;

    let batchItems = '';
    if(batches !== null && batches.length > 0) {
        batchItems = batches.map((batch, idx) => {
            return (
                <ListItem key={idx} button onClick={() => {
                    console.log('batch selected');
                    console.log(batch.id);
                }}>
                    <ListItemText>{batch.id} - ({batch.client_id})</ListItemText>
                </ListItem>
            )
        })
    }

    return (
        <List>
            <ListSubheader>Batches</ListSubheader>
            {batchItems}
        </List>
    )
}

export default Search;