import { Link } from "react-router-dom";
import styles from './App.module.css';

const Home = () => {
  return (
    <div className={styles.App}>
      <h1>Welcome to THE shop</h1>
      <p>
        Think of anything you need, and make sure it starts with &quot;THE&quot;
        because this is THE shop
      </p>
      <Link to="/shop">Click here for the shop</Link>
    </div>
  );
};

export default Home;
