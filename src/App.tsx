import{BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import {Home} from './components/Router/Home'
import {About} from './components/Router/About'
import {Contact} from './components/Router/Contact'
import { AllComponents } from "./AllComponents";
import { MainHeader } from "./components/Router/MainHeader";
import {Comp} from "./Comp"
const App:React.FC =()=>{
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/practice' element={<AllComponents/>}/>
        <Route path='/components' element={ <Comp/> }/>
        </Route>
      </Routes>
      </BrowserRouter>
    
    </div>

   

    );
}

export default App;
