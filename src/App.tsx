
import './App.css';
import { Greet } from './components/Greet'
import { NameList } from './components/NameList';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { personName, nameList } from './components/dummydata'
import { User } from './components/User'
import { Counter } from './components/Counter'
function App() {
  return (
    <div className="App">
      <Greet name="vishwas" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <NameList name={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Lenardo Dicpario!</Heading>
      </Oscar>
      <User />
      <Counter />

    </div>
  );
}

export default App;
