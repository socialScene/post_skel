import React,{Component} from 'react';
import {Link} from 'react-router';
import {Form,Button,FormGroup,Label,Input,Jumbotron} from 'reactstrap';

    

class Users extends Component{
    constructor(props){
        super(props);
        this.state = {fullName:'',Email:'',password:''};
       // this.handleSubmit =this.handleSubmit.bind(this);

       


        
    
};render(){
    return(
        <div className="container">
            <Jumbotron>
            <h3>Register Here....</h3>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                <Label>Full Name:</Label>
                <Input type="text" id="fullName" name="fullName" required="required"/>
                </FormGroup>

                <FormGroup>
                <Label>Email Address:</Label>
                <Input type="email" id="email" name="email" required="required"/>
                </FormGroup>

                <FormGroup>
                <Label>Password:</Label>
                <Input type="password" id="password" name="password" required="required"/>
                </FormGroup>
                <Link to="/Profile">
                <Button color="success">Next</Button>
                </Link>
            </Form>
            </Jumbotron>
        </div>
    );
};
}
export default Users