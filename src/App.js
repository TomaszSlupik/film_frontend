import './App.scss';
import {useState, useEffect} from 'react'

function App() {


  const [movies, setMovies] = useState([])

  const [newTitle, setNewTitle] = useState()
  const [newKind, setNewKind] = useState()

  useEffect(() => {
      fetch("http://127.0.0.1:8000/api/serializerFilm/", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token 50ce1d1b711a2f020e6d2b0878004d5caa015b73"
        }
      }).then(res => res.json())
      .then( res => setMovies(res))
      .catch(err => console.log(err))
  }, [])

  const saveToDjango = async (e) => {
    e.preventDefault()
  }

  
  return (
    <div className="app">
      <div className="app__add">
          <form>
            <label htmlFor="fname"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            >Tytuł fimu</label>
              <input type="text" id="fname" name="fname"></input>
              <label htmlFor="cars">Wybór filmu:</label>
                <select name="cars" id="cars">
                  <option value="Filmy akcji">Filmy akcji</option>
                  <option value="Dramat">Dramat</option>
                  <option value="Komedia">Komedia</option>
                  <option value="Film dokumentalny">Film dokumentalny</option>
                  <option value="Horror">Horror</option>
                  <option value="Komedia romantyczna">Komedia romantyczna</option>
                  <option value="Fantastyczny">Fantastyczny</option>
                  <option value="Fantastyczno-naukowy">Fantastyczno-naukowy</option>
                </select>
                <button
                onClick={saveToDjango}
                >Zapisz</button>
          </form> 
      </div>
          {
            movies.map((el, index) => {
              return (
                <div key={index}>
                  <div style={{color: '#fff', fontSize: '2rem'}}>{el.title}</div>
        
                  {el.time}min
                </div>
              )
            })
          }
    </div>
  );
}

export default App;
