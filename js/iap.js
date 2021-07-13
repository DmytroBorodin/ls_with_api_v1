   function closeWebView() {
   			alert("closeWebview");
         	webkit.messageHandlers.callback.postMessage('closeWebview');
         }

         function downloadLang() {
         	var e = document.getElementById("lang");
         	var value = e.options[e.selectedIndex].value;
         	webkit.messageHandlers.callback.postMessage({"downloadLang": value});	
         }

        function enterCardOrder() {
         	var e = document.getElementById("lang");
         	var lang = e.options[e.selectedIndex].value;
         	var cardOrder = document.getElementById("cardOrder").value;
         	webkit.messageHandlers.callback.postMessage({"changeCardOrder": cardOrder, "forLang": lang});
         }

         function enterName() {
         	var nameChild = document.getElementById("childName").value;
         	webkit.messageHandlers.callback.postMessage({"addName": nameChild});
         }

               function enterBG() {
         	var e = document.getElementById("bgs");
         	var value = e.options[e.selectedIndex].value;
         	webkit.messageHandlers.callback.postMessage({"changeBackground": value});
         }

               function landingsPage() {
         	var landingsPage = document.getElementById("landingsPage").value;
         	webkit.messageHandlers.callback.postMessage({"reopen": 'com.nonconsumable.monthly1.jp', "page": landingsPage});
         }

         function NotEnoughSpace(lang)
         {
         	//alert("not enough space for language:" + lang );
         	document.getElementById("error").innerHTML = "not enough space for language:" + lang;
         
         }

         function ServerError(error)
         {
         //	alert("server error:" + error );
		 	document.getElementById("error").innerHTML = "server error:" + error ;

         }
         
         
         function UnzipError(error,lang)
         {
         //	alert("unzip error:" + error + "for language pack:" + lang );
		 	document.getElementById("error").innerHTML = "unzip error:" + error + "for language pack:" + lang  ;

         }
         
         
         function LanguageInstallSuccessFul(lang)
         {
         //	alert("Install successful:" + lang );
		 	document.getElementById("error").innerHTML = "Install successful:" + lang   ;

         }



function purchaseSubscription() {
		
			var url_string = window.location.href;
		    var url = new URL(url_string);
			var app = url.searchParams.get("app_code");

			if(app == "en-US"){
				product_ID_ending = 'us';
			}
			
			
			if(app == "en-SH"){
				product_ID_ending = 'sh';
			}
			
			if(app == "fn-FN"){
				product_ID_ending = 'fn';
			}
			
			if(app == "de-DE"){
				product_ID_ending = 'de';
			}
			
			if(app == "es-ES"){
				product_ID_ending = 'es';
			}
					
			
			if(app == "fr-FR"){
				product_ID_ending = 'fr';
			}
					
			
			if(app == "se-SE"){
				product_ID_ending = 'se';
			}
					
			if(app == "jp-JP"){
				product_ID_ending = 'jp';
			}
			
			if(app == "pt-BR"){
				product_ID_ending = 'br';
			}
			
			if(app == "dk-DK"){
				product_ID_ending = 'dk';
			}
			
			if(app == "nv-NV"){
				product_ID_ending = 'nv';
			}
			
			if(!app)
			{
				product_ID_ending = 'us';

			}
				
			
		
		    var subChoice = localStorage.getItem("subChoice");
		
		    if (!subChoice || !product_ID || subChoice == "annual-checked") {
		        // alert("nothing defined, so purchase annually because that is preselected");
		        var product_ID = "com.nonconsumable.yearly1."+product_ID_ending;
		
		    }
		
		    if (subChoice == "month-checked" || subChoice == "iap-checked") {
		        var product_ID = "com.nonconsumable.monthly1."+product_ID_ending;
		    }
		
		    if (subChoice == "quarter-checked") {
		        var product_ID = "com.nonconsumable.quarter1."+product_ID_ending;

		    }
		
		
		    	alert("Purchase:" + product_ID);
				sendIapClick(product_ID);
		    webkit.messageHandlers.callback.postMessage(product_ID);
		
		
		}



  
	 function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $("#result");
  const email = $("#email__input").val();
  $result.text("");

  if (validateEmail(email) || email == '') {

	document.getElementById("page_two").classList.remove("disabled");
	document.getElementById("page_one").classList.add("disabled");


//    $result.text(email + " is valid :)");
  //  $result.css("color", "green");
  } else {
    $result.html("<p style='padding:10px;color:red;font-size:1.6rem'>Oops, something went wrong.</p>");
  //  $result.css("color", "red");
  }
  return false;
}


	   
      
function sendData() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const idfv = urlParams.get('idfv');
		$.ajax({ 
		  url: "../../api/registerProfile.php", 
		  type: "get", //send it through get method 
		  data: {  
			  idfv: idfv, 
			  name: localStorage.childName, 
			  age: localStorage.childAge, 
  			  interests: localStorage.interests, 
			  learning_level: localStorage.learningLevel, 
			  learning_lang: localStorage.language, 
			  favorite_color: localStorage.color, 
  			  question_1: localStorage.question_1, 
			  question_2: localStorage.question_2, 
			  question_3: localStorage.question_3
			  		  }, 
		  success: function(response) { 
		   //alert(response)  
		   } 
		}); 



}

  
function sendIapClick(product_id) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const idfv = urlParams.get('idfv');
		$.ajax({ 
		  url: "../../api/registerIapClick.php", 
		  type: "get", //send it through get method 
		  data: {  
			  idfv: idfv, 
			  product_id: product_id
		  }, 
		  success: function(response) { 
		   //alert(response)  
		   } 
		}); 



}






function testShow(){
	
	document.getElementById("page_ten").classList.remove("disabled");
	document.getElementById("page_nine").classList.add("disabled");


	
} 

function questionAnswer(q,A){
	
localStorage.setItem("question_"+q, A);
	
}



function appendToStorage(name, data){
    var old = localStorage.getItem(name);
    if(old === null) old = "";
    localStorage.setItem(name, old + "," + data);
}
