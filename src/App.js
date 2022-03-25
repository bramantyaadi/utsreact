
import Project1 from './project1';
import Qbank from './quiz';
import ProductData from './ProductData';
import Project2 from './Project2';
function App() {
  return (
    <div className="App">
      <Project1 data={Qbank}/>
      <hr></hr>
      <Project2 data={ProductData}></Project2>
      
    </div>
  );
}

export default App;
