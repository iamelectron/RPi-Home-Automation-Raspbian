
var start_stop;

function logArrayElements(ele, ind, arr) 
{
	 
	var sel_listo = document.getElementById("sel_list");
	var option = document.createElement("option");
	option.text = ele;
	sel_listo.add(option,ind);
} 

//////
function getlist()
{
	var ajaxobject;
	ajaxobject=new XMLHttpRequest(); 
	
	ajaxobject.onreadystatechange=function()
	{
		if(ajaxobject.readyState==4)
		{
 
			 //document.getElementById('namehere').innerHTML = ajaxobject.responseText;
			 var phpelements = JSON.parse(ajaxobject.responseText); 
			 
			 document.getElementById("sel_list").options.length = 0; 
			  
			 phpelements.forEach(logArrayElements);
			 
			 document.getElementById('tf2').value = document.getElementById('sel_list').value;
			 document.getElementById("myImage").src = "/images/complete.gif"
			// document.getElementById('namehere').innerHTML = phpelements[0];
			 
		}

	}
	 document.getElementById("myImage").src = "/images/loading.gif"
	ajaxobject.open("GET","/php/test.php?name",true);
	ajaxobject.send(null);
}
///high low AJAX
function ledlowajax()
{
	var ajaxobject;
	ajaxobject=new XMLHttpRequest(); 
	 
	ajaxobject.open("GET","/php/low.php?name",true);
	ajaxobject.send(null);
}

///high low AJAX
function ledhighajax()
{
	var ajaxobject;
	ajaxobject=new XMLHttpRequest(); 
	 
	ajaxobject.open("GET","/php/high.php?name",true);
	ajaxobject.send(null);
}

///send bytes ajax
function send_bytes_ajax()
{
	var ajaxobject;
	ajaxobject=new XMLHttpRequest(); 
	 
	ajaxobject.open("GET","/xmit.php?q=[" +
				 document.getElementById('tf1').value + ", " +
				 document.getElementById('tf2').value + ", " +
				 document.getElementById('tf3').value + ", " +
				 document.getElementById('tf4').value + ", " +
				 document.getElementById('tf5').value + ", " +
				 document.getElementById('tf6').value + ", " +
				 document.getElementById('tf7').value + ", " +
				 document.getElementById('tf8').value + ", " +
				 document.getElementById('tf9').value + ", " +
				 document.getElementById('tf10').value + "]", true); 
	
	ajaxobject.send(null);
}

function setid()
{
	 document.getElementById('tf2').value =  document.getElementById('sel_list').value;
}

function sel_packet()
{
	var str_val = document.getElementById('sel_pack').value;
	 document.getElementById('tf1').value = "1";
	switch(str_val)
	{
		case "addmepack":
		 document.getElementById('tf1').value = "1";
			break;
		case "datpack":
				 document.getElementById('tf1').value = "2";
			break;
		case "updpack":
				 document.getElementById('tf1').value = "3";
			break;
	} 
}


var istimeron = 0;
var tmv;
///////////////get update pack
function getupdate()
{
	var ajaxobject;
	ajaxobject=new XMLHttpRequest(); 
	
	if(!istimeron)
	{
		clearTimeout(tmv);
	}
	//instead of while time interval is used while won't work
//	while(true)
	{
		ajaxobject.onreadystatechange=function()
		{
			if(ajaxobject.readyState==4)
			{
 
				//document.getElementById('namehere').innerHTML = ajaxobject.responseText;
				var phpelements = JSON.parse(ajaxobject.responseText); 
		  
				document.getElementById('namehere').innerHTML = ajaxobject.responseText; 
				// document.getElementById('namehere').innerHTML = phpelements[0];
			 
			} 
		} 
		ajaxobject.open("GET","/rcv.php?q=" + document.getElementById('tf2').value ,true); 
		
		  
		ajaxobject.send(null);
	}
	
	//tmv = setTimeout(function(){getupdate()}, 1000);

	
}

function dotimer()
{
	//if(!istimeron)
	//{
	//	istimeron = 1;
		 getupdate();
	//}
	//else
	//{
	//	istimeron = 0;
	//	clearTimeout(tmv);
	//}
}
