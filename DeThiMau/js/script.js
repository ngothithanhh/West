// coding implementation
function validateForm(){
    const emailInput = document.getElementById("email");
    const ratingInput = document.getElementById("rate");

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexRa = /^(\+84|0)(3|5|7|8|9)([0-9]{8})$/;

    if(emailInput.value ===''){
        alert("Nhap email!!!");
    }
    else{
        if(!regexEmail.test(emailInput.value)){
            alert("Dien lai email!!")
        }
    }

    if(ratingInput.value ===''){
        alert("Nhap rating");
    }
    else{
        if(!regexRa.test(ratingInput.value)){
            alert("Rating phai la so!!")
        }
    }
}
// end coding implementation