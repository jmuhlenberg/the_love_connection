// console.log('connected to app.js');

// we may want to limit the user's input - make selects for hairColor, eyeColor, build, gender, height, age.

//would like to compartmentalize the app at somepoint - i.e. a class for Sign Up, a class for Log In, etc.

function UserForm(props) {
  const {
    handleChange,
    handleSubmit,
    stateThisUsr,
    btnText
  }=props

  return (
    <details>
    <summary>Click Triangle to Create a New User</summary>
      <form onSubmit={handleChange}>
        <label htmlFor="userid">User ID</label>
        <br/>
        <input type="text" id="userid" onChange={handleChange} />
        <br/>
        <label htmlFor="name">Name</label>
        <br/>
        <input type="text" id="name" onChange={handleChange} />
        <br/>
        <label htmlFor="age">Age</label>
        <br/>
        <select id='age' onChange={handleChange}>
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
        <select id='height' onChange={handleChange}>
          <option>-----</option>
          <option value='short'>145-160cm</option>
          <option value='medium'>161-171cm</option>
          <option value='tall'>171-190cm</option>
        </select>
        <br/>
        <label htmlFor="gender">Gender</label>
        <br/>
        <select id='gender' onChange={handleChange}>
          <option>-----</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <br/>
        <label htmlFor="build">Build</label>
        <br/>
        <select id='build' onChange={handleChange}>
          <option>-----</option>
          <option value='slender'>Slender</option>
          <option value='athletic'>Athletic</option>
          <option value='stocky'>Stocky</option>
          <option value='plus'>Plus</option>
        </select>
        <br/>
        <label htmlFor="eyeColor">Eye Color</label>
        <br/>
        <select id='eyeColor' onChange={handleChange}>
          <option>-----</option>
          <option value='brown'>Brown</option>
          <option value='blue'>Blue</option>
          <option value='green'>Green</option>
        </select>
        <br/>
        <label htmlFor="hairColor">Hair Color</label>
        <br/>
        <select id='hairColor' onChange={handleChange}>
          <option>-----</option>
          <option value='brown'>Brown</option>
          <option value='blonde'>Blonde</option>
          <option value='red'>Red</option>
          <option value='grey'>Grey</option>
        </select>
        <br/>
        <label htmlFor="image">Profile Image</label>
        <br/>
        <input type="text" id="image" onChange={handleChange} />
        <br/>
        <br/>
        <div className='signUpLikes'>
          <span>Likes:</span><br/>
          <label htmlFor='likes.age'>Age Range</label>
          <select id='likes.age' onChange={handleChange}>
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
          <select id='likes.height'  onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='short'>145-160cm</option>
            <option value='medium'>161-171cm</option>
            <option value='tall'>171-190cm</option>
          </select>
          <br/>
          <label htmlFor='likes.gender'>Gender: </label>
          <select id='likes.gender' onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <br/>
          <label htmlFor='likes.build'>Build: </label>
          <select id='likes.build' onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='slender'>Slender</option>
            <option value='athletic'>Athletic</option>
            <option value='stocky'>Stocky</option>
            <option value='plus'>Plus</option>
          </select>
          <br/>
          <label htmlFor='likes.eyeColor'>Eye Color: </label>
          <select id='likes.eyeColor' onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='brown'>Brown</option>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
          </select>
          <br/>
          <label htmlFor='likes.hairColor'>Hair Color: </label>
          <select id='likes.hairColor' onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='brown'>Brown</option>
            <option value='blonde'>Blonde</option>
            <option value='red'>Red</option>
            <option value='grey'>Grey</option>
          </select>
        </div>
        <input type='submit' value={btnText}/>
      </form>
    </details>
  )
}


class App extends React.Component {

  state = {
    thisusr: null,
    currUse: '',
    updateUsr: '',
    users:[]
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  deleteUser = event => {
     axios.delete('/user/' + this.state.thisusr._id).then(response => {
       this.setState({
         thisusr: null
       })
     })
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
  axios.put('/user/' + this.state.thisusr._id, this.state.updateUsr).then(response => {
    this.setState({
      thisusr: response.data,
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

      const greetingTag = this.state.thisusr
        ? <div>
            <h3>Greeting {this.state.thisusr.name} </h3>
            <div> Update User </div>
            <UserForm
              handleChange={this.handleChange.bind(this)}
              handleSubmit={this.updateUser.bind(this)}
              stateThisUsr={this.state.thisusr}
              btnText="Update"
            />
            <br />
            <button value={this.state.thisusr._id} onClick={this.deleteUser}>
              DELETE
            </button>
          </div>

        : <div>
          <h2>Sign Up</h2>
          <UserForm
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}  //this.createuser.bind
            stateThisUsr={this.state.thisusr}
            btnText="Sign Up"
          />
          </div>

    return(
      <div className='siteContainer'>
        <div className='signUp'>
          {greetingTag}
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
