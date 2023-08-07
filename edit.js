const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");

let getData = async () => {
  let res = await fetch(
    `https://61efbd81732d93001778e565.mockapi.io/userdata/${myParam}`
  );
  let data = await res.json();
  console.log(data);

  document.getElementById("firstName").value = data.firstName;
  document.getElementById("lastName").value = data.lastName;
  document.getElementById("email").value = data.email;
  document.getElementById("phoneNumber").value = data.phoneNumber;
  document.getElementById("designation").value = data.designation;
  document.getElementById("password").value = data.password;
};
getData();

let onFormSubmit = async () => {
  let formData = readFormData();
  let res = await fetch(
    `https://61efbd81732d93001778e565.mockapi.io/userdata/${myParam}`,
    {
      method: "PUT",
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