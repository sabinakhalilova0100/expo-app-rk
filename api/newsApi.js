
export async function fetchNews() {
    const response = await fetch('https://dummyjson.com/posts');
    if (!response.ok) {
      console.log('Server responded with status:', response.status);
      throw new Error('Failed to fetch news');
    }
    const data = await response.json();
    return data.posts; 
  }


