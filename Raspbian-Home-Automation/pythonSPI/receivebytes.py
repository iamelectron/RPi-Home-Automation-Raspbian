import spidev
import time
import RPi.GPIO as GPIO
import time
from nrf24 import nRF24l
import sys, json
nrf = nRF24l(10)
#nrf.init_nrf()
  
time.sleep(0.1)
try:
	data = (sys.argv[1])   
except:
	print("Error")
	
nrf.update_pack(json.loads(data))  
 
 
#end try