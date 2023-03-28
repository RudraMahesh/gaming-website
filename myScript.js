// JavaScript Document
function myFunction() {
    document.getElementById("search-bar").style.display = "inline-block";
    document.getElementById("subscribe").style.marginLeft = "39px";
    document.getElementById("img").style.display = "none";
    document.getElementById("img2").style.display = "inline-block"
}
function dNone() {
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("img2").style.display = "none"
    document.getElementById("subscribe").style.marginLeft = "260px";
}
function cross() {
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("img").style.display = "inline-block";
    document.getElementById("subscribe").style.marginLeft = "260px";
    document.getElementById("img2").style.display = "none"
}
function myValidation() {
    var x = document.form1.first.value;
    var y = document.form1.last.value;
    var z = document.form1.email.value;
    var a = document.form1.num.value;
    var b = document.form1.message.value;
    let atpos = z.indexOf('@');
    let dotpos = z.indexOf('.');


    if (x == "" && y == "" && z == "" && a == "" && b == "") {
        document.getElementById("f-name").innerHTML = "First Name is Required";
        document.getElementById("first").style.borderBottom = "1px solid red";
        document.getElementById("l-name").innerHTML = "Last Name is Required";
        document.getElementById("last").style.borderBottom = "1px solid red";
        document.getElementById("f-email").innerHTML = "Email is Required";
        document.getElementById("email").style.borderBottom = "1px solid red";
        document.getElementById("f-message").innerHTML = "Message is Required";
        document.getElementById("message").style.borderBottom = "1px solid red";
    }
    else if (x.length < 3) {
        document.getElementById("f-name").innerHTML = "Minimum length of the name is Three";
    }
    else if (x.length > 8) {
        document.getElementById("f-name").innerHTML = "Maximum length of the name is Eight";
    }
    else if (y == "") {
        document.getElementById("f-name").innerHTML = "";
        document.getElementById("first").style.borderBottom = "1px solid lime";
    }
    else if (z == "") {
        document.getElementById("l-name").innerHTML = "";
        document.getElementById("last").style.borderBottom = "1px solid lime";
    }
    else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= z.length) {
        document.getElementById("f-email").innerHTML = "Email is not in valid format Ex(abc@gmail.com)";
    }

    else if (a == "") {
        document.getElementById("f-email").innerHTML = "";
        document.getElementById("email").style.borderBottom = "1px solid lime";
    }
    else if (isNaN(a)) {
        document.getElementById("f-phone").innerHTML = "Only Numeric Value Allowed";
        document.getElementById("phone").style.borderBottom = "1px solid red";
    }
    else if (a.length < 10) {
        document.getElementById("f-phone").innerHTML = "Mobile Number Must Be Ten Digit";
        document.getElementById("phone").style.borderBottom = "1px solid red";
    }

    else if (a.charAt(0) != 9) {
        document.getElementById("f-phone").innerHTML = "Num value should start with (9,8,7) numbers";
        document.getElementById("phone").style.borderBottom = "1px solid red";
    }
    else if (b == "") {
        document.getElementById("f-phone").innerHTML = "";
        document.getElementById("phone").style.borderBottom = "1px solid lime";
    }
    else {
        document.getElementById("f-message").innerHTML = "";
        document.getElementById("message").style.borderBottom = "1px solid lime";
        document.form1.submit();
    }
}
function signUp() {
    let x = document.form2.mail.value;
    let y = document.form2.pass.value;

    if (x == "") {
        document.getElementById("log-mail").innerHTML = "Email is Required*";
        document.getElementById("log-email").style.borderBottom = "2px solid red";
    }
    else if (x.indexOf("@") <= 0) {
        document.getElementById("log-mail").innerHTML = "Email is invalid*";
        document.getElementById("log-email").style.borderBottom = "2px solid red";
    }
    else if (y == "") {
        document.getElementById("log-mail").innerHTML = "";
        document.getElementById("log-email").style.borderBottom = "2px solid lime";
        document.getElementById("log-pass").innerHTML = "Password is Required*";
        document.getElementById("log-pas").style.borderBottom = "2px solid red";
    }
    else if (y.length < 6) {
        document.getElementById("log-pass").innerHTML = "Password strength must be atleast 6 character";
        document.getElementById("log-pas").style.borderBottom = "2px solid red";
    }
    else if (y.length > 20) {
        document.getElementById("log-pass").innerHTML = "Maximum 20 character allowed";
        document.getElementById("log-pas").style.borderBottom = "2px solid red";
    }
    else {
        document.getElementById("log-pass").innerHTML = "";
        document.getElementById("log-pas").style.borderBottom = "2px solid lime";
        document.form2.login();
    }
}
function subs() {
    let x = document.form3.maile.value;

    if (x == "") {
        document.getElementById("sub-email").innerHTML = "Email is Required*";
        document.getElementById("sub-mail").style.borderBottom = "2px solid red";
    }
    else if (x.indexOf("@") <= 0) {
        document.getElementById("sub-email").innerHTML = "Email is invalid*";
        document.getElementById("sub-mail").style.borderBottom = "2px solid red";
    }
    else {
        document.form3.subscribe();
    }
}
// for store-content...

function myStore() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("pop-bg").style.display = "none";
    document.getElementById("popup1").style.display = "none";
    document.getElementById("pop-bg1").style.display = "none";
    document.getElementById("popup2").style.display = "none";
    document.getElementById("pop-bg2").style.display = "none";
    document.getElementById("popup3").style.display = "none";
    document.getElementById("pop-bg3").style.display = "none";
    document.getElementById("popup4").style.display = "none";
    document.getElementById("pop-bg4").style.display = "none";
    document.getElementById("popup5").style.display = "none";
    document.getElementById("pop-bg5").style.display = "none";
    document.getElementById("popup6").style.display = "none";
    document.getElementById("pop-bg6").style.display = "none";
    document.getElementById("popup7").style.display = "none";
    document.getElementById("pop-bg7").style.display = "none";
}
function myStore1() {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("pop-bg").style.display = "block";
}
function myStore2() {
    document.getElementById("popup1").style.display = "flex";
    document.getElementById("pop-bg1").style.display = "block";
}
function myStore3() {
    document.getElementById("popup2").style.display = "flex";
    document.getElementById("pop-bg2").style.display = "block";
}
function myStore4() {
    document.getElementById("popup3").style.display = "flex";
    document.getElementById("pop-bg3").style.display = "block";
}
function myStore5() {
    document.getElementById("popup4").style.display = "flex";
    document.getElementById("pop-bg4").style.display = "block";
}
function myStore6() {
    document.getElementById("popup5").style.display = "flex";
    document.getElementById("pop-bg5").style.display = "block";
}
function myStore7() {
    document.getElementById("popup6").style.display = "flex";
    document.getElementById("pop-bg6").style.display = "block";
}
function myStore8() {
    document.getElementById("popup7").style.display = "flex";
    document.getElementById("pop-bg7").style.display = "block";
}
function popClose() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("pop-bg").style.display = "none";
    document.getElementById("popup1").style.display = "none";
    document.getElementById("pop-bg1").style.display = "none";
    document.getElementById("popup2").style.display = "none";
    document.getElementById("pop-bg2").style.display = "none";
    document.getElementById("popup3").style.display = "none";
    document.getElementById("pop-bg3").style.display = "none";
    document.getElementById("popup4").style.display = "none";
    document.getElementById("pop-bg4").style.display = "none";
    document.getElementById("popup5").style.display = "none";
    document.getElementById("pop-bg5").style.display = "none";
    document.getElementById("popup6").style.display = "none";
    document.getElementById("pop-bg6").style.display = "none";
    document.getElementById("popup7").style.display = "none";
    document.getElementById("pop-bg7").style.display = "none";
}

function scrollToTop() {
    window.scrollTo(0, 0);

}
function scrollHide() {
    if (window.scrollY > 200) {
        document.getElementById("scroll").style.display = "flex";
    }
    else {
        document.getElementById("scroll").style.display = "none";

    }
}
function myPayment() {
    document.getElementById("pay-img").style.display = "none"
}