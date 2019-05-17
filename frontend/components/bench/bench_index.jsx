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

    

    componentDidUpdate(prevProps){
        if (prevProps.bounds !== this.props.bounds) {
            this.props.fetchBenches({bounds: this.props.bounds})    
        }
    }
}

export default BenchIndex;