﻿    function selectPatient(ctrl, div, txtId, txtName)
    {
        $("#" + $(ctrl).parent().parent().parent().attr("id")).hide();
        $(ctrl).parent().parent().parent().prev().val($(ctrl).text());
        $(ctrl).parent().parent().parent().prev().prev().prev().val($(ctrl).children(0).attr("id"));        
    }
    
    function displayDiv(ctrl)
    {
        for(var i=0;i< ctrl.parentNode.childNodes.length; i++)
        {
            if (ctrl.parentNode.childNodes[i].nodeName.toLowerCase() == 'div')
            {
                document.getElementById(ctrl.parentNode.childNodes[i].id).style.display = 'block';
                break;
            }
        }
        
    }
    
    function hidDiv()
    {
        $(".divAddDomain").hide();
    }
    
        function searchUp(e, ctrl, txt, from)
        {
            var keyCode;
            var str;
            evt = e || window.event;

            keyCode = evt.which || evt.keyCode;

            str = txt.toLowerCase();// + String.fromCharCode(keyCode).toLowerCase();
            if (keyCode == 13)
                return false;
            
            var obj ;
            for(var i=0;i< ctrl.parentNode.childNodes.length; i++)
            {
                if (ctrl.parentNode.childNodes[i].nodeName.toLowerCase() == 'div')
                {
                    obj = ctrl.parentNode.childNodes[i].childNodes[0];
                    break;
                }
            }
           
            var strEle;
            var ddPeopleVal;
            
            if (from == 'people')
                ddPeopleVal = $('select.ddPeople_Add option:selected').val();
                
            if (obj.childNodes.length > 0)
            {
              for(var i=0; i<obj.childNodes.length; i++)
                {
                    var strToSearch = obj.childNodes[i].childNodes[0].lastChild.nodeValue.split(' ');
                    if (strToSearch.length >= 2)
                    {
                        //if ( strToSearch[0].toLowerCase().indexOf(str) >= 0 )
                        
                        if (from == 'people')
                        {
                            if ( ddPeopleVal == 'Select')
                            {
                                if (obj.childNodes[i].childNodes[0].lastChild.nodeValue.toLowerCase().indexOf(str) >= 0 )
                                {
                                    obj.childNodes[i].style.display = ''; 
                                } 
                                else
                                {
                                    obj.childNodes[i].style.display = 'none';
                                }  
                            }
                            else
                            {
                                if (obj.childNodes[i].childNodes[0].lastChild.nodeValue.toLowerCase().indexOf(str) >= 0 && ddPeopleVal == obj.childNodes[i].className)
                                {
                                    obj.childNodes[i].style.display = ''; 
                                } 
                                else if (ddPeopleVal == obj.childNodes[i].className)
                                {
                                    obj.childNodes[i].style.display = 'none';
                                }                              
                            }
                        }
                        else
                        { 
                            if (obj.childNodes[i].childNodes[0].lastChild.nodeValue.toLowerCase().indexOf(str) >= 0 )
                            {
                                obj.childNodes[i].style.display = ''; 
                            } 
                            else
                            {
                                obj.childNodes[i].style.display = 'none';
                            }  
                        }                  
                    }
                    else
                    {
                        //if ( obj.childNodes[i].childNodes[0].lastChild.nodeValue.substring(0,str.length).toLowerCase() == str)
                        if ( obj.childNodes[i].childNodes[0].lastChild.nodeValue.toLowerCase().indexOf(str) >= 0 ) // toLowerCase() == str)
                        {
                            obj.childNodes[i].style.display = ''; 
                        } 
                        else
                        {
                            obj.childNodes[i].style.display = 'none';
                        }
                    }
                }   
            }
        }    
        function disExpand(divId, type,id)
        {
            var obj = document.getElementById(id);//$(obj).next().siblings()[0]
            var objElse;
            
            //display the same level sibiling to visible
            for (var i=0; i < $(obj).siblings().length; i++)
            {
                objElse = $(obj).siblings()[i];
                 
                if (type == 'plan')
                {
                    if ($(objElse).parent().siblings().attr("style") == "DISPLAY: none")
                        $(objElse).parent().siblings().attr("style", "DISPLAY:");
                    else
                        $(objElse).parent().siblings().attr("style", "DISPLAY: none");                
                }
                else
                {
                    if ($(objElse).attr("style") == "DISPLAY: none")
                        $(objElse).attr("style", "DISPLAY:");
                    else
                        $(objElse).attr("style", "DISPLAY: none");
                }
            }
                            

                if ($(obj).attr("class") == "expand")
                    $(obj).attr("class","collapse");
                else
                    $(obj).attr("class","expand");            

        }
        
        function disExpandCheck(obj, type, nodeType)
        {
            if (type == 'img')
            {
                if ($(obj).attr("class") == "list-unchecked")
                    $(obj).attr("class","list-checked");
                else
                    $(obj).attr("class","list-unchecked");
            }
            else
            {
                var objLoop = $('[class="activity-selected"]');
                if (objLoop.length > 0)
                {
                    for(var i=0; i<objLoop.length; i++)
                    {
                       $(objLoop[i]).attr("class","activity");
                    }
                }
                if ($(obj).attr("class") == "activity")
                    $(obj).attr("class","activity-selected");
                else
                    $(obj).attr("class","activity");            
            }
            
            if (nodeType == 'goal' || nodeType == 'activity')
            {
                //alert($(obj).parent().attr('id'));
                if (nodeType == 'goal')
                {
                    $('.txtGoalId').val('goal');
                    $('.txtActId').val(''); 
                }
                else
                {
                    $('.txtGoalId').val($(obj).parent().attr('id'));
                    $('.txtActId').val($(obj).parent().attr('id')); 
                }
            }
        }
        
        function copyToDailyPlanner()
        {
            $(".txtTreeIds").val("");
            if ($(".list-checked").length > 0)
            {
                for(var i =0 ; i < $(".list-checked").length; i++)
                {
                    //Checking whether parentNode is already exists 
                    if (($(".txtTreeIds").val()).indexOf( $(".list-checked")[i].parentNode.parentNode.parentNode.getAttribute("id").substring(3,39) ) < 0)
                    {                
                        //Adding ":" for next parentNode
                        if ($(".txtTreeIds").val() != "")
                        {
                            $(".txtTreeIds").val( $(".txtTreeIds").val() + ":" );
                        }
                        
                        //Adding parentNode Id
                        $(".txtTreeIds").val( $(".txtTreeIds").val() + $(".list-checked")[i].parentNode.parentNode.parentNode.getAttribute("id").substring(3,39) );
                        
                        
                        for (var j=0; j < $(".list-checked")[i].parentNode.parentNode.childNodes.length; j++)
                        {
                            //Looping through to add li id if checked
                            if ($(".list-checked")[i].parentNode.parentNode.childNodes[j].childNodes[0].getAttribute("class") == "list-checked")
                            {
                                $(".txtTreeIds").val( $(".txtTreeIds").val() + "," + $(".list-checked")[i].parentNode.parentNode.childNodes[j].childNodes[0].getAttribute("id").substring(3,39) );
                            }
                        }
                    }
                }
            }
            else
            {
                alert("Please select the activities to copy into the Daily Planner");
                return false;
            }
            tabClick('Copy to Daily Planner');
            return true;        
        }

        //Belongs to Daily Planner
//        function dp_Expand(id)
//        {
//            var obj = $("#hr_" + id.substring(3,39));
//            //Require to whether next sibling of "Li" is a div ?
//            //if ( obj.siblings($("#div_" + id.substring(3,39))).length == 1)
//            if (obj.siblings()[1].id.indexOf("UpdatePanelInner") >= 0)
//            {
//                alert('need post back');
//                $("#hidClickType").val("Curriculum");
//                $("#txtGoalId").val(id.substring(3,39));
//                $("#txtClickType").val("look for activities");
//                //__doPostBack('liCurriculum','Click')
//                return false;
//            }            
//            
//            var objElse;
//            if (obj.siblings().attr("style").toLowerCase().indexOf("display: none")>=0 || obj.siblings().attr("style").toLowerCase().indexOf("display:none")>=0)
//                obj.siblings().attr("style", "display: block");
//            else
//                obj.siblings().attr("style", "display: none");                

//            if ($("#" + id + ":first").attr("class") == "expand")
//                $("#" + id + ":first").attr("class","collapse");
//            else
//                $("#" + id + ":first").attr("class","expand");
//        }
        function dp_Expand(id)
        {
            var obj = $("#li_" + id.substring(3,39));
            var objElse;
            if (obj.siblings().attr("style").toLowerCase().indexOf("display: none")>=0 || obj.siblings().attr("style").toLowerCase().indexOf("display:none")>=0)
                obj.siblings().attr("style", "display: block");
            else
                obj.siblings().attr("style", "display: none");                

            if ($("#" + id + ":first").attr("class") == "expand")
                $("#" + id + ":first").attr("class","collapse");
            else
                $("#" + id + ":first").attr("class","expand");
        }        
        function dp_Check(obj, objType)
        {
            if ($(obj).hasClass("list-unchecked"))
            {
                $(obj).removeClass("list-unchecked");
                $(obj).addClass("list-checked");
            }
            else
            {
                $(obj).removeClass("list-checked");
                $(obj).addClass("list-unchecked");
            
                if ( $(obj).hasClass("idDuration"))
                {
                    $(".txtDuration").val("");
                }
            }
            if (objType == 'behduration')
            {                
                if ($(obj).attr("class") == "list-unchecked")
                    $(".txtBeh_Duration_flg").val(0);
                else
                    $(".txtBeh_Duration_flg").val(1);
            }                
            else if (objType == 'txtBeh_Duration')
            {                
                if ($(obj).attr("class") == "list-unchecked")
                {
                    $(".txtBeh_Duration").val("");
                }
            }
            else if (objType == 'duration')
            {                
                if ($(obj).attr("class") == "list-unchecked")
                    $(".txtDuration_flg").val(0);
                else
                    $(".txtDuration_flg").val(1);
            }
            else if (objType == 'interval')
            {                
                if ($(obj).attr("class") == "list-unchecked")
                    $(".txtTimeInterval_flg").val(0);
                else
                    $(".txtTimeInterval_flg").val(1);
            }
            else if (objType == 'mastered')
            {
                if ($(obj).attr("class") == "list-unchecked")
                {
                    $(".txtMastered_flg").val(0);

                    $(".ddFormulaForSuccess").removeAttr("disabled"); 
                    $(".txtTreatmentParamA").removeAttr("disabled"); 
                    $(".txtTreatmentParamB").removeAttr("disabled");                                     
                }
                else
                {
                    $(".txtMastered_flg").val(1);
                    
                    $(".ddFormulaForSuccess")[0].selectedIndex = 0;
                    $(".txtFormulaForSuccessParamA").val("");
                    $(".txtFormulaForSuccessParamB").val("");   
                    
                    $(".ddFormulaForSuccess").attr("disabled", "disabled"); 
                    $(".txtFormulaForSuccessParamA").attr("disabled", "disabled"); 
                    $(".txtFormulaForSuccessParamB").attr("disabled", "disabled");                               
                }
            }
            else if (objType == 'Allow person to login')
            {
                if ($(obj).attr("class") == "list-unchecked")
                    $("#txtAllow_Person_to_login_flg").val(0);
                else
                    $("#txtAllow_Person_to_login_flg").val(1);
            }            
            else if (objType == 'Lock account')
            {
                if ($(obj).attr("class") == "list-unchecked")
                    $("#txtLock_account").val(0);
                else
                    $("#txtLock_account").val(1);
            }            
            

        }

        function dp_Select(obj, nodeType, goalId, actId, focusGoalId, focusActId,clickType)      //focusId -- after deletion refreshed screen should have focus on it
        {
            var objLoop = $('[class="activity-selected"]');
            if (objLoop.length > 0)
            {
                for(var i=0; i<objLoop.length; i++)
                {
                   $(objLoop[i]).attr("class","activity");
                }
            }
            if ($(obj).attr("class") == "activity")
                $(obj).attr("class","activity-selected");
            else
                $(obj).attr("class","activity");            
            
//            if (nodeType == 'goal' || nodeType == 'activity')
//            {
                    $('#txtGoalId').val(goalId);
                    $('#txtActId').val(actId); 
                    $('#txtFocusGoalId').val(focusGoalId);                     
                    $('#txtFocusActId').val(focusActId);
                    $('#txtType').val(nodeType); 
                    $('#txtClickType').val(clickType);                    
//            }
        }
        
        //Before delete below function is check whether any checkbox is selected
        function removeSelected()
        {
            var objLoop = $('[class="activity-selected"]');
            $("#hidClickType").val('Daily Planner');
            if (objLoop.length > 0)
            {
                if (confirm("Remove the highlighted item : " + objLoop.text()))
                    return true;
                else
                    return false;
            }
            
            objLoop = $('[class="activity"]');
            if (objLoop.length > 0)
            {
                alert("Please select the Goal/Activity to remove");
            }
            else
                alert("No Goals/Activities are present");
            return false;
        }
        function tabClick(clickType)
        {
            $("#hidClickType").val(clickType);
            //$("form").submit();
        }
        
        function CurriculumToWorkbook(clickType)
        {
            $("#txtTreeIds").val("");
            if ($(".list-checked").length > 0)
            {
                for(var i =0 ; i < $(".list-checked").length; i++)
                {
                    //Looping through to add li id if checked
                    if ($("#txtTreeIds").val() == "")
                        $("#txtTreeIds").val($(".list-checked")[i].parentNode.childNodes[0].getAttribute("id").substring(3,39) );
                    else
                        $("#txtTreeIds").val( $("#txtTreeIds").val() + "," + $(".list-checked")[i].parentNode.childNodes[0].getAttribute("id").substring(3,39) );
                }
            }
            else
            {
                if (clickType == 'Copy to Workbook')
                    alert("Please select the activities to copy into the Workbook");
                else
                    alert("Please select the activities to copy into the Daily Planner");
                return false;
            }
            //alert($("#txtTreeIds").val());
            tabClick(clickType);
            return true;        
        }
        function visPanel(panelName1,panelName2,clickType)
        {
            $("#" + panelName1).hide();
            $("#" + panelName2).hide();
            $("#hidClickType").val(clickType);
        }
        
        function displaySaveActivity(div,displayType, organizationId, therapistId,domainType)
        {
            if (displayType == "display")
            {
                $(div).next().show();
                $(div).hide();
                return false;
            }
            else if ($(div).html() == "Cancel")
            {
                $(div).parent().hide();
                $(div).parent().prev().show();
                return false;
            }
            else if (displayType == "save")
            {
                var toSave = $(div).prev().val().trim();
                if (toSave == "")
                    return false;

                var obj =  $('[class="activity"]'); 
                var isExist = false;
                $.each(obj, function(index, val) 
                { if (obj[index].firstChild.nodeValue == toSave)
                    { 
                        alert("Domain,Goal or Activity with this name is already present")  ;
                        isExist = true;
                        $(div).prev().focus();
                        return false;
                    }
                 });
                 if (isExist )
                    return false;
                    
                if ($(div).parent().prev().attr("id") == "domain")
                    $("#txtGoalDomain").val("Domain");
                else
                    $("#txtGoalDomain").val($(div).parent().prev().attr("id").substring(5,41));
                $("#txtGoalDomain_Name").val(toSave);
                $("#txtGoalDomain_OrganizationId").val(organizationId);
                $("#txtGoalDomain_TherapistId").val(therapistId);
                $("#txtGoalDomain_Type").val(domainType);
                __doPostBack('liCurriculum','Click')
                return true;
            }
            return false;
        }
        function checkLength_BeforeAdd(cnt, len, txtObj)
        {
            var txtToValidate = $("." + txtObj).val();

            if ($(cnt).val().length >= len)
                return false;
            else if (($(cnt).val()).indexOf(txtToValidate)  >= 0)
            {
                $(cnt).val(""); 
                $(cnt).attr("style","black");
            }
        }
        function durationCheckbox(cnt)
        {
            //alert($(cnt)[0].tagName);
            if ( $(cnt)[0].tagName.toLowerCase() == "label")
            {
                if ($(cnt).children("input").is(':checked'))
                    $(cnt).prev().attr("src","../images/checked.jpg");
                else
                    $(cnt).prev().attr("src","../images/unchecked.jpg");
            }
            else if ( $(cnt)[0].tagName.toLowerCase() == "img")
            {
                if ($(cnt).next().children("input").is(':checked'))
                {
                    $(cnt).next().children("input").prop("checked",false);
                    $(cnt).attr("src","../images/unchecked.jpg");
                }
                else
                {
                    $(cnt).next().children("input").prop("checked",true);
                    $(cnt).attr("src","../images/checked.jpg");            
                }
            }
        }        
        function txtChange(txt, txtForeColor, txtObj)
        {
            var txtToValidate = $("." + txtObj).val();
            if ($(txt).val().toLowerCase() == txtToValidate.toLowerCase() && $(txt).attr("style") == "color: #c7c7c7")
            {
                $(txt).val(""); //txt.value = '';
                $(txt).attr("style","black");
            }
            else if ($(txt).val().toLowerCase() != txtToValidate.toLowerCase())
            {
                $(txt).attr("style","black");
            }
        }

        function txtBlur(txt, txtForeColor, txtObj)
        {
            //alert('blur = ' + txtObj);
            var txtToValidate = $("." + txtObj).val();
            if ($(txt).val().toLowerCase() == "")
            {
                $(txt).val(txtToValidate);
                $(txt).attr("style",txtForeColor);
                txt.style.color = txtForeColor;
            }
        }
        
        function Properties()
        {
            if ( $(".txtType").val() == "")
            {
                alert("Please Select the Domain/Goal/Activity");
                return false;
            }
            return true;
        }
        
        function propertyUpdate(txtToSave, txtToVerify)
        {
            //alert($("#" + txtToSave).val().trim());
            //alert($("#" + txtToVerify).val());
            var toSave = $("." + txtToSave).val().trim();
            var txtToValidate = $("." + txtToVerify).val();
            if (txtToValidate.toLowerCase() == "add domain")
                $(".txtType").val("domain");
            else if (txtToValidate.toLowerCase() == "add goal")
                $(".txtType").val("goal");
            else if (txtToValidate.toLowerCase() == "add activity")
                $(".txtType").val("activity");

            else if (txtToValidate.toLowerCase() == "add category")
                $(".txtType").val("category");
            else if (txtToValidate.toLowerCase() == "add behavior")
                $(".txtType").val("behavior");

            if (toSave == "" || toSave.toLowerCase() == txtToValidate.toLowerCase())
            {
                    alert("Please enter the " + $(".txtType").val() + " name");
                    return false;
            }
            return true;
        }
        
        function clearPatIds()
        {
            if ($(".textId").val() == "Type Last Name" || $(".textId").val() == "")
            {
                __doPostBack('clearSessionVariables','')
            }
        }
        
        function checkForParticipant(id)
        {
            
            if (id = 'btnSearch')
            {
                var dtStart = new Date( $(".txtEdit_StartDate").val() );
                var dtEnd = new Date( $(".txtEdit_EndDate").val() );
                var diff = dtEnd - dtStart;
                var days = diff / 1000 / 60 / 60 / 24;
                if (days > 31)
                {
                   $("#chkDate").attr("style","color:Red;display:");
                   return false;
                }
                else
                {
                    $("#chkDate").attr("style","color:Red;display:none");
                }
            }
            if ($(".txtPatId").val() == "" ||  $(".textId").val() == "Type Last Name" || $(".textId").val() == "")
            {
                alert("Please select the Student");
                return false;
            }
            return true;
        }
        function deleteDomain()
        {
            if ($(".txtClickType").val() == "Curriculum"){
                if (confirm("Like to remove the Domain/Goal"))
                    return true;
                else
                    return false;                 
            }else {
                if (confirm("Like to archive the Domain/Goal"))
                    return true;
                else
                    return false;                   
            }
        }
        function deleteCategory()
        {
            if (confirm("Like to remove the Category"))
                return true;
            else
                return false;         
        }
        function deleteMessage(message, from)
        {
            if (message == 'Delete_1')
            {
                if ($(".txtClickType").val() == "Behavior Plan")
                {
                    
                    if ($(".txtSelectedNodeText_BP").val() == "")
                    {
                        alert('Please Highlight the Behavior to Archive');
                        return false;
                    } 
                    
                    var msgBP = $(".txtSelectedNodeText_BP").val();
                    msgBP = msgBP.replace("<font color='green'>","");
                    msgBP = msgBP.replace("</font>","");
                    msgBP = msgBP.replace("'","\\'");
                    if (confirm("Archive the highlighted item : " + msgBP))
                        return true;
                    else
                        return false;            
                                   
                }
                return true;
            }
            if (message == 'Delete')
            {
                if (from == 'Curriculum' && $(".txtSelectedNodeText").val() == "")
                {
                    alert('Please Highlight the Domain/Activity to Delete');
                    return false;                
                }
                else if ($(".txtSelectedNodeText").val() == "")
                {
                    alert('Please Highlight the Category/Behavior to Delete');
                    return false;
                }
            }
            else if (message == 'Tentative')
            {
                if (from == 'Curriculum' && $(".txtSelectedNodeText").val() == "")
                {
                    alert('Please Highlight the Domain/Activity to make Tentative');
                    return false;                                
                }
                else if ($(".txtSelectedNodeText").val() == "")
                {
                    alert('Please Highlight the Category/Behavior to make Tentative');
                    return false;
                }
            }
            else
            {
                return true;        // added when functionality change for deleting behaviors 
            }
            var msg = $(".txtSelectedNodeText").val();
            msg = msg.replace("<font color='green'>","");
            msg = msg.replace("</font>","");
            msg = msg.replace("'","\\'");
            if (message == 'Tentative')
            {
                if (confirm("Highlighted item for Approve to Tentative : " + msg))
                    return true;
                else
                    return false;            
            }
            else if (confirm("Remove the highlighted item : " + msg))
                return true;
            else
                return false;            
        }
        
        function tabSelected(lstTab){
            $(".tablist li").removeClass("active");
            $(lstTab).parent().addClass("active");
        }
        function updateMessage(message)
        {
                $(".lblProcessingMessag").text(message);
                
        }
//        $(document).ready(function() 
//        {
//            alert('ready');
////            $("input[type='checkbox']").click(function() { alert('hi');})
//////            $("input[type='checkbox']").bind('click',function(){             
////                    var ischecked = (this.checked == true);             
////                    alert(ischecked);         
////                  }); 

//            $("input[type=checkbox]").click(function()
//                {     
//                    alert("clicked");  
//                    })   
////                    

//        })

function fnNumber(e,val) 
{
    var keyCode = window.event ? e.keyCode : e.which;
    if (keyCode == 0)
        return true;
    else if(keyCode == 13 || keyCode == 8 || keyCode == 9 )
        return true;
    else if (keyCode >=48 && keyCode<=57)
        return true;
    else
        return false;
}

function checkLength(e,cnt,len)
{
    var keyCode = window.event ? e.keyCode : e.which;
    if (keyCode == 8 || keyCode == 46)
        return true;
    if (cnt.value.length >= len)
        return false;
}

function chkRequiredFields()
{
    var strMessage = "";
    if ($(".txtPeoples_FirstName").val().trim() == "")
        strMessage = "<label class=\"requiredItem\">First Name should not be blank</label><br/>";

    if ($(".txtPeoples_LastName").val().trim() == "")
        strMessage += "<label class=\"requiredItem\">Last Name should not be blank</label><br/>";
    
    //if ($("#divAddress").is(':hidden') == false)
    //{
        if ($(".txtPeople_WebSite").val().trim() != "")
        {
            var regEx =  new RegExp(/^([\w\.\-]+)([\w\-]+)((\.(\w){2,3})+)$/i);
            if(! regEx.test($(".txtPeople_WebSite").val().trim()))
            {
                strMessage += "<label class=\"requiredItem\">Enter valid Web Site Name</label><br/>";
            }

        }
    //}
    if ($(".divAdmin").is(':hidden') == false)
    {
        if ($(".txtPeoples_EMailAddress").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Email Address should not be blank</label><br/>";
        else 
        {
            var regEx =  new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);

            if(! regEx.test($(".txtPeoples_EMailAddress").val().trim()))
            {
                strMessage += "<label class=\"requiredItem\">Enter valid email address</label><br/>";
            }
        }
        if ($(".txtPeoples_Password").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Password should not be blank</label><br/>";
    }

    if ($(".panelPeople_Contact").is(":hidden") == false)
    {
        var regEx =  new RegExp(/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/); 
        
        if ($(".txtPeople_HomePhone").val() != "")
        {
            if (!regEx.test($(".txtPeople_HomePhone").val()))
            {
                strMessage += "<label class=\"requiredItem\">Enter valid Home Phone number</label><br/>";
            }
        }
        
        if ($(".txtPeople_BusinessPhone").val() != "")
        {        
            if (!regEx.test($(".txtPeople_BusinessPhone").val()))
            {
                strMessage += "<label class=\"requiredItem\">Enter valid Business Phone number</label><br/>";
            }
        }
        
        if ($(".txtPeople_MobilePhone").val() != "")
        {        
            if (!regEx.test($(".txtPeople_MobilePhone").val()))
            {
                strMessage += "<label class=\"requiredItem\">Enter valid Mobile Phone number</label><br/>";
            }
        }
        
        if ($(".txtPeople_Fax").val() != "")
        {        
            if (!regEx.test($(".txtPeople_Fax").val()))
            {
                strMessage += "<label class=\"requiredItem\">Enter valid Fax number</label><br/>";
            }
        }                                
    }
    if (strMessage != "")
    {
        $(".divRequireField").html(strMessage);
        return false;
    } 
    $(".divRequireField").html("");  
     
    return true;
}

function postBackByObject(e)
{
    if ($(".txtClickType").val() == "Behaviors" || $(".txtClickType").val() == "Skills")
    {
           __doPostBack("tvReportSkills","TreeNodeCheckChanged");
    }
    else if ($(".txtClickType").val() == "Reports" && $(".ddReports :selected").val() == "BehaviorsProgressReport")
    {
        __doPostBack("tvReportSkills","TreeNodeCheckChanged");
    }
}

function checkReportStudent()
{
    if ($(".ddReportStudent :selected").val() == "0")
    {
        $(".ddReportStudent_Req").attr("style","color:Red;display:");
        //alert("Please Select the Student");
        return false;
    }
    return true;
}    

function chkRequiredFields_Comments(reqType)
{
    var strMessage = "";
    //alert($("#ddCommenSkills_Status").val());
    if (reqType == "Behavior")
    {
        if($("#chkBehaviorList input:checked").length == 0)
            strMessage = "<label class=\"requiredItem\">Atleast one behavior should be selected</label><br/>";
    
        if ($(".txtCommentBehavior_CommentDate").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Comment Date should not be blank</label><br/>";

        if ($(".txtCommentBehavior_BehaviorComments").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Behavior Comments should not be blank</label><br/>";
    }
    else if (reqType == "Skills")
    {
        if($("#chkSkillsList input:checked").length == 0)
            strMessage = "<label class=\"requiredItem\">Select one Skill</label><br/>";

        if ($(".txtCommentSkills_CommentDate").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Comment Date should not be blank</label><br/>";
        
        if ($("#ddCommenSkills_Status").val() == "")
            strMessage += "<label class=\"requiredItem\">Select Status</label><br/>";

        if ($(".txtCommentSkills_Comments").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Skill Comments should not be blank</label><br/>";
    }
    else if (reqType == "BehaviorGraph")
    {
        if($("#chkBehaviorGraphList input:checked").length == 0)
            strMessage = "<label class=\"requiredItem\">Select one Behavior</label><br/>";
            
        if ($(".txtBehaviorGraph_Text").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Text should not be blank</label><br/>";

        if ($(".txtBehaviorGraph_StartDate").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Start Date should not be blank</label><br/>";    
    
    }
    else if (reqType == "SkillsGraph")
    {
        if ($(".tvSkillsGraph input:checked").attr("checked", true).length == 0)
        {
            strMessage = "<label class=\"requiredItem\">Select one/more Activities</label><br/>";
        } 
        if ( !($("#chk_PCL").attr("checked")) && !($("#chk_Header").attr("checked")))
        {
            strMessage += "<label class=\"requiredItem\">PCL or Header & Footer should be selected</label><br/>";        
        }
        else
        {
            if ( $("#chk_PCL").attr("checked"))
            {
                if ($(".txtSkillsGraph_Text").val().trim() == "")
                    strMessage += "<label class=\"requiredItem\">Text should not be blank</label><br/>";        
                
                if ($(".txtSkillsGraph_StartDate").val().trim() == "")
                    strMessage += "<label class=\"requiredItem\">Start Date should not be blank</label><br/>";            
            }
            else if ( $("#chk_Header").attr("checked"))
            {
                if ($(".txtHeader").val().trim() == "" && $(".txtFooter").val().trim() == "")
                    strMessage += "<label class=\"requiredItem\">Header or Footer should not be blank</label><br/>";                
            }
        }
//        else if ( $("#chk_Footer").attr("checked"))
//        {
//            if ($(".txtFooter").val().trim() == "")
//                strMessage += "<label class=\"requiredItem\">Footer should not be blank</label><br/>";                
//        }        
    }
    else if (reqType == "Properties")
    {
        if ($(".txtDescription").val().trim() == "")
        {
            strMessage += "<label class=\"requiredItem\">Description should not be blank</label><br/>";
        }
    }
    if (strMessage != "")
    {
        $(".divRequireField").html(strMessage);
        return false;
    } 
    else
    {
        if (reqType == "SkillsGraph")
        {
        //pls confirm that the date you have selected has a data point
            if ( $("#chk_Header").attr("checked"))
            {
                $(".divRequireField").html(""); 
                return true;
            }
            if ( confirm("Please confirm that the date you have selected has data point?"))
            {
                $(".divRequireField").html(""); 
                return true;
            }
            else
            {
                $(".txtSkillsGraph_StartDate").val("");
                $(".txtSkillsGraph_StartDate").focus();
                return false;
            }
        }
    }
    $(".divRequireField").html("");  
     
    return true;
}


function reportCommentsEdit(Id)
{
    $(".txtCommentBehavior_Id").val(Id);
   __doPostBack('txtCommentBehavior_Id','');
}

function reportCommentsDelete(Id)
{
   if ( confirm("Do you want to Delete this record?"))
   {
        $(".txtCommentBehavior_Id").val(Id);
        $( ".add-button").next().hide();
       __doPostBack('deleteCommand','');    
   }
   return false;
}

function behaviorCheckCount(chk)
{
    var intCnt = $(".txtCommentBehavior_Count").val();
    
    if (intCnt == "")
        intCnt = 0;
        
    if ( $(chk).attr("checked"))
    {
        intCnt = parseInt(intCnt) + 1;
    }
    else
    {
        intCnt = parseInt(intCnt) - 1;
    }
    $(".txtCommentBehavior_Count").val(intCnt);
}

function reportCommentsSkillsEdit(Id)
{
    $(".txtCommentSkills_Id").val(Id);
   __doPostBack('txtCommentSkills_Id','');

}

function reportCommentsSkillsDelete(Id)
{
   if ( confirm("Do you want to Delete this record?"))
   {
        $(".txtCommentSkills_Id").val(Id);
        $( ".add-button").next().hide();
       __doPostBack('deleteSkillsCommand','');    
   }
   return false;
}

function reportBehaviorGraphCommentsEdit(Id)
{
    $(".txtBehaviorGraph_Id").val(Id);
   __doPostBack('txtBehaviorGraph_Id','');
}

function reportSkillsGraphCommentsEdit(Id)
{
    $(".txtSkillsGraph_Id").val(Id);
   __doPostBack('txtSkillsGraph_Id','');
}
function reportBehaviorGraphCommentsDelete(Id)
{
   if ( confirm("Do you want to Delete this record?"))
   {
        $(".txtBehaviorGraph_Id").val(Id);
        $( ".add-button").next().hide();
       __doPostBack('deleteBehaviorGraphCommand','');    
   }
   return false;
}
function reportSkillsGraphCommentsDelete(Id)
{
   if ( confirm("Do you want to Delete this record?"))
   {
        $(".txtSkillsGraph_Id").val(Id);
        $( ".add-button").next().hide();
       __doPostBack('deleteSkillsGraphCommand','');    
   }
   return false;
}
//            $(function()
//                { 
            function afterLoad()
            {
                    
              
                    $(document).click(function(e)
                    {    
                        //alert(e.target.className);
                        if (e.target.className == "divPatient")
                        {
                            $('.divPatient').show();
                        }
                        else if (e.target.className == "divPatient divAllPeople")
                        {
                            $('.divPatient divAllPeople').show();
                        }
                        else if (e.target.className  == "textId")
                        {
                            $('.divPatient').show();
                            $('.divAllPeople').hide(); //hide the div
                        }
                        else if (e.target.className  == "txtPerson_Name")
                        {
                            $('.divPatient').hide(); //hide the div
                            $('.divAllPeople').show();
                        }
                        else if ($(e.target.parentNode).length != 0)
                        {
                            if ($(e.target.parentNode.parentNode).length != 0)
                            {
                                if ($(e.target.parentNode.parentNode.parentNode).length != 0)
                                {  
                                    if ( $(e.target.parentNode.parentNode.parentNode.className).selector != "divPatient"
                                        && e.target.className  != "textId"  &&  e.target.className  != "txtPerson_Name")
                                    {
                                        $('.divPatient').hide(); //hide the div
                                    }
                                }
                            }
                        }
                        
                    }); 
                    
                    if ($(".txtPerson_Name").val() != "Type Last Name")
                    {
                        $(".txtPerson_Name").attr("class","txtPerson_Name");
                    }

                    if ($(".textId").val() != "Type Last Name")
                    {
                        $(".textId").attr("class","textId");
                    }

                   
            }
//                }
//             );      


function ShowHideSkillsTreeview()
{
    if ($(".chkAllSkills").children().is(":checked"))
        $(".tvReportSkills").hide();
    else
        $(".tvReportSkills").show();
}

function sortDailyPlanner(cnt)
{
    $(cnt).text();
    $(cnt).addClass("selected");
    __doPostBack('sortDailyPlanner',$(cnt).text());
}

function sortDailyPlanner_Archive(cnt)
{
    $(cnt).text();
    $(cnt).addClass("selected");
    __doPostBack('sortDailyPlanner_Archive',$(cnt).text());
}

//function clickCheckbox(tvName,evt)
//   {
//    alert('123');
//    var target = ((window.event)?(event.srcElement):(evt.currentTarget));
//     if (target.type == 'checkbox')
//     {
//        alert('clicked');
//     } 
//   }

$(document).ready( function() {
        $( ".add-button").click(                                        
                                function()
                                {                                       
                                    if ($(this).attr("title") == "Add Comments BG")
                                    {
                                        $("#txtBehaviorGraph_Text").val("");
                                        $("#txtBehaviorGraph_StartDate").val("");
                                        $("#txtBehaviorGraph_TextPosition").val("");
                                        $("#chkBehaviorGraph_VerticalLine").prop("checked", false);
                                        $("#chkBehaviorGraph_VerticalLine").prop("checked", false);
                                        $("#chkBehaviorGraph_Footnote").prop("checked", false);
                                        $(".div_ChkBehaviorGraph input:checked").each(
                                            function()
                                            {
                                                $(this).prop("checked",false);
                                            }
                                        ); 

                                        $("#butBehaviorGraph_Save").attr('value','Save');
                                          if ($(this).next().is(':hidden') == true)
                                                $(this).next().show();
                                          else
                                                $(this).next().hide();   
                                    }
                                    else if ($(this).attr("title") == "Add Comments Skills" || $(this).attr("title") == "Add Comments Behaviors")                                                                                            
                                    {
                                        $("#txtBehaviorGraph_Id").val("");
                                        $("#txtCommentBehavior_CommentDate").val("");
                                        $("#txtCommentBehavior_BehaviorComments").val("");
                                        $("#txtCommentBehavior_SessionNoteComments").val("");
                                        $("#txtCommentBehavior_CommentToFamily").val("");
                                        $("#txtCommentBehavior_Issues").val("");
                                        $("#txtCommentBehavior_Recommendations").val("");
                                        $("#txtCommentBehavior_FeedbackFromFamily").val("");
                                        
                                        $(".div_ChkBehaviors input:checked").each(
                                            function()
                                            {
                                                $(this).prop("checked",false);
                                            }
                                        ); 

                                          if ($(this).next().is(':hidden') == true)
                                                $(this).next().show();
                                          else
                                                $(this).next().hide();                                                                               
                                    }
                                    
                                    else
                                    {
                                        $(this).next().find('input[type=text]').each(
                                            function()
                                            {
                                                $(this).val("");
                                            }
                                        );                                     

                                        $(this).next().find('textarea').each(
                                            function()
                                            {
                                                $(this).html("");
                                            }
                                        );                                     
                    
	                                        //$(this).next().slideToggle(300);
                                          if ($(this).next().is(':hidden') == true)
                                                $(this).next().show();
                                          else
                                                $(this).next().hide();   
	                                        
	                                }
                                }
                                )
                                
//          $(window).scroll(function() 
//          {
//            $('.divSmallMenu').parent().css('top', '0');
//            if ($(document).scrollTop() > 80) 
//            {
//                $('.divSmallMenu').css('top', '0');
//            }       
//            else 
//            {
//                //$('.divSmallMenu').css('top', '125');
//                $('.divSmallMenu').parent().attr("style","position: fixed; width: 952px; top: 115px;");
//            }
//          });
//    
//   alert('ready n');
//   
//   
//   $(".panelLibraryofBehaviors").each(
//        function()
//        {
//            var chkbx = $(this);
//            if (chkbx.is('input:checked'))
//            {
//                alert('click');
//            }
//        }
//   );
//   
//   $("input[type=checkbox]").click(
//        function()
//        {
//            alert('click');
//        }
//   ); 
   
//   var data = '';
//$("#tree input").each(function () {
//var checkbox = $(this);
//var value = checkbox.val();
//var checked = checkbox.is(':checked');
//var label = $.trim(checkbox.parent().text());
//data += $.param({ label: label, value: value, checked: checked }) + ",";
//});
//   
//    $('select').bind('change',function() { 
//        alert(1);
//        $("select").change(function() {
//            alert('123');
//            if ($(this))
//            {
//                $(".txtFormulaForSuccessParamA").val("");
//                $(".txtFormulaForSuccessParamB").val("");   
//                $(".txtFormulaForSuccessParamA").attr("disabled", "disabled"); 
//                $(".txtFormulaForSuccessParamB").attr("disabled", "disabled");   
//            }
//            else
//            {
//                $(".txtFormulaForSuccessParamA").removeAttr("disabled"); 
//                $(".txtFormulaForSuccessParamB").removeAttr("disabled");         
//            }
//        })
//    })
    
   
   
})

    function formulaForSuccess()
    {
        if ($(".ddFormulaForSuccess")[0].selectedIndex == "0")
        {
                $(".txtFormulaForSuccessParamA").val("");
                $(".txtFormulaForSuccessParamB").val("");   
                $(".txtFormulaForSuccessParamA").attr("disabled", "disabled"); 
                $(".txtFormulaForSuccessParamB").attr("disabled", "disabled");           
        }
        else
        {
                $(".txtFormulaForSuccessParamA").removeAttr("disabled"); 
                $(".txtFormulaForSuccessParamB").removeAttr("disabled");                 
        }
    }   
    
    function formulaForTreatment()
    {
        if ($(".ddTreatment")[0].selectedIndex == "0")
        {
                $(".txtTreatmentParamA").val("");
                $(".txtTreatmentParamB").val("");   
                $(".txtTreatmentParamA").attr("disabled", "disabled"); 
                $(".txtTreatmentParamB").attr("disabled", "disabled");           
        }
        else
        {
                $(".txtTreatmentParamA").removeAttr("disabled"); 
                $(".txtTreatmentParamB").removeAttr("disabled");                 
        }
    
    } 

     
    function checkWater(csName)
    {
        if ($(".water").val() == "Type Last Name")
        {
        
            $(".water").val("");
            $(".water").attr("class",csName);
        }

    }
    
    function setWater(csName)
    {
        if ($("." + csName).val() == "")
        {
            $("." + csName).val("Type Last Name");
            $("." + csName).attr("class", csName + " water");
        }
    }
    
    function validateCriteria(clickType)
    {
        //alert($(".ddReports option:selected").val() + ":" + $("#hidSkillsGoalIds").val());
        var flg = true;
        var start; 
        var end;
        if ($(".ddReports option:selected").val() == "CurriculumReport"
            || $(".ddReports option:selected").val() == "LibraryofBehaviorReport"
            || $(".ddReports option:selected").val() == "NoDataforStaff"
        )
        {
            return true;
        }
        if ($(".ddReportStudent option:selected").text() == "Select Students")
        {
            alert("Please Select Student.");
            flg = false;
            return false;
        }

        if ($(".divCriteria_Reports").is(":visible"))
        {
            if ($(".ddReports option:selected").text() == "Select reports...")
            {
                alert("Please Select Report.");
                flg = false;
                return false;
            }
            var start = new Date($("#txtReportStartDate").val()); 
            var end = new Date($("#txtReportEndDate").val());
            if (end < start)
            {
                alert("Please enter a valid date and End Date should be bigger than the Start Date.");
                flg = false;
                return false;
            }

        
            if ($(".ddReports option:selected").val() == "SkillsProgressReport" && $("#hidSkillsGoalIds").val() == "")
            {
                alert("No Goal was selected. Please select the Goal");
                return false;
            } 
            if ($(".ddReports option:selected").val() == "NoDataforStaff" || $(".ddReports option:selected").val() == "DailyDataMonitoringReport"
                    || $(".ddReports option:selected").val() == "WeeklyBehaviorsDataMonitoringReport"
                    || $(".ddReports option:selected").val() == "LibraryofBehaviorReport"
                    || $(".ddReports option:selected").val() == "AttendanceReport"
                    || $(".ddReports option:selected").val() == "CurriculumReport")
            {
                return true;
            }
        }
        if ($(".divCriteria_SkillsGraph").is(":visible"))
        {
            if ($(".ddSkillsGraph option:selected").val() == "0")
            {
                alert("Please Select Graph.");
                flg = false;
                return false;

            }
            start = new Date($("#txtReportStartDate_SkillsGraph").val()); 
            end = new Date($("#txtReportEndDate_SkillsGraph").val());
            if (end < start)
            {
                alert("Please enter a valid date and End Date should be bigger than the Start Date.");
                flg = false;
                return false;
            }
            
            if ($(".ddSkillsGraph option:selected").val() == "1" || $(".ddSkillsGraph option:selected").val() == "3"){
                if ($(".chkSR input:checked").length === 0){
                
                    alert("Please select a Goal");
                    return false;
                } 
            }
            
            if ($(".ddSkillsGraph option:selected").val() == "2" ){
                if ($(".chkSR input:checked").length === 0){
                
                    alert("No Goal was selected.  Please select the Goal");
                    return false;
                } 
            }
        }

        /*if ($(".divCriteria_Reports").is(":visible"))
        {
            if ($(".ddReports option:selected").val() == "0")
            {
                $(".ddReports_Req").attr("style","color:Red;display:");
                flg = false;
            }
        }*/

        if ($(".divCriteria_BehaviorGraph").is(":visible"))
        {
        
            if (clickType == 'graph')
            {
                if ($(".ddBehaviorGraph option:selected").val() == "0")
                {
                    alert("Please Select Graph.");
                    flg = false;
                    return false;
                }
                
                if ($(".chkSR input:checked").length === 0){
                    alert("Please select a behavior");
                    return false;
                } 
                
                start = new Date($("#txtReportStartDate_SkillsGraph").val()); 
                end = new Date($("#txtReportEndDate_SkillsGraph").val());
                if (end < start)
                {
                    alert("Please enter a valid date and End Date should be bigger than the Start Date.");
                    flg = false;
                    return false;
                }
            }
            else if (clickType == 'export')
            {
                if ($(".ddExpTyp option:selected").val() == "0")
                {
                    alert("Please Select Export.");
                    return false;
                }

                if ($(".chkSR input:checked").length === 0){
                    alert("Please select a behavior");
                    return false;
                } 
                //alert( $(".tvReportSkills input:checkbox").length);
                start = new Date($("#txtReportStartDate_SkillsGraph").val()); 
                end = new Date($("#txtReportEndDate_SkillsGraph").val());
                if (end < start)
                {
                    alert("Please enter a valid date and End Date should be bigger than the Start Date.");
                    return false;
                }
                if (flg)
                {
                    if ($(".ddExpTyp option:selected").val() == "1")
                    {
                        if ($(".txtReportStartDate_BehaviorGraph").val() != "" && $(".txtReportEndDate_BehaviorGraph").val() != ""   )   
                        {
                            start = new Date($(".txtReportStartDate_BehaviorGraph").val()); 
                            end = new Date($(".txtReportEndDate_BehaviorGraph").val()); 
                            
                            var diff = new Date(end - start); var days = diff/1000/60/60/24;
                            if (days > 90)
                            {
                                alert("The selected date range should not exceed the limit of 90 calendar days.");
                                return false;
                            }
                        }
                    
//                        export1();
                        flg = true;
                        return true;
                    }
                    else if ($(".ddExpTyp option:selected").val() == "2")
                    {
                        if ($(".txtReportStartDate_BehaviorGraph").val() == "")           
                        {
                            alert("Please select the start date");
                            flg = false;
                        }
                        else if (flg)
                        {
//                            export2();
                            flg = true;
                            return true;
                        }
                    }
                }
                
                
                //var start = new Date("2010-04-01"); var end = new Date(); var diff = new Date(end - start); var days = diff/1000/60/60/24 
            }
        }

        
        return flg
    }
    
    function checkPersonType()
    {
        if ($(".ddPeople_Add").val() == "Select")
        {
            alert("Please Select Person Role");
            return false;
        }
    }
    
        function fn_openpeople()
        {
            if(document.getElementById('div_people').style.display != 'inline')
            {
                document.getElementById('div_people').style.display ='inline';
            }   
            else
            {
                document.getElementById('div_people').style.display ='none';
            }
        }

        function searchUp1(txt)
        {
            //var keyCode;
            var str;
            str = txt.toLowerCase();

            //keyCode = window.event ? event.keyCode : event.which;
            //str = txt.toLowerCase();// + String.fromCharCode(keyCode).toLowerCase();
            //if (keyCode == 13)
            //   return false;

            var tabobj = document.getElementById('gvHomeStud');

            var obj = tabobj.getElementsByTagName('tr');

            if (obj.length > 0)
            {
                for(var i=0; i<obj.length; i++)
                {
                    
                    var td = obj[i].getElementsByTagName('td');
                    for(var j=0;j<td.length;j++)
                    {
                        var span = td[j].getElementsByTagName('span');
                        for(var k=1;k<span.length;k++)
                        {
                            if(span[k].innerHTML.toLowerCase().indexOf(str) == 0)
                            {
                                 obj[i].style.display = ''; 
                            }
                            else
                            {
                                obj[i].style.display = 'none';
                            }
                        }
                    }
                }
            }
        }
        function checkValue()
        {
            if ($(".txtPerson_Id").val() == "")
            {
                alert("Please save the therapist information before assigning Student Home as Location");
                return false;
            }
            var tabobj = document.getElementById('gvHomeStud');

            var obj = tabobj.getElementsByTagName('input');
            var ids = '', names='';
            if (obj.length > 0)
            {
                for (var i=0; i<obj.length; i++)
                {
                    if (obj[i].type == 'checkbox')
                    {
                        if (obj[i].checked)
                        {
                            ids += obj[i].parentNode.getElementsByTagName('span').item(0).innerHTML + '|';
                            names += obj[i].parentNode.getElementsByTagName('span').item(1).innerHTML + '|';
                        }
                    }
                }
            }   
            if (names != '')
            {
                document.getElementById('partName').value = names;
                document.getElementById('partIds').value = ids;
                document.getElementById('partName').focus();
            }
            else
            {
                alert('Please select atleast one student');
            }
            //window.close();
        }
        function cancel()
        {
            //window.close();
        }
        
        function chkRequiredFields_UPD()
        {
            document.getElementById('hidupd').value = 'UPD';
        }
    
    function toGlobalDefault(txtbox, msgName, tableName)
    {
        var txtbox = '.' + txtbox;
        var flg = true;
        if ($.trim($(txtbox).val()) == '') 
        {
            alert('Please type the ' + msgName); 
            flg = false;
        }
        else
        {
            var id = '#' + tableName + ' tr';
            $(id).each(function() 
            {   
                 var tdVal = $(this).find("td:first").html();
                 try
                 {
                    if ( $.trim($(txtbox).val().toLowerCase()) == tdVal.toLowerCase())
                    {
                        alert(msgName + ' is already exists'); 
                        flg = false;
                        return false;
                    }                           
                 }catch (err) { }
             });  

        }
        return flg; 
    }
    function chkBehaviorsReport(chkId)
    {
        var ctrlId  =  $(chkId)[0].firstChild.attributes["id"].value;
        var ctrlTxt =  $("#" + ctrlId).next().text();

           //$("#ddBehaviorGraph")[0].value   $( "input:checked" ).length
        var allIds;//$("#hidSkillsGoalIds").text();
        var allTexts; //$("#hidSkillsGoalText").text();

        if ($(".ddExpTyp option:selected").val() == "2"){
            if ($(".chkSR input:checked").length > 5){
                $("#" + ctrlId).prop("checked", false);
                //$(this)[0].prop("checked", false);
                return;
            }
            allIds = $("#hidSkillsGoalIds").text();
            allTexts = $("#hidSkillsGoalText").text();        
        }
        else if ( $("#ddBehaviorGraph")[0].value === "Multiple Behavior Frequency Graph"){
        
            if ($(".chkSR input:checked").length > 5){
                $("#" + ctrlId).prop("checked", false);
                //$(this)[0].prop("checked", false);
                return;
            }
            allIds = $("#hidSkillsGoalIds").text();
            allTexts = $("#hidSkillsGoalText").text();
        }
        else{
            $('input:checkbox').each(function () {
                    if ($(this)[0].id != ctrlId)
                        $(this).prop("checked", false);
                });
            allIds = "";
            allTexts = "";

        }
        //alert(chkId);
        //var ctrlId  =  $(chkId)[0].firstChild.attributes["id"].value;
        //var ctrlTxt =  $("#" + ctrlId).next().text();

        ctrlId = ctrlId.replace('chkBox_','');
        //alert(ctrlId);

        if (allIds.indexOf(ctrlId) < 0){
            allIds = allIds + ctrlId + ";";
            allTexts = allTexts + ctrlTxt + ";";
        }
        else{
            allIds = allIds.replace(ctrlId + ';', '');
            allTexts = allTexts.replace(ctrlTxt + ';', '');
        }
        $("#hidSkillsGoalIds").text(allIds);
        $("#hidSkillsGoalText").text(allTexts);  
        //alert(allIds);
    }
    
    function chkGoalSkillsReport(chkId, flgFrom)
    {
    console.log(chkId);
        var allIds = $("#hidSkillsGoalIds").text();
        var allTexts = $("#hidSkillsGoalText").text();

        var ctrlId  =  $(chkId)[0].firstChild.attributes["id"].value;
        var ctrlTxt =  $("#" + ctrlId).next().text();
        console.log("change :" + ctrlId + ":" + ctrlTxt + ":" + flgFrom);
       
        
        if (flgFrom !== "undefined" && flgFrom === true)
        {
            if ($("#" + ctrlId).prop("checked") === false)
                $("#" + ctrlId).prop("checked", true);
            else
                $("#" + ctrlId).prop("checked", false);
        }
        
         ctrlId = ctrlId.replace('chkBox_','');
         
         if (flgFrom == true)
         {
            if (allIds.indexOf(ctrlId) < 0)
                $("#chkBox_" + ctrlId).prop("checked", true);
            else 
                $("#chkBox_" + ctrlId).prop("checked", false);
         }
        
        //alert($("#ddGoalId_" + ctrlId).prop("disabled"));
        if ($("#ddGoalId_" + ctrlId).prop("disabled") == true){
            $("#ddGoalId_" + ctrlId).prop("disabled", false);
            $("#txtGoalId_" + ctrlId).prop("disabled", false);
        }
        else{
           $("#ddGoalId_" + ctrlId).prop("disabled", true);
           $("#txtGoalId_" + ctrlId).prop("disabled", true);
        }
        
        if (allIds.indexOf(ctrlId) < 0){
            allIds = allIds + ctrlId + ";";
            allTexts = allTexts + ctrlTxt + ";";
        }
        else{
            allIds = allIds.replace(ctrlId + ';', '');
            allTexts = allTexts.replace(ctrlTxt + ';', '');
        }
        $("#hidSkillsGoalIds").text(allIds);  
        $("#hidSkillsGoalText").text(allTexts);
    }
    function chkGoalSkillsReport_Click(chkId)
    {
    console.log(chkId);
        var ctrlId  =  $(chkId)[0].firstChild.attributes["id"].value;
        var ctrlTxt =  $("#" + ctrlId).next().text();
        
        console.log("click :" + ctrlId + ":" + ctrlTxt);
        ctrlId = ctrlId.replace('chkBox_','');
        //alert($("#ddGoalId_" + ctrlId).prop("disabled"));
        if ($("#ddGoalId_" + ctrlId).prop("disabled") == true){
            $("#ddGoalId_" + ctrlId).prop("disabled", false);
            $("#txtGoalId_" + ctrlId).prop("disabled", false);
        }
        else{
           $("#ddGoalId_" + ctrlId).prop("disabled", true);
           $("#txtGoalId_" + ctrlId).prop("disabled", true);
        }
        
        var allIds = $("#hidSkillsGoalIds").text();
        var allTexts = $("#hidSkillsGoalText").text();
        if (allIds.indexOf(ctrlId) < 0){
            allIds = allIds + ctrlId + ";";
            allTexts = allTexts + ctrlTxt + ";";
        }
        else{
            allIds = allIds.replace(ctrlId + ';', '');
            allTexts = allTexts.replace(ctrlTxt + ';', '');
        }
        $("#hidSkillsGoalIds").text(allIds);  
        $("#hidSkillsGoalText").text(allTexts);
    }
    function fun_txtGoalNameSearch(txt, src)
    {
        var txtSearch = $(txt).val().toLowerCase();
        //alert(txtSearch);
        
        console.log($("#butReport_Preview").val());
        var chkSearchLeft = 0;
        if (src == 'Prg'){
        console.log($(".chkSR").length);
            $(".chkSR").each(function(idx, ele){
                if ($(ele).text().toLowerCase().indexOf(txtSearch) >= 0){
                    $(ele).parent().parent().attr("style", "display:table-row");
                    chkSearchLeft++;
                    }
                else
                    $(ele).parent().parent().attr("style", "display:none");
            });
        }
        else if (src == 'Target'){
            //console.log($(".chkSRTarget").length);
            $(".chkSRTarget").each(function(idx, ele){
            //console.log($(ele).text());
                if ($(ele).text().toLowerCase().indexOf(txtSearch) >= 0){
                    //$("." + $(ele).attr("class")).attr("style", "display:table-row");
                    $(ele).attr("style", "display:table-row");
                    chkSearchLeft++;
                }
                else{
                console.log("clas is :" + $(ele).attr("id"));
                    $(ele).attr("style", "display:none");
                    $("." + $(ele).attr("id")).attr("style", "display:none");
                }
            });            
        }
             console.log(chkSearchLeft + ":chkSearchLeft:");
             console.log ( parseInt( chkSearchLeft) >= 10 );
             
             console.log("ddexport value:" + $('select.ddExpTyp option:selected').val());
            if ( parseInt( chkSearchLeft ) >= 10){
                if ($('select.ddExpTyp option:selected').val() != '0')
                    $("#butExport_Graph3").attr("style", "display:");
                else{
                $("#butReport_Preview2").attr("style", "display:");
                if ($("#butReport_Preview").val() == "Graph")
                    $("#butExport_Graph2").attr("style", "display:");
                   
                }
            }
            else{
                $("#butReport_Preview2").attr("style", "display:none");
                $("#butExport_Graph2").attr("style", "display:none");
                $("#butExport_Graph3").attr("style", "display:none");
                
            }
    }
    function chkExport(clk_Type)
    {
        if ($(clk_Type).attr("class") == "ddExpTyp")
        {
            if ($('select.ddExpTyp option:selected').val() != '2')
            {
                $(".lblReportEndDate_BehaviorGraph").attr("style","display:");
                $(".txtReportEndDate_BehaviorGraph").attr("style","display:");
                $(".btnClearExpEndDate").attr("style","display:");
                $(".graphAtt").attr("style","display:none");

            }
            else 
            {
                $(".lblReportEndDate_BehaviorGraph").attr("style","display:none");
                $(".txtReportEndDate_BehaviorGraph").attr("style","display:none");
                $(".btnClearExpEndDate").attr("style","display:none");
                $(".graphAtt").attr("style","display:none");
            }
        }
        else
        {
            $(".lblReportEndDate_BehaviorGraph").attr("style","display:");
            $(".txtReportEndDate_BehaviorGraph").attr("style","display:");
            $(".btnClearExpEndDate").attr("style","display:");
            $(".graphAtt").attr("style","display:");        
        }
        reportStartDate();
        return false;
    }
    
    function behaviorType()
    {
        if ($(".ddBehaviorType_Prop :selected").val() != "F")
        {
            $(".clsPropHistory_BehaviorLevel").attr("style","display:none"); 
            $(".rdLevels_Prop").attr("style","display:none");                        
        }
        else if ($(".ddBehaviorType_Prop :selected").val() == "F")
        {
            $(".clsPropHistory_BehaviorLevel").attr("style","display:");            
            $(".rdLevels_Prop").attr("style","display:");                                    
        }        
        
        if ($(".ddBehaviorType :selected").val() == "I")
        {
            $(".clsDuration").attr("style","display:none");
            $(".clsInterval").attr("style","display:none");
            
            $(".txtBeh_Duration").val("");
            $("#idBeh_Duration").attr("class","list-unchecked");
            $("#idBeh_Duration_Beep").attr("class","list-unchecked");
            $(".txtBeh_Duration_flg").val(0);
        }
        else
        {
            $(".clsDuration").attr("style","display:none");
            $(".clsInterval").attr("style","display:none");    
            $(".txtBeh_IntervalTime").val("");
            $(".txtBeh_IntervalTotalTime").val("");    
        }
        
        if ($(".ddBehaviorType :selected").val() != "F")
        {
            $(".divPropBeh_Level").attr("style","display:none");
            $(".divPropBeh_Descriptions").attr("style","display:none");
            $(".txtBeh_Description1").val("");
            $(".txtBeh_Description2").val("");
            $(".txtBeh_Description3").val("");
        }
        else
        {
            $(".divPropBeh_Level").attr("style","display:");
            $(".divPropBeh_Descriptions").attr("style","display:");
        }
    }
    
    function assignPassword(txtPassword)
    {
        $(txtPassword).attr("value",$(txtPassword).val());
    }
    
    function testing()
    {
        alert(10);
    }
    
    function listChange()
    {
            $(".txtPerson_Name").val("Type Last Name");
            $(".txtPerson_Name").attr("class", "txtPerson_Name water");
              
        if ($('select.ddPeople_Add option:selected').val() == 'Select')
        {
            $("select.ddPeople_Add option").each(function(i){
                     $("." + $(this).val()).show();
                }); 
                
                //$(".00000000-0003-0000-0000-000000000000").show(); 
                $(".btnPerson_Add").show();       
        }
        else
        {
            $("select.ddPeople_Add option").each(function(i){
                    if ($('select.ddPeople_Add option:selected').val() == $(this).val())
                         $("." + $(this).val()).show();
                    else 
                        $("." + $(this).val()).hide();
                });        
                
               //$(".00000000-0003-0000-0000-000000000000").hide(); 
             
             if ($('select.ddPeople_Add option:selected').val() == "00000000-0003-0000-0000-000000000000")
                $(".btnPerson_Add").hide();
             else
                $(".btnPerson_Add").show();
        }
    }
    
//    function checkTv()
//    {
//        $("#tvReportSkills").click(
//            
//            function()
//            {
//                alert(123);
//                $(this).find("input:checked").each(
//                    function()
//                    {
//                       alert($(this).val());
//                    }
//                );
//            }
//        )
//     }

function btnAccordion(btn)
{
        if ($(btn).attr("title") == "Add Comments BG")
        {
            $("#txtBehaviorGraph_Id").val("");        
            $("#txtBehaviorGraph_Text").val("");
            $("#txtBehaviorGraph_StartDate").val("");
            $("#txtBehaviorGraph_TextPosition").val("");
            $("#chkBehaviorGraph_VerticalLine").prop("checked", false);
            $("#chkBehaviorGraph_VerticalLine_Dash").prop("checked", false);
            $("#chkBehaviorGraph_Footnote").prop("checked", false);
            $(".div_ChkBehaviorGraph input:checked").each(
                function()
                {
                    $(this).prop("checked",false);
                }
            ); 
            $("#butBehaviorGraph_Save").attr('value','Save');
              if ($(btn).next().is(':hidden') == true)
                    $(btn).next().show();
              else
                    $(btn).next().hide();   
        }
        else if ($(btn).attr("title") == "Add Comments SG")
        {
            $("#txtSkillsGraph_Text").val("");
            $("#txtSkillsGraph_StartDate").val("");
            $("#txtSkillsGraph_TextPosition").val("");
            $("#chkSkillsGraph_VerticalLine").prop("checked", false);
            $("#chkSkillsGraph_VerticalLine").prop("checked", false);
            $("#chkSkillsGraph_Footnote").prop("checked", false);
            $(".tvSkillsGraph input:checked").prop("checked", false);
            $("#butSkillsGraph_Save").attr('value','Save');
              if ($(btn).next().is(':hidden') == true)
                    $(btn).next().show();
              else
                    $(btn).next().hide();   
        }                                            
        else if ($(btn).attr("title") == "Add Comments Skills" || $(btn).attr("title") == "Add Comments Behaviors")                                                                                            
        {
            $("#txtBehaviorGraph_Id").val(""); 
            $("#txtCommentBehavior_CommentDate").val("");
            $("#txtCommentBehavior_BehaviorComments").val("");
            $("#txtCommentBehavior_SessionNoteComments").val("");
            $("#txtCommentBehavior_CommentToFamily").val("");
            $("#txtCommentBehavior_Issues").val("");
            $("#txtCommentBehavior_Recommendations").val("");
            $("#txtCommentBehavior_FeedbackFromFamily").val("");
            
            $(".div_ChkBehaviors input:checked").each(
                function()
                {
                    $(this).prop("checked",false);
                }
            ); 

              if ($(btn).next().is(':hidden') == true)
                    $(btn).next().show();
              else
                    $(btn).next().hide();                                                                               
        }
        
        else
        {
            $(btn).next().find('input[type=text]').each(
                function()
                {
                    $(this).val("");
                }
            );                                     

            $(btn).next().find('textarea').each(
                function()
                {
                    $(this).html("");
                }
            );                                     

                //$(btn).next().slideToggle(300);
              if ($(btn).next().is(':hidden') == true)
                    $(btn).next().show();
              else
                    $(btn).next().hide();   
                
        }

}

function clearDate(btn)
{
    $(btn).prev().val("");
    $(btn).attr("style","display:none;");
    return false;
}

function chkToDecide(chk,type)
{
    if ($(chk)[0].id == "chk_PCL")
    {
        $(".divSkillsGraph_form").show();
        $(".divSkillsGraph_form_HF").hide();
        
        $("#chk_Header").removeAttr("checked");
        $("#chk_Footer").removeAttr("checked");
    }
    else if ($(chk)[0].id == "chk_Header")
    {
        $(".divSkillsGraph_form").hide();
        $(".divSkillsGraph_form_HF").show();
        
        $(".clsHeader").show();
         $(".clsFooter").show();
        $("#chk_PCL").removeAttr("checked");
        $("#chk_Footer").removeAttr("checked");        
    }    
    else if ($(chk)[0].id == "chk_Footer")
    {
        $(".divSkillsGraph_form").hide();
        $(".divSkillsGraph_form_HF").show();
        
        $(".clsHeader").hide();
         $(".clsFooter").show();
        $("#chk_PCL").removeAttr("checked");
        $("#chk_Header").removeAttr("checked");        
    }        
}
function chkSolidDash(chk, type)
{
    if ($(chk)[0].name == "ctl00$ContentPlaceHolder_Master$chkSkillsGraph_VerticalLine")
    {
        if ( $("#" + $(chk)[0].id).attr("checked"))
        {
            document.getElementById('chkSkillsGraph_VerticalLine_Dash').checked = false; 
            return; 
        }
    }
    else if ($(chk)[0].name == "ctl00$ContentPlaceHolder_Master$chkSkillsGraph_VerticalLine_Dash")
    {
        if ( $("#" + $(chk)[0].id).attr("checked"))
        {
            document.getElementById('chkSkillsGraph_VerticalLine').checked = false;
            return;  
        }
    }   
     
    if (type == 'Solid')
    {
        if ($(chk).attr("checked"))
        {
            document.getElementById('chkBehaviorGraph_VerticalLine_Dash').checked = false;  
        }
    }
    else if (type == 'Dash')
    {
        if ($(chk).attr("checked")== "checked")
        {
            document.getElementById('chkBehaviorGraph_VerticalLine').checked = false;
        }
    }
}

function reportDescriptionEdit(Id)
{
    $(".txtId").val(Id);
   __doPostBack('editDescription','');
}

function reportDescriptionDelete(Id)
{
   if ( confirm("Do you want to Delete this property?"))
   {
        $(".txtId").val(Id);
        $( ".divProp_History_Text").hide();
       __doPostBack('deleteDescription','');    
   }
   return false;
}

function reportStartDate()
{
    console.log("on change of start date");
    if ($("#txtReportStartDate").val() != "")
        $("#btnClearStartDate").attr("style","display:inline-block;");
    else
        $("#btnClearStartDate").attr("style","display:none;");
    if ($(".txtClickType").val() == "Reports" && $(".ddReports :selected").val() == "StudentWeeklyProgramReviews")   
    {
        if ($("#txtReportStartDate").val() != "")
        {
            
            var d = new Date($("#txtReportStartDate").val());
            var weekday=new Array(7);
            weekday[0]=-2;
            weekday[1]=-3;
            weekday[2]=-4;
            weekday[3]=-5;
            weekday[4]=-6;
            weekday[5]=0;
            weekday[6]=-1;    

            d.setDate(d.getDate() + weekday[d.getDay()]);
            $("#txtReportStartDate").val((d.getMonth()+1) + '/' + d.getDate() + '/' +  d.getFullYear());
            
            // to get the end date value add 7
            d.setDate(d.getDate() + 6);
            $("#txtReportEndDate").val((d.getMonth()+1) + '/' + d.getDate() + '/' +  d.getFullYear());
        }
    }  
}

function reportEndDate()
{
    if ($("#txtReportEndDate").val() != "")
        $("#btnClearEndDate").attr("style","display:inline-block;");
    else
        $("#btnClearEndDate").attr("style","display:none;");
    if ($(".txtClickType").val() == "Reports" && $(".ddReports :selected").val() == "StudentWeeklyProgramReviews")   
    {
        if ($("#txtReportStartDate").val() != "")
        {
            var d = new Date($("#txtReportStartDate").val());
            // to get the end date value add 7
            d.setDate(d.getDate() + 6);
            $("#txtReportEndDate").val((d.getMonth()+1) + '/' + d.getDate() + '/' +  d.getFullYear());            
        }
        else
        {
            var ed = new Date($("#txtReportEndDate").val());
            var weekday=new Array(7);
            weekday[0]=4;
            weekday[1]=3;
            weekday[2]=2;
            weekday[3]=1;
            weekday[4]=0;
            weekday[5]=6;
            weekday[6]=5;    

            ed.setDate(ed.getDate() + weekday[ed.getDay()]);
            $("#txtReportEndDate").val((ed.getMonth()+1) + '/' + ed.getDate() + '/' +  ed.getFullYear());
 
            // to get the end date value minus 7
            ed.setDate(ed.getDate() - 6);
            $("#txtReportStartDate").val((ed.getMonth()+1) + '/' + ed.getDate() + '/' +  ed.getFullYear());                        
        }
    }  
}

function checkMasteryScore()
{
    try
    {
        if ( $(".txtProp_Name").val().trim() == "")
        {
            $(".lblPropExists").text("Please add the Name");
            $(".lblPropExists").attr("style","color: red;")
            return false;
        }
        else
        {
            $(".lblPropExists").text("");
            $(".lblPropExists").attr("style","color: red; display:none; ")
        }
        if ($(".divProp_Mastery").is(":visible"))
        {
            if (parseInt( $(".txtProp_MasteryScore").val()) > 100 || parseInt( $(".txtProp_MasteryScore").val()) == 0)
            {
                alert("Mastery Score should be between 1 - 100");
                return false;
            }
        }
        
        if ($(".idDuration").hasClass("list-checked") && $(".txtDuration").val() == "")
        {
            $(".txtDuration").val("1");
        }
    }catch (err) { }
}

function chkSearchText()
{
    if ($(".txtSearchCurriculum").val().trim() == "")
    {
        alert("Please enter the text to search");
        return false;
    }
    return true;
}

function chkSearchList()
{
    if ($(".chkDoamin").length == 0 && $(".chkGoal").length == 0)
    {
        alert("Please first search the Domain/Goal");
        return false;
    }
    
    if ($(".chkDoamin :checkbox:checked").length == 0 && $(".chkGoal :checkbox:checked").length == 0)
    {
        alert("Please select Domain/Goal");
        return false;
    }
    
    return true;
}
