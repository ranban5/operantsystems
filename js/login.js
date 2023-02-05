    var login = {};			
    var loginTime = "";
    login.accountStatus = null;
    login.loginStatus = null;
    login.updateNeeded = null;
    login.userId = null;
    login.organizationId = null;
    login.roleName = null;
    login.modifyEnabled = null;
            
    login.checkIsValidUser = function(dataString)
    {
        teachMe.localDb.open();         //First place where db connection will be opened
        var db = teachMe.localDb.db;    //Connection
        
        login.createLocalLoginTable();       //Creating local login table
        login.createTable();        		    //Creating login table        
        
        db.transaction(function(tx) {
            tx.executeSql("SELECT org.userId,accountStatus,loginStatus,updateNeeded,organizationId,roleName,modifyEnabled " +
                            " FROM localLogin as loc " +
                            " Inner Join login as org on loc.userId=org.userId where localUserId = ? and psd = ?", [dataString.userId, dataString.psd],
                function(tx, result) 
                {    
////////                    //alert(result.rows.length );
                     login.dailyServiceCalledRegistry();     //creating table 
                     if (result.rows.length != 0)            //User is not a first time login on the device
                     {
                        console.log("User is not a first time login on the device :" + dataString.userId + dataString.psd);
                        sessionStorage.setItem("userId", result.rows.item(0)["userId"]);
                        sessionStorage.setItem("accountStatus", result.rows.item(0)["accountStatus"]);
                        sessionStorage.setItem("loginStatus", result.rows.item(0)["loginStatus"]);
                        sessionStorage.setItem("updateNeeded", result.rows.item(0)["updateNeeded"]);
                        
                        sessionStorage.setItem("organizationId", result.rows.item(0)["organizationId"]);
                        sessionStorage.setItem("roleName", result.rows.item(0)["roleName"]);
                        sessionStorage.setItem("modifyEnabled", result.rows.item(0)["modifyEnabled"]);
                        login.userId = result.rows.item(0)["userId"];
                        
                        //it is require to check, is user trying to login first time for the day
                        //console.log("checkisvali:" +  dataString); 
                                               
                        //var serviceType = 
                        general.isServiceCalledForTheDay("login","",dataString);
                        //console.log("service name1 : login.userId - " + login.userId);
                        loginTime = "again";
                     }
                     else                                    //First time this user is login on the device
                     {
                        console.log("First time this user is login on the device");
                        //Call the web service to check is the user is valid user
                        login.loginWS(dataString);
                        
                     }
                },
                function(tx, error)
                {
                    alert(error.message);
                    flg = false
                    // error occured
                }
            );
        });                
    }

    //Creating a dailyServiceCalledRegistry table to keep track of services calls for that so that every
    // service call is not require to go to server
    login.dailyServiceCalledRegistry = function()
    {
        teachMe.localDb.createTable("dailyServiceCalledRegistry(ID Integer Primary Key ASC, " +
            "userId text, " +
	        "serviceName text, " +
	        "serviceType text, " +          //getAll/ping
	        "serviceStatus text, " +        //success/fail
	        "dateCreated dateTime)"); 							    
    } 

      
    login.loginWS = function(dataString)
    {
        alert(urlName + "login1345679");
            $.ajax({
                //beforeSend: function() { $.mobile.showPageLoadingMsg(); },//show spinner
                //complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner 
                type: "POST", //GET or POST or PUT or DELETE verb
                url: urlName + "login", // // "http://localhost:49964/HTML5/getABAdetails.asmx/login", // Location of the service
                //async: false,
                data: JSON.stringify(dataString),
                contentType: "application/json; charset=utf-8", // content type sent to server
                dataType: "jsonp", //Expected data format from server
                crossDomain: true,  
                success: function(data, status, xhr) 
                {
                       var result = (jQuery.parseJSON(data.d))
                       login.accountStatus = result[0].accountStatus;
                       login.loginStatus = result[0].loginStatus;
                       login.updateNeeded = result[0].updateNeeded;
                       login.userId = result[0].userId;
                       login.organizationId = result[0].organizationId;
                       login.roleName = result[0].roleName;
                       login.modifyEnabled = result[0].modifyEnabled; 
                       
                       sessionStorage.setItem("userId", login.userId);
                       sessionStorage.setItem("accountStatus", login.accountStatus);
                       sessionStorage.setItem("loginStatus", login.loginStatus);
                       sessionStorage.setItem("updateNeeded", login.updateNeeded);
                       
                       sessionStorage.setItem("organizationId", login.organizationId);
                       sessionStorage.setItem("roleName", login.roleName);
                       sessionStorage.setItem("modifyEnabled", login.modifyEnabled);
                       
                       if (status == "success" && login.loginStatus == true)
                       {
                            general.isServiceCalledForTheDay("location", dataString);
                            general.isServiceCalledForTheDay("student", dataString);
                            loginTime = "first";
                            createLoginTable(dataString); 
                       }
                       else if (status == "success")
                       {
                            alert(msgLogin_InvalidUser);
                       }
                       
                },
                error: function (xhr, textStatus, errorThrown) 
                { // When Service call fails
                    alert('error : ' + xhr.statusText + ' ' + textStatus + ' ' + errorThrown);
                }
                
            });   //End of ajax call         
    }

    //get called once the user is validated against the database
    function createLoginTable(dataString)
    {
        login.createTable_alreadyLogin();    //Creating alreadyLogin table    								 
        
        login.insertLocalTable(dataString);
        general.dailyServiceCalledRegistry("login","getAll","success",sessionStorage.getItem("userId"));
        login.checkBeforeInsertData();       //Checking into login details table

//        //console.log("firstlocation");
//        setTimeout(
//            function(){ 
//                        //general.isServiceCalledForTheDay("location", dataString);
//                    }
//        ,500);
//       // console.log("second student");
//        setTimeout(
//            function(){
//                            //alert('after sucesse');
//               //         general.isServiceCalledForTheDay("student", dataString);loginTime = "first";
//                    }
//        , 500);
        
        general.isServiceCalledForTheDay("guardian", dataString);
        general.isServiceCalledForTheDay("antecedent", sessionStorage.getItem("organizationId"));
        general.isServiceCalledForTheDay("consequence", sessionStorage.getItem("organizationId"));

        general.isServiceCalledForTheDay("codes", sessionStorage.getItem("organizationId"));
        general.isServiceCalledForTheDay("service", sessionStorage.getItem("organizationId"));        
        general.isServiceCalledForTheDay("visit", sessionStorage.getItem("organizationId"));
        
        general.isServiceCalledForTheDay("promptlevel", sessionStorage.getItem("organizationId"));        
        general.isServiceCalledForTheDay("proceduretype", sessionStorage.getItem("organizationId"));
        
//        setTimeout(function(){
//                general.isServiceCalledForTheDay("goal", dataString);
//                general.isServiceCalledForTheDay("activity", dataString);

//                 general.isServiceCalledForTheDay("category", dataString);
//                 general.isServiceCalledForTheDay("behavior", dataString);
//        },2500);                 
    }

            
    //Create the localLogin table which will be keeping teh actual user id password of the user for local login
    login.createLocalLoginTable = function()
    {
		teachMe.localDb.createTable("localLogin(ID Integer Primary Key ASC, " +
            "userId text, " +
            "localUserId text, " +          //this is actual User id i.e email id of therapist
		    "psd text, " +                  //to save password
		    "dateCreated dateTime)");             
    }
            
    //Createing the login table
    login.createTable = function()
    {
       var tableDetails = "login(ID Integer Primary Key ASC, " +
						"accountStatus text, " +                    // enable/disable
						"loginStatus text, " +                   // 1= true , 0 = false
						"updateNeeded text, " +                  // 1= true , 0 = false
						"userId text, " +
						"organizationId text, " +
						"roleName text , " +
						"modifyEnabled text , " +
						" dateCreated dateTime)"; 
	    teachMe.localDb.createTable(tableDetails);            
    }
    
    //Inserting into the login local table
    login.insertLocalTable = function(dataString)
    {
        var db = teachMe.localDb.db;
	    db.transaction(function(tran){
            tran.executeSql("Insert into localLogin(userId, localUserId, psd, dateCreated) Values(?,?,?,datetime('now'))",
                [sessionStorage.getItem("userId"), dataString.userId, dataString.psd]  ,teachMe.localDb.onSuccess, teachMe.localDb.onError);
          });    
    }
    
    //Inserting data into login table
    login.insertLogin = function()
    {
            var db = teachMe.localDb.db;
		    db.transaction(function(tran){

                tran.executeSql("Insert into login(accountStatus, loginStatus, updateNeeded, userId, " + 
                    " organizationId, roleName, modifyEnabled, dateCreated) Values(?,?,?,?,?,?,?,datetime('now'))",[
                     sessionStorage.getItem("accountStatus") , sessionStorage.getItem("loginStatus")  ,  sessionStorage.getItem("updateNeeded")  ,  sessionStorage.getItem("userId")  ,  
                    sessionStorage.getItem("organizationId")  ,  sessionStorage.getItem("roleName")  ,  sessionStorage.getItem("modifyEnabled")],teachMe.localDb.onSuccess, teachMe.localDb.onError);
              });
     }      

    //Checking inot the login table before inserting, that user is already login for that date 
	login.checkBeforeInsertData = function()
	{
		    var db = teachMe.localDb.db;
		    db.transaction(function(tran){
		        //It is require to check, is the same user who is already login for the day
		        var flg;
	            db.transaction(function(tx) {
                    tx.executeSql("SELECT COUNT(*) as cnt FROM alreadyLogin where userId = '" + sessionStorage.getItem("userId") + "'", [],
                        function(tx, result) 
                        {
                             if (result.rows.item(0)["cnt"] > 0)
                                login.insertData_alreadyLogin();     // Inserting into alreadyLoging table   
                             else
                             {
                                login.insertData_alreadyLogin();     // Inserting into alreadyLoging table   
                                login.insertLogin();                                            
                             }
                             // do the html stuff to push this value to div
                        },
                        function(tx, error)
                        {
                            flg = false
                            // error occured
                        }
                    );
		        });
		         
		});
	}			
	        
	        //Creating a alreadyLogin table, this help me to understand that user already login for the day 
            login.createTable_alreadyLogin = function()
            {
               var tableDetails = "alreadyLogin(ID Integer Primary Key ASC, " +
								"userId text, " +
								" dateCreated dateTime)"; 
			    teachMe.localDb.createTable(tableDetails);            
            }	
            
            //Inserting data into login table
			login.insertData_alreadyLogin = function(){
				    var db = teachMe.localDb.db;
				    db.transaction(function(tran){
			            tran.executeSql("Insert into alreadyLogin(userId, dateCreated) Values(?,datetime('now'))",[sessionStorage.getItem("userId") ],teachMe.localDb.onSuccess, teachMe.localDb.onError);
				});
			}	



            login.checkUserIdPassword = function()
            {
                    var userId = $("#txtUserId").val();
                    var psd = $("#txtPassword").val();

                    if (userId == "" && psd == "")
                    {
                        alert(msgLogin_UserIdPassword); 
                        return false;
                    }
                    else if(userId == "")
                    {
                        alert(msgLogin_UserId);
                        return false;
                    }
                    else if(psd == "")
                    {
                        alert(msgLogin_Password);
                        return false;
                    }
                    else if ( !validUserId(userId))
                    {
                        alert(msgLogin_InvalidEmailId);
                        return false;
                    }
                    var delayTime = 0;
                    sessionStorage.setItem("deviceId",deviceId);
                    var dataString = {"userId":userId,"psd":psd,"deviceId":deviceId};
                    
                    //Check userid and password against the local database whether is valida user or no
                    login.checkIsValidUser(dataString,"login");
                   // alert(delayTime);
//                    var firstLogin = setInterval( function()
//                                                 {
//                                                 
//                                                    console.log("loginTime:" + loginTime);
//                                                     if (loginTime != "")
//                                                     {
//                                                        
//                                                        if (loginTime == "first")
//                                                        {
//                                                            delayTime = 7000;
//                                                        }
//                                                        else if (loginTime == "again")
//                                                        {
//                                                            delayTime = 2000;
//                                                        }
//                                                        //alert(delayTime);
//                                                        //alert("accountStatus : " + sessionStorage.getItem("accountStatus"));
//                                                        if (sessionStorage.getItem("accountStatus") == "enable" && sessionStorage.getItem("roleName") == "Therapist")
//                                                        {
//                                                            setTimeout(
//                                                                function()
//                                                                {
//                                                                    //Add organization details in the JSON
////                                                                    selectedParticipant.sendUpdateRequest.therapistId = sessionStorage.getItem("userId");
////                                                                    selectedParticipant.sendUpdateRequest.organizationId = sessionStorage.getItem("organizationId");
////                                                                    selectedParticipant.sendUpdateRequest.sessionId = guid();

////                                                                    students.loadStudentsList();
////                                                                    
////                                                                    setTimeout( 
////                                                                        function(){
////                                                                                sessionStorage.setItem("validUser","Yes");
////                                                                                $('#mybook').booklet("next");
////                                                                                sessionStorage.setItem("currentPage","studentsList");
////                                                                                $(".tabs a.toc").addClass("active")
////                                                                                return true;
////                                                                        },timerStudentList);
//                                                                },delayTime);
//                                                        }
//                                                        else
//                                                        {
//                                                            return false;
//                                                        }
//                                                        
//                                                        clearInterval(firstLogin);
//                                                     }
//                                                  
//                                                 },100);
//                                        
                    return false;
            }            



