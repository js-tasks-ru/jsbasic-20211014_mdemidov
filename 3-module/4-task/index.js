function showSalary(users, age) {
  let filterUsers = users.filter(item => item.age <= age);
  let userList = '';
  for (let i = 0; i < filterUsers.length; i++) {
    userList += `${filterUsers[i].name}, ${filterUsers[i].balance}\n`;

  }
  userList = userList.trim();
  return userList;

}


showSalary(users, 30);
