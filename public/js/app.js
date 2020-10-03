// console.log('connected to app.js');

// we may want to limit the user's input - make selects for hairColor, eyeColor, build, gender, height, age.

//would like to compartmentalize the app at somepoint - i.e. a class for Sign Up, a class for Log In, etc.

function UserForm(props) {
  const {
    handleChange,
    handleSubmit,
    stateThisUsr,
    btnText,
    summText
  }=props

  return (
    <details>
    <summary>{summText}</summary>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor='likesAge'>Age Range</label>
          <select id='likesAge' onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='young'>18-25</option>
            <option value='golden'>26-35</option>
            <option value='sunset'>36-40</option>
            <option value='adults'>41-48</option>
            <option value='mature'>49+</option>
          </select>
          <br/>
          <label htmlFor='likesHeight'>Height (in centimeters): </label>
          <select id='likesHeight'  onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='short'>145-160cm</option>
            <option value='medium'>161-171cm</option>
            <option value='tall'>171-190cm</option>
          </select>
          <br/>
          <label htmlFor='likesGender'>Gender: </label>
          <select id='likesGender' onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <br/>
          <label htmlFor='likesBuild'>Build: </label>
          <select id='likesBuild' onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='slender'>Slender</option>
            <option value='athletic'>Athletic</option>
            <option value='stocky'>Stocky</option>
            <option value='plus'>Plus</option>
          </select>
          <br/>
          <label htmlFor='likesEyeColor'>Eye Color: </label>
          <select id='likesEyeColor' onChange={handleChange}>
            <option>-----</option>
            <option value='none'>No Preference</option>
            <option value='brown'>Brown</option>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
          </select>
          <br/>
          <label htmlFor='likesHairColor'>Hair Color: </label>
          <select id='likesHairColor' onChange={handleChange}>
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
    // console.log(event.target.id);
    // console.log(event.target.value);
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
  console.log(this.state);
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
    console.log("state variables" , this.state);
    this.setState({
      updateUsr: {
        userid: this.state.userid,
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
        gender: this.state.gender,
        build: this.state.build,
        eyeColor: this.state.eyeColor,
        hairColor: this.state.hairColor,
        image: this.state.image,
        likes: {
          age: this.state.likesAge,
          height: this.state.likesHeight,
          gender: this.state.likesGender,
          build: this.state.likesBuild,
          eyeColor: this.state.likesEyeColor,
          hairColor: this.state.likesHairColor
        }
      }
    }, () => {
      console.log('SetState finished')
      console.log('state variables after move', this.state)

      axios.put('/user/' + this.state.thisusr._id, this.state.updateUsr).then(response => {
        this.setState({
          thisusr: response.data,
        })
        console.log("response data from put: ", response.data);
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
//    console.log(this.state.thisusr, this.state.users);

    const matches = this.state.thisusr
      ? this.state.users.filter(user => {
        const attributes = Object.keys(this.state.thisusr.likes).slice(1)
        for(let x=0;x<6;x++){
          if(this.state.thisusr.likes[attributes[x]] !== user[attributes[x]]){
            return false
          }
        }
        return true
      })
      : []

      const greetingTag = this.state.thisusr
        ? <div>
            <h3>Greetings {this.state.thisusr.name} </h3>
            <UserForm
              handleChange={this.handleChange.bind(this)}
              handleSubmit={this.updateUser.bind(this)}
              stateThisUsr={this.state.thisusr}
              stateUpdateUsr={this.state.updateUsr}
              btnText="Update"
              summText="Click Here to Update User Profile"
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
            stateUpdateUsr={this.state.updateUsr}
            btnText="Sign Up"
            summText="Click Here to Sign Up"
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
