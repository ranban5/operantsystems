    function selectPatient(ctrl, div, txtId, txtName)
    {
//        alert( ctrl.childNodes[1].nodeValue + $(ctrl).children(0).attr("id"));
        $("#" + $(ctrl).parent().parent().parent().attr("id")).hide();
        
        $(ctrl).parent().parent().parent().prev().val(ctrl.childNodes[1].nodeValue);
        $(ctrl).parent().parent().parent().prev().prev().prev().val($(ctrl).children(0).attr("id"));
        
        //__doPostBack('textId','');
        
        //document.getElementById('<%=' + div + '.ClientID %>').style.display = 'none';
        
        
//        $(ctrl).children(0).attr("id");
//        $(ctrl).children(0)[0].nextSibling.nodeValue;
//        
//        document.getElementById(txtId).value = ctrl.childNodes[1].nodeValue;
//        for(var i=0 ; i < ctrl.childNodes[0].attributes.length; i++)
//        {
//           if (ctrl.childNodes[0].attributes[i].nodeName == 'id')
//           {
//                document.getElementById(txtName).value = ctrl.childNodes[0].attributes[i].nodeValue;
//                break;
//           }
//        }
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
            if ($(obj).attr("class") == "list-unchecked")
                $(obj).attr("class","list-checked");
            else
                $(obj).attr("class","list-unchecked");
             
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
        function txtChange(txt, txtForeColor, txtObj)
        {
            var txtToValidate = $("." + txtObj).val();
            if ($(txt).val().toLowerCase() == txtToValidate.toLowerCase() && $(txt).attr("style") == "color: #c7c7c7")
            {
                $(txt).val(""); //txt.value = '';
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
        
        function checkForParticipant()
        {
            if ($(".txtPatId").val() == "")
            {
                alert("Please select the Student");
                return false;
            }
            return true;
        }
        function deleteDomain()
        {
            if (confirm("Like to remove the Domain/Goal"))
                return true;
            else
                return false;                 
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
                        alert('Please Highlight the Behavior to Delete');
                        return false;
                    } 
                    
                    var msgBP = $(".txtSelectedNodeText_BP").val();
                    msgBP = msgBP.replace("<font color='green'>","");
                    msgBP = msgBP.replace("</font>","");
                    if (confirm("Remove the highlighted item : " + msgBP))
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

function checkLength(cnt, len)
{
    //var keyCode = window.event ? e.keyCode : e.which;
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
//        if ($(e.target).get(0).tagName  == "INPUT" || $(e.target).get(0).tagName  == "A")
//        {
           __doPostBack("tvReportSkills","TreeNodeCheckChanged");
//        }

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
    alert($("#ctl00_ContentPlaceHolder_Master_ddCommenSkills_Status").val());
    if (reqType == "Behavior")
    {
        if($("#ctl00_ContentPlaceHolder_Master_chkBehaviorList input:checked").length == 0)
            strMessage = "<label class=\"requiredItem\">Atleast one behavior should be selected</label><br/>";
    
        if ($(".txtCommentBehavior_CommentDate").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Comment Date should not be blank</label><br/>";

        if ($(".txtCommentBehavior_BehaviorComments").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Behavior Comments should not be blank</label><br/>";
    }
    else if (reqType == "Skills")
    {
        if($("#ctl00_ContentPlaceHolder_Master_chkSkillsList input:checked").length == 0)
            strMessage = "<label class=\"requiredItem\">Select one Skill</label><br/>";

        if ($(".txtCommentSkills_CommentDate").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Comment Date should not be blank</label><br/>";
        
        if ($("#ctl00_ContentPlaceHolder_Master_ddCommenSkills_Status").val() == "")
            strMessage += "<label class=\"requiredItem\">Select Status</label><br/>";

        if ($(".txtCommentSkills_Comments").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Skill Comments should not be blank</label><br/>";
    }
    else if (reqType == "BehaviorGraph")
    {
        if($("#ctl00_ContentPlaceHolder_Master_chkBehaviorGraphList input:checked").length == 0)
            strMessage = "<label class=\"requiredItem\">Select one Behavior</label><br/>";
            
        if ($(".txtBehaviorGraph_Text").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Text should not be blank</label><br/>";

        if ($(".txtBehaviorGraph_StartDate").val().trim() == "")
            strMessage += "<label class=\"requiredItem\">Start Date should not be blank</label><br/>";    
    
    }
    
    if (strMessage != "")
    {
        $(".divRequireField").html(strMessage);
        return false;
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
                        else if ( $(e.target.parentNode.parentNode.parentNode.className).selector != "divPatient"
                                && e.target.className  != "textId"  &&  e.target.className  != "txtPerson_Name")
                        {
                            $('.divPatient').hide(); //hide the div
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
                                        $("#ctl00_ContentPlaceHolder_Master_txtBehaviorGraph_Text").val("");
                                        $("#ctl00_ContentPlaceHolder_Master_txtBehaviorGraph_StartDate").val("");
                                        $("#ctl00_ContentPlaceHolder_Master_txtBehaviorGraph_TextPosition").val("");
                                        $("#ctl00_ContentPlaceHolder_Master_chkBehaviorGraph_VerticalLine").attr("checked", false);
                                        $("#ctl00_ContentPlaceHolder_Master_chkBehaviorGraph_Footnote").attr("checked", false);
                                        $(".div_ChkBehaviorGraph input:checked").each(
                                            function()
                                            {
                                                $(this).attr("checked",false);
                                            }
                                        ); 
                                                                               
                                        $("#ctl00_ContentPlaceHolder_Master_butBehaviorGraph_Save").attr('value','Save');
                                          if ($(this).next().is(':hidden') == true)
                                                $(this).next().show();
                                          else
                                                $(this).next().hide();   
                                    }
                                    else if ($(this).attr("title") == "Add Comments Skills" || $(this).attr("title") == "Add Comments Behaviors")                                                                                            
                                    {
                                        $("#ctl00_ContentPlaceHolder_Master_txtCommentBehavior_CommentDate").val("");
                                        $("#ctl00_ContentPlaceHolder_Master_txtCommentBehavior_BehaviorComments").val("");
                                        $("#ctl00_ContentPlaceHolder_Master_txtCommentBehavior_SessionNoteComments").val("");
                                        $("#ctl00_ContentPlaceHolder_Master_txtCommentBehavior_CommentToFamily").val("");
                                        $("#ctl00_ContentPlaceHolder_Master_txtCommentBehavior_Issues").val("");
                                        $("#ctl00_ContentPlaceHolder_Master_txtCommentBehavior_Recommendations").val("");
                                        $("#ctl00_ContentPlaceHolder_Master_txtCommentBehavior_FeedbackFromFamily").val("");
                                        
                                        $(".div_ChkBehaviors input:checked").each(
                                            function()
                                            {
                                                $(this).attr("checked",false);
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
        var flg = true;
        if ($(".divCriteria_Reports").is(":visible"))
        {
            if ($(".ddReports option:selected").val() == "NoDataforStaff" || $(".ddReports option:selected").val() == "DailyDataMonitoringReport"
                    || $(".ddReports option:selected").val() == "WeeklyBehaviorsDataMonitoringReport")
            {
                return true;
            }
        }

        if ($(".ddReportStudent option:selected").text() == "Select Students")
        {
            $(".ddReportStudent_Req").attr("style","color:Red;display:");
            flg = false;
        }

        if ($(".divCriteria_Reports").is(":visible"))
        {
            if ($(".ddReports option:selected").val() == "0")
            {
                $(".ddReports_Req").attr("style","color:Red;display:");
                flg = false;
            }
        }

        if ($(".divCriteria_BehaviorGraph").is(":visible"))
        {
            if (clickType == 'graph')
            {
                if ($(".ddBehaviorGraph option:selected").val() == "0")
                {
                    $(".ddBehaviorGraph_Req").attr("style","color:Red;display:");
                    flg = false;
                }
            }
            else if (clickType == 'export')
            {
                if ($(".ddExpTyp option:selected").val() == "0")
                {
                    $(".ddBehaviorExport_Req").attr("style","color:Red;display:");
                    flg = false;
                }
                
                if ($(".tvReportSkills input:checkbox").length > 0 )
                {
                    if ( $(".tvReportSkills input:checked").length == 0)
                    {
                        alert("Please highlight the behavior");
                        flg = false;
                    }
                }
                else
                {
                    alert("No behaviors available");
                } 
                //alert( $(".tvReportSkills input:checkbox").length);

                if (flg)
                {
                    if ($(".ddExpTyp option:selected").val() == "1")
                    {
                        if ($(".txtReportStartDate_BehaviorGraph").val() != "" && $(".txtReportEndDate_BehaviorGraph").val() != ""   )   
                        {
                            var start = new Date($(".txtReportStartDate_BehaviorGraph").val()); 
                            var end = new Date($(".txtReportEndDate_BehaviorGraph").val()); 
                            
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

        if ($(".divCriteria_SkillsGraph").is(":visible"))
        {
            if ($(".ddSkillsGraph option:selected").val() == "0")
            {
                $(".ddSkillsGraph_Req").attr("style","color:Red;display:");
                flg = false;
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

            var tabobj = document.getElementById('ctl00_ContentPlaceHolder_Master_gvHomeStud');

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
            var tabobj = document.getElementById('ctl00_ContentPlaceHolder_Master_gvHomeStud');

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
                document.getElementById('ctl00_ContentPlaceHolder_Master_partName').value = names;
                document.getElementById('ctl00_ContentPlaceHolder_Master_partIds').value = ids;
                document.getElementById('ctl00_ContentPlaceHolder_Master_partName').focus();
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
            document.getElementById('ctl00_ContentPlaceHolder_Master_hidupd').value = 'UPD';
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
    
    function chkExport(clk_Type)
    {
        if ($(clk_Type).attr("class") == "ddExpTyp")
        {
            if ($('select.ddExpTyp option:selected').val() != '2')
            {
                $(".lblReportEndDate_BehaviorGraph").attr("style","display:");
                $(".txtReportEndDate_BehaviorGraph").attr("style","display:");
                $(".graphAtt").attr("style","display:none");

            }
            else 
            {
                $(".lblReportEndDate_BehaviorGraph").attr("style","display:none");
                $(".txtReportEndDate_BehaviorGraph").attr("style","display:none");
                $(".graphAtt").attr("style","display:none");
            }
        }
        else
        {
            $(".lblReportEndDate_BehaviorGraph").attr("style","display:");
            $(".txtReportEndDate_BehaviorGraph").attr("style","display:");
            $(".graphAtt").attr("style","display:");        
        }
        
        return false;
    }
    
    function behaviorType()
    {
        if ($(".ddBehaviorType :selected").val() == "I")
        {
            $(".clsDuration").attr("style","display:none");
            $(".clsInterval").attr("style","display:none");
            
            $(".txtBeh_Duration").val("");
            $("#ctl00_ContentPlaceHolder_Master_idBeh_Duration").attr("class","list-unchecked");
            $("#ctl00_ContentPlaceHolder_Master_idBeh_Duration_Beep").attr("class","list-unchecked");
            $(".txtBeh_Duration_flg").val(0);
        }
        else
        {
            $(".clsDuration").attr("style","display:none");
            $(".clsInterval").attr("style","display:none");    
            $(".txtBeh_IntervalTime").val("");
            $(".txtBeh_IntervalTotalTime").val("");    
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
                
                $(".00000000-0003-0000-0000-000000000000").show();        
        }
        else
        {
            $("select.ddPeople_Add option").each(function(i){
                    if ($('select.ddPeople_Add option:selected').val() == $(this).val())
                         $("." + $(this).val()).show();
                    else 
                        $("." + $(this).val()).hide();
                });        
                
               $(".00000000-0003-0000-0000-000000000000").hide(); 
        }
    }