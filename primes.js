/**
 * Created by RDEAX37 on 17/09/2015.
 */

var counter = 0;
var html = "";
function paintTable(rows, columns) {
    counter = 0;
    html = ("<table border='1px'>");
    for (i = 0; i < rows; i++) {
        html += ("<tr>");
        for (j = 0; j < columns; j++) {
            printCell();
            counter++
        }
        html += ("</tr>");
    }
    document.getElementById("tableDiv").innerHTML = html;
}

function printCell(){
    if (counterIsPrime()) {
        html += ("<td bgcolor='red'>");
    } else {
        html +=("<td>");
    }
    html += (counter);
    html += ("</td>");
}

function counterIsPrime() {
    var value = counter;
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}