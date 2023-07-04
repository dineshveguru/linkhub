import "./App.css";
import data from "./components/data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="heading--container">
        <h1 className="App--heading">Link Hub🚀</h1>
      </div>
      <div className="cards--container">
        {data.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
