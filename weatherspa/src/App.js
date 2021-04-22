import { weatherAPI } from './api/api';
import './App.css';
import ChooseCity from './components/chooseCity/ChooseCity';
import DetailedInfo from './components/detailedInfo/DetailedInfo';

function App() {

  let ApiTest = () => {
    console.log(weatherAPI.getCitiesList());
  };

  ApiTest();

  return (
    <div className="App">
      <ChooseCity />
      <DetailedInfo />
    </div>
  );
}

export default App;
