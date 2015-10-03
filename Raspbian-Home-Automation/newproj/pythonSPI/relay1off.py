import spidev
import time
import RPi.GPIO as GPIO
import time
import consts
 
GPIO.setmode(GPIO.BOARD)	
GPIO.setup(11, GPIO.OUT)		#CE Pin declare as out
GPIO.output(11,False) 

spi = spidev.SpiDev()
spi.open(0,1)		#spi channel 0 and SS0 or CS0	
spi.mode = 0		#spi MODE 00
spi.bits_per_word = 8
spi.cshigh = False
spi.loop = False
spi.lsbfirst = False
spi.threewire = False
spi.max_speed_hz = 1000000  

buf1 = [consts.W_REGISTER + consts.RX_PW_P0, 10]  
redp = spi.xfer2(buf1)  
	 
buf2 = [consts.W_REGISTER + consts.RX_PW_P1, 10]  
redp = spi.xfer2(buf2)  
	
buf3 = [consts.W_REGISTER + consts.EN_AA, 0]  
redp = spi.xfer2(buf3)  

buf4 = [consts.W_REGISTER + consts.CONFIG, consts.CONFIG_PWR_UP]  
redp = spi.xfer2(buf4)  
time.sleep(0.01)
   
###################
buf5 = [consts.W_TX_PAYLOAD, 2, 12, 1, 0,0,0,0,0,0,0]  
redp = spi.xfer2(buf5)  

GPIO.output(11,True)
time.sleep(0.001)
GPIO.output(11,False)    
	    
	
spi.close()	  
#end try