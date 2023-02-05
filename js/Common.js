var lblStatusMessage;
var lblPostbackMessage;
var menuMain;
var loadingPanel
var postbackMessage;
var ajaxManager;
var divStatusMessageArea;
var divMenu;
var divToolbar;
var windowClosing = false;
var closeWindow = true;

var MessageType = { "Succeeded": 0, "Failed": 1, "Normal": 2 };

function centerElementOnScreen(element)
{
  var scrollTop = document.body.scrollTop;
  var scrollLeft = document.body.scrollLeft;

  var viewPortHeight = document.body.clientHeight;
  var viewPortWidth = document.body.clientWidth;

  if (document.compatMode == "CSS1Compat")
  {
    viewPortHeight = document.documentElement.clientHeight;
    viewPortWidth = document.documentElement.clientWidth;

    scrollTop = document.documentElement.scrollTop;
    scrollLeft = document.documentElement.scrollLeft;
  }

  var topOffset = Math.ceil(viewPortHeight / 2 - element.offsetHeight / 2);
  var leftOffset = Math.ceil(viewPortWidth / 2 - element.offsetWidth / 2);

  var top = scrollTop + topOffset - 40;
  var left = scrollLeft + leftOffset;

  element.style.position = "absolute";
  element.style.top = top + "px";
  element.style.left = left + "px";
}

function ClearStatusMessage()
{
  setTimeout('ClearMessage()', 5000);
}

function ClearMessage()
{
  if (lblStatusMessage == null)
    return;
    
  var spanMessage = document.getElementById(lblStatusMessage);
  spanMessage.style.display = "none";
  spanMessage.style.backgroundColor = "";
}

function GetRadWindow()
{
  var oWindow = null;
  if (window.radWindow) oWindow = window.radWindow;
  else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow;
  return oWindow;
}

function DisplayStatusMessageAndClear(message, messageType)
{
  DisplayStatusMessage(message, messageType);
  ClearStatusMessage();
}

function DisplayStatusMessage(message, messageType)
{
  var spanMessage = document.getElementById(lblStatusMessage);
  spanMessage.style.display = "inline-block";
  
  if (messageType == MessageType.Succeeded)
    spanMessage.style.backgroundColor = "#b1c5ee";
  else if (messageType == MessageType.Failed)
    spanMessage.style.backgroundColor = "#f9c7e2";
  else
    spanMessage.style.backgroundColor = "#ffffcc";

  spanMessage.innerHTML = message;
}

function DisplayPostbackMessage(message, messageType)
{
  var divOverlayOuter = document.getElementById("divOverlayOuter");
  divOverlayOuter.style.display = "";

  DisplayStatusMessage(message, messageType);
}

function HidePostbackOverlay()
{
  var divOverlayOuter = document.getElementById("divOverlayOuter");
  divOverlayOuter.style.display = "none";
}

function ResizeStandardCriteriaTab(containerID)
{
  var container = document.getElementById(containerID);

  var intCompensate = 100;
  var documentObj = document.documentElement;

  if (window.opera || (document.all && !(document.compatMode && document.compatMode == "CSS1Compat")))
  {
    documentObj = document.body;
  }

  var messageAreaHeight = 0;
  var menuHeight = 0;
  var toolbarHeight = 0;

  if (divStatusMessageArea != null)
    messageAreaHeight = divStatusMessageArea.clientHeight;

  if (divMenu != null)
    menuHeight = divMenu.clientHeight;
    
  if (divToolbar != null)
    toolbarHeight = divToolbar.clientHeight;

  var height = parseInt(documentObj.clientHeight) - messageAreaHeight - menuHeight - toolbarHeight - intCompensate;

  if (height < 0)
    height = 0;

  container.style.height = height + "px";
  container.style.width = documentObj.clientWidth - 5;
}

function WindowClosing()
{
  if (event.clientY < 0)
  {
    setTimeout('windowClosing=false', 100);
    windowClosing = true;
  }
}

function GetRadWindow()
{
  var oWindow = null;
  if (window.radWindow)
  {
    oWindow = window.radWindow; //Will work in Moz in all cases, including clasic dialog
  }
  else if (window.frameElement.radWindow)
  {
    oWindow = window.frameElement.radWindow; //IE (and Moz az well)
  }

  return oWindow;
}

function CloseRadWindows()
{
  try
  {
    var radWindowManager = GetRadWindowManager();
    radWindowManager.CloseAll();
  }
  catch (err) { }
}

function CloseAllWindows()
{
  try
  {
    var radWindowManager = GetRadWindowManager();
    radWindowManager.CloseAll();
  }
  catch (err) { }

  try
  {
    GetRadWindow().BrowserWindow.CloseAllWindows();
  }
  catch (err) { }

  try
  {
    if (window.opener != null)
      window.opener.CloseAllWindows();
  }
  catch (err) { }

  try
  {
    if (closeWindow)
      window.close();
  }
  catch (err) { }

  try
  {
    GetRadWindow().BrowserWindow.ExitApp();
  }
  catch (err) { }

  try
  {
    window.opener.ExitApp();
  }
  catch (err) { }
}

function ResizeTreeview(treeviewID)
{
  /// <summary>Resizes the specified treeview to the size of the content area.</summary>
  /// <param name="treeviewID" type="treeviewID">The ClientID of the treeview.</param>

  var treeDiv = document.getElementById(treeviewID);

  var intCompensate = 110;
  var documentObj = document.documentElement;

  if (window.opera || (document.all && !(document.compatMode && document.compatMode == "CSS1Compat")))
  {
    documentObj = document.body;
  }

  if (documentObj.clientHeight > 0)
    treeDiv.style.height = (parseInt(documentObj.clientHeight) - intCompensate) + "px";
}


