import styles from '../styles/HeadBar.module.css';
import { useState } from 'react';


interface InputProps {
  onSearch: (word: string) => void;
}

const HeadBar: React.FC<InputProps> = ({ onSearch }) => {
  const [word, setWord] = useState<string>('');

  const handleSearch = async () => {
    try {
      await onSearch(word);
    } catch (error) {
      console.error('Error when searching for word:', error);
      throw(error);
    }
  };


    return (
      <div className={styles.Bar}>
        <h1 className={styles.Dictionize}>Dictionize</h1>
        <div className={styles.SearchBox}>
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder='Write the word here'
            className={styles.Input}
          />
          <button 
          className={styles.Button}
          onClick={handleSearch}
          >Submit</button>
        </div>
      </div>

    );
  }

  export default HeadBar;
