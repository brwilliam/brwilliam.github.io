
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <ManageData /> <br />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
