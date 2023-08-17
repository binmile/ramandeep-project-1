
import './App.css';
import {Greet} from './components/Greet'
import { NameList } from './components/NameList';
import { Oscar } from './components/Oscar';
import {Person} from './components/Person'
import {Status} from './components/Status'
import{Heading} from './components/Heading'
function App() {
  const personName={
    first:'Raman',
    last:'Saini'
  }
  const nameList=[
    {
      first:"Bruce",
      last:"Wayne"
    },
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Princess',
      last:'Diana'
    }
  ]
  return (
    <div className="App">
     <Greet name="vishwas" messageCount={20} isLoggedIn={false}/>
     <Person name={personName}/>
     <NameList name={nameList} />
     <Status status="loading" />
     <Heading>Placeholder text</Heading>
     <Oscar>
      <Heading>Oscar goes to Lenardo Dicpario!</Heading>
     </Oscar>
   
    </div>
  );
}

export default App;
