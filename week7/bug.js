// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
 let reportedBy = document.querySelector('#reportedBy').value 
let system = document.querySelector('#system').value
let subSystem = document.querySelector('#subSystem').value 
let bugDesc = document.querySelector('#bugDesc').value
export default class Bug {
    constructor(reportedBy, system, subSystem, bugDesc) {
       this.reportedBy = reportedBy
       this.system = system
       this.subSystem = subSystem
       this.bugDesc = bugDesc
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
    }

    addBug() {
        let input = `<div class ='listWrapper'>`
        this.bugDesc.forEach(element => {
            input += `<div class = 'itemCell"> ${element.item}</div>`
         });
        input =+ `</div>`
        return input
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 

    }

    deleteBug() {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
    }

    resolveBug() {
        return document.body.style.backgroundColor = black
         // Create code that changes the appropriate bug report to a darker color

    }
}

function reportBug() {
    const bug = new bug(document.querySelectorAll('#userInput').value)
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    return reportBug()
}
