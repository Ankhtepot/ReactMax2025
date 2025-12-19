import styles from './Post.module.css';
import {Link} from "react-router-dom";

export default function Post({postId, name, body}) {

    return (
        <li className={styles.post}>
            <Link to={postId}>
                <p className={styles.author}>Name: {name}</p>
                {body && <p className={styles.text}>Body: {body}</p>}
            </Link>
        </li>
    )
}