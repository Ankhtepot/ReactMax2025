import PostsList from "../components/PostsList/PostsList.jsx";
import {Outlet} from "react-router-dom";

function Posts() {
    return (
        <>
            <Outlet/>
            <main>
                <PostsList/>
            </main>
        </>
    );
}

export default Posts;

export async function loader() {
    let response;

    try {
        response = await fetch('http://localhost:8080/posts');
    } catch (e) {
        console.error("Error fetching posts:", e);
        return;
    }

    const data = await response.json();

    return data.posts;
}
