import Header from './components/Header'
import Entry from './components/Entry'
import './App.css'
import data from "./data.js"

function App() {
  const entryElements = data.map((list)=>{
    return <Entry
                            key = {list.id}
                            list = {list}
                            />
  })
  return (
    <>
    <div className="div1">
       <Header/>
        <main className="container">
                {entryElements}
            </main>
    </div>
    </>
  )
}

export default App
