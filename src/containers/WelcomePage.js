import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { signup, login, receiveAuth } from '../actions'
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    //the following lines are the same but without bindAction
    //signup: (username, password) => dispatch(signup(username, password)),
    //login: (username, password) => dispatch(login(username, password)),
    signup,
    login,
    receiveAuth,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomePage);