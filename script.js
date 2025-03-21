

function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        setTimeout(function(){document.location.href = "login.html"},500);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw){
    setTimeout(function(){document.location.href = "EMI.html"},500);
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}


function resetForm(){
    document.getElementById("myForm").reset();
}

function calculate(){
    amount=document.getElementById('amount').value
    rate=document.getElementById('rate').value
    time=document.getElementById('time').value
    const interest = (amount * (rate * 0.01)) / time;
    let emi = ((amount / time) + interest).toFixed(2);
    emi = emi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("output").innerHTML=emi
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var table = document.getElementById("myTable");
    resetForm();
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = emi;
    document.getElementById("myTable").deleteRow(11);
}