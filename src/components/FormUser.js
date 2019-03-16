import React from 'react';

const FormUser = (props) => (
    <form onSubmit={props.getUser} id="myForm">
        <input 
            type="text" 
            name="username" 
            placeholder="Enter Username"
            style={{margin: "20px auto"}}
            required
        >
        </input>
        <button>Submit</button>
    </form>
)

export default FormUser;