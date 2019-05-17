import React from 'react'
import BenchIndex from '../bench/bench_index';
import BenchMap from '../bench/bench_map'

const Search = ({benches, fetchBenches, updateBounds}) => (
    <div> 
        <BenchMap benches={benches} updateBounds={updateBounds}/>
        <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
    </div>
)

export default Search