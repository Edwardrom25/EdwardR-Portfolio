import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        char === '\n' ? 
          <br key={i} /> : 
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
