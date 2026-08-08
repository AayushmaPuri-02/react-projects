import Header from './components/Header'
import Entry from './components/Entry'
import './App.css'
import data from "./data.js"

function App() {
  const entryElements = data.map((list)=>{
    return <Entry
                            key = {list.id}
                            img = {list.img}   //the img here is the prop name and on the right is specifying the value. so prop obj will be {title = "mountain"}
                            title = {list.title}
                            country = {list.country}
                            maps = {list.googleMapsLink}
                            dates = {list.dates}
                            text = {list.text}
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
