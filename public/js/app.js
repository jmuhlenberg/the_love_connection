console.log('connected to app.js');


class App extends React.Component {

  state = {
    users: []
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
      <div>
        <ul>
          {this.state.users.map( user => {
            <li>

            </li>
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
