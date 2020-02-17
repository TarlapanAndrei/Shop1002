import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument } from '../../firebase/firebase-utils';
import './sign-up.styles.scss';

class SignUp extends React.Component{
  state={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  handleChange = e =>{
    const {name, value} = e.target;
    this.setState({
      [name]:value
    })
  }
  handleSubmit= async e=>{
    e.preventDefault();
  const{displayName, email, password, confirmPassword} = this.state;
  if(password !== confirmPassword){
    alert("Password don't match!!");
    return;
  }
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }catch(error){
      console.error('error on sign up', error.message)
    }
  }
  render(){
    return(
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form 
          className='sign-up-form'
          onSubmit={this.handleSubmit}>
         <FormInput 
           type='text'
           name='displayName'
           onChange={this.handleChange}
           value={this.state.displayName}
           label="Name"
         />
          <FormInput 
           type='email'
           name='email'
           onChange={this.handleChange}
           value={this.state.email}
           label="Email"
         />
          <FormInput 
           type='password'
           name='password'
           onChange={this.handleChange}
           value={this.state.password}
           label="Password"
         />
                   <FormInput 
           type='password'
           name='confirmPassword'
           onChange={this.handleChange}
           value={this.state.confirmPassword}
           label="Confirm Password"
         />
         <CustomButton >
           Sign Up
         </CustomButton>
        </form>
      </div>
    )
  }
}
export default SignUp;