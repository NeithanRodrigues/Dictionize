import styles from '../styles/HeadBar.module.css';
import { useState } from 'react';


interface HeadBarProps {
  onSearch: (word: string) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setWord: (word: string) => void;
}

const HeadBar: React.FC<HeadBarProps> = ({ onSearch, onKeyPress, setWord }) => {
  const [localWord, setLocalWord] = useState<string>('');

  const handleSearch = async () => {
    try {
      await onSearch(localWord);
    } catch (error) {
      console.error('Error when searching for word:', error);
      throw (error);
    }
  };


  return (
    <div className={styles.Bar}>
      <h1 className={styles.Dictionize}>Dictionize</h1>
      <div className={styles.SearchBox}>
        <input
          type="text"
          value={localWord}
          onChange={(e) => {
            setLocalWord(e.target.value);
            setWord(e.target.value); 
          }}
          onKeyPress={onKeyPress}
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
