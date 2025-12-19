import Post from "./Post/Post.jsx";
import styles from './PostsList.module.css';
import {useLoaderData} from "react-router-dom";

const courseTaskData = [
    // {id: 1, author: 'Alice', body: 'This is the first course task.'},
    // {id: 2, author: 'Bob', body: 'This is the second course task.'},
]

const ListState = "Loading" | "NoPosts" | "HasPosts";

export default function PostsList() {
    /* causes infinite loop
    fetch('http://localhost:8080/posts')
        .then(response => response.json())
        .then(json => {
            if (json && json.length > 0) {
                setPosts(json);
            }
        });

     */

    const posts = useLoaderData();

    const state = posts.length > 0 ? "HasPosts" : "NoPosts"; // Does not work, whole component shows up AFTER
    // loading is done, its default, it can be handled

    return (
        <>
            {/*{listState === "IsLoading" && <Loader />}*/}
            {state === "HasPosts" && <div className={styles.contentWrapper}>
                <ul className={styles.posts}>
                    {posts.map((item) => (
                        <Post key={item.id} name={item.author} body={item.body} postId={item.id} />
                    ))}
                </ul>
            </div>}
            {state === "NoPosts" && <div className={styles.noPosts}>
                <p>No posts found.</p>
                <p>Maybe create one?</p>
            </div>}
        </>
    );
};