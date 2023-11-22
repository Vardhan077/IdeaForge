import { Component } from 'react'
import {Navigate} from 'react-router-dom'
import './index.css'


class Login extends Component{

    state = {arr:[{userName:'vardhan',password:'vardhan'},{userName:'jithu',password:'jithu'}],user:'',pass:'',res:false,redirectToHome: false}

    onsubmit = event =>{
        event.preventDefault();
        // const {match} = this.props
        const{arr,user,pass} = this.state
        const auth = arr.filter(item =>(
            item.userName === user && item.password ===pass
        ))
        if(auth.length === 0){
            this.setState(prevState => ({res:!prevState.res}))
        }
        else{
            this.setState(prevState => ({redirectToHome:!prevState.redirectToHome}))
        }
    }

    userChanged = event =>{
        this.setState({user:event.target.value})
    }
    
    passChanged = event =>{
        this.setState({pass:event.target.value})
    }

    render(){
        const {redirectToHome,res} = this.state
        if(redirectToHome){
            return <Navigate to = '/home' />
        }
        return(
            <div className="container">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" id="username" onChange={this.userChanged} />
                    <input type="password" placeholder="Password" id="password" onChange={this.passChanged} />
                    <button type="submit" onClick={this.onsubmit}>Login</button>
                </form>
                {res ? <p className='caution'>Invalid User!</p> : ""} 
            </div>
        )
    }
}

export default Login
