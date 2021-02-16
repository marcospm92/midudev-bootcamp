import './App.css';
import Mensaje from './Mensaje.js'


const Description = () => {
  return <p>Esta es la app del curso Fullstack Bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='blue' message='en un curso de React' />
      <Description />
    </div>
  )
}

export default App;
