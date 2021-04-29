import styles from "./instructions.module.css";

const Instructions = () => {
    return(
        <div>
            <h1>Welcome to the <span className={styles.title}>Hunter X Hunter</span> Nen <span className={styles.waterFont}>Water</span> Divinity Tester!!</h1>
        </div>
    );
}

export default Instructions;