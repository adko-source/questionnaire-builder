const { setFileName, addTopXml, addBottomXml, insertPageStart, insertPageEnd, addInformation,  addDropdownList, addRadio, addTable, addSmallTextbox, addLargeTextbox, addDatePicker, addCheckbox, addAnswerList, addConditonList } = require('./index');

// Build questionnaire using script
setFileName('F-BUPA-008 General OH Questionnaire');
addTopXml(false);
insertPageStart();
addInformation("Please complete all parts by ticking the boxes and providing details where appropriate.  You will be asked to sign a declaration, indicating that you have answered the questions truthfully and to the best of your knowledge.");
addInformation("Please be reassured that the medical information you provide will remain confidential to Bupa.");
addInformation("Part 1 Personal Information:", "font-weight:bold;");
addDatePicker('Approximate date of last medical examination if applicable:');
addSmallTextbox('Surname:');
addSmallTextbox('Forenames:');
addDatePicker('Date of Birth:');
addSmallTextbox('Age:');
addSmallTextbox('Company/Organisation:');
addSmallTextbox('Location:');
addSmallTextbox('Title (e.g. Mr/Mrs/Ms or preferred title)');
addCheckbox('Sex:', ['M', 'F'], false, true);
addSmallTextbox('Preferred pronoun', true, false);
addSmallTextbox('Job Title:');
addDatePicker('Date commenced present job:');
addSmallTextbox('Manager name:');
addSmallTextbox('Manager phone:');
addLargeTextbox('Home address:');
addSmallTextbox('Postcode:');
addSmallTextbox('GP Name:');
addLargeTextbox('Address:');
addSmallTextbox('Postcode:');
addSmallTextbox('Email:');
addSmallTextbox('Mobile:');
addSmallTextbox('Phone:');
addInformation('Data Protection: Bupa will be the “data controller” of your personal information. Bupa recognises that when you give us personal information (which includes special categories of data) you are trusting us to take good care of it. Please see www.bupa.co.uk/privacy for more information about how we collect, use and protect your information. Bupa provides its occupational health services in partnership with Optima Health. Optima Health will be acting as a “data processor” when handling your personal information.');
addInformation("Optima Health recognises the importance of respecting the personal privacy of all customer data and the need to build in appropriate safeguards during the collection, storage, processing and utilisation of personal data. Optima Health will comply with the requirements of all relevant data protection legislation. Information will be collected and used fairly, stored safely and not disclosed to any person unlawfully.");
addInformation("SECTION P2 - CONSENT &amp; DECLARATION", "font-weight:bold;");
addInformation("• I confirm that the nature and purpose of the assessment has been explained to me.  I understand that the results of the assessment, which may include my hearing category/ HAVS staging will be used to provide both my employers and myself with advice regarding my fitness for work.  Only relevant medical information will be provided to my employers. If working via an agency, I consent to outcome reports being returned to the contracting client.");
addInformation("• I also consent for medical information to be forwarded to my general practitioner (if appropriate).");
addInformation("• I declare that the information given by me to Optima Health is true and accurate to the best of my belief and knowledge.");
addInformation("• I am aware that I may be invited to attend for a separate health surveillance medical appointment.");
addSmallTextbox('Employee Name:');
addDatePicker('Date:');
addInformation("OCCUPATIONAL EXPOSURE - Does your work involve the following?", "font-weight:bold;");
addRadio('Confined space', ['Yes', 'No'], false, true);
addRadio('Physically demanding work', ['Yes', 'No'], false, true);
addRadio('Breathing apparatus', ['Yes', 'No'], false, true);
addRadio('Manual handling', ['Yes', 'No'], false, true);
addRadio('Working in a harness', ['Yes', 'No'], false, true);
addRadio('Driving/HGV driving', ['Yes', 'No'], false, true);
addRadio('Working at heights', ['Yes', 'No'], false, true);
addRadio('FLT driving', ['Yes', 'No'], false, true);
addRadio('Lone working', ['Yes', 'No'], false, true);
addRadio('Working with dangerous machinery', ['Yes', 'No'], false, true);
addRadio('Working with electricity/EMFs', ['Yes', 'No'], false, true);
addRadio('Display screen equipment', ['Yes', 'No'], false, true);
addRadio('Chemical hazards eg skin/ respiratory sensitisers', ['Yes', 'No'], false, true);
addLargeTextbox('Please specify', true, true);
addRadio('Physical hazards eg noise/vibration', ['Yes', 'No'], false, true);
addLargeTextbox('Please specify', true, true);
addRadio('Biological hazards eg blood borne viruses', ['Yes', 'No'], false, true);
addLargeTextbox('Please specify', true, true);
addInformation("Medical History", "font-weight:bold;");
addInformation("Have you ever suffered from any of the following?");
addRadio('1. Since your last hearing assessment, have you noticed any changes with your hearing?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('2. Has there been any change in your health since your last examination or during the last 12 months?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('3. Have you been away from work for more than 3 weeks on sick leave in the past 12months?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('4. Do you take any medication?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('5. Do you have any form of epilepsy?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('6. Have you ever suffered from dizziness, fainting attacks, or blackouts?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('7. Do you have high blood pressure?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('8. Have you ever had chest pains or angina?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('9. Have you had a heart Attack?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('10. Do you have a pacemaker or other implanted device such as an Implantable Cardioverter Defibrillator (ICD) and, if so, please state the medical condition for which this was fitted?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('11. Do you have peripheral vascular disease?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('12. Do you have an abnormal heart rate?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('13. Do you have diabetes?', ['Yes', 'No'], false, true);
addRadio('14. If yes, how is your diabetes managed?', ['Insulin', 'Oral drugs', 'Diet alone'], true, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('15. Is your diabetes well controlled?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('16. Do you have any eye disease or past eye injury?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('17. Have you been advised to wear glasses for driving?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('18. Have you required treatment for any significant mental health disorder in the last 12 months?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('19. Do you drink alcohol?', ['Yes', 'No'], false, true);
addLargeTextbox('20. If yes, what is your average weekly intake One unit equals ½ pint of standard beer or lager, one 125 ml glass of wine or a pub measure of sherry, or one measure of spirit.', true, true);
addRadio('21. Do you have any back or joint problems?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('22. Do you have any hearing issues?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('23. Have you had any ear injury/frequent ear infections or hearing loss?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('24. Do you have any health problems that affect your ability to drive?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('25. Have you had to inform the DVLA of any health issues in the past?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addRadio('26. Do you have a full driving licence?', ['Yes', 'No'], false, true);
addLargeTextbox('Please provide full details', true, true);
addInformation("Thank you for taking the time to complete this questionnaire. Please check you have answered each question and given full details including dates and history where asked. This form will be returned to you if incomplete and will delay your Health Surveillance practical appointment.", "font-weight:bold;");
addInformation("Please click 'Finish' below to submit it to us", "font-weight:bold;");
insertPageEnd();
addBottomXml();











// addInformation("font-weight:bold;", "SECTION P1 - PERSONAL DETAILS");
// addRadio('Are you required, on a regular basis to work 3 or more hours between the hours of 11 pm and 8 am', ['Yes', 'No', 'Maybe'], true, false);
// addRadio('Are you required?', 'list.txt', true, false);
// addCheckbox('Test 123?', ['Checkbox 1', 'Checkbox 2', 'Checkbox 3', 'Checkbox 4'], true);
// addTable('Test 14443?', true);
// addSmallTextbox('Are you required?');
// addLargeTextbox('On a regular basis to work 3 or more hours between the hours of 11 pm and 8 am', true);
// addDatePicker('Are you required, on a regular basis to work 3 or more hours between the hours of 11 pm and 8 am');
// addDropdownList('My dropdown', [10,20,30], true, false)
// insertPageEnd(true);
// addBottomXml();

// addInformation("font-weight:bold; font-size:16px", "Medical history 00");
// addInformation("font-weight:bold; font-size:16px", "Medical history 00");
