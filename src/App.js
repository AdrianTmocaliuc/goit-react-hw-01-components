import "./App.css";
import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from "./components/";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics statistic={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
