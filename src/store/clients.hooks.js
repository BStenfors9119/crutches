import Store from './index';
import axios from 'axios';

export function useClients() {
    const [{selectedClient, clients, clientApiUrl}, setState] = Store.useStore();


    const loadClients = async (batchId) => {
        let clients = null ;
        try {
            clients = await axios.get(`${clientApiUrl}`)
        } catch (err) {
            console.log('Error retrieving clients')
            console.log(err);
        }

        setState(draft => {
            draft.clients = clients
        })
    }


    return {
        selectedClient,
        clients,
        loadClients
    }
}