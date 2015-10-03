import spidev
import time
import RPi.GPIO as GPIO
import time
from nrf24 import nRF24l
 
nrf = nRF24l(10)
#nrf.init_nrf()

#nrf.print_status() 
nrf.rx_mode() 
nrf.rx_flush()
time.sleep(2)
#buf = [1,31,1,0,0,0,0,0,0,0]
nrf.scan_device()
#end try