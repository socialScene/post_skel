import React,{Component} from 'react';
import {Connect} from 'react-redux';
import {pushState} from 'redux-react';

export function requireAuthentication(Component){
    class authenticate extends Component{
        componentWillMount(){
            this.checkAuth();
        }
        componentWillReceiveProps(nextProps){
            this.checkAuth();
        }

        checkAuth(){
            if(!this.props,isAuthenticated){
                let redirectAfterLogIn = this.props.location.pathname;
                this.props.dispatch(pushState(null,'/LogIn?next=${redirectAfterLogIn}'));



            }
        }

        render(){
            return(
                <div>
                    {this.props.isAuthenticated===true
                        ?<Component{...this.props}/>
                        :null

                    }
                </div>
            );
        };
        
    }
      const mapStateToProps = (state) => ({
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated
    });
}