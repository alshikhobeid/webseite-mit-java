$(document).ready(function(){
	 $('#menu a').each(function(zahl, hans) { 
		 					//console.log('hans: ' + hans.href);
		 					//console.log('zahl: ' + zahl);
		 
	   if (hans.href == location.href) { 
//wenn href des in der Schleife durchlaufenden a-Tags == der aktuellen Adresse (in der Adresszeile)
         	$(hans).addClass('akt');
        }
     });
});
	  
//	zahl == das so und so vielte Element im Schleifendurchgang (mit 0 beginnend)
//	hans == Elementinhalt (in dem Fall der gerade durchlaufenden a-Tags)

//  hans und location sind objekte, die methode href liefert bei beiden die komplette Adresse

