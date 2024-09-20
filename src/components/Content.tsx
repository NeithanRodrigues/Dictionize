import styles from '../styles/Content.module.css';

function Content() {
  return (
    <div className={styles.Content}>

      <h1> How to use</h1>

      <p>To use Dictionize, just type any word into the search bar and click "Submit." The site will instantly fetch and display the word's definition, related terms, and even examples of usage. It’s a fun, efficient way to learn and discover new words!</p>

      <h1> About</h1>
      <p>This is your ideal platform to explore word meanings, synonyms, antonyms and more! Whether you're a student, writer, or just curious about the language, this site makes it easy to quickly find and understand word definitions. Designed with a simple and intuitive interface, Dictionize is here to improve your vocabulary in just a few clicks.</p>

      <p>This project was created by <a href="https://www.instagram.com/ne1than/">Nathan Rodrigues</a>, a Brazilian computer science student as a way to practice and improve programming skills. Built using React and TypeScript, the development of this site has helped the developer refine knowledge in front-end technologies, while making something practical and useful for others.
      </p>

      <p>Thank you for visiting, and we hope you enjoy using Dictionize!</p>

    </div>
  );
}

export default Content;