import React from "react";

import Profile from "./component/Profile/Profile";
import user from './component/Profile/user.json';
import statisticalData from './component/Statistics/statistical-data.json';
import Statistics from './component/Statistics/Statistics';
import FriendList from './component/Friends/FriendList';
import friends from './component/Friends/friends.json';
import transaction from './component/Transactions/transactions.json';
import TransactionHistory from './component/Transactions/TransactionHistory';


function App() {
  return (
   <div>
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={statisticalData} />
<Statistics stats={statisticalData} />
<FriendList friends={friends}/>
< TransactionHistory items={transaction}/>
</div>
  );
}

export default App;
