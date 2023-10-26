const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllPosts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/`);

        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
};