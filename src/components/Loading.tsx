import styles from '../styles/Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.LoadingSpinner}>
    <div className={styles.Spinner}></div>
    <p>Loading...</p>
  </div>
  );
}

export default Loading;