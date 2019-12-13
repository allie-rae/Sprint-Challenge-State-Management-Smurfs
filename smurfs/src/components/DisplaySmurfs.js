import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

const DisplaySmurfs = (props) => {
    console.log(props)
    return <div>
        <button onClick={() => props.getSmurf()}>Get Smurf</button>
        {props.isFetching && <p>Fetching your smurfs...</p>}
        {props.smurfList && <div>
            <ul>{props.smurfList.map(smurf => <li>{smurf.name}</li>)}</ul>
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