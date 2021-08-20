const { setFileName, addTopXml, addBottomXml, insertPageStart, insertPageEnd, addInformation,  addDropdownList, addRadio, addTable, addSmallTextbox, addLargeTextbox, addDatePicker, addCheckbox, addAnswerList, addConditonList } = require('./index');

// Build questionnaire using script
setFileName('DEMO Questionnaire');
addTopXml(false);
insertPageStart();
addInformation("font-weight:bold; font-size:16px", "Medical history 00");
addRadio('Are you required, on a regular basis to work 3 or more hours between the hours of 11 pm and 8 am', ['Yes', 'No', 'Maybe'], true, false);
addRadio('Are you required?', 'list.txt', true, false);
addCheckbox('Test 123?', ['Checkbox 1', 'Checkbox 2', 'Checkbox 3', 'Checkbox 4'], true);
addTable('Test 14443?', true);
addSmallTextbox('Are you required?');
addLargeTextbox('On a regular basis to work 3 or more hours between the hours of 11 pm and 8 am', true);
addDatePicker('Are you required, on a regular basis to work 3 or more hours between the hours of 11 pm and 8 am');
addDropdownList('My dropdown', [10,20,30], true, false)
insertPageEnd(true);
addBottomXml();

