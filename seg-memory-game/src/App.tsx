import './App.css'
import Button from './components/beginner-button'
import Button2 from './components/intermediate-button'
import Button3 from './components/advanced-button'

function App() {


  return (
    <>
      <div className='title'>Pattern Mastery<span className='lightning'>⚡</span></div>
      <div className='slogan'>Train your memory by memorizing patterns!</div>
      <div className='difficulty'>Select a difficulty</div>
      <div className='buttons'>
        <Button />
      </div>
      <div className='buttons'>
        <Button2 />
      </div>
      <div className='buttons'>
        <Button3 />
      </div>
      
    </>
  )
}

export default App
