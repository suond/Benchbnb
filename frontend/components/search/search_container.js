import {connect} from 'react-redux'
import Search from '../search/search'
import { updateBounds } from '../../actions/filter_actions' 
import {fetchBenches} from '../../actions/bench_actions'

const mapStateToProps = (state) => {
    return {
        benches: Object.keys(state.entities.benches).map(key => state.entities.benches[key]),
        bounds: state.ui.filters.bounds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBenches: (filters) => dispatch(fetchBenches(filters)),
        updateBounds: (bounds) => dispatch(updateBounds(bounds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)