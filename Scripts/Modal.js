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
            <div onclick="createUser()" data-dismiss="modal" type="submit" class="btn btn-dark">Create</div>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
  
      </div>
    </div>

`;
