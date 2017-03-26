function validMobile()
      {
         var mobile = document.getElementById("mob").value.length;
         if (mobile !=10) 
         {
            alert("Please enter 10 digit mobile number")
            document.getElementById("mob").style.border = "1px solid red";
            return false;
         }
		 else
		 {
			 document.getElementById("mob").style.border = "1px solid green";
			 
			 
			 
		 }
      }	
function sendOTP() {
	alert("OTP has been sent! This may take a while!");
	mob_var = document.getElementById("mob").value; 
	otp_var = Math.floor((Math.random() * 9999) + 1000);
	var api_key =         //Enter your API Key here
	var sender =          //Enter your Sender ID here
	var yourUrl = "http://api.msg91.com/api/sendotp.php?authkey="+ api_key+"&mobile="+mob_var+"&message=Your%20OTP%20is%20+"+otp_var+"&sender="+ sender +"&route="+otp_var;
	var xhReq = new XMLHttpRequest();
	xhReq.open("GET", yourUrl, false);
	xhReq.send(null);
	}
function sendmsg() {
	alert("Check your mobile for the message");
	message=document.getElementById("message").value;
	var yourUrl = "http://api.msg91.com/api/sendotp.php?authkey="+ api_key+"&mobile="+mob_var+"&message="+message+"&sender="+ sender +"&route="+otp_var;
	var xhReq = new XMLHttpRequest();
	xhReq.open("GET", yourUrl, false);
	xhReq.send(null);

}
function verifyOTP() {
	user_otp = document.getElementById("user_otp").value;
	if (user_otp==otp_var) {
	alert("Correct OTP");
	document.getElementById('messages').style.display = "block";
	}
	else {
		alert("Incorrect OTP, Click Get OTP to send new OTP if you haven't recieved it yet")
        document.getElementById("user_otp").style.border = "1px solid red";
        return false;
    }
}