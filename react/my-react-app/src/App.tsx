// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
// We are directly using the Profile component in the App component,
// bcuz it has export as default in profile.tsx 
import Profile from './Profile/Profile.tsx'
import {Button} from './Profile/Profile.tsx'

function App() {
  const person = {
    name: 'Andrew Hoggard',
    description: 'I am a React developer and I am learning Vite',
    theme: {
      backgroundColor: 'lightblue',
      color: 'black',
      padding: '10px',
      borderRadius: '5px',
    },
  }

  return (
    //Rule 1 - We call it a fragment, it is a way to group multiple elements without adding an extra node to the DOM
    <>
      <div style={person.theme}>
        <h1>{person.name}</h1>
        <p>{person.description}</p>
      </div>
       {/* Rule #2 all tags include single tags must be closed, for example, the img tag must be closed with a slash at the end of the tag */}
       {/* Rule #4 all attributes must be wrapped in curly braces, for example, the src attribute of the img tag must be written as src={heroImg} in React */}
      
      {/* Rule #3 all attributes must be in camelCase, for example, the class attribute must be written as className in React.
       class is reserved in React/HTML so we need use className */}
      <div style={{ backgroundColor: 'lightgray' }} className="profiles">
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      </div> 
      <Button />
    </>
  )
}

export default App
