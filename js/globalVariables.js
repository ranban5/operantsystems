			//Variables belongs to database
			var teachMe = {};
			var general = {};			
			var ws = {};			
			var students = {};
			var dp = {};
			var behaviorPlan = {};
            var batch = {};
            var notes = {};
            
			teachMe.localDb = {};
			teachMe.localDb.db = null;
			
			var urlName = "http://localhost:50782/WebsiteB/getABAdetails.asmx/";//  "https://www.autism311.com/getABAdetails.asmx/"; //"http://localhost:49964/HTML5/getABAdetails.asmx/";
			var urlNameSend = "https://www.autism311.com/sendABAUpdates.asmx/"; //"http://localhost:49964/HTML5/sendABAUpdates.asmx/";
			
			var deviceId = "salim27082013";
			
			//Message have been defined
			var msgLogin_UserIdPassword ="Please enter User Id and Password";
            var msgLogin_UserId ="Please enter User Id";
            var msgLogin_Password ="Please enter Password"; 
            var msgLogin_InvalidEmailId ="Please enter valid Email Id";
            var msgLogin_InvalidUser ="Please enter valid User Id i.e Email Id";
            var msgLogin_InvalidEmailId ="Please enter correct UserId and Password";
            var msgNoRecords = "No records found";
            var msgSelectStudent = "Please select the student";
            var msgSelectGoalsorActivities = "Please select the Goals/Activities";
            var msgSelectTrial = "Please select the Trial number";
            var msgSelectTrialsInSequence = "Selected trial number is not in sequence";
            
            var msgNoStudetnsAreAssigned = "No Studetns Are Assigned";
            var msgGuardianEmailMissing = "Guardian Email Ids are Missing";
            var msgInstanceIsNotPresent = "Instance is not present";
            
            var msgValidPassword = "Please enter valid password";
            
            var serviceName = "getUpdate";
            var itemId = "";
 							
			var ws_UpdateId = "";
			
			//Selected participant list
			var selectedParticipant = {};
			selectedParticipant["sendUpdateRequest"] = sendUpdateRequest; 
            selectedParticipant.sendUpdateRequest.participants.push(participant);
			
			var studentRow = [];
			var locationRow = [];
					
			var actRow= [];
			var goalRow = [];
			var catRow = [];
			var behRow = [];
			
			var dpRow = [];
			var dpgRow = [];
			var bpRow = [];

            var activeStudentId = "";
            var currentPage = "login";
            
            var flgTrialEdit = false;

            var sessionInformation = [];                        //This array helps to increase the speed, so that only once the dailyplanner or behavior planner web service will get called
            
            var isGlobalVariableLoaded = false;                 //Prompt level, Antecedent, concequences, procedure type etc should get called once in the session       
            
            var isStudentIdChangeOnCurrentPage = false;         //This will help full while loading the previous page information
            
            //Timer variables 
            var timerStudentList_First = 13000;
            var timerStudentList_Again = 2000;
            
