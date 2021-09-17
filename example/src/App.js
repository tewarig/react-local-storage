import React from 'react'

import { ExampleComponent, SetItem , GetItem , RemoveItem , Clear} from 'react-local-storage'

const App = () => {
  let value = ["Gaurav","Tewari"];
  let temp = SetItem("name",value);

  let item = GetItem("name");
   console.log(item);

   console.log(RemoveItem("name"));
   Clear();
  return <ExampleComponent text="Create React Library Example 😄" />
}

export default App
