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
    <div className="flex flex-col md:flex-row md:justify-between items-center p-30 bg-[#A0E79E]">
      <h1 className="md:text-5xl text-4xl m-5 font-bold text-white">Dictionize</h1>
      <div className="items-center mb-5 md:m-0 md:mr-5">
        <input
          type="text"
          value={localWord}
          onChange={(e) => {
            setLocalWord(e.target.value);
            setWord(e.target.value); 
          }}
          onKeyPress={onKeyPress}
          placeholder='Search here'
          className="md:w-[350px] w-[200px] rounded-md py-1 px-2 mr-5 text-gray-800 placeholder-gray-800 bg-[#D0F3CF]"
        />
        <button
          className="bg-[#D0F3CF] hover:bg-[#B8EDB6] text-gray-800 rounded-md py-1 px-2"
          onClick={handleSearch}
        >Submit</button>
      </div>
    </div>

  );
}

export default HeadBar;
