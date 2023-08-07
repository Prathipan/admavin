let loadData = async () => {
  const data = await fetch(
    `https://61efbd81732d93001778e565.mockapi.io/userdata`
  );
  const res = await data.json();
  // console.log(res);

  let trHTML = "";

  for (let obj of res) {
    trHTML += `<tr>
           <td>${obj.id}</td>
           <td>${obj.firstName}</td>
           <td>${obj.lastName}</td>
           <td>${obj.email}</td>
           <td>${obj.phoneNumber}</td>
           <td>${obj.designation}</td>
           <td><button type="button" class="btn btn-primary" onclick="showUserViewBox(${obj.id})">View</button>
           <td><button type="button" class="btn btn-warning" onclick="showUserEditBox(${obj.id})">Edit</button>
           <td><button type="button" class="btn btn-danger" onclick="userDelete(${obj.id})">Delete</button>
         </tr>`;
  }
  document.getElementById("mytable").innerHTML = trHTML;
};
loadData();

let showUserCreateBox = () => {
  window.location.href = "/add.html";
};

let showUserEditBox = (id) => {
  window.location.href = `/edit.html?id=${id}`;
}

let showUserViewBox = async(id) => {
  window.location.href = `/view.html?id=${id}`;
};

let onFormSubmit = async () => {
  let formData = readFormData();
  let res = await fetch(
    "https://61efbd81732d93001778e565.mockapi.io/userdata",
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  let data = res.json();
  window.location.href = "/index.html";
};

let readFormData = () => {
  let formData = {};
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["email"] = document.getElementById("email").value;
  formData["phoneNumber"] = document.getElementById("phoneNumber").value;
  formData["designation"] = document.getElementById("designation").value;
  formData["password"] = document.getElementById("password").value;
  return formData;
};

let userDelete = async (id) => {
  console.log(id);
  let res = await fetch(
    `https://61efbd81732d93001778e565.mockapi.io/userdata/${id}`,
    {
      method: "DELETE",
    }
  );
  let data = await res.json();
  loadData();
};


let searchFun = () => {
  let filter = document.getElementById("myInput").value;
  // console.log(filter)

  let myTable = document.getElementById("mytable");
  let tr = myTable.getElementsByTagName("tr");
  console.log(tr)

  for(let i = 0 ; i < tr.length ; i++)
   {
     let td = tr[i].getElementsByTagName("td")[1];
     if(td){
      let textVal = td.textContent || td.innerHTML;

      if(textVal.indexOf(filter) > -1){
         tr[1].style.display = ""
      }else{
        tr[i].style.display = none;
      }
     }
   }

}








// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();