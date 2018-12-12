class Form3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      creditCard: '',
      expiration: '',
      CVV: '',
      zip: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value })
  }


  render() {
    return (
      <div>
        <h1>Payment Info</h1>
        <input type='password' id='credit-input' name='creditCard' placeholder='Credit Card...' value={this.state.creditCard} onChange={this.changeHandler} />
        <input type='text' id='expiration-input' name='expiration' placeholder='Expiration Date...' value={this.state.expiration} onChange={this.changeHandler} />
        <input type='text' id='CVV-input' name='CVV' placeholder='CVV...' value={this.state.CVV} onChange={this.changeHandler} />
        <input type='text' id='zip-input' name='zip' placeholder='Zip Code...' value={this.state.zip} onChange={this.changeHandler} />
        <input type='submit' id='form-submit' value='Submit'></input>
      </div>
    )
  }
}


class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      street: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      nextComponent: false
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.nextButtonHandler = this.nextButtonHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  nextButtonHandler(event) {
    this.setState({ nextComponent: true });
  }

  render() {
    return (
      <div>
        <h1>Shipping</h1>
        <form>
          <input type='text' id='street-input' name='street' placeholder='Street...' value={this.state.street} onChange={this.changeHandler} />
          <input type='text' id='city-input' name='city' placeholder='City...' value={this.state.city} onChange={this.changeHandler} />
          <input type='text' id='state-input' name='state' placeholder='Smail...' value={this.state.state} onChange={this.changeHandler} />
          <input type='zip' id='zip-input' name='zip' placeholder='Zip...' value={this.state.zip} onChange={this.changeHandler} />
          <input type='phone' id='phone-input' name='phone' placeholder='Phone...' value={this.state.phone} onChange={this.changeHandler} />
        </form>
        <button onClick={this.nextButtonHandler}>Next</button> {
          this.state.nextComponent ? <Form3 /> : null
        }
      </div>
    )
  }
}

class Form1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      nextComponent: false
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.nextButtonHandler = this.nextButtonHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  nextButtonHandler(event) {
    event.preventDefault();
    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;

    this.setState({ nextComponent: true });

    $.ajax({
      url: '/user_info',
      type: 'POST',
      data: {
        name: name,
        email: email,
        password: password
      }
    })

  }

  render() {
    return (
      <div>
        <h1>Account Info</h1>
        <form>
          <input type='text' id='name-input' name='name' placeholder='Name...' value={this.state.name} onChange={this.changeHandler} />
          <input type='text' id='email-input' name='email' placeholder='Email...' value={this.state.email} onChange={this.changeHandler} />
          <input type='password' id='password-input' name='password' placeholder='Password...' value={this.state.password} onChange={this.changeHandler} />
        </form>
        <button onClick={this.nextButtonHandler}>Next</button> {
          this.state.nextComponent ? <Form2 /> : null
        }
      </div>

    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkoutButtonClicked: false
    }
    this.checkoutButtonHandler = this.checkoutButtonHandler.bind(this)
  }

  checkoutButtonHandler(event) {
    this.setState({ checkoutButtonClicked: true })
  }

  render() {
    if (!this.state.checkoutButtonClicked) {
      return (
        <div>
          <h1>HOME PAGE</h1>
          <button onClick={this.checkoutButtonHandler}>Checkout</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Checkout</h1>
          <Form1 />
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
