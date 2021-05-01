
import styles from './dashboard.module.css'
import Action from "./Action";

const Dashboard = () => {
    return(
        <div className={styles.base}>
            <Action />
        </div>
    );
}

export default Dashboard;