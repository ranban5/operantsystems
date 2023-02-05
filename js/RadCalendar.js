function DatePickerPopupAbove(e, pickerID)
{
  var datePicker;

  datePicker = $find(pickerID);

  var textBox = datePicker.get_textBox();
  var popupElement = datePicker.get_popupContainer();

  var dimensions = datePicker.getElementDimensions(popupElement);
  var position = datePicker.getElementPosition(textBox);

  datePicker.showPopup(position.x, position.y - dimensions.height);
}

function TimePickerPopupAbove(e, pickerID)
{
  var datePicker;

  datePicker = $find(pickerID);

  var textBox = datePicker.get_textBox();
  var popupElement = datePicker.get_popupContainer();

  var dimensions = datePicker.getElementDimensions(popupElement);
  var position = datePicker.getElementPosition(textBox);

  datePicker.showTimePopup(position.x - 10, position.y - dimensions.height - 110);
}  