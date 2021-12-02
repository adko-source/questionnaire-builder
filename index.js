const fs = require('fs');
const codes = new Set();
let file;
let page_title;
let parent_record;

function setFileName(title) {
    // Reset file first if it already exists
    file = fs.createWriteStream(__dirname + `/${title}.xml`);
    file = fs.createWriteStream(__dirname + `/${title}.xml`, {
        'flags': 'a',
        'encoding': 'utf8',     
    });
    prefix = addPrefix(title);
    page_title = title;
    return;
}

function addPrefix(file) {
    let filename = file.split(' ');
    let prefix = '';
    for(x in filename) {
        prefix = prefix + filename[x][0];
    };
    return prefix.toLowerCase();
}

function addTopXml(statuses = false) {
        let content = !statuses ?
            `<?xml version="1.0" encoding="UTF-8"?>
            <Questionnaire
            xmlns="QuestionnaireSchema.xsd">
            <Pages>
            `
            :  `<?xml version="1.0" encoding="UTF-8"?>
            <Questionnaire
            xmlns="QuestionnaireSchema.xsd">
            <Statuses>
            <Status code="0" action="document">Fit</Status>
            <Status code="1" action="refer">Automatic referral</Status>
            <Status code="3" action="wait">Review Required</Status>
            </Statuses>
            <Pages>
            `;
        file.write(content + '\r\n', (error) => {
            if(error) {
            return console.log(error.message)
            };
        });
}

function addBottomXml() {
    let content =  `</Pages>
    </Questionnaire>`;
    file.write(content + '\r\n', error => {
        if (error)  {
            return console.log(error.message)
        }
    });
 }

 function addInformation(text, style) {
    let contents = style 
        ? `<Information style="${style}">${text}</Information>`
        : `<Information>${text}</Information>`;
    file.write(contents + '\r\n', error => {
        if (error)  {
            return console.log(error.message)
        }
    });
 }

 function insertPageStart(title) {
     if (!title) {
        title = page_title;
     };
     let content = `<Page title="${title}">`;
     file.write(content + '\r\n', error => {
         if (error) {
             return console.log(error.message);
         }
     });
 }

 function insertPageEnd(hidden=false) {
     let content = !hidden
        ? `</Page>`
        : `
        <!-- Page visibility -->
        <Visibility>
            <Any>
                <Condition answer="Yes" record="${parent_record}" />
            </Any>
        </Visibility>
        </Page>`;
     file.write(content + '\r\n', error => {
        if (error) {
            return console.log(error.message);
        }
    });
 }

function addRadio(label, answers, hidden=false, required=true) {
    if(required) {
        required="true";
    }
    else {
        required="false";
    };
    let answer_list = addAnswerList(',', answers);
    // add unique code
    let code = generateCode();
    codes.add(code);
    if (!hidden) {
        parent_record = `${prefix}${code}`;
    };
    let content = !hidden
        ? `<Question record="${prefix}${code}" id="${code}" datatype="radio" required="${required}">
                <Text record="${prefix}text-${code}">${label}</Text>
                <Answers>
                ${answer_list}
                </Answers>
                </Question>`

        : `<Question record="${prefix}${code}" id="${code}" datatype="radio" required="${required}">
            <Text record="${prefix}text-${code}">${label}</Text>
            <Answers>
            ${answer_list}
            </Answers>
            <Visibility>
            <Any>
                <Condition answer="Yes" record="${parent_record}" />
            </Any>
        </Visibility>
        </Question>`;
    file.write(content + '\r\n', error => {
        if (error) {
            console.log(error);
        }
    });
}

function addCheckbox(label, answers, hidden=false, required=true) {
    if(required) {
        required="true";
    }
    else {
        required="false";
    };
    let answer_list = addAnswerList(',', answers);
    // add unique code
    let code = generateCode();
    codes.add(code);
    if (!hidden) {
        parent_record = `${prefix}${code}`;
    };
    let content = !hidden
        ?
        `<Question record="${prefix}${code}" id="${code}" datatype="checkbox" required="${required}">
                   <Text record="${prefix}text-${code}">${label}</Text>
                   <Answers>
                   ${answer_list}
                   </Answers>
                </Question>`
        : `<Question record="${prefix}${code}" id="${code}" datatype="checkbox" required="${required}">
            <Text record="${prefix}text-${code}">${label}</Text>
            <Answers>
            ${answer_list}
            </Answers>
            <Visibility>
                <Any>
                    <Condition answer="Yes" record="${parent_record}" />
                </Any>
            </Visibility>
             </Question>`;
    file.write(content + '\r\n', error => {
        if (error) {
            console.log(error);
        }
    });
}

function addDropdownList(label, answers, hidden=false, required=true) {
    if(required) {
        required="true";
    }
    else {
        required="false";
    };
    let answer_list = addAnswerList(',', answers);
    // add unique code
    let code = generateCode();
    codes.add(code);
    if (!hidden) {
        parent_record = `${prefix}${code}`;
    };
    let content = !hidden
        ?
        `<Question record="${prefix}${code}" id="${code}" required="${required}">
                   <Text record="${prefix}text-${code}">${label}</Text>
                   <Answers>
                   ${answer_list}
                   </Answers>
                </Question>`
        : `<Question record="${prefix}${code}" id="${code}" required="${required}">
            <Text record="${prefix}text-${code}">${label}</Text>
            <Answers>
            ${answer_list}
            </Answers>
            <Visibility>
                <Any>
                    <Condition answer="Yes" record="${parent_record}" />
                </Any>
            </Visibility>
             </Question>`;
    file.write(content + '\r\n', error => {
        if (error) {
            console.log(error);
        }
    });
}

function addLargeTextbox(label, hidden=false, required=true) {
    if(required) {
        required="true";
    }
    else {
        required="false";
    };
    // add unique code
    let code = generateCode();
    codes.add(code);
    if (!hidden) {
        parent_record = `${prefix}${code}`;
    };
    let content = !hidden
        ? `<Field record="${prefix}${code}" id="${code}" datatype="textarea" required="${required}">${label}</Field>`

        : `<Field record="${prefix}${code}" id="${code}" datatype="textarea" required="${required}">${label}
        <Visibility>
          <Any>
            <Condition answer="Yes" record="${parent_record}" />
          </Any>
        </Visibility>
              </Field>`;
    file.write(content + '\r\n', error => {
        if (error) {
            console.log(error);
        }
    });
}

function addSmallTextbox(label, hidden=false, required=true) {
    if(required) {
        required="true";
    }
    else {
        required="false";
    };
    // add unique code
    let code = generateCode();
    codes.add(code);
    if (!hidden) {
        parent_record = `${prefix}${code}`;
    };
    let content = !hidden
        ? `<Field record="${prefix}${code}" id="${code}" required="${required}">${label}</Field>`

        : `<Field record="${prefix}${code}" id="${code}" required="${required}">${label}
            <Visibility>
              <Any>
                <Condition answer="Yes" record="${parent_record}" />
              </Any>
            </Visibility>
          </Field>`;
    file.write(content + '\r\n', error => {
        if (error) {
            console.log(error);
        }
    });
}

function addDatePicker(label, hidden=false, required=true) {
    if(required) {
        required="true";
    }
    else {
        required="false";
    };
    // add unique code
    let code = generateCode();
    codes.add(code);
    if (!hidden) {
        parent_record = `${prefix}${code}`;
    };
    let content = !hidden 
        ? `<Field record="${prefix}${code}" id="${code}" datatype="date" required="${required}">${label}</Field>`
        : `<Field record="${prefix}${code}" id="${code}" datatype="date" required="${required}">${label}
            <Visibility>
             <Any>
              <Condition answer="Yes" record="${parent_record}" />
             </Any>
           </Visibility>
        </Field>`;
    file.write(content + '\r\n', error => {
        if (error) {
            console.log(error);
        }
    });
}

function addTable(label, hidden=false, required=true) {
    if(required) {
        required="true";
    }
    else {
        required="false";
    };
    // add unique code
    let code = generateCode();
    codes.add(code);
    if (!hidden) {
        parent_record = `${prefix}${code}`;
    };
    let content = !hidden 
        ? `<Table record="${prefix}${code}" id="${code}" required="${required}">${label}
            <Text record="${prefix}text-${code}">${label}</Text>
            <Column header="Company Name" />
            <Column header="Job" />
            <Column header="Dates" />
            </Table>`
        : `<Table record="${prefix}${code}" id="${code}" required="${required}">${label}
        <Text record="${prefix}text-${code}">${label}</Text>
        <Column header="Company Name" />
        <Column header="Job" />
        <Column header="Dates" />
        <Visibility>
             <Any>
              <Condition answer="Yes" record="${parent_record}" />
             </Any>
           </Visibility>
        </Table>`;
    file.write(content + '\r\n', error => {
        if (error) {
            console.log(error);
        }
    });
}

function addAnswerList(seperator, answers) {
    let list = ``;
    let content_arr;
    let answer_list = [];
    // Function accepts a file of comma separated vals
    if (typeof answers === 'string') {
        let content = fs.readFileSync(__dirname + `/${answers}`, 'utf8');
        content_arr = content.split(seperator);
    }
    else {
        content_arr = answers;
    };
    content_arr.forEach((value) => {
        let li = `<Answer>${value.toString().trim()}</Answer>`;
        answer_list.push(li);
    });
    for(item in answer_list) {
        list += answer_list[item] + '\r\n';
    };
    return list;
}

function addConditonList(seperator, record ) {

    if (typeof seperator !== 'string') {
        return console.log('the seperator should be a string like "?" or "," or "|"')
    };
    let list = fs.createWriteStream(__dirname + '/list.xml',
        {
            'flags': 'a',
            'encoding': null,
            
        });
    let contents = fs.readFileSync(__dirname + '/list.txt', 'utf8');
    let content_arr = contents.split(seperator);
    content_arr.forEach((answer) => {
        let li = `<Condition record="${record}" answer="${answer.toString().trim()}" />`;
        list.write(li + '\r\n', error => {
            if (error) {
                return console.log(error);
            };
        });
    });
}

function generateCode() {
    let code;
    do {
        code = Math.floor(Math.random() * 90000 + 5000).toString();
    } while (codes.has(code));
    return code;
};

module.exports = {
    addTopXml: addTopXml,
    addBottomXml: addBottomXml,
    addAnswerList: addAnswerList,
    addRadio: addRadio,
    addSmallTextbox: addSmallTextbox,
    addLargeTextbox: addLargeTextbox,
    addDatePicker: addDatePicker,
    addCheckbox: addCheckbox,
    addTable: addTable,
    insertPageStart: insertPageStart,
    insertPageEnd: insertPageEnd,
    addInformation: addInformation,
    addConditonList: addConditonList,
    setFileName: setFileName,
    addDropdownList: addDropdownList,
}

