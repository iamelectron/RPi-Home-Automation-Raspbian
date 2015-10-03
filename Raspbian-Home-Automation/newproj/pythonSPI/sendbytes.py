import spidev
import time
import RPi.GPIO as GPIO
import time
from nrf24 import nRF24l
import sys, json
nrf = nRF24l(10)
#nrf.init_nrf()

#nrf.print_status()  
 
try:
	data = (sys.argv[1])  
	print json.loads(data) 
except:
	print("Error")
 
nrf.send_data(json.loads(data))
#end try