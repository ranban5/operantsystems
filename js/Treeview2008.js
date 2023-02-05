function SaveTreeviewNodeCheckState(node, checkedNodes, addCheckedNodesOnly)
{
  var addNode = false;
  var nodePos;
  var parentID = "";

  // Add the node to the list if it already doesn't exist.
  if (checkedNodes == "")
  {
    if (!node.get_checked() && addCheckedNodesOnly)
      return checkedNodes;

    addNode = true;
  }
  else
  {
    nodePos = checkedNodes.indexOf(node.get_value() + ",");

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

    if (node.get_checked())
      originalState = "0";

    if (node.get_level() > 0)
      parentID = "p=" + node.get_parent().get_value();
    else
      parentID = "p=-1";

    //var index = node.get_parent().get_nodes().indexOf(node);

    //checkedNodes = checkedNodes + terminator + node.get_value() + "," + originalState + "," + node.get_category() + "," + index + parentID;
    checkedNodes = checkedNodes + terminator + node.get_value() + "," + originalState + "," + node.get_category() + "," + parentID;
  }

  return checkedNodes;
}

// This function is used by the newer Telerik RadControls.
function TreeviewPopulateError(sender, eventArgs)
{
  eventArgs.set_cancel(true);

  DisplaySessionTimeoutMessage();
  CloseAllWindows();
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
    if (node.get_level() == 0)
      return false;

    node = node.get_parent();

    if (node.get_value() == nodeSrc.get_value())
      return true;

  } while (true);
}

function ExpandNodeToRoot(node)
{
  var nodeParent = node.get_parent();

  do
  {
    if (nodeParent == null)
      return;

    nodeParent.set_expanded(true);

    if (nodeParent.get_level() == 0)
      return;

    nodeParent = nodeParent.get_parent();
  } while (true);
}