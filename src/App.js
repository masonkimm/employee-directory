import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Employee from './components/Employee';
import Footer from './components/Footer';

function App() {
  // useEffect(() => {
  //   Axios.get('https://randomuser.me/api/?results=50').then((response) => {
  //     console.log(response.data.results);

  //     let employeeData = response.data.results.map((employee) => ({
  //       ...employee,
  //       tag: [],
  //     }));
  //     setRecord(employeeData);
  //     // setRecord(response.data.results);
  //   });
  // }, []);

  return (
    <div className="App">
      <div className="heading">
        <Heading />
      </div>
      <div className="container">
        <Employee />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
