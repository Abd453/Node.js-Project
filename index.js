const axios = require('axios');

const fetchData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data fetched from API:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

fetchData();
