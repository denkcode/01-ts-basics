import axios from "axios";
interface Post {
    id: number,
    title: string,
    body: string,
}

async function fetchPosts(postId?: number): Promise<Post[]> {
  const url = postId
    ? `https://jsonplaceholder.typicode.com/posts/${postId}`
    : 'https://jsonplaceholder.typicode.com/posts';

  const response = await axios.get<Post[]>(url);
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
