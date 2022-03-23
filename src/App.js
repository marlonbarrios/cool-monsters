
import './App.css';
import {useState, useEffect} from 'react'
import CardList from './components/card-list/CardList';
import  SearchBox  from './components/search-box/SearchBox';


const App = () => {
const [searchField, setSearchField] = useState('');
const [title, setTitle] = useState('');
const [monsters, setMonsters] = useState([])
const [filteredMonsters, setFilteredMonsters ] = useState(monsters)


useEffect(() => {
  console.log('effect fired boom')
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((users) => setMonsters(users));
},[]);


useEffect(() => {
const newFilteredMonsters = monsters.filter((monster) => {
  return monster.name.toLocaleLowerCase().includes(searchField)
});
setFilteredMonsters(newFilteredMonsters);
}, [monsters, searchField]);


const onTitleChange= (event) => {
  const setTitleString = event.target.value.toLocaleLowerCase();
setTitle(setTitleString)
}


const onSearchChange= (event) => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
setSearchField(searchFieldString)
}



  return (  
  <div className="App">
  <h1 className='app-title '>{title}</h1>
  <SearchBox
  onChange={onTitleChange}
  placeholder='Set App Title'
  className='monsters-search-box'
 />
  <br />
  <SearchBox
  onChange={onSearchChange}
  placeholder='Search Mosters'
  className='title-search-box'
 />


  <CardList monsters={filteredMonsters} />

</div>
)
}












export default App;
