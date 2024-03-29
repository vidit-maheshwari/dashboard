
import './App.css'
import Maindash from './Components/MainDash/Maindash'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <div>
            <Maindash/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
