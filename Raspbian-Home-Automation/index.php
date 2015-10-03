 <html>  
 <head>
<head>
  <meta content="text/html; charset=ISO-8859-1"

http-equiv="content-type">

  <title></title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
  
</head>

<body> 
	<script type="text/javascript" src="nrf.js"></script>
  
	<img id="banner" src="/images/rpibanner.png" width="540" height="120"> <br />
	<p id="namehere"></p>
	<img id="myImage" src="/images/complete.gif" width="40" height="40">
	<br />
	<select name="selctme" id="sel_list" onchange="setid()">
	<input name="Submit" id="Submit" value="Scan nRF Devices"
	onclick="javascript:getlist()" type="button">
	<br />  
	<input name="Submit" id="ledhigh" value="LED HIGH"
	onclick="javascript:ledhighajax()" type="button"> 
	<input name="Submit" id="ledlow" value="LED LOW"
	onclick="javascript:ledlowajax()" type="button">
  
	<input name="Submit" id="getupdateb" value="Start/Stop"
	onclick="javascript:dotimer()" type="button">
 
	<br /> <br />
	<select name="selctme" id="sel_pack" onchange="sel_packet()">
	<option value="noval">  </option>
	<option value="addmepack">AddMe Packet</option>
	<option value="datpack">Data Packet</option>
	<option value="updpack">Update Packet</option> 
 
	</select>
 
	<div> 
		<label>byte 1</label>
		<input type="text" name="textfield" value="0" id="tf1" size="2"> 
		<label>byte 2</label>
		<input type="text" name="textfield" value="0" id="tf2" size="2">
		<label>byte 3</label>
		<input type="text" name="textfield" value="0" id="tf3" size="2">
		<label>byte 4</label>
		<input type="text" name="textfield" value="0" id="tf4" size="2">
		<label>byte 5</label>
		<input type="text" name="textfield" value="0" id="tf5" size="2"> <br />
		<label>byte 6</label>
		<input type="text" name="textfield" value="0" id="tf6" size="2">
		<label>byte 7</label>
		<input type="text" name="textfield" value="0" id="tf7" size="2">
		<label>byte 8</label>
		<input type="text" name="textfield" value="0" id="tf8" size="2">
		<label>byte 9</label>
		<input type="text" name="textfield" value="0" id="tf9" size="2"> 
		<label>byte10</label>
		<input type="text" name="textfield" value="0" id="tf10" size="2"> 
		<br />
		<input name="Submit" id="sndbytes" value="Send Bytes"
		onclick="javascript:send_bytes_ajax()" type="button">
		<br />
		<br />
		<iframe src="http://yoursite:8081/" width="320" height="240" ></iframe>
</div>
 
</body>
</html>