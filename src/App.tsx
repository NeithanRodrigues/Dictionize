import './App.css';
import React, { useState } from 'react';
import HeadBar from './components/HeadBar'; // Certifique-se de que o caminho está correto
import Dictionary from './components/Dictionary';
import { searchWord } from './api/api';
import Content from './components/Content';
import Loading from './components/Loading';

export interface MeaningResponse {
  word: string;
  phonetic: string;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
    }>;
    synonyms?: string[];
    antonyms?: string[];
  }>;
  sourceUrls: string[];
} 

const App: React.FC = () => {
  const [meaning, setMeaning] = useState<MeaningResponse | null>(null);
  const [word, setWord] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [subTitle, setSubTitle] = useState<string | null>('We are waiting you search for the word...');
  const [loading, setLoading] = useState<boolean>(false);
  const HandleSearchWord = async (word: string) => {
    setError(null);
    setLoading(true);
    setSubTitle(null);
    setWord(word);
    try {
      const result = await searchWord(word);
      setTimeout(() => {
        setLoading(false);
        setMeaning(result);
        setSubTitle(`Results for the search: ${word}`);
      }, 1500);
      
    } catch (error) {
      console.error('Error when searching for word:', error);
      setMeaning(null);
      setError("I can't find the meaning of this word. Sorry!:(")
      setSubTitle(null);
      setLoading(false);
    }
  }
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      HandleSearchWord(word); // Usando o estado 'word'
    }
  };

  return (
    <div>
      <HeadBar onSearch={HandleSearchWord} onKeyPress={handleKeyPress} setWord={setWord} />
      
      
      <div id="TitleContent">
      <h1>Welcome to Dictionize!</h1>
        {subTitle ? (
          <h3>{subTitle}</h3>
        ): null }
      </div> 
      
      {loading ? (
        <Loading />
      ) : meaning ? (
        <Dictionary meaning={meaning} />
      ) : (
        <div className="error-message">{error}</div>
      )}
      <Content />
    </div>
  );
}

export default App;
