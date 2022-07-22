import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';

const SmurfForm = (props) => {

    const [formSmurf, setFormSmurf] = useState({ name: '', age: '', height: ''})

    const handleChanges = e => {
        e.preventDefault();
        setFormSmurf({...formSmurf, [e.target.name] : e.target.value })
    }

    const submitSmurf = (e) => {
        e.preventDefault();
        props.postSmurf(formSmurf);
        setFormSmurf({ name: '', age: '', height: ''})
    }

    console.log(formSmurf, props)

    return <form onSubmit={submitSmurf}>
        <input value={formSmurf.name}
               name="name"
               placeholder="Name"
               onChange={handleChanges}></input>
        <input value={formSmurf.age}
               name="age"
               placeholder="Age"
               onChange={handleChanges}></input>
        <input value={formSmurf.height}
               name="height"
               placeholder="Height"
               onChange={handleChanges}></input>
        <button type="submit">Send to village!</button>
    </form>
}

export default connect(null, { postSmurf })(SmurfForm);