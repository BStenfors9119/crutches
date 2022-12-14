import React, {useEffect} from 'react';
import Search from './search.pres';
import {useBatches} from "../store/batches.hooks";

const SearchContainer = () => {
    console.log('b c');
    const {batches, loadAllBatches} = useBatches();

    useEffect(() => {
        console.log('use effect');
        console.log(batches);
        if (batches === null) {
            console.log('loading batches');
            loadAllBatches()
        }
    }, [batches])

    return (
        <BatchList
            batches={batches}
        />
    )
}

export default SearchContainer;