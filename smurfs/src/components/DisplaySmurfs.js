import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

const DisplaySmurfs = (props) => {
    console.log(props)
    return <div>
        <button onClick={() => props.getSmurf()}>Get Smurfs</button>
        {props.isFetching && <p>Fetching your smurfs...</p>}
        {props.smurfList && <div>
            <ul>{props.smurfList.map(smurf => <li key={smurf.id}>{smurf.name}</li>)}</ul>
        </div>}
    </div>
}

const mapStateToProps = state => {
    return {
        smurfList: state.smurfList,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { getSmurf })(DisplaySmurfs)