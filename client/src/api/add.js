import axios from 'axios';
import URLS from './urls.js'

async function addMember(memberInfo) {

    console.log(memberInfo)

    try {
        const response = await axios.post(`${URLS.HTTP}/new`, memberInfo)

        console.log('Response:', response.data)

    } catch(err) {
        console.error('error adding member:', err)
    }
    
};

export default addMember;