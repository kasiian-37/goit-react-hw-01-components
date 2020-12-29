import React from "react";
import Conteiner from './component/Conteiner/Conteiner';
import Profile from "./component/Profile/Profile";
import user from './component/Profile/user.json';

function App() {
  return (
   <Conteiner>
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
     
</Conteiner>
  );
}

export default App;
