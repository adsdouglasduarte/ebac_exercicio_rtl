import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn.awsli.com.br/2500x2500/2571/2571273/produto/210237534/batmovel-the-batman-2022-figura-batman-124-jada-toys-d821a2bc.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
