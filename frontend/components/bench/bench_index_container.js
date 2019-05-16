import {connect} from 'react-redux'
import BenchIndex from './bench_index'

import {fetchBenches} from '../../actions/bench_actions'

const mapStateToProps = (state) => {
    return {
        benches: Object.keys(state.entities.benches).map(key => state.entities.benches[key])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBenches: () => dispatch(fetchBenches())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BenchIndex)