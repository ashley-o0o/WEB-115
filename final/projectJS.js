
document.getElementById("weeklyMeal").onclick = function(){
var valid = document.getElementById("email").value;
if (valid === ""){
    alert("Please Enter an Email Address");
}
else{
    document.getElementById("mealEntry").style.display = "block";
}
}

document.getElementById("weeklyPlanner").addEventListener('click',myWindow)
    function myWindow()
    {
        mondayB = document.getElementById("mb").value;
        mondayAm = document.getElementById("mas").value;
        mondayL = document.getElementById("ml").value;
        mondayPm = document.getElementById("mps").value;
        mondayD = document.getElementById("md").value;

        myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
        myText += ("Welcome to your weekly meal planner. Here's what your week looks like.<br><br>MONDAY:<br>Breakfast: " + mondayB + "<br>AM Snack: " + mondayAm + "<br>Lunch: " + mondayL + "<br>PM Snack: " + mondayPm + "<br>Dinner: " + mondayD + "");
        myText += ("</body>\n</html>");
    
        flyWindow = window.open('about:blank','myPop','width=600,height=700,left=200,top=200');
        flyWindow.document.write(myText);
    }