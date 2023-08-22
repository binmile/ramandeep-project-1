import React from 'react'

import { Greet } from './components/state/Greet'
import { NameList } from './components/state/NameList';
import { Oscar } from './components/state/Oscar';
import { Person } from './components/state/Person'
import { Status } from './components/state/Status'
import { Heading } from './components/state/Heading'
import { personName, nameList } from './components/dummydata'
import { User } from './components/state/User'
import { Counter } from './components/reducer/Counter'
import { ThemeContext } from './components/context/ThemeContext';
import {Box} from './components/context/Box'
import { CompA } from './components/context/CompA';
import { CompB } from './components/context/CompB';
import { UseRef } from './components/UnControlled/UseRef';
import {Increment} from './components/UseEffect/Increment'
import {Form} from './components/ControlledCom/Form'
import {LifeCycleA} from './components/lifecycle/LifeCycleA'
import ParentComp from './components/PureComponent/ParentComp';
export const AllComponents:React.FC  = () => {
  return (
    <div>
      <Greet name="vishwas" messageCount={20} isLoggedIn={false} />
      <Person first={personName.first} last={personName.last} />
      <NameList name={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Lenardo Dicpario!</Heading>
      </Oscar>
      <User />
      <Counter/>
      {/* context */}
<ThemeContext><Box/></ThemeContext>
<CompA><CompB/></CompA>
{/* useRef */}

<UseRef/>

{/* useEffect */}
<Increment/>
{/*  Controlled Components */}
    <Form/>

   {/* class LifeCycle */}
   <LifeCycleA/>

   {/* pure Component */}
   <ParentComp name=''/>
    </div>
  )
}

