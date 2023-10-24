import styles from '../styles/home.module.css';
import { Cards } from '../components';

function Home(props) {
  const {recipes} = props;
  return(
    <div>
        <h1>Racipe App</h1>
        <div className={styles.searchBox}>
            <input type="text"  placeholder="Enter Recipe Name"/>
            <button>Search</button>
        </div>
        <div className={styles.recipes}>
            <Cards recipes={recipes}/>
        </div>
    </div>
  )
}


export default Home;