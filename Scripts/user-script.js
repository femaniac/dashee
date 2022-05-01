// !JSON
const users = [
  {
    id: 1,
    name: "Malia Haville",
    avatar: "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80",
    dateOfBirth: 1999,
    gender: true,
    role: "Manager",
  },
  {
    id: 2,
    name: "Franciska Lambkin",
    avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    dateOfBirth: 2015,
    gender: true,
    role: "Admin",
  },
  {
    id: 3,
    name: "Reid Stellino",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    dateOfBirth: 1999,
    gender: true,
    role: "Register",
  },
  {
    id: 4,
    name: "Jeddy Tows",
    avatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    dateOfBirth: 2000,
    gender: true,
    role: "Admin",
  },
  {
    id: 5,
    name: "Julina Mithon",
    avatar: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    dateOfBirth: 2006,
    gender: false,
    role: "Register",
  },
  {
    id: 6,
    name: "Kaylil Sola",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    dateOfBirth: 1996,
    gender: false,
    role: "Manager",
  },
  {
    id: 7,
    name: "Padget Chant",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    dateOfBirth: 2015,
    gender: true,
    role: "Register",
  },
  {
    id: 8,
    name: "Persis Laurenson",
    avatar: "https://images.unsplash.com/photo-1596075780750-81249df16d19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    dateOfBirth: 2015,
    gender: true,
    role: "Admin",
  },
  {
    id: 9,
    name: "Louisette Le Merchant",
    avatar: "https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    dateOfBirth: 2006,
    gender: true,
    role: "Admin",
  },
  {
    id: 10,
    name: "Vida Venton",
    avatar: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    dateOfBirth: 2000,
    gender: true,
    role: "Register",
  },
  // {
  //   id: 11,
  //   name: "Ruthann Dyball",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2009,
  //   gender: false,
  //   role: "Manager",
  // },
  // {
  //   id: 12,
  //   name: "Glenda Matousek",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2004,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 13,
  //   name: "Nissy Marriot",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
  //   dateOfBirth: 2002,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 14,
  //   name: "Hammad Vollam",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 1997,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 15,
  //   name: "Odey Cuberley",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2006,
  //   gender: false,
  //   role: "Manager",
  // },
  // {
  //   id: 16,
  //   name: "Patric Brushfield",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
  //   dateOfBirth: 2012,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 17,
  //   name: "Jocelin Teenan",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
  //   dateOfBirth: 2001,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 18,
  //   name: "Ashli Dunbabin",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
  //   dateOfBirth: 1999,
  //   gender: true,
  //   role: "Manager",
  // },
  // {
  //   id: 19,
  //   name: "Brantley Herries",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 1996,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 20,
  //   name: "Kristyn Veysey",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 1999,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 21,
  //   name: "Walsh Cundy",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
  //   dateOfBirth: 2010,
  //   gender: false,
  //   role: "Register",
  // },
  // {
  //   id: 22,
  //   name: "Jamie Grossier",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
  //   dateOfBirth: 1998,
  //   gender: false,
  //   role: "Register",
  // },
  // {
  //   id: 23,
  //   name: "Aleece Waby",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
  //   dateOfBirth: 2014,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 24,
  //   name: "Kaycee Fiddiman",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2010,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 25,
  //   name: "Shoshana Manolov",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
  //   dateOfBirth: 2015,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 26,
  //   name: "Cary Smeaton",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
  //   dateOfBirth: 1994,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 27,
  //   name: "Kellina Bradburne",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
  //   dateOfBirth: 2002,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 28,
  //   name: "Cindi Priddey",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
  //   dateOfBirth: 1995,
  //   gender: false,
  //   role: "Register",
  // },
  // {
  //   id: 29,
  //   name: "Marcus Rodden",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
  //   dateOfBirth: 2005,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 30,
  //   name: "Gaile Dallmann",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
  //   dateOfBirth: 2003,
  //   gender: false,
  //   role: "Register",
  // },
  // {
  //   id: 31,
  //   name: "Boigie Ebourne",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2008,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 32,
  //   name: "Axe Agirre",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
  //   dateOfBirth: 2005,
  //   gender: false,
  //   role: "Register",
  // },
  // {
  //   id: 33,
  //   name: "Avrom Janeway",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
  //   dateOfBirth: 2014,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 34,
  //   name: "Kennith Copper",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
  //   dateOfBirth: 1995,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 35,
  //   name: "Kermy MacKenny",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2010,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 36,
  //   name: "Kort Cumber",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
  //   dateOfBirth: 1996,
  //   gender: false,
  //   role: "Register",
  // },
  // {
  //   id: 37,
  //   name: "Howard Panner",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2009,
  //   gender: false,
  //   role: "Register",
  // },
  // {
  //   id: 38,
  //   name: "Mirabelle Tomaszewicz",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2004,
  //   gender: true,
  //   role: "Admin",
  // },
  // {
  //   id: 39,
  //   name: "Caren McEvoy",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
  //   dateOfBirth: 2012,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 40,
  //   name: "Olivie Jozsef",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
  //   dateOfBirth: 2005,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 41,
  //   name: "Connie Nottle",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
  //   dateOfBirth: 2005,
  //   gender: false,
  //   role: "Manager",
  // },
  // {
  //   id: 42,
  //   name: "Veronica Giannoni",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
  //   dateOfBirth: 2002,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 43,
  //   name: "Karel Faragher",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar4.png",
  //   dateOfBirth: 2000,
  //   gender: false,
  //   role: "Register",
  // },
  // {
  //   id: 44,
  //   name: "Joice Wield",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2014,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 45,
  //   name: "Leslie Collough",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
  //   dateOfBirth: 1996,
  //   gender: true,
  //   role: "Admin",
  // },
  // {
  //   id: 46,
  //   name: "Standford Blaasch",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
  //   dateOfBirth: 2010,
  //   gender: true,
  //   role: "Register",
  // },
  // {
  //   id: 47,
  //   name: "Franciskus Setch",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar2.png",
  //   dateOfBirth: 2005,
  //   gender: true,
  //   role: "Manager",
  // },
  // {
  //   id: 48,
  //   name: "Dael Staley",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar3.png",
  //   dateOfBirth: 2009,
  //   gender: true,
  //   role: "Manager",
  // },
  // {
  //   id: 49,
  //   name: "Gal Capelow",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar1.png",
  //   dateOfBirth: 2004,
  //   gender: false,
  //   role: "Admin",
  // },
  // {
  //   id: 50,
  //   name: "Sammie Cramb",
  //   avatar: "https://www.w3schools.com/bootstrap5/img_avatar5.png",
  //   dateOfBirth: 2007,
  //   gender: false,
  //   role: "Register",
  // },
];

// !Table Content ------------------------------------------------------------------
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
    <td>
      <ion-icon data-toggle="modal" data-target="#editModal" style="font-size: 35px; color: #705cc4; cursor: pointer" onclick="editUser(${user.id})" name="create-outline"></ion-icon>
      <ion-icon style="font-size: 35px; color: #705cc4; cursor:pointer" onclick="deleteUser(${user.id})" name="trash-outline"></ion-icon>
  </td>

</tr>
  `;
});

let usersCount = document.getElementById('users_count')
let adminsCount = document.getElementById('admins_count')
let managersCount = document.getElementById('managers_count')
let registersCount = document.getElementById('registers_count')

usersCount.innerHTML = users.length;
let admins = users.filter(user => user.role === "Admin");
adminsCount.innerHTML = admins.length;
let managers = users.filter(user => user.role === 'Manager')
managersCount.innerHTML = managers.length;
let registers = users.filter(user => user.role === 'Register');
registersCount.innerHTML = registers.length;


// ! User Management ----- Tools ---------------------------------------

function createUserHandler() {
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

  users.unshift(user);
  AllUsersHandler();
}

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
  const isMale = e.selectedIndex == 0;

  console.log(users[index]);

  user.name = nameValue;
  user.dateOfBirth = dobValue;
  user.gender = isMale;

  users[index] = user;

  AllUsersHandler();
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
  AllUsersHandler();
}

// ! Filter & Sort --------------------------------------------------------

// * All Users
function AllUsersHandler() {

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

// * Filter Male
function filterMaleHandler() {
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

// * Filter Female
function filterFemaleHandler() {
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

// * Filter Role: Manager
function filterManagerHandler() {
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

// * Filter Role: Admin
function filterAdminHandler() {
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

// * Filter Role: Register
function filterRegisterHandler() {
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

// * Sort Section ------------------------------------------------------------------------
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


// ! Others ----------------------------------------------------------------

// * Search Bar
function onSearchHandler() {
  let searchInput = document.getElementById('searchInput').value;
  let searchOutput = document.getElementById('tableOfUsers');
  searchOutput.innerHTML = "";

  let filteredInput = users.filter(user => user.name.includes(searchInput));

  filteredInput.map(user => {

    user.gender
    ? (userGender = "<td>Male</td>")
    : (userGender = "<td>Female</td>");

  searchOutput.innerHTML += `
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
  })

  
}





