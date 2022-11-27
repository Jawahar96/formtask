
    // var submitButton=document.createElement('button');
    // submitButton.innerHTML='<button type="button " style="margin:10%"  name="submit"  onclick="submitButton()"  class="btn btn-primary"> submit </button>'
    // console.log(submitButton);
    
    function submitButton()
    {
    var firstname=document.getElementById('firstname').value
    console.log(firstname)
    document.body.append(firstname);

    var lastname=document.getElementById('lastname').value
    console.log(lastname)
    document.body.append(lastname);
    
    var address=document.getElementById('address').value
    console.log(address)
    document.body.append(address);

    var Pincode=document.getElementById('Pincode').value
    console.log(Pincode)
    document.body.append(Pincode);

    var male=document.getElementById('male').value
    console.log(male)
    document.body.append(male);

    var female=document.getElementById('female').value
    console.log(female)
    document.body.append(female);

    var State=document.getElementById('State').value
    console.log(State)
    document.body.append(State);

    var Country=document.getElementById('Country').value
    console.log(Country)
    document.body.append(Country);

    var td1=document.getElementById('td1');
    console.log(td1);
    td1.innerHTML=firstname

    var td2=document.getElementById('td2');
    console.log(td2);
    td2.innerHTML=lastname

    var td3=document.getElementById('td3');
    console.log(td3);
    td3.innerHTML=address;

    var td4=document.getElementById('td4');
    console.log(td4);
    td4.innerHTML=Pincode;
     if(document.getElementById('male').checked){
    var td5=document.getElementById('td5');
    console.log(td5);
    td5.innerHTML=male
}
    else(document.getElementById('female').checked)
    var td5=document.getElementById('td5');
    console.log(td5);
    td5.innerHTML=female;

    var td6=document.getElementById('td6');
    var checkbox=document.getElementById('fooditems')
    var checkeditems=0;
    var list=[];
    for(let i=0;i<checkbox.clientHeight;i++)
    if(checkbox[i].checked)
    checkeditems++;
    console.log(checkbox[i].value)
    list.push(checkbox[i]);

td6.innerHTML=list;
console.log(list.length);

if(list.length<2){
    alert("Please select the option below 2  ")
    td6.innerHTML=""

    var td7=document.getElementById('td7');
    console.log(td7);
    td7.innerHTML=State;

    var td8=document.getElementById('td8');
    console.log(td8);
    td8.innerHTML=Country;

    var table=document.getElementById('table');
    table.list=document.getElementById('list');
    console.log(table);



    alert("Already you existed tham details");

} }


