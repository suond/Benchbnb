import React from 'react'
import { Link } from 'react-router-dom'
class SessionForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map( (err, idx) => {
                    return <li key={idx}>{err}</li>
                })}
            </ul>
        );
    }

    render() {

        const other = this.props.formType === 'login' ? '/signup' : '/login';

        return (
            <div>
                <h2>{this.props.formType}</h2>
                {this.renderErrors()}
                 <form onSubmit={this.handleSubmit}>
                    <label>Username: 
                        <input type="text" placeholder="username" onChange={this.update('username')} value={this.state.username}/>
                    </label>
                    <label>Password:
                        <input type="password" placeholder="password" onChange={this.update('password')} value={this.state.password}/>
                    </label>
                    <input type="submit" value={this.props.formType}/>
                 </form>
                <Link to={other}>{other}</Link>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }


}


export default SessionForm