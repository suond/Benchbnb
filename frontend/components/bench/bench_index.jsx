import React from 'react'
import BenchIndexItem from './bench_index_item'
class BenchIndex extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        const benches = this.props.benches;

        return (
            <div>
                <ul>
                    {
                        benches.map(bench => (
                            <BenchIndexItem  
                                key={bench.id}
                                bench={bench}

                            />
                            )
                        )
                    }
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchBenches()
    }
}

export default BenchIndex;