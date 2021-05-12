import React, {useState} from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data);
  return (<main>
    <section className='container'>
      {/* <h3>0 birthday today</h3> */}
      <h3>{people.length} birthday today</h3>
      <List
      people = {people}/>
      {/* <button onClick={() => console.log("you fucked me IT")}>Clear All</button> */}
      <button onClick={() => setPeople([])}>Clear All</button>

    </section>
  </main>);
  // <h2>reminder project setup</h2>;
}

export default App;
