function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');
  document.body.prepend(ul);

  friends.forEach(item => {
    let fullName = `${item.firstName} ${item.lastName}`;
    let li = document.createElement('li');
    li.style.listStyle = 'none';
    li.textContent = fullName;
    ul.append(li);

  });

  return ul;
}

// makeFriendsList(friends);


