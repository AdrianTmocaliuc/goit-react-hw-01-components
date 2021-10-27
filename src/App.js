import "./App.css";
import { Profile, Statistics } from "./components";
// import Statistics from "./components/Statistics";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";

function App() {
  return (
    <div className="user">
      <Profile user={user} />
      <Statistics statisticalData={statisticalData} />
    </div>
  );
}

export default App;
