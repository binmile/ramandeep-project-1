import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { Home } from './components/Router/Home'
import { About } from './components/Router/About'
import { MainHeader } from "./components/Router/MainHeader";
import Products from "./components/Router/Products"
import Feature from "./components/Router/Feature"
import New from "./components/Router/New"
import UserDetails from "./components/Router/UserDetails";
import NoMatch from "./components/Router/NoMatch";
import User from "./components/Router/User"
import Profile from "./components/Router/Profile"
import Parent from "./components/callBackhook/Parent";
import { ThemeContext } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box"
import { CompA } from "./components/context/CompA"
import { CompB } from "./components/context/CompB"
import { Form } from "./components/ControlledCom/Form"
import { LifeCycleA } from "./components/lifecycle/LifeCycleA";
import { ParentComp } from "./components/PureComponent/ParentComp"
import { Counter } from "./components/reducer/Counter"
import AllStates from "./components/state/AllStates";
import { UseRef } from "./components/UnControlled/UseRef";
import Counts from "./components/UseMemo/Counts";
import { Increment } from "./components/UseEffect/Increment";
import ComponentA from "./components/useReducerwithuseContext/ComponentA"
import Nav from "./components/Router/Nav"
import FetchingDatabyUseState from "./components/FetchingdatauseState/FetchingDatabyUseState";
import FetchingByUseReducer from "./components/Fetchingusereducer/FetchingByUseReducer";
const RoutesComponent = () => {
  const LazyContact = React.lazy(() => import("./components/Router/Contact"))

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}></Route>
        <Route path="useCallback" element={<Parent />} />
        <Route path="context" element={<ThemeContext><Box /></ThemeContext>} />
        <Route path="context/example" element={<CompA><CompB /></CompA>} />
        <Route path="controlledComponents" element={<Form />} />
        <Route path="lifecycle" element={<LifeCycleA />} />
        <Route path="pureComponent" element={<ParentComp name='' />} />
        <Route path="useReducer" element={<Counter />} />
        <Route path="states" element={<AllStates />} />
        <Route path="uncontrolled" element={<UseRef />} />
        <Route path="usememo" element={<Counts />} />
        <Route path="useEffect" element={<Increment />} />
        <Route path="reducerwithContext" element={<ComponentA/>} />
        <Route path="jsonByuseState" element={<FetchingDatabyUseState/>} />
        <Route path="jsonByuseReducer" element={<FetchingByUseReducer/>} />



        <Route path="routes" element={<MainHeader />} >
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={
            <React.Suspense fallback="loading...">
              <LazyContact />
            </React.Suspense>
          } />
          {/* <Route path="contact" element={<Contact/>}/> */}
          <Route path='user' element={<User />}>
            <Route path={':userid'} element={<UserDetails />} />

          </Route>
          <Route path="*" element={<NoMatch />} />
          <Route path='products' element={<Products />}>
            <Route index element={<Feature />} />
            <Route path="feature" element={<Feature />} />
            <Route path="new" element={<New />} />

          </Route>


          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>

    </>
  )
}

export default RoutesComponent
