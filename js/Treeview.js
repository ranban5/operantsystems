function HasGoals(node)
{
  /// <summary>Determines whether the specified node has folders or sequenced groups.</summary>
  /// <param name="node" type="RadTreeview">The node in the treeview that will be checked.</param>
  /// <returns type="string">Returns true if the node has any folders or sequenced groups.</returns>

  for (var i = 0; i < node.Nodes.length; i++)
  {
    var cat = node.Nodes[i].Category;

    if ((cat == "Goal") || (cat == "SeqGrp"))
      return true;
  }

  return false;
}


function SetMenuState(menu, menuItem, enabled)
{
  var item = menu.FindItemByValue(menuItem);

  if (item)
    if (enabled)
    item.Enable();
  else
    item.Disable();
}

function DestinationIsDecendent(nodeSrc, nodeDest)
{
  /// <summary>Returns true if the destination node is a decendent of the source node.</summary>
  /// <param name="nodeSrc" type="RadTreeview">The source node.</param>
  /// <param name="nodeDest" type="RadTreeview">The destination node.</param>
  /// <returns type="Boolean">Returns true if the destination node is a decendent of the source node.</returns>

  var node = nodeDest;

  do
  {
    node = node.Parent;

    if (node == null)
      return false;

    if (node.Value == nodeSrc.Value)
      return true;

  } while (true);
}


// Adds the ID (and the checkbox state) of a node whose checkbox state has changed to a list of nodes whose checkbox state has changed.
function SaveTreeviewCheckState(node, checkedNodes, addCheckedNodesOnly)
{
  var addNode = false;
  var nodePos;
  var parentID = "";

  // Add the node to the list if it already doesn't exist.
  if (checkedNodes == "")
  {
    if (!node.Checked && addCheckedNodesOnly)
      return checkedNodes;

    addNode = true;
  }
  else
  {
    nodePos = checkedNodes.indexOf(node.Value + ",");

    // If the node exists in the cached list, then remove it from the list.
    if (nodePos >= 0)
    {
      // Find the end of the record.
      var endPos = checkedNodes.indexOf(":", nodePos);

      if (endPos == -1)
      {
        if (nodePos == 0)
          checkedNodes = "";
        else
          checkedNodes = checkedNodes.substr(0, nodePos - 1);
      }
      else
      {
        if (nodePos == 0)
          checkedNodes = checkedNodes.substr(endPos + 1);
        else
          checkedNodes = checkedNodes.substr(0, nodePos - 1) + checkedNodes.substr(endPos);
      }
    }
    else
      addNode = true;
  }

  if (addNode)
  {
    var terminator = "";
    var originalState = "1";

    if (checkedNodes.length > 0)
      terminator = ":";

    if (node.Checked)
      originalState = "0";

    if (node.Parent != null)
      parentID = "p=" + node.Parent.Value;
    else
      parentID = "p=-1";

    checkedNodes = checkedNodes + terminator + node.Value + "," + originalState + "," + node.Category + "," + parentID;
  }

  return checkedNodes;
}

// This function is used by the older Telerik RadControls.
function TreeviewCallbackError(node)
{
  DisplaySessionTimeoutMessage();
  CloseAllWindows();
}

