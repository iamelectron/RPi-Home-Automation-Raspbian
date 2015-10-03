import spidev
import time
import RPi.GPIO as GPIO
import time
import consts



class nRF24l: 


	#something similar to constructors	
	def __init__(self, packetsz): 
		GPIO.setmode(GPIO.BOARD)		
		GPIO.setup(11, GPIO.OUT)		#CE Pin declare as out
		GPIO.output(11,False) 			#set ce0
		self.spi = spidev.SpiDev()		#spi object
		self.packetsize = packetsz
		self.spi.open(0,1)				#spi channel 0 and SS0 or CS0	
		self.spi.mode = 0				#spi MODE 00
		self.spi.bits_per_word = 8
		self.spi.cshigh = False
		self.spi.loop = False
		self.spi.lsbfirst = False
		self.spi.threewire = False
		self.spi.max_speed_hz = 1000000  

		#pipe 0 
		GPIO.output(11,False)    
		buf = [consts.W_REGISTER + consts.RX_PW_P0, self.packetsize]  
		self.spi.xfer2(buf)   
		#pipe 1 	
		buf = [consts.W_REGISTER + consts.RX_PW_P1, self.packetsize]  
		self.spi.xfer2(buf)  
		#No ACK	
		buf = [consts.W_REGISTER + consts.EN_AA, 0]  
		self.spi.xfer2(buf)  
		
	#print status register
	def print_status(self):
		buf = [0xFF]  
		redp = self.spi.xfer2(buf)  
		print("STATUS:", redp[0])
		
	#set to tx mode
	def tx_mode(self):
		buf = [consts.W_REGISTER + consts.CONFIG, consts.CONFIG_PWR_UP]  
		self.spi.xfer2(buf)  		
	  
	#send data packet
	def send_data(self, datapacket): 
		GPIO.output(11,False)
		self.tx_mode()
		buf = [consts.W_TX_PAYLOAD] + datapacket  
		self.spi.xfer2(buf)  
		GPIO.output(11,True)
		time.sleep(0.1)
		GPIO.output(11,False)  
	
	#rx mode
	def rx_mode(self):
		GPIO.output(11,False) 
		buf = [consts.W_REGISTER + consts.CONFIG, consts.CONFIG_PWR_UP | consts.CONFIG_PRIM_RX]   
		self.spi.xfer2(buf)  
		GPIO.output(11,True)
		
	#flush rx buffer
	def rx_flush(self):
		buf = [consts.FLUSH_RX]   
		self.spi.xfer2(buf)  		
		
	#flush TX buffer
	def tx_flush(self):
		buf = [consts.FLUSH_TX]   
		self.spi.xfer2(buf)  
		
	#receive data packet-always flush after rx or tx
	def receive_data(self):  
		buf = [0xFF]
		testval = self.spi.xfer2(buf) 
		GPIO.output(11,False)
		if ((testval[0]&(1<<6))!=0):  
			loopsize = self.packetsize
			buf = [consts.R_RX_PAYLOAD] 
			while (loopsize>0):
				#print("Loop:", loopsize)
				loopsize = loopsize-1
				buf = buf + [0xFF]
			
			retbuf = self.spi.xfer2(buf) 
			loopsize = self.packetsize
		 
			#while (loopsize>0):
			#	print("BUFF:", retbuf[self.packetsize - loopsize])
			#	loopsize = loopsize-1
			
			buf = [consts.W_REGISTER + consts.STATUS, consts.STATUS_DEFAULT_VAL | consts.STATUS_RX_DR]   
			self.spi.xfer2(buf)  
			#print("Data packet found")
			return retbuf
			self.rx_flush()
		else:
			buf = [consts.W_REGISTER + consts.STATUS, consts.STATUS_DEFAULT_VAL | consts.STATUS_RX_DR]   
			self.spi.xfer2(buf)  
		return 255
		
	 #receive data packet-always flush after rx or tx
	def receive_data_print(self):  
		buf = [0xFF]
		testval = self.spi.xfer2(buf) 
		#print testval
		GPIO.output(11,False)
		if ((testval[0]&(1<<6))!=0):  
			loopsize = self.packetsize
			buf = [consts.R_RX_PAYLOAD] 
			while (loopsize>0):
				#print("Loop:", loopsize)
				loopsize = loopsize-1
				buf = buf + [0xFF]
			
			retbuf = self.spi.xfer2(buf) 
			loopsize = self.packetsize
		 
			#while (loopsize>0):
			#	print("BUFF:", retbuf[self.packetsize - loopsize])
			#	loopsize = loopsize-1
			
			buf = [consts.W_REGISTER + consts.STATUS, consts.STATUS_DEFAULT_VAL | consts.STATUS_RX_DR]   
			self.spi.xfer2(buf)  
			#print("Data packet found")
			print retbuf
			self.rx_flush()
		else:
			buf = [consts.W_REGISTER + consts.STATUS, consts.STATUS_DEFAULT_VAL | consts.STATUS_RX_DR]   
			self.spi.xfer2(buf)  
			print "nodata"
		GPIO.output(11,True)
		 
		 
	 
	#scan for slaves and print slave ID
	def scan_device(self):
		device_id=0
		list = [0]
		while device_id!=25:
			self.tx_flush()
			buf = [3,device_id,3,0,0,0,0,0,0,0]
			self.send_data(buf)
			self.rx_mode()
			time.sleep(0.25)						#val < 0.25 may cause errors
			rxdata = self.receive_data()
			if rxdata!=255:
				print(device_id)
				#list = list + [device_id]
			#print(device_id)
			device_id = device_id+1 
			
		#scan for slaves and print slave ID
	def update_pack(self,device_id): 
		list = [0] 
		self.tx_flush()
		buf = [3,device_id,1,0,0,0,0,0,0,0]
		self.send_data(buf)
		self.rx_mode()
		time.sleep(0.5)						#val < 0.25 may cause errors
		rxdata = self.receive_data_print()
		  
	
	def tp():
		buf4 = [consts.W_REGISTER + consts.CONFIG, consts.CONFIG_PWR_UP]  
		redp = spi.xfer2(buf4)  
		time.sleep(0.01)
   
	###################
		buf5 = [consts.W_TX_PAYLOAD, 2, 12, 1, 0,1,0,0,0,0,0]  
		redp = spi.xfer2(buf5)  

		GPIO.output(11,True)
		time.sleep(0.001)
		GPIO.output(11,False)    
	    
	def close():
		spi.close()	  
	#end try