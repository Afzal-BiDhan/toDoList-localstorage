// localStorage Condition
if (localStorage.getItem("contacts") == undefined) {
    localStorage.setItem("contacts", "[]");
}

let result = "";
let contacts = JSON.parse(localStorage.getItem("contacts"));

for (i = 0; i < contacts.length; i++) {
    result += `
        <div class="contant_item">
          <i class="far fa-user fa-2x color-primary"></i>
          <div class="contact_item_info">
            <h4>${contacts[i].name}</h4>
            <p>${contacts[i].number}</p>
          </div>
          <i class="fas fa-times-circle color-primary" onClick="deleteContact('${contacts[i]._id}')"></i>
        </div>
    `
}

document.getElementsByClassName("contant_body")[0].innerHTML = result;



// localStorage function
function submitContant(e) {
    e.preventDefault();
    let contact_name = document.getElementById('name').value;
    let contact_number = document.getElementById('number').value;

    // console.log(contact_name, contact_number)

    let contacts = JSON.parse(localStorage.getItem("contacts"));

    // console.log(typeof contacts);

    let contact = {
        _id: Math.random().toString(36).substr(2, 9),
        name: contact_name,
        number: contact_number
    }

    contacts.unshift(contact)
    localStorage.setItem("contacts", JSON.stringify(contacts));

    document.getElementById('name').value = "";
    document.getElementById('number').value = "";

    // console.log(contacts)

    location.reload();
}

function deleteContact(_id){
    let contacts = JSON.parse(localStorage.getItem("contacts"));

    contacts = contacts.filter(function(contacts){
        return contacts._id != _id
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    location.reload()
    // console.log(contacts)
}