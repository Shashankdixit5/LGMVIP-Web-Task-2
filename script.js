const getUsersButton = document.getElementById('get-users-btn');
const userGrid = document.getElementById('user-grid');
let isUserGridVisible = false;
let usersData = [];

getUsersButton.addEventListener('click', toggleUserGrid);

function toggleUserGrid() {
  if (isUserGridVisible) {
    userGrid.style.display = 'none';
    getUsersButton.textContent = 'Get Users';
  } else {
    if (usersData.length === 0) {
      getUsers();
    }
    userGrid.style.display = 'grid';
    getUsersButton.textContent = 'Hide Users';
  }
  isUserGridVisible = !isUserGridVisible;
}

function getUsers() {
  usersData = [
    {
      name: {
        first: 'George',
        last: 'Bluth',
      },
      email: 'george.bluth@reqres.in',
      picture: {
        large: 'https://reqres.in/img/faces/1-image.jpg',
      },
    },
    {
      name: {
        first: 'Janet',
        last: 'Weaver',
      },
      email: 'janet.weaver@reqres.in',
      picture: {
        large: 'https://reqres.in/img/faces/2-image.jpg',
      },
    },
    {
      name: {
        first: 'Emma',
        last: 'Wong',
      },
      email: 'emma.wong@reqres.in',
      picture: {
        large: 'https://reqres.in/img/faces/3-image.jpg',
      },
    },
    {
      name: {
        first: 'Eve',
        last: 'Holt',
      },
      email: 'eve.holt@reqres.in',
      picture: {
        large: 'https://reqres.in/img/faces/4-image.jpg',
      },
    },
    {
      name: {
        first: 'Charles',
        last: 'Morris',
      },
      email: 'charles.morris@reqres.in',
      picture: {
        large: 'https://reqres.in/img/faces/5-image.jpg',
      },
    },
    {
      name: {
        first: 'Tracey',
        last: 'Ramos',
      },
      email: 'tracey.ramos@reqres.in',
      picture: {
        large: 'https://reqres.in/img/faces/6-image.jpg',
      },
    },
  ];

  usersData.forEach(user => {
    const userCard = createUserCard(user);
    userGrid.appendChild(userCard);
  });
}

function createUserCard(user) {
  const userCard = document.createElement('div');
  userCard.className = 'user-card';

  const userImage = document.createElement('img');
  userImage.src = user.picture.large;
  userImage.alt = `${user.name.first} ${user.name.last}`;

  const userName = document.createElement('h3');
  userName.textContent = `${user.name.first} ${user.name.last}`;

  const userEmail = document.createElement('p');
  userEmail.textContent = user.email;

  userCard.appendChild(userImage);
  userCard.appendChild(userName);
  userCard.appendChild(userEmail);

  return userCard;
}
