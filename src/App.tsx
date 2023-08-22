
// import BasicTypes from "./typescript/BasicTypes"
// import LiteralObjects from './typescript/LiteralObjects.tsx';
// import Functions from './typescript/Functions.tsx';
// import Counter from "./components/Counter"
// import CounterWithHook from "./components/CounterWithHook"

import Login from "./components/Login"
import Users from "./components/Users"

const App = () => {

  // let x: string = 'Neider';

  return (
    <div className="mt-2">
      <h1>Introduccion a TS</h1>
      <hr />
      {/* <BasicTypes nameAlter={x} /> */}

      {/* <LiteralObjects /> */}

      {/* <Functions /> */}

      {/* <Counter /> */}

      {/* <CounterWithHook /> */}

      <Login />

      <Users />
    </div>
  )
}

export default App