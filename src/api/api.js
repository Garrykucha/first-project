import axios from "axios";

export const getPosts = async (page, limit) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: page,
                _limit: limit,
            }
        });

        return await response;
    } catch (error) {
        console.log('error', error);
    }
}
