/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var buzz=0, triac2=0;
var dat1=0,dat2=0,dat3=0,dat4=0,dat5=0,dat6=0,dat7=0,dat8=0,dat9=0,dat10=0;
function opencontrol() 
{
    document.getElementById("controlbox").style.visibility = "visible";  
   
   var box = $('.secondbox');
   box.toggleClass('active'); 
    
}
function closecontrol() 
{
    var box = $('.secondbox');
    box.toggleClass('active');
    document.getElementById("controlbox").style.visibility = "hidden";  
}

function openscandev() 
{
    getlist();
    document.getElementById("scandevbox").style.visibility = "visible";  
}
function closescandev() 
{
    document.getElementById("scandevbox").style.visibility = "hidden";  
}

function openrelay() 
{ 
        var box = $('.relaybox');
    box.toggleClass('active');
    document.getElementById("relaycontrol").style.visibility = "visible";  
}
function closerelay() 
{
        var box = $('.relaybox');
    box.toggleClass('active');
    document.getElementById("relaycontrol").style.visibility = "hidden";  
}

function trackchange(val)
{
    	var ajaxobject;
	ajaxobject=new XMLHttpRequest(); 
	 
        ajaxobject.open("GET","/xmit.php?q=[2, "+ document.getElementById("Device List").value + ", 0, 0, "+ document.getElementById("brightness").value + 
                "," + buzz +","+ triac2 +", 0, 0, 0]", true); 
		
	ajaxobject.send(null);
}

function onlighcontrol()
{
    	var ajaxobject;
	ajaxobject=new XMLHttpRequest(); 
	 triac2=!triac2;
      ajaxobject.open("GET","/xmit.php?q=[2, "+ document.getElementById("Device List").value + ", 0, 0, "+ document.getElementById("brightness").value + 
                "," + buzz +","+ triac2 +", 0, 0, 0]", true); 
	ajaxobject.send(null);
}

function buzzcontrol()
{
    	var ajaxobject;
	ajaxobject=new XMLHttpRequest(); 
	buzz=!buzz;
      ajaxobject.open("GET","/xmit.php?q=[2, "+ document.getElementById("Device List").value + ", 0, 0, "+ document.getElementById("brightness").value + 
                "," + buzz +","+ triac2 +", 0, 0, 0]", true); 
	ajaxobject.send(null);
}

//        ajaxobject.open("GET","/xmit.php?q=[2, +"+ document.getElementById("Device List").value + ", 0, 0, "+ ajaxobject.open("GET","/xmit.php?q=[2, +"+ document.getElementById("Device List").value + ", 0, 0, "+ dat5 + 
//                ", " + dat6 +", "+ dat7 +", "+ dat8 +", "+ dat9 +", "+ dat10 +"]", true);  + 
 
 function r1control()
{
    	var ajaxobject;
	ajaxobject=new XMLHttpRequest();   
        dat5=!dat5;
       ajaxobject.open("GET","/xmit.php?q=[2, +"+ document.getElementById("Device List").value + ", 0, 0, "+ dat5 + 
                ", " + dat6 + ", " + dat7 + ", " + dat8 + ", " + dat9 + ", " + dat10 + "]", true);  
 
	ajaxobject.send(null);
}

 function r2control()
{
    	var ajaxobject;
	ajaxobject=new XMLHttpRequest();  
        dat6=!dat6;
       ajaxobject.open("GET","/xmit.php?q=[2, +"+ document.getElementById("Device List").value + ", 0, 0, "+ dat5 + 
                ", " + dat6 + ", " + dat7 + ", " + dat8 + ", " + dat9 + ", " + dat10 + "]", true);  
 
	ajaxobject.send(null);
}

 function r3control()
{
    	var ajaxobject;
	ajaxobject=new XMLHttpRequest();  
        dat7=!dat7;
       ajaxobject.open("GET","/xmit.php?q=[2, +"+ document.getElementById("Device List").value + ", 0, 0, "+ dat5 + 
                ", " + dat6 + ", " + dat7 + ", " + dat8 + ", " + dat9 + ", " + dat10 + "]", true);  
 
	ajaxobject.send(null);
}

 function r4control()
{
    	var ajaxobject;
	ajaxobject=new XMLHttpRequest(); 
	dat8=!dat8;
       ajaxobject.open("GET","/xmit.php?q=[2, +"+ document.getElementById("Device List").value + ", 0, 0, "+ dat5 + 
                ", " + dat6 + ", " + dat7 + ", " + dat8 + ", " + dat9 + ", " + dat10 + "]", true);  
 
	ajaxobject.send(null);
}