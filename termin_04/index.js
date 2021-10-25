// Create data structure:
const attendees = []; // Fill with attendess

function createTableRow( attendee ) {
    let tableRow = document.createElement('tr')

    let tdEl1 = document.createElement('td');
    tdEl1.innerHTML = "?"; // Get the full name of the attendee and relpace the "?"
    tableRow.append(tdEl1)

    let tdEl2 = document.createElement('td');
    tdEl2.innerHTML = "?"; // Get the role of the attendee and relpace the "?"
    tableRow.append(tdEl2)

    let tdEl3 = document.createElement('td');
    tdEl3.innerHTML ="?"; // Get the details of the attendee and relpace the "?"
    tableRow.append(tdEl3)

    return tableRow;
}

// Run 
window.addEventListener('DOMContentLoaded', function () {
    // list all attendees in a table
    const table = document.getElementsByTagName('table')[0]

    attendees.forEach( attendee => {
        table.append( createTableRow( attendee ) ); 
    } );
});

