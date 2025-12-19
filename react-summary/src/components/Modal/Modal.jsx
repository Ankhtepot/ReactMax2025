import styles from './Modal.module.css';
import {useNavigate} from "react-router-dom";

export default function Modal({children}) {
    const navigate = useNavigate();

    function closeHandler() {
        // navigate("/"); // OR
        navigate("..");
    }

    return (
        <>
            <div className={styles.backdrop} onClick={closeHandler}/>
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    );
}