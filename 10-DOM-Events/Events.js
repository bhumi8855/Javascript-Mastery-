1.//click()Event
function showMsg(){
    alert("Button clicked!");
}

2.//dbl click()
function doubleClick(){
    alert("Double clicked!");
}

3.//mouseover Event
function changeColor(element){
    element.style.color="red";
}

4.//mouseout event
function resetcolor(element){
    element.style.color="blue";
}

5.//keydown event (pressed)
function keyDown(){
    console.log("Key pressed");
}

6.//keyup (released)
function keyUp(){
    console.log("key released");
}

7.//input event
function showText(element){
    document.getElementById("output").innerText=element.value;
}

8.//change event
function showOption(element){
    alert("Selected: "+element.value);
}

9.//focus event
function focusMsg(element){
    element.style.backgroundColor="lightyellow";
}
10.//blur Event
function blurMsg(element){
    element.style.backgroundColor="Aqua white";
}

11.//Submit Event
function submitForm(){
    alert("Form Submitted");
}