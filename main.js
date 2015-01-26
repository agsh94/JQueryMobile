function user()
{
	var username= document.getElementById("username").value;
	var password= document.getElementById("password").value;
	if(username=="agsh94")
	{
		if(password=="qwerty")
		{
			window.location="#welcome";

		}
		else
		{
			alert("Invalid Password ! ")
		}
	}
	else
	{
		alert("Invalid Username :(")
	}
	

}
