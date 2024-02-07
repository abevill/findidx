// findUserByUsername function
const findUserByUsername = (users, username) => {
    return users.find(user => user.username === username);
  }
  
  // removeUser function
  const removeUser = (users, username) => {
    const index = users.findIndex(user => user.username === username);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    } else {
      return undefined;
    }
  }
  
  
  const users = [
    { username: 'alice' },
    { username: 'bob' },
    { username: 'charlie' }
  ];
  
  console.log(findUserByUsername(users, 'bob')); 
  console.log(removeUser(users, 'charlie')); 
  console.log(users); 
  