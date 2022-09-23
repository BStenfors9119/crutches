import Store from './index'
import axios from 'axios';

export function useTransactions() {
    const [{selectedTransaction, transactions, transactionsApiUrl}, setState] = Store.useStore();

    const loadTransactionsByTransactionId = async (transactionId) => {
        let transaction = null ;
        try {
            transaction = await axios.get(`${transactionsApiUrl}/find?transactionId=${transactionId}`)
        } catch (err) {
            console.log('Error retrieving batch')
            console.log(err);
        }

        setState(draft => {
            draft.selectedTransaction = transaction
        })
    }

    const loadTransactionsByClientId = (clientId) => {

    }


    return {
        selectedTransaction,
        transactions,
        loadTransactionsByClientId,
        loadTransactionsByTransactionId
    }
}