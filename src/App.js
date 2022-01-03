import Input from './components/Input';
import Chart from './components/Chart';
import { Helmet } from 'react-helmet';
import './App.css';

const App = () => {
  return (
    <center className="place-content-center">
      <Helmet htmlAttributes={{ lang: 'et' }}>
        <title>Koroonasurmad</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <div className=" mx-auto my-8 sm:mx-8 bg-slate-50 p-8 rounded-lg ">
        <h1 className="text-3xl font-bold mb-8">Koroonasurmade statistika</h1>
        <Input />
        <Chart />
      </div>
    </center>
  );
};

export default App;
