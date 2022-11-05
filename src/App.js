import "./App.scss";
import "./theme/antd-customized.less";
import Router from "./routes/Routes";
import Contact from "./components/Contact";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
function App() {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
