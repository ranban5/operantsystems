'use strict';

var indexApp = angular.module('indexApp',  ['moment-picker']);

indexApp.controller("indexController", function($scope, $http, $window) {

    let webSiteName= "";

    if ( location.host.indexOf("localhost") >= 0){
      webSiteName = "https://www.autism311.com";
    }
    else{
      webSiteName = location.protocol + "//" + location.host;
    }

    let sendRequestURL = "/html/sendMailHomePage.asmx/sendUpdateRequest";
    //let loginURL = "/html/getSharedInfo.asmx/login";
    let loginURL = "/htmlNew/api/getSharedInfo/login/";
    let imgIntervalTime = 4000;

  let numGrp = 1;
  let numApp = 1;
  let newRow2Img = 1;
  let deviceType = '';

  let threeLevelOrg = "AllAboutKids|AperatureEducation|Operantsystems|BehaviorConceptsInc|HillsidePublicSchools|PositiveInterventionPlus|AcronABAUK|DevereuxRedHook|GrainofSandAcademy|Amigo|ShemaKoleinu|Springbook|BTAP|BCCD|Arkilas360DegreesCounseling|SoCalBehaviorConsultants|AkuaTest|BrighterHorizonsServicesInc";

  setTimeout(function(){
    $(".pageHeaderText").removeClass("hide");
  },2000);

  setTimeout(function(){
    $(".pageHeaderText2").removeClass("hide");
  },3000);


  setInterval(function() {
    $(".imgGraphs").addClass("hide");
    //$(".p2r2 div").addClass("hide");
    if (numGrp === 6) {
      numGrp = 1;
    }
    //$("#imgGraphs").attr("src", "operantsystems/images/background-images/graph" + numGrp + ".png");
    $("#imgGraphs" + numGrp).removeClass("hide");
    $("#imgGraphsB" + numGrp).removeClass("hide");

    $("#imgGraphsB" + numGrp + "M").removeClass("hide");
    $("#imgGraphsB" + numGrp + "P").removeClass("hide");
    $("#imgGraphsB" + numGrp + "L").removeClass("hide");

    if (numGrp === 1 || numGrp === 3 || numGrp === 5) {
      $(".p2r2 div").removeClass("hide");
    }

      numGrp++;
  }, imgIntervalTime);

  setInterval(function() {
    $(".newRow2Img").addClass("hide");

    if (newRow2Img % 2 === 0) {
      $("#newRow2Img1").removeClass("hide");
      $("#newRow2Img2").removeClass("hide");
    }

    newRow2Img++;
  }, 2000);

  //Below interval belongs to the APP icons and it's stores
  setInterval(function(){
    if (numApp % 2 === 0) {
      $("#idHome2b-1" ).addClass("hide");
      $("#idHome2b-2" ).removeClass("hide");
      $("#idHome2b-1M" ).addClass("hide");
      $("#idHome2b-2M" ).removeClass("hide");
      $("#idHome2b-1P" ).addClass("hide");
      $("#idHome2b-2P" ).removeClass("hide");
      $("#idHome2b-1L" ).addClass("hide");
      $("#idHome2b-2L" ).removeClass("hide");

      $("#idHome2b-1c1" ).addClass("hide");
      $("#idHome2b-1c2" ).addClass("hide");
      $("#idHome2b-1c3" ).addClass("hide");
      $("#idHome2b-1c1M" ).addClass("hide");
      $("#idHome2b-1c2M" ).addClass("hide");
      $("#idHome2b-1c3M" ).addClass("hide");
      $("#idHome2b-1c1P" ).addClass("hide");
      $("#idHome2b-1c2P" ).addClass("hide");
      $("#idHome2b-1c3P" ).addClass("hide");
      $("#idHome2b-1c1L" ).addClass("hide");
      $("#idHome2b-1c2L" ).addClass("hide");
      $("#idHome2b-1c3L" ).addClass("hide");

      setTimeout(function(){
        $("#idHome2b-2c1" ).removeClass("hide");
        $("#idHome2b-2c1M" ).removeClass("hide");
        $("#idHome2b-2c1P" ).removeClass("hide");
        $("#idHome2b-2c1L" ).removeClass("hide");
      },300);
      setTimeout(function(){
        $("#idHome2b-2c2" ).removeClass("hide");
        $("#idHome2b-2c2M" ).removeClass("hide");
        $("#idHome2b-2c2P" ).removeClass("hide");
        $("#idHome2b-2c2L" ).removeClass("hide");
      },600);
      setTimeout(function(){
        $("#idHome2b-2c3" ).removeClass("hide");
        $("#idHome2b-2c3M" ).removeClass("hide");
        $("#idHome2b-2c3P" ).removeClass("hide");
        $("#idHome2b-2c3L" ).removeClass("hide");

      },1300);

    }
    else{
      $("#idHome2b-1" ).removeClass("hide");
      $("#idHome2b-2" ).addClass("hide");
      $("#idHome2b-1M" ).removeClass("hide");
      $("#idHome2b-2M" ).addClass("hide");
      $("#idHome2b-1P" ).removeClass("hide");
      $("#idHome2b-2P" ).addClass("hide");
      $("#idHome2b-1L" ).removeClass("hide");
      $("#idHome2b-2L" ).addClass("hide");

      $("#idHome2b-2c1" ).addClass("hide");
      $("#idHome2b-2c2" ).addClass("hide");
      $("#idHome2b-2c3" ).addClass("hide");
      $("#idHome2b-2c1M" ).addClass("hide");
      $("#idHome2b-2c2M" ).addClass("hide");
      $("#idHome2b-2c3M" ).addClass("hide");
      $("#idHome2b-2c1P" ).addClass("hide");
      $("#idHome2b-2c2P" ).addClass("hide");
      $("#idHome2b-2c3P" ).addClass("hide");
      $("#idHome2b-2c1L" ).addClass("hide");
      $("#idHome2b-2c2L" ).addClass("hide");
      $("#idHome2b-2c3L" ).addClass("hide");

      setTimeout(function(){
        $("#idHome2b-1c1" ).removeClass("hide");
        $("#idHome2b-1c1M" ).removeClass("hide");
        $("#idHome2b-1c1P" ).removeClass("hide");
        $("#idHome2b-1c1L" ).removeClass("hide");
      },300);
      setTimeout(function(){
        $("#idHome2b-1c2" ).removeClass("hide");
        $("#idHome2b-1c2M" ).removeClass("hide");
        $("#idHome2b-1c2P" ).removeClass("hide");
        $("#idHome2b-1c2L" ).removeClass("hide");
      },600);
      setTimeout(function(){
        $("#idHome2b-1c3" ).removeClass("hide");
        $("#idHome2b-1c3M" ).removeClass("hide");
        $("#idHome2b-1c3P" ).removeClass("hide");
        $("#idHome2b-1c3L" ).removeClass("hide");
      },1300);
    }
    numApp++;
  }, (imgIntervalTime + 1000));



    //$(".divFooter").fadeOut(1100);
    $scope.urlName = webSiteName;
    $scope.urlNameForMobile = webSiteName + "/mobile/Home.aspx/Login";
    $scope.emailId = "";

    var dt = new Date();
    dt.setTime(dt.getTime() + (24 * 60 * 60 * 1000));
    var d1 = dt.getDate();
    var m1 = dt.getMonth() + 1;
    var y1 = dt.getFullYear();
    var h1 = dt.getHours();
    var mm1 = dt.getMinutes();      //Increasing last behavior click by one minute
    var s1 = dt.getSeconds();

    dt = (m1 < 10 ? '0' + m1 : m1) + '/' + (d1 < 10 ? '0' + d1 : d1) + '/' + y1;

    $scope.demoDate = dt;
    $scope.demoTime = (h1 < 10 ? '0' + h1 : h1) + ":00";

    if ($window.location.search.indexOf('login=1')>= 0) {
      console.log("to hide 65");
        $(".login-container").removeClass("hide");
      $(".login-container").attr("style","display:block");
    }
    else{
      $(".login-container").addClass("hide");
    }

  if ($window.location.search.indexOf('param=hipaa') >= 0 ){
    $("#myModal").addClass("in");
    $("#myModal").attr("style","display:block");

    $("#tabLinkName li").removeClass("active");
    $("#hipaa").addClass("active");

    $('.nav-tabs a[href="#hipaa"]').tab('show');
  }

  // var numPlan = 1;
  var intervalPlan;
  // function displayPlan(){
  //   if (numPlan % 2 === 0) {
  //     $("#idPlan1").removeClass("hide");
  //     //$("#idPlan1").fadeIn(1100);
  //     $("#idPlan2").addClass("hide");
  //   }
  //   else{
  //     $("#idPlan1").addClass("hide");
  //     $("#idPlan2").removeClass("hide");
  //     //$("#idPlan2" ).fadeIn(1100);
  //   }
  //   numPlan++;
  // }

  var slideIndex = 0;


  function showSlides(clsContainer, clsSlide, clsDot) {
    $("." + clsContainer).show();

    var i;
    var slides = document.getElementsByClassName(clsSlide);
    var dots = document.getElementsByClassName(clsDot);

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

  }


  intervalPlan = setInterval(
    function() {
      showSlides("conferenceContainer", "conferenceSlides", "conferenceDot");
    }, imgIntervalTime);


  function hideModal(clsName){
    setTimeout(
      function(){
          $("#idModalHome3" ).fadeOut(1100);
        }, ($("." + clsName).length * imgIntervalTime) );
  }

  $scope.conferenceDot = function(num){
    //alert(num);
    slideIndex = (num - 1);
    showSlides("conferenceContainer", "conferenceSlides", "conferenceDot");
  }

  $scope.footerArrow = function(arrowType){
    return;
    /*if (arrowType === 'up'){
      $(".divFooter").fadeIn(1100);
      $("#idArrowUp").addClass("hide");
      $("#idArrowDown").removeClass("hide");
    }
    else if (arrowType === 'down'){
      $(".divFooter").fadeOut(1100);
      $("#idArrowUp").removeClass("hide");
      $("#idArrowDown").addClass("hide");
    }*/
  }

  $scope.modalHome3 = function(btnType){
    slideIndex = 0;
    $(".slideContainer").hide();

    clearInterval(intervalPlan);

    //$("#idModalHome3").attr("style","display:block");

    $("#idModalHome3" ).fadeIn(1100);

    $("#idModalHome3").removeClass("fade");

    $("#idModal3Header").text(btnType);
    //alert("1after:" + btnType);

    if (btnType === "Plan"){
      $("#idModal3HeaderDetails").text("Assign goals/programs based on a dynamic curriculum aligned with common assessment tools from either your device or the web.");
      $("#idModal3HeaderImg").attr("src", "operantsystems/images/background-images/home3-1.jpg");

      showSlides("planContainer", "planSlides", "planDot");
      intervalPlan = setInterval(
        function() {
          showSlides("planContainer", "planSlides", "planDot");
        }, imgIntervalTime);

      hideModal("planDot");
     }
    else if (btnType === "Observe"){
      $("#idModal3HeaderDetails").text("Manage in real-time the results of your skills acquisition and behavior management plans aligned with your Functional Behavior Assessments and Behavior Intervention Plans.");
      $("#idModal3HeaderImg").attr("src", "operantsystems/images/background-images/home3-2.jpg");
      showSlides("observeContainer", "observeSlides", "observeDot");
      intervalPlan = setInterval(
        function() {
          showSlides("observeContainer", "observeSlides", "observeDot");
        }, imgIntervalTime);
      hideModal("observeDot");
    }
    else if (btnType === "Record"){
      $("#idModal3HeaderDetails").text("Document the results of your programs, fluency, accuracy, prompt levels, task analysis, baseline, maintenance, probes, settings, levels of intensity and much more");
      $("#idModal3HeaderImg").attr("src", "operantsystems/images/background-images/home3-3.jpg");
      showSlides("recordContainer", "recordSlides", "recordDot");
      intervalPlan = setInterval(
        function() {
          showSlides("recordContainer", "recordSlides", "recordDot");
        }, imgIntervalTime);
      hideModal("recordDot");
    }
    else if (btnType === "Analyze")
    {
      $("#idModal3HeaderDetails").text("Provide reports, graphs, session notes, quarterly progress reports, billing data to your educational, clinical and administrative staff.");
      $("#idModal3HeaderImg").attr("src", "operantsystems/images/background-images/home3-4.jpg");
      showSlides("analyzeContainer", "analyzeSlides", "analyzeDot");
      intervalPlan = setInterval(
        function() {
          showSlides("analyzeContainer", "analyzeSlides", "analyzeDot");
        }, imgIntervalTime);
      hideModal("analyzeDot");
    }
    else if (btnType === "Modify"){
      $("#idModal3HeaderDetails").text("Manage educational and clinical goals in a timely and reliable way reducing human errors and audit times of your administrative staff.");
      $("#idModal3HeaderImg").attr("src", "operantsystems/images/background-images/home3-5.jpg");
      showSlides("modifyContainer", "modifySlides", "modifyDot");
      intervalPlan = setInterval(
        function() {
          showSlides("modifyContainer", "modifySlides", "modifyDot");
        }, imgIntervalTime);
      hideModal("modifyDot");
    }
    else if (btnType === "Report"){
      $("#idModal3HeaderDetails").text("Share your results with parents and demonstrate real progress and achievements of your students.");
      $("#idModal3HeaderImg").attr("src", "operantsystems/images/background-images/home3-6.jpg");
      showSlides("reportContainer", "reportSlides", "reportDot");
      intervalPlan = setInterval(
        function() {
          showSlides("reportContainer", "reportSlides", "reportDot");
        }, imgIntervalTime);
      hideModal("reportDot");
    }
  };

  $scope.modalFeatures = function(btnType){

    if (btnType === "features"){
      $("#appBenefits").addClass("hide");
      //$("#appFeatures").removeClass("hide");
      //$("#appFeatures2").removeClass("hide");
      $("#modalFeatureMain").removeClass("hide");
    }
    else if (btnType === "benefits"){
      $("#appBenefits").removeClass("hide");
      //$("#appFeatures").addClass("hide");
      //$("#appFeatures2").addClass("hide");
      $("#modalFeatureMain").addClass("hide");
    }

    $("#myModalFeatures").css("display","block");
    $("#myModalFeatures").removeClass("fade");
  }

  $scope.modalFeaturesClose = function(){
    $("#myModalFeatures" ).fadeOut(1100);
  };

  $scope.modalLikeClose = function(){
    $("#myModalLike" ).fadeOut(1100);
  };

  function returnResult(url, data){
    return $http({
      method: 'POST',
      url: url,
      crossDomain: true,
      data: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers':'*'
      }
    });
  }

  $scope.functionLike = function(param){

    let url = webSiteName + "/html/getABAdetails.asmx/getIpAddress";
    let data ={ "likeOrDislike" : param};


    returnResult(url, data).success(function(dataRet){

      let tempData = angular.fromJson(dataRet.d);

      console.log(tmpData);

    });

    $("#myModalLike" ).fadeOut(1100);

  };

  // function returnResult(url, data){
  //   return $http({
  //     method: 'POST',
  //     url: url,
  //     crossDomain: true,
  //     data: JSON.stringify(data),
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Headers':'*'
  //     }
  //   });
  // }
  $scope.getLikeCounts = function(){
    let urlCount =  "https://www.autism311.com/html/getABAdetails.asmx/getIpAddressCount";
    let data ={ "param" : ""};

    returnResult(urlCount, data).success(function(dataRet){

      let tempData = angular.fromJson(dataRet.d);

      $("#idLikeCnt").text(tempData[0].likes);
      $("#idDontlikeCnt").text(tempData[0].dislikes);


    });
  }

  //var strId = ["home1", "home2", "home3", "features", "news", "team"]
  $scope.linkClick = function(linkName){
    $("#idModalHome3" ).fadeOut();
    if (linkName === "contactus"){
      $scope.footerArrow('up');
    }
    else if (linkName === "home" || linkName === "homeMain"){
      $("#homeCon").removeClass("hide");
      $("#home2").removeClass("hide");
      $("#home3").removeClass("hide");

      $("#news").addClass("hide");
      $("#team").addClass("hide");
      $("#features").addClass("hide");
      $("#features2").addClass("hide");
      //$("#features3").addClass("hide");
      $("#benefits").addClass("hide");
      $scope.footerArrow('down');

      let wH = location.href.indexOf('#');
      //if (location.href.length > location.href.indexOf('#')){
        location.href = location.href.substr(0, wH) + '#';
      //}
    }
    else if (linkName === "features"){
      $("#homeCon").addClass("hide");
      $("#home2").addClass("hide");
      $("#home3").addClass("hide");
      $("#news").addClass("hide");
      $("#team").addClass("hide");

      $("#features").removeClass("hide");
      $("#features2").removeClass("hide");
      //$("#features3").removeClass("hide");
      $("#benefits").removeClass("hide");
      $scope.footerArrow('down');

    }
    else if (linkName === "news"){
      $("#homeCon").addClass("hide");
      $("#home2").addClass("hide");
      $("#home3").addClass("hide");

      $("#news").removeClass("hide");

      $("#team").addClass("hide");
      $("#features").addClass("hide");
      $("#features2").addClass("hide");
      //$("#features3").addClass("hide");
      $("#benefits").addClass("hide");
      $scope.footerArrow('down');
    }
    else if (linkName === "team"){
      $("#homeCon").addClass("hide");
      $("#home2").addClass("hide");
      $("#home3").addClass("hide");
      $("#news").addClass("hide");

      $("#team").removeClass("hide");

      $("#features").addClass("hide");
      $("#features2").addClass("hide");
      //$("#features3").addClass("hide");
      $("#benefits").addClass("hide");
      $scope.footerArrow('down');
    }
  };

  $scope.modalHome3Close = function(){
    $("#idModalHome3" ).fadeOut(1100);
  };

  //Login button re-direct to home page of site
  $scope.loginPage = function () {
    $(".enrollment-link").hide();
    $(".enroll-link").removeClass('addBgColor addPaddingTop');
    $(".enrollment-link").hide();
    $('.user-login-menu > a').addClass('addBgColor');
    $(".login-container .error").addClass("hide");
    if ($(".login-container").hasClass("hide")) {
      $(".login-container").removeClass("hide");
      // $(".login-container").attr("style","display:block !important;top:140%");
      $(".login-container").attr("style", "display:block !important;");
      $(".login-container").addClass('addFixedStyling');
      

      $("#stamp-navigation").addClass("in");
      $("#stamp-navigation").attr("aria-expanded", "true");
    }
    else {
      $('.user-login-menu > a').removeClass("addBgColor");
      $(".login-container").addClass("hide");
      $(".login-container").attr("style","display:none !important");
      $("#stamp-navigation").removeClass("in");
      $("#stamp-navigation").attr("aria-expanded","false");
        }
    };

  function callingWS(serviceName, data) {
    if (serviceName === "sendMail" || serviceName === "sendMailForDemo" || serviceName === "contactUs") {
      var dataString = {
        "serviceType": serviceName,
        "strServiceData": JSON.stringify(data),
        "deviceId": "angularWS"
      };
      var url = webSiteName + sendRequestURL;

      //return $http.post(url, dataString);
      return $http({
        method: 'POST',
        url: url,
        data: JSON.stringify(dataString),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
     
    }
    else {
      let url = webSiteName + loginURL;
      //let url = 'https://www.trackingprogress.com/htmlNew/api/getSharedInfo/login/';
      /*data = {
        "DeviceId": "loginFromNewWebPage",
        "UserId": "barry1@teachme.com",
        "Pwd": "director"
      };*/
      
      console.log("i m here - " + data);
      console.log("i m here - " + url);
      //return $http.post(url, data);

      return $http({
        method: 'POST',
        url: url,
        crossDomain: true,
        data: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers':'*'
        }
      });
    }
  }

    $scope.loginPage_CheckUserIdPassword = function() {
        console.log($("#login_UserId").val().trim() + ":" + $("#login_Psd").val());

        if ($("#login_UserId").val().trim() === "" || $("#login_Psd").val() === "" ||
           $("#login_UserId").val().trim() === "User ID" || $("#login_Psd").val() === "Password") {
            console.log($(".login-container .error").attr("class"));
            $(".login-container .error").removeClass("hide");
            return;
        }
        $(".login-container .error").removeClass("hide");
        $(".login-container").removeClass("hide");
        $(".login-container").attr("style","display:block !important");
        $(".imgProcess").removeClass("hide");

        var jsonStr = { "userId": $("#login_UserId").val(),
            "psd": $("#login_Psd").val(),
            "deviceId": "loginFromNewWebPage"
        };

        callingWS("login", jsonStr)
            .success(function(responseData) {
                let result = JSON.parse(responseData);
                result[0] = result.loginDetails[0];

                if (result.length === 0) {
                  $(".login-container .error").removeClass("hide");
                }
                else {
                  if (result[0].accountStatus === "enable" && result[0].loginStatus === true) {
                      console.log("can login");

                      $.cookie("accountStatus", result[0].accountStatus, {expires: 7, path: '/'});
                      $.cookie("loginStatus", result[0].loginStatus, {expires: 7, path: '/'});
                      $.cookie("updateNeeded", result[0].updateNeeded, {expires: 7, path: '/'});
                      $.cookie("userId", result[0].userId, {expires: 7, path: '/'});
                      $.cookie("organizationId", result[0].organizationId, {expires: 7, path: '/'});
                      $.cookie("roleName", result[0].roleName, {expires: 7, path: '/'});
                      $.cookie("modifyEnabled", result[0].modifyEnabled, {expires: 7, path: '/'});
                      $.cookie("firstName", result[0].firstName, {expires: 7, path: '/'});
                      $.cookie("lastName", result[0].lastName, {expires: 7, path: '/'});
                      $.cookie("organizationName", result[0].organizationName, {expires: 7, path: '/'});
                      $.cookie("roleTypeID", result[0].roleTypeID, {expires: 7, path: '/'});

                      $.cookie("address1", result[0].address1, {expires: 7, path: '/'});
                      $.cookie("address2", result[0].address2, {expires: 7, path: '/'});
                      $.cookie("city", result[0].city, {expires: 7, path: '/'});
                      $.cookie("stateId", result[0].stateId, {expires: 7, path: '/'});
                      $.cookie("postalCode", result[0].postalCode, {expires: 7, path: '/'});

                      $.cookie("timeZoneId", result[0].timeZoneId, {expires: 7, path: '/'});

                      $.cookie("isCreatedOrUpdated", result[0].isCreatedOrUpdated, {expires: 7, path: '/'});

                      $.cookie("activity_Trials", result[0].activity_Trials, {expires: 7, path: '/'});
                      $.cookie("activity_MaxPerDay", result[0].activity_MaxPerDay, {expires: 7, path: '/'});
                      $.cookie("activity_ResponseSetID", result[0].activity_ResponseSetID, {expires: 7, path: '/'});
                      $.cookie("activity_FormulaForSuccessID", result[0].activity_FormulaForSuccessID, {
                        expires: 7,
                        path: '/'
                      });
                      $.cookie("activity_FormulaForSuccessParams", result[0].activity_FormulaForSuccessParams, {
                        expires: 7,
                        path: '/'
                      });

                      $.cookie("dbName", result[0].dbName, {expires: 7, path: '/'});
                      $.cookie("parentDBName", result[0].parentDBName, {expires: 7, path: '/'});

                      $.cookie("threeLevelOrg", threeLevelOrg, {expires: 7, path: '/'});

                      //location.href = "operantsystems/app/#/home";
                      var orgToWhomTabIsNotVisible = "ef6fd0f8-506d-44bd-af3a-d6b1a1279a26";


                    if (result[0].roleName !== "Director" && result[0].roleName !== "Therapist" && result[0].roleName !== "Therapist Assistant" && result[0].roleName !== "Supervisor"){
                        threeLevelOrg = "";
                      }

                    //threeLevelOrg.indexOf(result[0].dbName) >= 0 &&
                    if (result[0].roleName === "Director") {
                      location.href = "operantsystems/app/#/home/dashboard";
                    } else if (result[0].organizationId.toLowerCase().indexOf(orgToWhomTabIsNotVisible) >= 0) {
                      location.href = "operantsystems/app/#/home/people";
                    } else if (result[0].roleName === "Therapist Assistant") {
                      //location.href = "operantsystems/app/#/home/lesson";
                      if (result[0].isCreatedOrUpdated === false && result[0].parentDBName === "") {
                        location.href = "operantsystems/app/#/home/user";
                      } else {
                        location.href = "operantsystems/app/#/home/reportsHtml";
                      }
                    } else if (result[0].roleName === "Therapist") {
                      if (result[0].isCreatedOrUpdated === false && result[0].parentDBName === "") {
                        location.href = "operantsystems/app/#/home/user";
                      } else {
                        location.href = "operantsystems/app/#/home/dashboard";
                      }
                    } else if (result[0].roleName === "IT Person") {
                      location.href = "operantsystems/app/#/home/people";
                    } else {
                      location.href = "operantsystems/app/#/home/reportsHtml";
                    }

                      $(".login-container .error").addClass("hide");
                      $(".login-container").addClass("hide");
                    } else {
                      $(".login-container .error").removeClass("hide");
                    }

                }
                  $(".imgProcess").addClass("hide");
            })
            .error(function() {
                alert("Please check your internet connection...");
                $(".imgProcess").addClass("hide");
            });

    };

    $scope.loginPage_Hide = function() {
        console.log("to hide");
        $(".login-container .error").addClass("hide");
        $(".login-container").addClass("hide");
        $("#stamp-navigation").removeClass("in");
        $("#stamp-navigation").attr("aria-expanded","false");
      $("#stamp-navigation").attr("style","");
      $(".login-container").attr("style","display:none !important");

    };

    //Different links present in the product drop down
    $scope.availableLink = function(link) {
        if (link === "ios_sb_ipad") {
          window.open("https://itunes.apple.com/in/app/aba-data-notebook-skills-behaviors/id1008564477?mt=8", '_blank');
        }
        else if (link === "android_sb_ipad") {
          window.open("https://play.google.com/store/apps/details?id=com.operantsystems.abanotebook", '_blank');
            // location.href = "https://play.google.com/store/apps/details?id=com.operantsystems.abanotebook";
        }
        else if (link === "ios_sb_iphone") {
          window.open("https://itunes.apple.com/in/app/teachme-skills-platinum/id598392255?mt=8", '_blank');
            // location.href = "https://itunes.apple.com/in/app/teachme-skills-platinum/id598392255?mt=8";
        }
        else if (link === "web") {
            location.href = $scope.urlNameForMobile;
        }
        else if (link === "ios_sb_skills") {
          window.open("hhttps://itunes.apple.com/us/app/aba-data-notepad-skills/id1248744125", '_blank');
        }
        else if (link === "ios_sb_behaviors") {
          window.open("https://itunes.apple.com/us/app/aba-data-notepad-behaviors/id1248782710", '_blank');
        }
        else if (link === "ios_sb_iphone_language") {
          window.open("https://itunes.apple.com/in/app/speech-language-notepad-tracking/id1076457868?mt=8", '_blank');
        }
        else if (link === "ios_sb_pecshome") {
          window.open("https://itunes.apple.com/us/app/pecs-data-sheet-home/id1216665162", '_blank');
        }
        else if (link === "ios_sb_pecsschool") {
            window.open("https://itunes.apple.com/us/app/pecs-data-sheet-school/id1314334951", '_blank');
        }
        else if (link === "ios_sb_sessions") {
          window.open("https://apps.apple.com/in/app/aba-pocketbook/id1513788097", '_blank');
        }
        else if (link === "android_sb_sessions") {
          window.open("https://play.google.com/store/apps/details?id=com.operantsystems.abanotebookphoneappoffline", '_blank');
        }
        else if (link === "amazon_fire") {
          window.open("https://www.amazon.com/gp/product/B0839FJD2D", '_blank');
        } else if (link === "amazon_orange_fire") {
          window.open("https://www.amazon.com/Operant-Systems-Inc-ABA-Pocketbook/dp/B08LGQMF5N/ref=sr_1_2?qid=1676010664&refinements=p_4%3AOperant+Systems+Inc&s=mobile-apps&search-type=ss&sr=1-2", '_blank');
          
        }   

    };


    //Get Start button click 
    $scope.chkGetStarted = function() {
        if (!$scope.formMail.email.$valid) {
          return false;
        }


     if ( $("#idDevicesTypeColor").css("color") === "rgb(128, 0, 0)") {
       deviceType = 'mobile';
     }
     else if ( $("#idDevicesTypeColor").css("color") === "rgb(255, 192, 203)") {
       deviceType = "iPadPortrait";
     }
     else if ( $("#idDevicesTypeColor").css("color") === "rgb(0, 255, 0)") {
       deviceType = "iPadLandscape";
     }
     else {
       deviceType = 'web';
     }


        //Require to check email validation
        if ($("#cf-email").val() === "" || $("#cf-email").val() === "Enter your Email") {
            alert("Please enter you valid Email Id...");
            return false;
        }
        $("#gs1").addClass("hide");
        $("#gs2").removeClass("hide");

      $("#gs1M").addClass("hide");
      $("#gs2M").removeClass("hide");

      $("#gs1P").addClass("hide");
      $("#gs2P").removeClass("hide");

      $("#gs1L").addClass("hide");
      $("#gs2L").removeClass("hide");

        //Require to check is present locally, which is sent already to the web
        var lstEmail = [];
        if (localStorage.getItem("localEmailDetails") !== null) {
          lstEmail = JSON.parse(localStorage.getItem("localEmailDetails"));
        }

        var flg = false;
        var cntSender = 0;
        var nameSender = "";
        var phoneSender = "";

        if (localStorage.getItem("localEmailDetails") !== null) {
            $.each(lstEmail, function(aryIdx, aryVal) {
                console.log(aryVal.emailId);
                if (aryVal.emailId === $("#cf-email").val()) {
                    flg = true;
                    cntSender = aryVal.senderCount;
                    nameSender = aryVal.senderName;
                    phoneSender = aryVal.senderPhone;
                    return false;
                }
            });
        }

      if ( deviceType === 'mobile') {
        $("#cf-email").val($("#cf-emailM").val());
      }
      else if ( deviceType === 'iPadPortrait') {
        $("#cf-email").val($("#cf-emailP").val());
      }
      else if ( deviceType === 'iPadLandscape') {
        $("#cf-email").val($("#cf-emailL").val());
      }



        if (flg && cntSender > 4) {
          return;
        }
        else {
            lstEmail.push({ "emailId": $("#cf-email").val(),
                "senderName": nameSender,
                "senderPhone": phoneSender,
                "senderCount": cntSender + 1
            });
            localStorage.setItem("localEmailDetails", JSON.stringify(lstEmail));
        }

        var jsonStr = {
            "sendUpdateRequest":
                                { "emailId": $("#cf-email").val(),
                                    "senderName": nameSender,
                                    "senderPhone": phoneSender
                                }
        };

        console.log(JSON.stringify(jsonStr));
        callingWS("sendMail", jsonStr);
    };

    $scope.saveNamePhone = function() {
      if ( deviceType === 'mobile') {
        $("#cf-email").val($("#cf-emailM").val());
        $("#cf-name").val($("#cf-nameM").val());
        $("#cf-phone").val($("#cf-phoneM").val());
      }
      else if ( deviceType === 'iPadPortrait') {
        $("#cf-email").val($("#cf-emailP").val());
        $("#cf-name").val($("#cf-nameP").val());
        $("#cf-phone").val($("#cf-phoneP").val());
      }
      else if ( deviceType === 'iPadLandscape') {
        $("#cf-email").val($("#cf-emailL").val());
        $("#cf-name").val($("#cf-nameL").val());
        $("#cf-phone").val($("#cf-phoneL").val());
      }


        var jsonStr = {
            "sendUpdateRequest":
                                { "emailId": $("#cf-email").val(),
                                    "senderName": $("#cf-name").val(),
                                    "senderPhone": $("#cf-phone").val(),
                                    "demoDate": $scope.demoDate,
                                    "demoTime": $scope.demoTime

                                }
        };

        //Require to check is present locally, which is sent already to the web
        let lstEmail = [];
        if (localStorage.getItem("localEmailDetails") !== null) {
          lstEmail = JSON.parse(localStorage.getItem("localEmailDetails"));
        }

        let flg = false;
        let cntSender = 0;
        if (localStorage.getItem("localEmailDetails") !== null) {
            $.each(lstEmail, function(aryIdx, aryVal) {
                console.log(aryVal.emailId);
                if (aryVal.emailId === $("#cf-email").val() && aryVal.senderName === $("#cf-name").val() && aryVal.senderPhone === $("#cf-phone").val()) {
                    flg = true;
                    cntSender = aryVal.senderCount;
                    return false;
                }
            });
        }

        $("#gs1").addClass("hide");
        $("#gs2").addClass("hide");
        $("#gs3").removeClass("hide");
    

      $("#gs1M").addClass("hide");
      $("#gs2M").addClass("hide");
      $("#gs3M").removeClass("hide");

      $("#gs1P").addClass("hide");
      $("#gs2P").addClass("hide");
      $("#gs3P").removeClass("hide");

      $("#gs1L").addClass("hide");
      $("#gs2L").addClass("hide");
      $("#gs3L").removeClass("hide");

        if (flg) {
          return;
        }
        else {
            lstEmail.push({ "emailId": $("#cf-email").val(),
                "senderName": $("#cf-name").val(),
                "senderPhone": $("#cf-phone").val(),
                "senderCount": (cntSender + 1)
            });
            localStorage.setItem("localEmailDetails", JSON.stringify(lstEmail));
        }

        callingWS("sendMailForDemo", jsonStr);


    };

    $scope.reset = function() {
      var original = $scope.email;
      $scope.email= angular.copy(original)
      $scope.formMail.$setPristine()
  };

    //In different links are present according to which tab should be open
    $scope.footerLinkClick = function(tabName) {
        $('.nav-tabs a[href="#' + tabName + '"]').tab('show');
    };

    //Contact us validation 
    $scope.chkContactUs = function() {
        //alert('before contact us');
        console.log($scope.formContactUs.contactUs_emailId);
        if (!$scope.formContactUs.contactUs_emailId.$valid) {
            return false;
        }

        //{"sendUpdateRequest": {"yourName": "salim","emailId": "sh092us@yahoo.com","message": "from web service"}}
        var jsonStr = {
            "sendUpdateRequest":
                        { "yourName": $scope.contactUs_yourName,
                            "emailId": $scope.contactUs_emailId,
                            "message": $scope.contactUs_message
                        }
        };

        console.log(JSON.stringify(jsonStr));
        callingWS("contactUs", jsonStr);

        $("#divContactUsThankyou").removeClass("hide");
        $('.template-sendbtn').addClass('hasBeenSend');
        // $("#divContactUs").addClass("hide");
    };

});
