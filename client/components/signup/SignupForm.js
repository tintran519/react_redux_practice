import React from 'react';
// import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
// import { browserHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    }
    //set 'this' context to component
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid(){
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.isValid()){

      //clear error every submit
      this.setState({ errors: {}, isLoading: true });
      //call a function to send user data
      this.props.userSignupRequest(this.state)
      .then(
        () => {
          // //redirecting to root route; push address we want to go to
          // browserHistory.push('/');
          this.context.router.push('/');
        },
        ({ response }) => this.setState({ errors: response.data, isLoading: false })
      );
    }
  }


  render(){
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join!</h1>

        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />

        <TextFieldGroup
          error={errors.email}
          label="Email"
          onChange={this.onChange}
          value={this.state.email}
          field="email"
        />

        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />

        <TextFieldGroup
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
          type="password"
        />


        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm;
