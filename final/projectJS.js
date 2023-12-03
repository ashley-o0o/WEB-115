
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
    function myWindow(){
        userName = document.getElementById("name").value;
        userGoal = document.getElementById("goal").value;

        monB = document.getElementById("m1").value;
        monAm = document.getElementById("m2").value;
        monL = document.getElementById("m3").value;
        monPm = document.getElementById("m4").value;
        monD = document.getElementById("m5").value;

        tuesB = document.getElementById("t1").value;
        tuesAm = document.getElementById("t2").value;
        tuesL = document.getElementById("t3").value;
        tuesPm = document.getElementById("t4").value;
        tuesD = document.getElementById("t5").value;

        wedB = document.getElementById("w1").value;
        wedAm = document.getElementById("w2").value;
        wedL = document.getElementById("w3").value;
        wedPm = document.getElementById("w4").value;
        wedD = document.getElementById("w5").value;

        thurB = document.getElementById("th1").value;
        thurAm = document.getElementById("th2").value;
        thurL = document.getElementById("th3").value;
        thurPm = document.getElementById("th4").value;
        thurD = document.getElementById("th5").value;

        friB = document.getElementById("f1").value;
        friAm = document.getElementById("f2").value;
        friL = document.getElementById("f3").value;
        friPm = document.getElementById("f4").value;
        friD = document.getElementById("f5").value;

        satB = document.getElementById("s1").value;
        satAm = document.getElementById("s2").value;
        satL = document.getElementById("s3").value;
        satPm = document.getElementById("s4").value;
        satD = document.getElementById("s5").value;

        sunB = document.getElementById("su1").value;
        sunAm = document.getElementById("su2").value;
        sunL = document.getElementById("su3").value;
        sunPm = document.getElementById("su4").value;
        sunD = document.getElementById("su5").value;

        myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
        myText += ("Hello " + userName + ", welcome to your weekly meal planner. <br>This weeks set goal: " + userGoal);
        myText += ("<br><br>MONDAY:<br>Breakfast: " + monB + "<br>AM Snack: " + monAm + "<br>Lunch: " + monL + "<br>PM Snack: " + monPm + "<br>Dinner: " + monD + "")
        myText += ("<br><br>TUESDAY:<br>Breakfast: " + tuesB + "<br>AM Snack: " + tuesAm + "<br>Lunch: " + tuesL + "<br>PM Snack: " + tuesPm + "<br>Dinner: " + tuesD + "")
        myText += ("<br><br>WEDNESDAY:<br>Breakfast: " + wedB + "<br>AM Snack: " + wedAm + "<br>Lunch: " + wedL + "<br>PM Snack: " + wedPm + "<br>Dinner: " + wedD + "")
        myText += ("<br><br>THURSDAY:<br>Breakfast: " + thurB + "<br>AM Snack: " + thurAm + "<br>Lunch: " + thurL + "<br>PM Snack: " + thurPm + "<br>Dinner: " + thurD + "")
        myText += ("<br><br>FRIDAY:<br>Breakfast: " + friB + "<br>AM Snack: " + friAm + "<br>Lunch: " + friL + "<br>PM Snack: " + friPm + "<br>Dinner: " + friD + "")
        myText += ("<br><br>SATURDAY:<br>Breakfast: " + satB + "<br>AM Snack: " + satAm + "<br>Lunch: " + satL + "<br>PM Snack: " + satPm + "<br>Dinner: " + satD + "")
        myText += ("<br><br>SUNDAY:<br>Breakfast: " + sunB + "<br>AM Snack: " + sunAm + "<br>Lunch: " + sunL + "<br>PM Snack: " + sunPm + "<br>Dinner: " + sunD + "")
        myText += ("</body>\n</html>");
    
        flyWindow = window.open('about:blank','myPop','width=600,height=700,left=200,top=200');
        flyWindow.document.write(myText);

    }
    

document.getElementById("clear").onclick = function(){
    var clearForm = document.getElementById('mealEntry');
    clearForm.reset();
}


document.getElementById("print").onclick = function(){
    userName = document.getElementById("name").value;
    userGoal = document.getElementById("goal").value;

    monB = document.getElementById("m1").value;
    monAm = document.getElementById("m2").value;
    monL = document.getElementById("m3").value;
    monPm = document.getElementById("m4").value;
    monD = document.getElementById("m5").value;

    tuesB = document.getElementById("t1").value;
    tuesAm = document.getElementById("t2").value;
    tuesL = document.getElementById("t3").value;
    tuesPm = document.getElementById("t4").value;
    tuesD = document.getElementById("t5").value;

    wedB = document.getElementById("w1").value;
    wedAm = document.getElementById("w2").value;
    wedL = document.getElementById("w3").value;
    wedPm = document.getElementById("w4").value;
    wedD = document.getElementById("w5").value;

    thurB = document.getElementById("th1").value;
    thurAm = document.getElementById("th2").value;
    thurL = document.getElementById("th3").value;
    thurPm = document.getElementById("th4").value;
    thurD = document.getElementById("th5").value;

    friB = document.getElementById("f1").value;
    friAm = document.getElementById("f2").value;
    friL = document.getElementById("f3").value;
    friPm = document.getElementById("f4").value;
    friD = document.getElementById("f5").value;

    satB = document.getElementById("s1").value;
    satAm = document.getElementById("s2").value;
    satL = document.getElementById("s3").value;
    satPm = document.getElementById("s4").value;
    satD = document.getElementById("s5").value;

    sunB = document.getElementById("su1").value;
    sunAm = document.getElementById("su2").value;
    sunL = document.getElementById("su3").value;
    sunPm = document.getElementById("su4").value;
    sunD = document.getElementById("su5").value;

    myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
    myText += ("Hello " + userName + ", welcome to your weekly meal planner. <br>This weeks set goal: " + userGoal);
    myText += ("<br><br>MONDAY:<br>Breakfast: " + monB + "<br>AM Snack: " + monAm + "<br>Lunch: " + monL + "<br>PM Snack: " + monPm + "<br>Dinner: " + monD + "");
    myText += ("<br><br>TUESDAY:<br>Breakfast: " + tuesB + "<br>AM Snack: " + tuesAm + "<br>Lunch: " + tuesL + "<br>PM Snack: " + tuesPm + "<br>Dinner: " + tuesD + "");
    myText += ("<br><br>WEDNESDAY:<br>Breakfast: " + wedB + "<br>AM Snack: " + wedAm + "<br>Lunch: " + wedL + "<br>PM Snack: " + wedPm + "<br>Dinner: " + wedD + "");
    myText += ("<br><br>THURSDAY:<br>Breakfast: " + thurB + "<br>AM Snack: " + thurAm + "<br>Lunch: " + thurL + "<br>PM Snack: " + thurPm + "<br>Dinner: " + thurD + "");
    myText += ("<br><br>FRIDAY:<br>Breakfast: " + friB + "<br>AM Snack: " + friAm + "<br>Lunch: " + friL + "<br>PM Snack: " + friPm + "<br>Dinner: " + friD + "");
    myText += ("<br><br>SATURDAY:<br>Breakfast: " + satB + "<br>AM Snack: " + satAm + "<br>Lunch: " + satL + "<br>PM Snack: " + satPm + "<br>Dinner: " + satD + "");
    myText += ("<br><br>SUNDAY:<br>Breakfast: " + sunB + "<br>AM Snack: " + sunAm + "<br>Lunch: " + sunL + "<br>PM Snack: " + sunPm + "<br>Dinner: " + sunD + "");
    myText += ("</body>\n</html>");
    
    flyWindow = window.open('about:blank','myPop','width=600,height=700,left=200,top=200');
    flyWindow.document.write(myText);

    flyWindow.document.close();
    flyWindow.print();
}


document.getElementById("download").onclick = function(){
    monB = document.getElementById("m1").value;
    monAm = document.getElementById("m2").value;
    monL = document.getElementById("m3").value;
    monPm = document.getElementById("m4").value;
    monD = document.getElementById("m5").value;

    tuesB = document.getElementById("t1").value;
    tuesAm = document.getElementById("t2").value;
    tuesL = document.getElementById("t3").value;
    tuesPm = document.getElementById("t4").value;
    tuesD = document.getElementById("t5").value;

    wedB = document.getElementById("w1").value;
    wedAm = document.getElementById("w2").value;
    wedL = document.getElementById("w3").value;
    wedPm = document.getElementById("w4").value;
    wedD = document.getElementById("w5").value;

    thurB = document.getElementById("th1").value;
    thurAm = document.getElementById("th2").value;
    thurL = document.getElementById("th3").value;
    thurPm = document.getElementById("th4").value;
    thurD = document.getElementById("th5").value;

    friB = document.getElementById("f1").value;
    friAm = document.getElementById("f2").value;
    friL = document.getElementById("f3").value;
    friPm = document.getElementById("f4").value;
    friD = document.getElementById("f5").value;

    satB = document.getElementById("s1").value;
    satAm = document.getElementById("s2").value;
    satL = document.getElementById("s3").value;
    satPm = document.getElementById("s4").value;
    satD = document.getElementById("s5").value;

    sunB = document.getElementById("su1").value;
    sunAm = document.getElementById("su2").value;
    sunL = document.getElementById("su3").value;
    sunPm = document.getElementById("su4").value;
    sunD = document.getElementById("su5").value;

    var myText;
    myText += ("MONDAY: Breakfast: " + monB + ". AM Snack: " + monAm + ". Lunch: " + monL + ". PM Snack: " + monPm + ". Dinner: " + monD + ". --- ");
    myText += ("TUESDAY: Breakfast: " + tuesB + ". AM Snack: " + tuesAm + ". Lunch: " + tuesL + ". PM Snack: " + tuesPm + ". Dinner: " + tuesD + ". --- ");
    myText += ("WEDNESDAY: Breakfast: " + wedB + ". AM Snack: " + wedAm + ". Lunch: " + wedL + ". PM Snack: " + wedPm + ". Dinner: " + wedD + ". --- ");
    myText += ("THURSDAY: Breakfast: " + thurB + ". AM Snack: " + thurAm + ". Lunch: " + thurL + ". PM Snack: " + thurPm + ". Dinner: " + thurD + ". --- ");
    myText += ("FRIDAY: Breakfast: " + friB + ". AM Snack: " + friAm + ". Lunch: " + friL + ". PM Snack: " + friPm + ". Dinner: " + friD + ". --- ");
    myText += ("SATURDAY: Breakfast: " + satB + ". AM Snack: " + satAm + ". Lunch: " + satL + ". PM Snack: " + satPm + ". Dinner: " + satD + ". --- ");
    myText += ("SUNDAY: Breakfast: " + sunB + ". AM Snack: " + sunAm + ". Lunch: " + sunL + ". PM Snack: " + sunPm + ". Dinner: " + sunD + ". ");

    var blob = new Blob([myText], { type: 'text/plain' });
    var link = document.createElement('a');
    link.download = 'WeeklyMealPlan.txt';
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
        
    link.click();
    document.body.removeChild(link);
}