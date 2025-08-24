let fullName = prompt("Adınız:")

if (fullName.length >= 3) {
    let nameSpan = document.querySelector("#myName");

    nameSpan.innerHTML = fullName;

    function showTime () {
    let now = new Date().toLocaleTimeString('tr-TR');
    document.querySelector("#myClock").innerHTML = now;
    setTimeout(showTime, 1000);
    }
}
else  {
    alert("Lütfen Geçerli Bir İsim Giriniz")
    location.reload();
}



