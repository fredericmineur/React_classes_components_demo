import { Component, useEffect } from 'react';
import classes from './User.module.css';

// class User extends Component {

//   componentWillUnmount (){
//     console.log('user unmounted');
//   }

//   render() {
//     return <li className={classes.user}>{this.props.name}</li>;
//   }
// }

const User = (props) => {
  useEffect (()=>{
    return ()=>{console.log('user unmounted')}
  }, [])
  return <li className={classes.user}>{props.name}</li>;
};

export default User;
