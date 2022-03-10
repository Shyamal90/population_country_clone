import {useState} from 'react'
import './App.css';

function App() {
  // years array
  let years = [];
  let start = 1960;

  for(let i = 0 ; i < 59 ; i++){
    years.push(start++)
  }

  //create state for choosing year
  // const [curryear,setCurryear] = useState(0);


  const handleYear = (selected_year) => {
      console.log(selected_year);
  }


  //fetch data from api
  const getData = async () => {
    const response = await fetch(`https://codejudge-question-artifacts.s3.ap-south-1.amazonaws.com/poplution-countries-yearwise.json`);

    const data = await response.json();
    console.log(data);
  }

  getData()

  return (
    <div className="App">
      <div className="container">
         <h1>Top 10 Population Countries </h1> 
         <div className="selectYear">
             <select className="select-year" onChange={(event)=>{
               let selected_year = event.target.value;
               handleYear(selected_year);
             }}>
               {
                 years.map((year)=>{
                   return <option value={year}>{year}</option>
                 })
               }
              </select> 
          </div> 
      </div>
    </div>
  );
}

export default App;
