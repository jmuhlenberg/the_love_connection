// console.log('connected to app.js');

// we may want to limit the user's input - make selects for hairColor, eyeColor, build, gender, height, age.

//would like to compartmentalize the app at somepoint - i.e. a class for Sign Up, a class for Log In, etc.

class App extends React.Component {

  state = {
    thisusr: null,
    currUse: '',
    users:[]
  }

  handleChange = (event) => {

    this.setState({ [event.target.id]: event.target.value })

  }

  //create new user
  handleSubmit = (event) => {
  event.preventDefault()
  axios
    .post('/user', this.state)
    .then(response => {
      this.setState({ users: response.data, userid: '', name:'', age: '', height: '', gender: '', build: '', eyeColor: '', hairColor: '', image: '', likes:[]}),
      console.log(response.data);
    })
  }

  //GET Matches (Log In function?)
  getMatches = (event) => {
    event.preventDefault()
    console.log(this.state.currUse);
    axios.get(`/user/${this.state.currUse}`).then(
      (response) => {
        this.setState({
          thisusr: response.data
        })
        console.log(response.data);
      }
    )
  }

  //update user info
  updateUser = (event) => {
  event.preventDefault()
  const id = event.target.id
  axios.put('/songs/' + id, this.state).then(response => {
    this.setState({
      users: response.data,
      userid: '',
      name: '',
      age: '',
      height: '',
      gender: '',
      build: '',
      eyeColor: '',
      hairColor: '',
      image: '',
      likes: {}
    })
  })
  }

  componentDidMount = () => {
    axios.get('/user').then(response => {
      this.setState({
        users: response.data
      })
    })
  }

  render = () => {
    console.log(this.state.thisusr, this.state.users);
    const matches = this.state.thisusr
      ? this.state.users.filter(user => {
        console.log('were getting here');
        const attributes = Object.keys(this.state.thisusr.likes).slice(1)
        console.log(attributes)
        for(let x=0;x<6;x++){
          console.log(this.state.thisusr.likes[attributes[x]], user[attributes[x]])
          if(this.state.thisusr.likes[attributes[x]] !== user[attributes[x]]){
            return false
          }
        }
        return true
      })
      : []

    return(
      <div className='siteContainer'>
        <div className='signUp'>
          <h2>Sign Up</h2>
          <details>
          <summary>Click Triangle to Create a New User</summary>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="userid">User ID</label>
              <br/>
              <input type="text" id="userid" onChange={this.handleChange} />
              <br/>
              <label htmlFor="name">Name</label>
              <br/>
              <input type="text" id="name" onChange={this.handleChange} />
              <br/>
              <label htmlFor="age">Age</label>
              <br/>
              <select id='age' onChange={this.handleChange}>
                <option>-----</option>
                <option value='young'>18-25</option>
                <option value='golden'>26-35</option>
                <option value='sunset'>36-40</option>
                <option value='adults'>41-48</option>
                <option value='mature'>49+</option>
              </select>
              <br/>
              <label htmlFor="height">Height</label>
              <br/>
              <select id='height' onChange={this.handleChange}>
                <option>-----</option>
                <option value='short'>145-160cm</option>
                <option value='medium'>161-171cm</option>
                <option value='tall'>171-190cm</option>
              </select>
              <br/>
              <label htmlFor="gender">Gender</label>
              <br/>
              <select id='gender' onChange={this.handleChange}>
                <option>-----</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              <br/>
              <label htmlFor="build">Build</label>
              <br/>
              <select id='build' onChange={this.handleChange}>
                <option>-----</option>
                <option value='slender'>Slender</option>
                <option value='athletic'>Athletic</option>
                <option value='stocky'>Stocky</option>
                <option value='plus'>Plus</option>
              </select>
              <br/>
              <label htmlFor="eyeColor">Eye Color</label>
              <br/>
              <select id='eyeColor' onChange={this.handleChange}>
                <option>-----</option>
                <option value='brown'>Brown</option>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
              </select>
              <br/>
              <label htmlFor="hairColor">Hair Color</label>
              <br/>
              <select id='hairColor' onChange={this.handleChange}>
                <option>-----</option>
                <option value='brown'>Brown</option>
                <option value='blonde'>Blonde</option>
                <option value='red'>Red</option>
                <option value='grey'>Grey</option>
              </select>
              <br/>
              <label htmlFor="image">Profile Image</label>
              <br/>
              <input type="text" id="image" onChange={this.handleChange} />
              <br/>
              <br/>
              <div className='signUpLikes'>
                <span>Likes:</span><br/>
                <label htmlFor='likes.age'>Age Range</label>
                <select id='likes.age' onChange={this.handleChange}>
                  <option>-----</option>
                  <option value='none'>No Preference</option>
                  <option value='young'>18-25</option>
                  <option value='golden'>26-35</option>
                  <option value='sunset'>36-40</option>
                  <option value='adults'>41-48</option>
                  <option value='mature'>49+</option>
                </select>
                <br/>
                <label htmlFor='likes.height'>Height (in centimeters): </label>
                <select id='likes.height'  onChange={this.handleChange}>
                  <option>-----</option>
                  <option value='none'>No Preference</option>
                  <option value='short'>145-160cm</option>
                  <option value='medium'>161-171cm</option>
                  <option value='tall'>171-190cm</option>
                </select>
                <br/>
                <label htmlFor='likes.gender'>Gender: </label>
                <select id='likes.gender' onChange={this.handleChange}>
                  <option>-----</option>
                  <option value='none'>No Preference</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
                <br/>
                <label htmlFor='likes.build'>Build: </label>
                <select id='likes.build' onChange={this.handleChange}>
                  <option>-----</option>
                  <option value='none'>No Preference</option>
                  <option value='slender'>Slender</option>
                  <option value='athletic'>Athletic</option>
                  <option value='stocky'>Stocky</option>
                  <option value='plus'>Plus</option>
                </select>
                <br/>
                <label htmlFor='likes.eyeColor'>Eye Color: </label>
                <select id='likes.eyeColor' onChange={this.handleChange}>
                  <option>-----</option>
                  <option value='none'>No Preference</option>
                  <option value='brown'>Brown</option>
                  <option value='blue'>Blue</option>
                  <option value='green'>Green</option>
                </select>
                <br/>
                <label htmlFor='likes.hairColor'>Hair Color: </label>
                <select id='likes.hairColor' onChange={this.handleChange}>
                  <option>-----</option>
                  <option value='none'>No Preference</option>
                  <option value='brown'>Brown</option>
                  <option value='blonde'>Blonde</option>
                  <option value='red'>Red</option>
                  <option value='grey'>Grey</option>
                </select>
              </div>
              <input type='submit' value='Sign Up'/>
            </form>
          </details>
        </div>
        <div className='log-in'>
          <form onSubmit={this.getMatches}>
            <label htmlFor='currUse'> User ID: </label>
            <input type='text' id='currUse' onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
        </div>
        <div>
        </div>
        <div className='display-results'>
          <ul>
          {
            matches.map( user => {
              return(
                <li key={user._id}>
                  <h4>{user.name}</h4>
                  <button value={user._id}>Check Match</button>
                </li>)
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
