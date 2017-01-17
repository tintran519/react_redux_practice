import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';

class SignupPage extends React.Component {
  render() {
    const { userSignupRequest } = this.props
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

//connect takes two params; first is mapStateToProps which provides data from redux store
//takes state and returns object
//second param is mapDispatchToProps; specifies action creators wrapped in dispatch
export default connect(null, { userSignupRequest })(SignupPage);
