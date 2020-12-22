function check() {
    var empt = document.forms["form"]["id"].value;
if (empt == "")
{
alert("Please input your ID");
return false;
}
     var empt1 = document.forms["form"]["url"].value;
if (empt1 == "")
{
alert("Please input a URL");
return false;
}
     var empt2 = document.forms["form"]["message"].value;
if (empt2 == "")
{
alert("Please input a Message");
return false;
}
     var empt3 = document.forms["form"]["subject"].value;
if (empt3 == "")
{
alert("Please input your subject");
return false;
}
     var empt4 = document.forms["form"]["email"].value;
if (empt4 == "")
{
alert("Please input your email");
return false;
}
    if(isNaN(empt)){
        alert("Please enter a valid ID only containing numbers");
    }
    var domain1=empt4.split("@");
    alert(domain1[1]);
    var user=empt1.split(".");
    alert(user[0]);
}
