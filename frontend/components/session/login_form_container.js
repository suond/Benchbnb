import {connect} from 'react-redux'
import SessionForm from './session_form'
import {login} from '../../actions/session'


const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'login'
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       processForm: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);