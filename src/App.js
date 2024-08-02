import './App.css';
import Navbar from './Components/Navbar';
import Biography from './Components/Biography';
import Timeline from './Components/Timeline';
import Achivement from './Components/Achivement';

function App() {


const events = [
  { date: '	7 July 1981 ', title: 'Born', description: 'Ranchi, Bihar (present-day Jharkhand), India'},
  { date: 'December 23, 2004', title: 'First Match', description: 'Dhoni started his One-Day International (ODI) career against Bangladesh at M A Aziz Stadium in Chattogram (Chittagong) on December 23, 2004. He did not have a great ODI debut as he was run out for a duck in that match.' },
  { date: 'Rajiv Gandhi Khel Ratna in 2007', title: 'First Award ', description: 'Dhoni was the ICC ODI Player of the Year in 2008 and 2009 (the first player to win the award twice); He has received several awards including the Rajiv Gandhi Khel Ratna in 2007 and the Padma Shri, the fourth highest civilian award in India. . Honored in 2009.' },
  { date: ' 2007 ICC World Twenty20, the 2011 Cricket World Cup', title: 'Successful Indian captain. ', description: 'Dhoni has captained the most international matches and is the most successful Indian captain. He has led India to victory in the 2007 ICC World Twenty20, the 2011 Cricket World Cup, and the 2013 ICC Champions Trophy, being the only captain to win three different limited overs ICC tournaments.' }
];




  return (
    <div >
      <Navbar />
      <div>
        <Biography />
        <hr></hr>
      </div>
      <h1 className='text-center py-3'>Timeline</h1>
      <Timeline events={events} />
      <Achivement />
    </div>
  );
}

export default App;
