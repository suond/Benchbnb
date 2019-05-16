import {connect} from 'react-redux';
import Greeting from './greeting'
import { logout } from '../../actions/session'

const mapStateToProps = (state) => {
    const cUser = state.entities.users[state.session.id]
    return {
        currentUser : cUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Greeting)