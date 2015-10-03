<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="mainsheet.css">
        <script src="nrf.js"></script> 
         <script src="clickevnts.js"></script>        
        <title>RPi Server</title>
        <link rel="shortcut icon" href="http://your site/newproj//images/rpi.ico">
    </head>
    <body>
         
        <h1>Welcome to Anand's RPi Server Page</h1> 
        <h2>               Hi folks, The whole web site is hosted on a Raspbian powered Raspberry Pi version 1 B Board.<br>
            To know more about this project, visit my YouTube Page or Blog. Thanks, <br> Anand. 
        </h2>
         
     
        <div id="sidebar">
            <button class="sidebtn" id="scandevice" onclick="openscandev()">Scan for Slaves</button> <br>
            <button class="sidebtn" id="scandevice" onclick="opencontrol()">Control Window</button> <br> 
            <button class="sidebtn" id="scandevice" onclick="openrelay()" >Advanced Options</button>
        </div>
          
            <div  class="overlay" id="controlbox">
                 
                <div  id='secondbx' class='secondbox'>
                    <div id="windowbx">
                         Light intensity:<br> 
                         <input id='brightness' width="300px" type="range" min="0" max="140" value="140" step="1" onchange='trackchange(this.value)' />
                        <button class="sidebtn" id="onlighcontrolt" onclick="onlighcontrol()">On/Off Bulb</button> 
                        <button class="sidebtn" id="offlighcontrol" onclick="buzzcontrol()">On/Off Buzzer</button>  <br>
                         <button class="sidebtn" id="closemecontrol" onclick="closecontrol()">Close me</button> <br>
                     
                    </div>

                </div>
            </div>
        
        <div class="overlay" id="scandevbox" >
               <!-- <button class="sidebtn" id="scandevice" onclick="closescandev()">Close me</button> <br>
               -->
                <img id="loadimg" src="images/loading.gif" />
         </div>       
         
        
          <div  class="overlay" id="relaycontrol">
                 
                <div  id='relaybox' class='relaybox'>
                    <div id="windowbx">
                         <button class="sidebtn" id="rcontrl1" onclick="r1control()">On/Off Relay1</button> 
                        <button class="sidebtn" id="rcontrl2" onclick="r2control()">On/Off Relay2</button> 
                          <button class="sidebtn" id="rcontrl3" onclick="r3control()">On/Off Relay3</button> 
                        <button class="sidebtn" id="rcontrl4" onclick="r4control()">On/Off Relay4</button>  
                        <br>
                         <button class="sidebtn" id="closemecontrol" onclick="closerelay()">Close me</button> <br>
                     
                    </div>

                </div>
            </div>
        
        
        
        
        <div id="content"> 
            <p> Available Slave Devices</p>
                <select id="Device List">
                    <option selected> Select Box </option> 
             </select>     
             <p>This select box shows available slave devices. I'm not making this page too much complicated. Just select the
                 device (ID) and choose your control option from the left menu box.<br>
                 <iframe src="http://yoursite:8081/" width="320" height="240" ></iframe> <br>
                 
                 <i><b>(Live broadcast from my Room :P)</b></i>
                 
                 
             </p>
        </div>
        
        <?php
        // put your code here
        ?>
    </body>
</html>
