function UserForm(props) {
  // const {
  //   handleChange,
  //   handleSubmit,
  //   stateThisUsr,
  //   props.btnText,
  //
  // }=props

  return (
    <details>
    <summary className="form-title">{props.summText}</summary>
      <form className="form-container" onSubmit={props.handleSubmit}>
        <label htmlFor="userid">User ID: </label>
        <input type="text" id="userid" onChange={props.handleChange} />
        <br/>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={props.handleChange} />
        <br/>
        <label htmlFor="image">Profile Image: </label>
        <input type="text" id="image" onChange={props.handleChange} />
        <br/>
        <label htmlFor="age">Age: </label>
        <select id='age' sonChange={props.handleChange}>
          <option value='18-25'>18-25</option>
          <option value='26-35'>26-35</option>
          <option value='36-40'>36-40</option>
          <option value='41-48'>41-48</option>
          <option value='49+'>49+</option>
        </select>
        <br/>
        <label htmlFor="height">Height: </label>
        <select id='height' onChange={props.handleChange}>
          <option value='short'>145-160cm</option>
          <option value='medium'>161-171cm</option>
          <option value='tall'>171-190cm</option>
        </select>
        <br/>
        <label htmlFor="gender">Gender: </label>
        <select id='gender' onChange={props.handleChange}>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <br/>
        <label htmlFor="build">Build: </label>
        <select id='build' onChange={props.handleChange}>
          <option value='slender'>Slender</option>
          <option value='athletic'>Athletic</option>
          <option value='stocky'>Stocky</option>
          <option value='plus'>Plus</option>
        </select>
        <br/>
        <label htmlFor="eyeColor">Eye Color: </label>
        <select id='eyeColor' onChange={props.handleChange}>
          <option value='brown'>Brown</option>
          <option value='blue'>Blue</option>
          <option value='green'>Green</option>
        </select>
        <br/>
        <label htmlFor="hairColor">Hair Color: </label>
        <select id='hairColor' onChange={props.handleChange}>
          <option value='brown'>Brown</option>
          <option value='blonde'>Blonde</option>
          <option value='red'>Red</option>
          <option value='grey'>Grey</option>
        </select>
        <br/>
        <br/>
        <div className='signUpLikes'>
          <span>Likes:</span><br/>
          <label htmlFor='likesAge'>Age Range: </label>
          <select id='likesAge' onChange={props.handleChange}>
            <option value='none'>No Preference</option>
            <option value='18-25'>18-25</option>
            <option value='26-35'>26-35</option>
            <option value='36-40'>36-40</option>
            <option value='41-48'>41-48</option>
            <option value='49+'>49+</option>
          </select>
          <br/>
          <label htmlFor='likesHeight'>Height (in centimeters): </label>
          <select id='likesHeight'  onChange={props.handleChange}>
            <option value='none'>No Preference</option>
            <option value='short'>145-160cm</option>
            <option value='medium'>161-171cm</option>
            <option value='tall'>171-190cm</option>
          </select>
          <br/>
          <label htmlFor='likesGender'>Gender: </label>
          <select id='likesGender' onChange={props.handleChange}>
            <option value='none'>No Preference</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <br/>
          <label htmlFor='likesBuild'>Build: </label>
          <select id='likesBuild' onChange={props.handleChange}>
            <option value='none'>No Preference</option>
            <option value='slender'>Slender</option>
            <option value='athletic'>Athletic</option>
            <option value='stocky'>Stocky</option>
            <option value='plus'>Plus</option>
          </select>
          <br/>
          <label htmlFor='likesEyeColor'>Eye Color: </label>
          <select id='likesEyeColor' onChange={props.handleChange}>
            <option value='none'>No Preference</option>
            <option value='brown'>Brown</option>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
          </select>
          <br/>
          <label htmlFor='likesHairColor'>Hair Color: </label>
          <select id='likesHairColor' onChange={props.handleChange}>
            <option value='none'>No Preference</option>
            <option value='brown'>Brown</option>
            <option value='blonde'>Blonde</option>
            <option value='red'>Red</option>
            <option value='grey'>Grey</option>
          </select>
        </div>
        <input type='submit' value={props.btnText}/>
      </form>
    </details>
  )
}


class App extends React.Component {

  state = {
    thisusr: null,
    currUse: '',
    updateUsr: '',
    newUsr: '',
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
    console.log('handling the new user submit');
    this.setState({
      newUsr: {
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
      console.log(this.state);
      axios
        .post('/user', this.state.newUsr)
        .then(response => {
          // console.log(response.data);
      })
    }
  )}


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

  // UPDATE USER INFORMATION
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
      })
      axios.get(`/user/${this.state.thisusr.userid}`).then(
        (response) => {
          this.setState({
            thisusr: response.data
          })
          console.log(response.data);
        }
      )
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
            <div>Profile
              <div>
                <div>
                  <div>
                  User Id: {this.state.thisusr.userid}
                  </div>
                <div>
                Name: {this.state.thisusr.name}
                </div>
                <div>
                Age: {this.state.thisusr.age}
                </div>
                <div>
                Height: {this.state.thisusr.height}
                </div>
                <div>
                Gender: {this.state.thisusr.gender}
                </div>
                <div>
                Build: {this.state.thisusr.build}
                </div>
                <div>
                Eye Color: {this.state.thisusr.eyeColor}
                </div>
                <div>
                Hair Color: {this.state.thisusr.hairColor}
                </div>
                <div>
                Image Tag: {this.state.thisusr.image}
                </div>
                <div>
                Likes:
                </div>
                <div>
                Gender: {this.state.thisusr.likes.gender}
                </div>
                <div>
                Build: {this.state.thisusr.likes.build}
                </div>
                <div>
                Hair Color: {this.state.thisusr.likes.hairColor}
                </div>
                <div>
                Eyd Color: {this.state.thisusr.likes.eyeColor}
                </div>
                <div>
                Age: {this.state.thisusr.likes.age}
                </div>
                <div>
                Height: {this.state.thisusr.likes.height}
                </div>
              </div>
            </div>
            </div>
            <UserForm
              handleChange={this.handleChange.bind(this)}
              handleSubmit={this.updateUser.bind(this)}
              stateThisUsr={this.state.thisusr}
              stateUpdateUsr={this.state.updateUsr}
              btnText="Update"
              summText="Click Here to Update User Profile"
            />
            <br />
            <br />
            <button value={this.state.thisusr._id} onClick={this.deleteUser}>
              DELETE
            </button>
            <br />
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
        <div className='action'>
          <div className='signUp'>
            {greetingTag}
          </div>
          <div className='logIn'>
          <h2>Log In</h2>
            <form onSubmit={this.getMatches}>
              <label id="login-label" htmlFor='currUse'> User ID: </label>
              <input type='text' id='currUse' onChange={this.handleChange}/>
              <input type='submit'/>
            </form>
          </div>
        </div>
        <div className='display-results'>
          <ul>
          {
            matches.map( user => {
              return(
                <details>
                  <summary>Click to view {user.name}</summary>
                  <div>Gender: {user.gender}   Height: {user.height}</div>
                  <div>Age: {user.age}   Eyes: {user.eyeColor}</div>
                  <div>Build: {user.build}   Hair: {user.hairColor}</div>
                </details>)
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
