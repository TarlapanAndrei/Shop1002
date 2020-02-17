import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle, createUserProfileDocument} from '../../firebase/firebase-utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
  state={
    email:'',
    password: ''
  }
  handleChange = (e) =>{
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }
  handleSubmit = async e =>{
    e.preventDefault()
    const{email, password} = this.state;
    try{
    await auth.signInWithEmailAndPassword(email, password)
    this.setState({
      email:'',
      password:''
    })
  }catch(error){
    console.error('error on sign in', error.message)
  }
  }
  render(){
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
        <FormInput 
          type='email'
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
          required
          label="Email"
          />
          <FormInput 
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
            label="Password"
          />
          <div className='buttons'>
          <CustomButton>
            Sign In
          </CustomButton>
          <CustomButton 
            type='button'
            isGoogleSignIn
            onClick={()=> signInWithGoogle()}
          >
            Sign In With Google
          </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn;