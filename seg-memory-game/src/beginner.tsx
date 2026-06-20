import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './App.css'
import HomeButton from './components/home-button'

function Beginner() {

  // 9 tiles for beginner
  const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  // Pattern to remember
  const [pattern, setPattern] = useState<number[]>([])

  const [showPattern, setShowPattern] = useState(false)
  const [selectedTiles, setSelectedTiles] = useState<number[]>([])
  const [score, setScore] = useState<number | null>(null)

  function startGame() {
    //Chatgpt helped with the generating new patterns part of this
    setSelectedTiles([])
    setScore(null)

    const newPattern: number[] = []

    while (newPattern.length < 4) {
      const randomTile = Math.floor(Math.random() * 9)

      if (!newPattern.includes(randomTile)) {
        newPattern.push(randomTile)
      }
    }

    setPattern(newPattern)

    setShowPattern(true)

    setTimeout(() => {
      setShowPattern(false)
    }, 3000)
  }

  // Chatgpt helped on this function
  function handleTileClick(tile: number) {

    // Prevent clicking while pattern is showing
    if (showPattern) return

    // Prevent selecting the same tile twice
    if (selectedTiles.includes(tile)) return

    setSelectedTiles([...selectedTiles, tile])
  }

  function checkScore() {

    let correct = 0
    let wrong = 0

    selectedTiles.forEach(tile => {

      if (pattern.includes(tile)) {
        correct++
      }
      else {
        wrong++
      }

    })
  
    //So we dont get negtive
    setScore(Math.max(0, correct - wrong))
  }

  return (
    <>
      <div className='title'>
        Beginner Difficulty
        <span className='lightning'>⚡</span>
      </div>

      <div className='buttons'>
        <Button variant='success' onClick={startGame}>
          New Level
        </Button>
      </div>

      {/* Chatgpt helped on this div */}
      <div className='grid'>
        {tiles.map(tile => (
          <div
            key={tile}
            onClick={() => handleTileClick(tile)}
            className={`tile
              ${showPattern && pattern.includes(tile) ? 'green' : ''}
              ${selectedTiles.includes(tile) ? 'blue' : ''}
            `}
          />
        ))}
      </div>

      <div className='buttons'>
        <Button className='submit-button' onClick={checkScore}>
          Submit Guess
        </Button>
      </div>

      <div className='buttons'>
        <HomeButton />
      </div>
      
      <div className='score'>
        <h2>
          Score: {score} / {pattern.length}
        </h2>
      </div>
      <div className='score'>
        <h2>
          -1 point for each incorrect or forgotten tiles
        </h2>
      </div>

      
    </>
  )
}

export default Beginner