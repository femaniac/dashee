const users = [
  {
    id: 1,
    name: "Malia Haville",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
    dateOfBirth: 1999,
    gender: true,
    role: "Manager",
  },
  {
    id: 2,
    name: "Franciska Lambkin",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
    dateOfBirth: 2015,
    gender: true,
    role: "Admin",
  },
  {
    id: 3,
    name: "Reid Stellino",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
    dateOfBirth: 1999,
    gender: true,
    role: "Register",
  },
  {
    id: 4,
    name: "Jeddy Tows",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2000,
    gender: true,
    role: "Admin",
  },
  {
    id: 5,
    name: "Julina Mithon",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar6.png",
    dateOfBirth: 2006,
    gender: false,
    role: "Register",
  },
  {
    id: 6,
    name: "Kaylil Sola",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
    dateOfBirth: 1996,
    gender: false,
    role: "Manager",
  },
  {
    id: 7,
    name: "Padget Chant",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
    dateOfBirth: 2015,
    gender: true,
    role: "Register",
  },
  {
    id: 8,
    name: "Persis Laurenson",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
    dateOfBirth: 2015,
    gender: true,
    role: "Admin",
  },
  {
    id: 9,
    name: "Louisette Le Merchant",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2006,
    gender: true,
    role: "Admin",
  },
  {
    id: 10,
    name: "Vida Venton",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
    dateOfBirth: 2000,
    gender: true,
    role: "Register",
  },
  {
    id: 11,
    name: "Ruthann Dyball",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2009,
    gender: false,
    role: "Manager",
  },
  {
    id: 12,
    name: "Glenda Matousek",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2004,
    gender: false,
    role: "Admin",
  },
  {
    id: 13,
    name: "Nissy Marriot",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
    dateOfBirth: 2002,
    gender: true,
    role: "Register",
  },
  {
    id: 14,
    name: "Hammad Vollam",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 1997,
    gender: false,
    role: "Admin",
  },
  {
    id: 15,
    name: "Odey Cuberley",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2006,
    gender: false,
    role: "Manager",
  },
  {
    id: 16,
    name: "Patric Brushfield",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
    dateOfBirth: 2012,
    gender: true,
    role: "Register",
  },
  {
    id: 17,
    name: "Jocelin Teenan",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
    dateOfBirth: 2001,
    gender: false,
    role: "Admin",
  },
  {
    id: 18,
    name: "Ashli Dunbabin",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
    dateOfBirth: 1999,
    gender: true,
    role: "Manager",
  },
  {
    id: 19,
    name: "Brantley Herries",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 1996,
    gender: false,
    role: "Admin",
  },
  {
    id: 20,
    name: "Kristyn Veysey",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 1999,
    gender: true,
    role: "Register",
  },
  {
    id: 21,
    name: "Walsh Cundy",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
    dateOfBirth: 2010,
    gender: false,
    role: "Register",
  },
  {
    id: 22,
    name: "Jamie Grossier",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
    dateOfBirth: 1998,
    gender: false,
    role: "Register",
  },
  {
    id: 23,
    name: "Aleece Waby",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
    dateOfBirth: 2014,
    gender: false,
    role: "Admin",
  },
  {
    id: 24,
    name: "Kaycee Fiddiman",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2010,
    gender: false,
    role: "Admin",
  },
  {
    id: 25,
    name: "Shoshana Manolov",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
    dateOfBirth: 2015,
    gender: true,
    role: "Register",
  },
  {
    id: 26,
    name: "Cary Smeaton",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
    dateOfBirth: 1994,
    gender: true,
    role: "Register",
  },
  {
    id: 27,
    name: "Kellina Bradburne",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
    dateOfBirth: 2002,
    gender: true,
    role: "Register",
  },
  {
    id: 28,
    name: "Cindi Priddey",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
    dateOfBirth: 1995,
    gender: false,
    role: "Register",
  },
  {
    id: 29,
    name: "Marcus Rodden",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
    dateOfBirth: 2005,
    gender: true,
    role: "Register",
  },
  {
    id: 30,
    name: "Gaile Dallmann",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
    dateOfBirth: 2003,
    gender: false,
    role: "Register",
  },
  {
    id: 31,
    name: "Boigie Ebourne",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2008,
    gender: false,
    role: "Admin",
  },
  {
    id: 32,
    name: "Axe Agirre",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
    dateOfBirth: 2005,
    gender: false,
    role: "Register",
  },
  {
    id: 33,
    name: "Avrom Janeway",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
    dateOfBirth: 2014,
    gender: true,
    role: "Register",
  },
  {
    id: 34,
    name: "Kennith Copper",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
    dateOfBirth: 1995,
    gender: false,
    role: "Admin",
  },
  {
    id: 35,
    name: "Kermy MacKenny",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2010,
    gender: false,
    role: "Admin",
  },
  {
    id: 36,
    name: "Kort Cumber",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
    dateOfBirth: 1996,
    gender: false,
    role: "Register",
  },
  {
    id: 37,
    name: "Howard Panner",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2009,
    gender: false,
    role: "Register",
  },
  {
    id: 38,
    name: "Mirabelle Tomaszewicz",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2004,
    gender: true,
    role: "Admin",
  },
  {
    id: 39,
    name: "Caren McEvoy",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
    dateOfBirth: 2012,
    gender: true,
    role: "Register",
  },
  {
    id: 40,
    name: "Olivie Jozsef",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
    dateOfBirth: 2005,
    gender: true,
    role: "Register",
  },
  {
    id: 41,
    name: "Connie Nottle",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
    dateOfBirth: 2005,
    gender: false,
    role: "Manager",
  },
  {
    id: 42,
    name: "Veronica Giannoni",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
    dateOfBirth: 2002,
    gender: true,
    role: "Register",
  },
  {
    id: 43,
    name: "Karel Faragher",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
    dateOfBirth: 2000,
    gender: false,
    role: "Register",
  },
  {
    id: 44,
    name: "Joice Wield",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2014,
    gender: true,
    role: "Register",
  },
  {
    id: 45,
    name: "Leslie Collough",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
    dateOfBirth: 1996,
    gender: true,
    role: "Admin",
  },
  {
    id: 46,
    name: "Standford Blaasch",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
    dateOfBirth: 2010,
    gender: true,
    role: "Register",
  },
  {
    id: 47,
    name: "Franciskus Setch",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
    dateOfBirth: 2005,
    gender: true,
    role: "Manager",
  },
  {
    id: 48,
    name: "Dael Staley",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
    dateOfBirth: 2009,
    gender: true,
    role: "Manager",
  },
  {
    id: 49,
    name: "Gal Capelow",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
    dateOfBirth: 2004,
    gender: false,
    role: "Admin",
  },
  {
    id: 50,
    name: "Sammie Cramb",
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
    dateOfBirth: 2007,
    gender: false,
    role: "Register",
  },
];

// Total Overview
function overviewUser() {
  var managerContent = document.getElementById("managerContent");
  var filterManager = users.filter((user) => user.role == "Manager");
  var countManager = 0;
  for (var i = 0; i < filterManager.length; i++) {
    countManager++;
  }

  managerContent.innerHTML = `
 <span> Total Number: ${countManager} </span>
 
`;

  // Total Admins
  var adminContent = document.getElementById("adminContent");
  var filterAdmin = users.filter((user) => user.role == "Admin");
  var countAdmin = 0;
  for (let i = 0; i < filterAdmin.length; i++) {
    countAdmin++;
  }

  adminContent.innerHTML = `
<span> Total Number: ${countAdmin} </span>
`;

  // Total Registers
  var registerContent = document.getElementById("registerContent");
  var filterRegister = users.filter((user) => user.role == "Register");
  var countRegister = 0;
  for (let i = 0; i < filterRegister.length; i++) {
    countRegister++;
  }

  registerContent.innerHTML = `
<span> Total Number: ${countRegister} </span>

`;
}

// User Management --------------------------------------------
function AllUsers() {

  let tableOfUsers = document.getElementById("tableOfUsers");
  let userGender = "";
  
  tableOfUsers.innerHTML = "";
  users.map((user) => {
    user.gender
      ? (userGender = "<td>Male</td>")
      : (userGender = "<td>Female</td>");

    tableOfUsers.innerHTML += `
        <tr>
            <td><img class="user_avatar" src="${user.avatar}" alt="user_avatar"></td>
            <td>${user.name}</td>
            <td>${user.dateOfBirth}</td>
            ${userGender}
            <td>${user.role}</td>
            <td><ion-icon data-toggle="modal" data-target="#editModal" style="font-size: 35px; color: #705cc4; cursor: pointer" onclick="editUser(${user.id})" name="create-outline"></ion-icon>
            <ion-icon style="font-size: 35px; color: #705cc4; cursor:pointer" onclick="deleteUser(${user.id})" name="trash-outline"></ion-icon>
            </td>

        </tr>
        `;
  });
}

var tableOfUsers = document.getElementById("tableOfUsers");
tableOfUsers.innerHTML = "";

var userGender = "";

users.map((user) => {
  user.gender
    ? (userGender = "<td>Male</td>")
    : (userGender = "<td>Female</td>");

  tableOfUsers.innerHTML += `
  <tr>
  <td><img class="user_avatar" src="${user.avatar}" alt="user_avatar"></td>
  <td>${user.name}</td>
  <td>${user.dateOfBirth}</td>
  ${userGender}
  <td>${user.role}</td>
  <td><ion-icon data-toggle="modal" data-target="#editModal" style="font-size: 35px; color: #705cc4; cursor: pointer" onclick="editUser(${user.id})" name="create-outline"></ion-icon>
  <ion-icon style="font-size: 35px; color: #705cc4; cursor:pointer" onclick="deleteUser(${user.id})" name="trash-outline"></ion-icon>
  </td>

</tr>
  `;
});

function editUser(id) {
  const index = users.findIndex((u) => u.id == id);
  const found = index !== -1;
  if (!found) {
    return;
  }
  const user = users[index];

  // assign value from users[index] to html
  let editContent = document.getElementById("editModal");
  editContent.innerHTML = `
    <div class="modal-dialog">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Edit Information</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
      
            <!-- Modal body -->
            <div id="editForm" class="modal-body">
                <form action="">
                 
                    <div class="form-group">
                      <label for="name">Full Name:</label>
                      <input type="text" class="form-control" placeholder="Enter your name" value="${user.name}" id="editNameId">
                    </div>
                    <div class="form-group">
                        <label for="dob">Year of Birth:</label>
                        <input type="text" class="form-control" value="${user.dateOfBirth}" placeholder="Enter your Year of birth" id="editDob">
                    </div>
                    <div class="form-group">
                        
                          <select id="genderValue" class="form-control" name="" id="">
                            <option id="maleValue">Male</option>
                            <option id="femaleValue" selected>Female</option>
                          </select>
                      </div>
                
                   
                  </form>
            </div>
      
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" onclick="saveEditUser(${user.id})" class="btn btn-success" data-dismiss="modal">Save</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
      
          </div>
        </div>
    `;

  //
}

function saveEditUser(id) {
  const index = users.findIndex((u) => u.id == id);
  const found = index !== -1;
  if (!found) {
    return;
  }
  const user = users[index];

  let nameValue = document.getElementById("editNameId").value;
  let dobValue = document.getElementById("editDob").value;
  console.log(nameValue);
  console.log(dobValue);
  const e = document.getElementById("genderValue");
  // const genderValue = e.options[e.selectedIndex].text;
  const isMale = e.selectedIndex == 0;

  console.log(users[index]);

  user.name = nameValue;
  user.dateOfBirth = dobValue;
  user.gender = isMale;

  users[index] = user;

  console.log(users[index]);

  AllUsers();
}

function deleteUser(id) {
  const index = users.findIndex((u) => u.id == id);
  const found = index !== -1;
  if (!found) {
    return;
  }
  const user = users[index];
  const yes = confirm(`Do you want to delete user ${user.name} ?`);
  if (yes) {
    users.splice(index, 1);
  }
  AllUsers();
}

// Filter Section -------------------------------------------------------------------------
// Filter Male
function filterMale() {
  let tableContent = document.getElementById("tableContent");
  tableContent.innerHTML = "";

  let userGender = "";

  let maleFilter = users.filter((user) => user.gender);

  maleFilter.map((user) => {
    user.gender
      ? (userGender = "<td>Male</td>")
      : (userGender = "<td>Female</td>");

    tableContent.innerHTML += `
        <tr>
            <td><img class="user_avatar" src="${user.avatar}" alt="user_avatar"></td>
            <td>${user.name}</td>
            <td>${user.dateOfBirth}</td>
            ${userGender}
            <td>${user.role}</td>
            <td><ion-icon style="font-size: 35px; color: #705cc4; cursor: pointer" onclick="editUser(${user.id})"  name="create-outline"></ion-icon></td>
            <td><ion-icon onclick="deleteUser(${user.id})" style="font-size: 35px; color: #705cc4; cursor:pointer" name="trash-outline"></ion-icon></td>

        </tr>
        `;
  });
}
// Filter Female
function filterFemale() {
  let tableContent = document.getElementById("tableContent");
  tableContent.innerHTML = "";

  let userGender = "";

  let femaleFilter = users.filter((user) => user.gender == false);

  femaleFilter.map((user) => {
    user.gender
      ? (userGender = "<td>Male</td>")
      : (userGender = "<td>Female</td>");

    tableContent.innerHTML += `
        <tr>
            <td><img class="user_avatar" src="${user.avatar}" alt="user_avatar"></td>
            <td>${user.name}</td>
            <td>${user.dateOfBirth}</td>
            ${userGender}
            <td>${user.role}</td>
            <td><ion-icon onclick="editUser(${user.id})" style="font-size: 35px; color: #705cc4; cursor: pointer" name="create-outline"></ion-icon></td>
            <td><ion-icon onclick="deleteUser(${user.id})" style="font-size: 35px; color: #705cc4; cursor:pointer" name="trash-outline"></ion-icon></td>

        </tr>
        `;
  });
}

// Filter Role: Manager
function filterManager() {
  let tableOfUsers = document.getElementById("tableOfUsers");
  tableOfUsers.innerHTML = "";


  let userGender = "";

  let managerFilter = users.filter((user) => user.role === "Manager");

  managerFilter.map((user) => {
    user.gender
      ? (userGender = "<td>Male</td>")
      : (userGender = "<td>Female</td>");

    tableOfUsers.innerHTML += `
        <tr>
            <td><img class="user_avatar" src="${user.avatar}" alt="user_avatar"></td>
            <td>${user.name}</td>
            <td>${user.dateOfBirth}</td>
            ${userGender}
            <td>${user.role}</td>
            <td><ion-icon data-toggle="modal" data-target="#editModal" style="font-size: 35px; color: #705cc4; cursor: pointer" onclick="editUser(${user.id})" name="create-outline"></ion-icon>
            <ion-icon style="font-size: 35px; color: #705cc4; cursor:pointer" onclick="deleteUser(${user.id})" name="trash-outline"></ion-icon>
            </td>

        </tr>
        `;
  });
}

// Filter Role: Admin
function filterAdmin() {
  let tableOfUsers = document.getElementById("tableOfUsers");
  tableOfUsers.innerHTML = "";

  let userGender = "";

  let adminFilter = users.filter((user) => user.role == "Admin");

  adminFilter.map((user) => {
    user.gender
      ? (userGender = "<td>Male</td>")
      : (userGender = "<td>Female</td>");

    tableOfUsers.innerHTML += `
        <tr>
            <td><img class="user_avatar" src="${user.avatar}" alt="user_avatar"></td>
            <td>${user.name}</td>
            <td>${user.dateOfBirth}</td>
            ${userGender}
            <td>${user.role}</td>
            <td><ion-icon data-toggle="modal" data-target="#editModal" style="font-size: 35px; color: #705cc4; cursor: pointer" onclick="editUser(${user.id})" name="create-outline"></ion-icon>
            <ion-icon style="font-size: 35px; color: #705cc4; cursor:pointer" onclick="deleteUser(${user.id})" name="trash-outline"></ion-icon>
            </td>

        </tr>
        `;
  });
}

// Filter Role: Register
function filterRegister() {
  let tableOfUsers = document.getElementById("tableOfUsers");
  tableOfUsers.innerHTML = "";

  let userGender = "";

  let registerFilter = users.filter((user) => user.role == "Register");

  registerFilter.map((user) => {
    user.gender
      ? (userGender = "<td>Male</td>")
      : (userGender = "<td>Female</td>");

    tableOfUsers.innerHTML += `
        <tr>
            <td><img class="user_avatar" src="${user.avatar}" alt="user_avatar"></td>
            <td>${user.name}</td>
            <td>${user.dateOfBirth}</td>
            ${userGender}
            <td>${user.role}</td>
            <td><ion-icon data-toggle="modal" data-target="#editModal" style="font-size: 35px; color: #705cc4; cursor: pointer" onclick="editUser(${user.id})" name="create-outline"></ion-icon>
            <ion-icon style="font-size: 35px; color: #705cc4; cursor:pointer" onclick="deleteUser(${user.id})" name="trash-outline"></ion-icon>
            </td>

        </tr>
        `;
  });
}

// Sort Section ------------------------------------------------------------------------
function sortDOB() {
  let tableOfUsers = document.getElementById("tableOfUsers");
  tableOfUsers.innerHTML = "";

  let userGender = "";
  function compare(first, second) {
    if (first.dateOfBirth < second.dateOfBirth) {
      return -1;
    }
    if (first.dateOfBirth > second.dateOfBirth) {
      return;
    }
    return 0;
  }

  let sortedUsers = users.sort(compare);

  sortedUsers.forEach((user) => {
    user.gender
      ? (userGender = "<td>Male</td>")
      : (userGender = "<td>Female</td>");

    tableOfUsers.innerHTML += `
        <tr>
            <td><img class="user_avatar" src="${user.avatar}" alt="user_avatar"></td>
            <td>${user.name}</td>
            <td>${user.dateOfBirth}</td>
            ${userGender}
            <td>${user.role}</td>
            <td>
              <ion-icon data-toggle="modal" data-target="#editModal" style="font-size: 35px; color: #705cc4; cursor: pointer" onclick="editUser(${user.id})" name="create-outline"></ion-icon>
              <ion-icon style="font-size: 35px; color: #705cc4; cursor:pointer" onclick="deleteUser(${user.id})" name="trash-outline"></ion-icon>
            </td>

        </tr>
        
        `;
  });
}

function createUser() {
  let nameValue = document.getElementById("name").value;
  let dobValue = document.getElementById("dob").value;

  const e = document.getElementById("genderValue");
  // const genderValue = e.options[e.selectedIndex].text;
  const isMale = e.selectedIndex == 0;

  const maxId = Math.max(...users.map((u) => u.id));
  let user = {
    id: maxId + 1, // get max id, then + 1
    name: nameValue,
    avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
    dateOfBirth: dobValue,
    gender: isMale,
    role: "Register",
  };

  users.push(user);
  AllUsers();
}

const loginModal = document.getElementById("loginModal");

loginModal.innerHTML += `
<div class="modal-dialog">
<div class="modal-content">

  <!-- Modal Header -->
  <div class="modal-header">
    <h4 class="modal-title">Log in Portal</h4>
    <button type="button" class="close" data-dismiss="modal">&times;</button>
  </div>

  <!-- Modal body -->
  <div class="modal-body">
      <form action="">
          <div class="form-group">
            <label for="ID">ID Number:</label>
            <input type="text" class="form-control" placeholder="Enter ID Number" id="idNumber">
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" placeholder="Enter password" id="pwd">
          </div>
          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox"> Remember me
            </label>
          </div>
        </form>       
  </div>

  <!-- Modal footer -->
  <div class="modal-footer">
      <button type="submit" class="btn btn-primary">Submit</button>
    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
  </div>

</div>
</div>

`;

const formModal = document.getElementById("formModal");

formModal.innerHTML += `
<div class="modal-dialog">
      <div class="modal-content">
  
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">User Registration</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
  
        <!-- Modal body -->
        <div class="modal-body">
            <form>
             
                <div class="form-group">
                  <label for="name">Full Name:</label>
                  <input type="text" class="form-control" placeholder="Enter your name" id="name">
                </div>
                <div class="form-group">
                    <label for="dob">Year of Birth:</label>
                    <input type="text" class="form-control" placeholder="Enter your Year of birth" id="dob">
                </div>
                <div class="form-group">
                    <label for="gender">Gender:</label>

                      <select id="genderValue" class="form-control" name="" id="">
                        <option id="maleValue">Male</option>
                        <option id="femaleValue">Female</option>
                      </select>
                  </div>
            
               
              </form>

        </div>
  
        <!-- Modal footer -->
        <div class="modal-footer">
            <button onclick="createUser()" type="submit" class="btn btn-success">Create</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>

`;
