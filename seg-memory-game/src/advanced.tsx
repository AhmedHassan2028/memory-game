import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './App.css'
import HomeButton from './components/home-button'
import BeginnerButton from './components/beginner-button'
import IntermediateButton from './components/intermediate-button'

function Advanced() {

  // 25 tiles for advanced
  const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

  // Pattern to remember
  const [pattern, setPattern] = useState<number[]>([])

  const [showPattern, setShowPattern] = useState(false)
  const [selectedTiles, setSelectedTiles] = useState<number[]>([])
  const [score, setScore] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)

  function startGame() {
    //Chatgpt helped with the generating new patterns part of this function
    setSelectedTiles([])
    setScore(null)
    setShowResults(false)

    const newPattern: number[] = []

    while (newPattern.length < 8) {
      const randomTile = Math.floor(Math.random() * 25)

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
    setShowResults(true)
  }

  return (
    <>
      <div className='title'>
        Advanced Difficulty
        <span className='lightning'>⚡</span>
      </div>

      <div className='info'>
        <h4>
          3 seconds to memorize and then re-create pattern
        </h4>
      </div>

      <div className='buttons'>
        <Button variant='success' onClick={startGame}>
          New Level
        </Button>
      </div>

      {/* Chatgpt helped on this div */}
      <div className='grid3'>
        {tiles.map(tile => (
          <div
            key={tile}
            onClick={() => handleTileClick(tile)}
            className={`tile3
              ${showPattern && pattern.includes(tile) ? 'green' : ''}
              ${!showResults && selectedTiles.includes(tile) ? 'blue' : ''}
              ${showResults &&
                selectedTiles.includes(tile) &&
                pattern.includes(tile)
                  ? 'green'
                  : ''}
              ${showResults &&
                selectedTiles.includes(tile) &&
                !pattern.includes(tile)
                  ? 'red'
                  : ''}
              ${showResults &&
                !selectedTiles.includes(tile) &&
                pattern.includes(tile)
                  ? 'yellow'
                  : ''}
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
        <BeginnerButton />
        <IntermediateButton />
      </div>


      <div className='score'>
        <h2>
          Score: {score} / {pattern.length}
        </h2>
      </div>

      <div className='info'>
        <h3>
          -1 point for each incorrect tile
        </h3>
      </div>
      <div className='info'>
        <h3>
          Green for correct tiles, Yellow for forgotten tiles, Red for incorrect tiles
        </h3>
      </div>
    </>
  )
}

export default Advanced