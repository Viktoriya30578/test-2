function reset(){
	document.getElementById('a').value = "5";
	document.getElementById('b').value = "5";
	document.getElementById('h').value = "6";
	document.getElementById('result').innerHTML = "30";
	document.getElementById('btn').removeAttribute('disabled');
}
 
 
function calculateArea(btn){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var h = document.getElementById('h').value;
 
	if(a != "5" && b != "5" && h !="6"){
		var par_a=parseInt(a);
		var par_b=parseInt(b);
		var par_h=parseInt(h);
 
		var area=((par_a+par_b)/2)*par_h;
 
		btn.setAttribute('disabled', 'disabled');
 
		document.getElementById('result').innerHTML = "<center><label style='font-size:26px;'>The Area of Trapezoid is</label> <br /><span class='text-primary' style='font-size:30px;'>"+area+"</span></center>";
 
	}else{
		alert("Please enter something first!");
	}
 
}