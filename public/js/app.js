// console.log('connected to app.js');

// we may want to limit the user's input - make selects for hairColor, eyeColor, build, gender, height, age.

//would like to compartmentalize the app at somepoint - i.e. a class for Sign Up, a class for Log In, etc.

class App extends React.Component {

  state = {
    userid: '',
    name: '',
    age: '',
    height: '',
    gender: '',
    build: '',
    eyeColor: '',
    hairColor: '',
    image: '',
    likes: [],
    users: []
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
      this.setState({ users: response.data, userid: '', name:'', age: '', height: '', gender: '', build: '', eyeColor: '', hairColor: '', image: '', likes:[]})
    })
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
      likes: []
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
    return(
      <div className='siteContainer'>
        <div className='signUp'>
          <h2>Sign Up</h2>
          <details>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="userid">User ID</label>
              <br />
              <input type="text" id="userid" onChange={this.handleChange} />
              <br />
              <label htmlFor="name">Name</label>
              <br />
              <input type="text" id="name" onChange={this.handleChange} />
              <br />
              <label htmlFor="age">Age</label>
              <br />
              <input type="text" id="age" onChange={this.handleChange} />
              <br />
              <label htmlFor="height">Height</label>
              <br />
              <input type="text" id="height" onChange={this.handleChange} />
              <br />
              <label htmlFor="gender">Gender</label>
              <br />
              <input type="text" id="gender" onChange={this.handleChange} />
              <br />
              <label htmlFor="build">Build</label>
              <br />
              <input type="text" id="build" onChange={this.handleChange} />
              <br />
              <label htmlFor="eyeColor">Eye Color</label>
              <br />
              <input type="text" id="eyeColor" onChange={this.handleChange} />
              <br />
              <label htmlFor="hairColor">Hair Color</label>
              <br />
              <input type="text" id="hairColor" onChange={this.handleChange} />
              <br />
              <label htmlFor="image">Profile Image</label>
              <br />
              <input type="text" id="image" onChange={this.handleChange} />
              <br />
              <span>Likes:</span><br/>
              <label htmlFor='likesAge'>Age Range</label>
              <select id='likesAge'>
                <option value='none'>No Preference</option>
                <option value='young'>18-25</option>
                <option value='golden'>26-35</option>
                <option value='sunset'>36-40</option>
                <option value='adults'>41-48</option>
                <option value='mature'>49+</option>
              </select>
              <br/>
              <label htmlFor='likesHeight'>Height (in centimeters): </label>
              <select id='likesHeight'>
                <option value='none'>No Preference</option>
                <option value='short'>145-160cm</option>
                <option value='medium'>161-171cm</option>
                <option value='tall'>171-190cm</option>
              </select>
              <br/>
              <label htmlFor='likesGender'>Gender: </label>
              <select id='likesGender'>
                <option value='none'>No Preference</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              <br/>
              <label htmlFor='likesBuild'>Build: </label>
              <select id='likesBuild'>
                <option value='none'>No Preference</option>
                <option value='athletic'>Athletic</option>
                <option value='stocky'>Stocky</option>
                <option value='round'>Round</option>
                <option value='plus'>Plus</option>
              </select>
              <br/>
              <label htmlFor='likesEyeColor'>Eye Color: </label>
              <select id='likesEyeColor'>
                <option value='none'>No Preference</option>
                <option value='brown'>Brown</option>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
              </select>
              <br/>
              <label htmlFor='likesHairColor'>Hair Color: </label>
              <select id='likesHairColor'>
                <option value='none'>No Preference</option>
                <option value='brown'>Brown</option>
                <option value='blonde'>Blonde</option>
                <option value='red'>Red</option>
              </select>
              <input type='submit' value='Sign Up'/>
            </form>
          </details>
        </div>
        <div className='log-in'>

        </div>
        <div className='display-results'>
          <ul>
            {this.state.users.map( user => {
              <li>

              </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
