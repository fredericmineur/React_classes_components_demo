import { Component } from "react";
import { Fragment, useState, useEffect } from "react";
import styles from "./UserFinder.module.css";

import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";
import UsersContext from "../store/users-context";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = { filteredUsers: [], searchTerm: "" };
  }

  componentDidMount() {
    //send HTTP request
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={styles.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
        <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//         <div className={styles.finder}>
//       <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />

//     </Fragment>
//   );
// };

export default UserFinder;
