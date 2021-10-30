import "./App.css";
import {
  Profile,
  // Statistics,
  Test as Test2,
  FriendList,
  TransactionHistory,
} from "./components/";
import Dkjfhalhdf from "./components";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile user={user} />
      {/* <Dkjfhalhdf title="Upload stats" stats={statisticalData} />;
      <Dkjfhalhdf stats={statisticalData} /> */}
      <Test2 title="Upload stats" stats={statisticalData} />;
      <Test2 stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
