import React from 'react'

const BenchIndexItem = (props) => {
    const bench = props.bench;

    return (
        <li>
            description: {bench.description} -- lng: {bench.lng} -- lat: {bench.lat}
        </li>
    )
}

export default BenchIndexItem