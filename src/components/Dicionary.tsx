import React from 'react';
import styles from '../styles/Dicionary.module.css';

interface MeaningResponse {
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

interface DictionaryProps {
  meaning: MeaningResponse | null;
}

const Dictionary: React.FC<DictionaryProps> = ({ meaning }) => {
  if (!meaning || !meaning.meanings || meaning.meanings.length === 0) {
    return <p>There is no data to display yet. Please do a search.</p>;
  }

  return (
    <div className={styles.Dicionary}>
      {meaning.meanings.map((meaningObj, index) => (
        <div key={index}>
          <h2>{meaningObj.partOfSpeech}</h2>
          <br />
          {meaningObj.definitions.map((definition, defIndex) => (
            <div key={defIndex}>
              <p>{definition.definition}</p>
              {definition.example && <p><i>Example: {definition.example}</i></p>}
            </div>
          ))}

          {meaningObj.synonyms && meaningObj.synonyms.length > 0 && (
            <p><br /><b>Synonyms:</b> {meaningObj.synonyms.join(', ')}</p>
          )}
          {meaningObj.antonyms && meaningObj.antonyms.length > 0 && (
            <p><br /><b>Antonyms:</b> {meaningObj.antonyms.join(', ')}</p>
          )}
        </div>
      ))}

      {meaning.sourceUrls && meaning.sourceUrls.length > 0 && (
        <div>
          <p><br />Reference: <a href={meaning.sourceUrls[0]} target="_blank" rel="noopener noreferrer">{meaning.sourceUrls[0]}</a></p>
        </div>
      )}
    </div>
  );
};

export default Dictionary;
