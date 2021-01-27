import './App.css'
import Navbar from './components/Navbar'
import ContactList from './components/ContactList'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import { RiHomeLine } from 'react-icons/ri'

function App() {
  const fav = false
  return (
    <div className="App">
      <Navbar />
      <ContactList fav={fav} />
      <div className="button">
        <li className="pointer"><AiOutlineUserAdd /></li>
        <li className="pointer">{fav?<RiHomeLine />:<MdFavoriteBorder />}</li>
      </div>
    </div>
  );
}

export default App;
