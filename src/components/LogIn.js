import React,{Component} from 'react';
import {Form,Button,Label,Input,FormGroup,Jumbotron} from 'reactstrap';

class LogIn extends Component{
   constructor(props){
    super(props);} 
    render(){
        return(
            <div className="container">
                <Jumbotron>
                <h3>SingIn Here...</h3>
                <Form>
                    <FormGroup>
                        <Label>Username:</Label>
                        <Input type="email" name="email" id="email" placeholder="enter your email"/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Password:</Label>
                        <Input type="password" name="password" id="password" placeholder="enter your password"/>
                    </FormGroup>
                    <div className="clear-fix">
                    <Button color="success">SingIn</Button>|<p>Register here</p></div>
                </Form>
                </Jumbotron>
            </div>
        )
    }
        
}

export default LogIn