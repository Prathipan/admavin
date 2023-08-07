const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
// console.log(myParam);

let getData = async() => {
    let res = await fetch(`https://61efbd81732d93001778e565.mockapi.io/userdata/${myParam}`);
    let data = await res.json();
    // console.log(data)

    document.getElementById("viewFname").innerText = data.firstName;
    document.getElementById("viewLname").innerText = data.lastName;
    document.getElementById("viewEmail").innerText = data.email;
    document.getElementById("viewContact").innerText = data.phoneNumber;
    document.getElementById("viewDesignation").innerText = data.designation;
    document.getElementById("viewPassword").innerText = data.password;
}
getData()
