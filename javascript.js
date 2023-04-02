function validation(){
    var user = document.getElementById('user').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
    var subj = document.getElementById('subject').value;
if(user=="")
{
alert("Name must be filled out");
return false;
}
if(email=="")
{
alert("Email must be filled out");
return false;
}
if(subj=="")
{
alert("Subject must be filled out");
return false;
}
if(msg=="")
{
alert("Message must be filled out");
return false;
}
if((user.length<=2) || (user.length>20))
{
alert("Name must be between 2 and 20");
return false;
}
if(!isNaN(user))
{
alert("Only characters are allowed");
return false;
}
if((subj.length<=3) || (subj.length>20))
{
alert("subject must be between 3 and 20");
return false;
}
if((msg.length<=3) || (msg.length>50))
{
alert("Message must be must be between 3 and 50");
return false;
}
if(email.indexOf('@')<=0)
{
alert("Invalid ");
return false;
}
if(email.charAt(email.length-4)!='.'){
alert("Invalid Email");
return false;
}
else{

alert("Thankyou! ");

}
}

