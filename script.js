function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    ele1.setAttribute(attrname3,attrvalue3);
    return ele1;
}

function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}
var button=document.createElement("button");
button.innerHTML="Submit";
button.setAttribute("class","btn btn-primary");
button.setAttribute("type","button");
button.addEventListener("click",action);



function action() {
    var fn = document.getElementById("firstname").value;
    td1.innerHTML=fn;
    var ln = document.getElementById("lastname").value;
    td2.innerHTML=ln;
    var addr1 = document.getElementById("add1").value;
    td3.innerHTML=addr1;
    var addr2 = document.getElementById("add2").value;
    td3.innerHTML += addr2;
    var pcode = document.getElementById("pin").value;
    td4.innerHTML=pcode;
    var data = document.getElementsByName('gender');
    for (let i = 0; i < data.length; i++) {
        if (data[i].checked === true)
            td5.innerHTML = data[i].value;
    }
    var markedCheckbox = document.getElementsByName('food');
    for (var checkbox of markedCheckbox) {
    if (checkbox.checked)
      td6.append(checkbox.value + ' ');
  }
    var sta= document.getElementById('state').value;
    td7.innerHTML=sta;
    var coun= document.getElementById('country').value;
    td8.innerHTML=coun;
}

function createRadio() {
    var fieldset = document.createElement('fieldset');
    fieldset.setAttribute('class', 'form-group');

    var d = document.createElement('div');
    d.setAttribute('class', 'row');

    var legend = document.createElement('legend');
    legend.setAttribute('class', 'col-form-label col-4')
    legend.innerHTML = 'Gender'

    var d1 = document.createElement('div');
    d1.setAttribute('class', 'col-6 pl-1');

    var d2 = document.createElement('div');
    d2.setAttribute('class', 'form-check');

    var male = document.createElement('label');
    male.setAttribute('for', 'Male');
    male.setAttribute('class', 'form-check-label')
    male.innerHTML = 'Male';
    var radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('class', 'form-check-input');
    radio1.checked = true;
    radio1.id = 'Male';
    radio1.value = 'Male'
    radio1.name = 'gender';

    var d3 = document.createElement('div');
    d3.setAttribute('class', 'form-check');

    var female = document.createElement('label');
    female.setAttribute('for', 'Female');
    female.innerHTML = 'Female'
    var radio2 = document.createElement('input');
    radio2.setAttribute('class', 'form-check-input');
    radio2.setAttribute('type', 'radio');
    radio2.id = 'Female';
    radio2.value = 'Female'
    radio2.name = 'gender';

    fieldset.append(d)
    d.append(legend, d1);
    d1.append(d2, d3);
    d2.append(radio1, male);
    d3.append(radio2, female);



    return fieldset;
}

function createMultiSelect() {
    var fieldset = document.createElement('fieldset');
    fieldset.setAttribute('class', 'form-group');

    var d = document.createElement('div');
    d.setAttribute('class', 'row');

    var legend = document.createElement('legend');
    legend.setAttribute('class', 'col-form-label col-4')
    legend.innerHTML = 'Choice of Food:(must choose atleast 2 out of 5)';

    var d1 = document.createElement('div');
    d1.setAttribute('class', 'col-6 pl-1');

    var d2 = document.createElement('div');
    d2.setAttribute('class', 'form-check');

    var north = document.createElement('label');
    north.setAttribute('for', 'north');
    north.setAttribute('class', 'form-check-label')
    north.innerHTML = 'North Indian';
    var radio1 = document.createElement('input');
    radio1.setAttribute('type', 'checkbox');
    radio1.setAttribute('class', 'form-check-input');
    radio1.checked = true;
    radio1.id = 'north';
    radio1.value = 'North Indian';
    radio1.name = 'food';

    var d3 = document.createElement('div');
    d3.setAttribute('class', 'form-check');
    
    var south = document.createElement('label');
    south.setAttribute('for', 'south');
    south.setAttribute('class', 'form-check-label')
    south.innerHTML = 'South Indian';
    var radio2 = document.createElement('input');
    radio2.setAttribute('type', 'checkbox');
    radio2.setAttribute('class', 'form-check-input');
    radio2.checked = true;
    radio2.id = 'south';
    radio2.value = 'South Indian';
    radio2.name = 'food';
    
    var d4 = document.createElement('div');
    d4.setAttribute('class', 'form-check');
    
    var china = document.createElement('label');
    china.setAttribute('for', 'china');
    china.setAttribute('class', 'form-check-label')
    china.innerHTML = 'Chinese';
    var radio3 = document.createElement('input');
    radio3.setAttribute('type', 'checkbox');
    radio3.setAttribute('class', 'form-check-input');
    radio3.checked = true;
    radio3.id = 'china';
    radio3.value = 'Chinese';
    radio3.name = 'food';

    var d5 = document.createElement('div');
    d5.setAttribute('class', 'form-check');
    
    var japan = document.createElement('label');
    japan.setAttribute('for', 'japan');
    japan.setAttribute('class', 'form-check-label')
    japan.innerHTML = 'Japanese';
    var radio4 = document.createElement('input');
    radio4.setAttribute('type', 'checkbox');
    radio4.setAttribute('class', 'form-check-input');
    radio4.checked = true;
    radio4.id = 'japan';
    radio4.value = 'Japanese';
    radio4.name = 'food';

    var d6 = document.createElement('div');
    d6.setAttribute('class', 'form-check');
    
    var sea = document.createElement('label');
    sea.setAttribute('for', 'sea');
    sea.setAttribute('class', 'form-check-label')
    sea.innerHTML = 'Sea Food';
    var radio5 = document.createElement('input');
    radio5.setAttribute('type', 'checkbox');
    radio5.setAttribute('class', 'form-check-input');
    radio5.checked = true;
    radio5.id = 'sea';
    radio5.value = 'Sea Food';
    radio5.name = 'food';

    fieldset.append(d)
    d.append(legend, d1);
    d1.append(d2, d3,d4,d5,d6);
    d2.append(radio1, north);
    d3.append(radio2,south);
    d4.append(radio3,china);
    d5.append(radio4,japan);
    d6.append(radio5,sea);
    return fieldset;

   
}
//div tag for container class
var container = document.createElement('div');
container.setAttribute('class', 'container');
//heading for the form
var heading_div = document.createElement('div');
heading_div.setAttribute('class', 'text-center bg-dark p-3 col-md-12 col-sm-12');

var heading = document.createElement('h2');
heading.setAttribute('class', 'text-light');
heading.innerHTML = 'APPLICATION FORM'
//creating form tag
var form = document.createElement('form');

form.setAttribute('class', 'mt-4 bg-light');

//creating labels and input fields
var firstname=labels("label","for","firstname","Firstname:");
var br=linebreak("br");
var inputs1=inputs("input","type","firstname","name","firstname","id","firstname","placeholder","First Name");
var br1=linebreak("br");
var br2=linebreak("br");

var lastname=labels("label","for","lastname","Lastname:");
var br3=linebreak("br");
var inputs2=inputs("input","type","lastname","name","lastname","id","lastname","placeholder","Last Name");
var br4=linebreak("br");
var br5=linebreak("br");

var add1=labels("label","for","add1","Address Line 1:");
var br6=linebreak("br");
var inputs3=inputs("input","type","add1","name","add1","id","add1","placeholder","Address Line 1");
var br7=linebreak("br");
var br8=linebreak("br");

var add2=labels("label","for","add2","Address Line 2:");
var br9=linebreak("br");
var inputs4=inputs("input","type","add2","name","add2","id","add2","placeholder","Address Line 2");
var br10=linebreak("br");
var br11=linebreak("br");

var pin=labels("label","for","pin","Pin:");
var br12=linebreak("br");
var inputs5=inputs("input","type","pin","name","pin","id","pin","placeholder","Pin");
var br13=linebreak("br");
var br14=linebreak("br");

var gender = createRadio();

var food= createMultiSelect();




var br24=linebreak("br");
var br25=linebreak("br");


var state=labels("label","for","state","State:");
var br26=linebreak("br");
var input13=inputs("input","type","state","name","state","id","state","placeholder","State");
var br27=linebreak("br");
var br28=linebreak("br");
var country=labels("label","for","country","Country:");
var br29=linebreak("br");
var input14=inputs("input","type","country","name","country","id","country","placeholder","Country");
var br30=linebreak("br");
var br31=linebreak("br");

//creating table to fill the submitted data
var divtable = document.createElement('div')
divtable.setAttribute('class', 'row');

var table = document.createElement('table');
table.setAttribute('class', 'table mt-5');
table.id = "details-table";

var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
tbody.id = 'table_body'

var tr1 = document.createElement('tr');
var tr2 = document.createElement('tr');

var th1 = document.createElement('th');
th1.innerHTML = 'FirstName';
var th2 = document.createElement('th');
th2.innerHTML = 'Last Name';
var th3 = document.createElement('th');
th3.innerHTML = 'Address';
var th4 = document.createElement('th');
th4.innerHTML = 'Pincode';
var th5 = document.createElement('th');
th5.innerHTML = 'Gender';
var th6 = document.createElement('th');
th6.innerHTML = 'Food';
var th7 = document.createElement('th');
th7.innerHTML = 'State';
var th8 = document.createElement('th');
th8.innerHTML = 'Country';

var td1=document.createElement("td");
var td2=document.createElement("td");
var td3=document.createElement("td");
var td4=document.createElement("td");
var td5=document.createElement("td");
var td6=document.createElement("td");
var td7=document.createElement("td");
var td8=document.createElement("td");

heading_div.append(heading);
divtable.append(table);
table.append(thead, tbody);
thead.append(tr1);


tr2.append(td1,td2,td3,td4,td5,td6,td7,td8);
tbody.append(tr2);
tr1.append(th1,th2,th3,th4,th5,th6,th7,th8);
form.append(firstname,br,inputs1,br1,br2,lastname,br3,inputs2,br4,br5,add1,br6,inputs3,br7,br8,add2,br9,inputs4,br10,br11,pin,
br12,inputs5,br13,br14,gender,food,br24,br25,state,br26,input13,br27,br28,country,br29,input14,br30,br31,button);
container.append(heading_div, form, divtable);
document.body.append(container);