function shot() {
	let counter = 0;
	let shootACard = Math.floor((Math.random() * 52) + 1);
	
	if ((shootACard < 37) && (shootACard > 4)){
		counter = shootACard;
	}else if(shootACard > 36) {
		counter = 10
	};

	switch(shootACard) {
		case (1):
	  	return "A h"  
	    break;
	    case (5):
	  	return "2 h"  
	    break;
	     case (9):
	  	return "3 h"  
	    break;
	     case (13):
	  	return "4 h"  
	    break;
	     case (17):
	  	return "5 h"  
	    break;
	     case (21):
	  	return "6 h"  
	    break;
	     case (25):
	  	return "7 h"  
	    break;
	     case (29):
	  	return "8 h"  
	    break;
	     case (33):
	  	return "9 h"  
	    break;
	     case (37):
	  	return "10 h"  
	    break;
	     case (41):
	  	return "J h"  
	    break;
	     case (45):
	  	return "Q h"  
	    break;
	     case (49):
	  	return "K h"  
	    break;
	     case (2):
	  	return "A d"  
	    break;
	       case (6):
	  	return "2 d"  
	    break;
	       case (10):
	  	return "3 d"  
	    break;
	       case (14):
	  	return "4 d"  
	    break;
	       case (18):
	  	return "5 d"  
	    break;
	       case (22):
	  	return "6 d"  
	    break;
	       case (26):
	  	return "7 d"  
	    break;
	       case (30):
	  	return "8 d"  
	    break;
	       case (34):
	  	return "9 d"  
	    break;
	       case (38):
	  	return "10 d"  
	    break;
	       case (42):
	  	return "J d"  
	    break;
	       case (46):
	  	return "Q d"  
	    break;
	       case (50):
	  	return "K d"  
	    break;
	       case (3):
	  	return "A s"
	  	break;
	       case (7):
	  	return "2 s"  
	  	break;
	       case (11):
	  	return "3 s"
	  	break;
	       case (15):
	  	return "4 s"  
	  	break;
	       case (19):
	  	return "5 s"  
	  	break;
	       case (23):
	  	return "6 s"  
	  	break;
	       case (27):
	  	return "7 s"  
	  	break;
	       case (31):
	  	return "8 s"  
	  	break;
	       case (35):
	  	return "9 s"  
	  	break;
	       case (39):
	  	return "10 s"  
	  	break;
	       case (43):
	  	return "J s"  
	  	break;
	       case (47):
	  	return "Q s"  
	  	break;
	       case (51):
	  	return "K s"  
	  	break;
	       case (4):
	  	return "A c"  
	  	break;
	       case (8):
	  	return "2 c"    
	    break;
	       case (12):
	  	return "3 c"    
	    break;
	       case (16):
	  	return "4 c"    
	    break;
	       case (20):
	  	return "5 c"    
	    break;
	       case (24):
	  	return "6 c"    
	    break;
	       case (28):
	  	return "7 c"    
	    break;
	       case (32):
	  	return "8 c"    
	    break;
	       case (36):
	  	return "9 c"    
	    break;
	       case (40):
	  	return "10 c"    
	    break;
	       case (44):
	  	return "J c"    
	    break;
	       case (48):
	  	return "Q c"    
	    break;
	       case (52):
	  	return "K c"
	  	 default:        
	  	 return "something went wrong";
	}
};
