import React from 'react'

import { ExampleComponent, FromHook }  from 'react-local-storage'

const App = () => {
  // let value = ["Gaurav","Tewari"];
  // let temp = SetItem("name",value);

  // let item = GetItem("name");
  //  console.log(item);

  //  console.log(RemoveItem("name"));
  //  Clear();
  const [name, setName] = FromHook("name","Gaurav");


  return(
  <>
   <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
  <ExampleComponent text="Create React Library Example 😄" />
  </>);
}

export default App
