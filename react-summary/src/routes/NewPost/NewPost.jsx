import classes from './NewPost.module.css';
import Modal from "../../components/Modal/Modal.jsx";
import {Link, Form, redirect} from "react-router-dom";

export default function NewPost() {

    return (
        <Modal>
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="author" id="name" required/>
                </p>
                <p className={classes.actions}>
                    <Link to=".." type={"button"}>Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export async function action({request}) { // request === data.request
    const formData = await request.formData();
    const formEntries = Object.fromEntries(formData); // { body: '...'; author: '...'}

    if (formEntries.body
        && formEntries.body.length > 0
        && formEntries.author
        && formEntries.author.length > 0
    ) {
        const newPost = {
            id: 'post-'+Math.random(), author: formEntries.author, body: formEntries.body,
        };

        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then().catch((error) => {
            console.error("Error storing new post:", error);
        });
    }

    return redirect('/');
}