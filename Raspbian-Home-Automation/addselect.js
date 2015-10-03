
<script type="text/javascript">



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
			// document.getElementById('namehere').innerHTML = phpelements[0];
				
		}

	}
	ajaxobject.open("GET","test.php?name",true);
	ajaxobject.send(null);
}

</script>