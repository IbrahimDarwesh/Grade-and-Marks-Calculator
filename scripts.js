var marks= prompt("Enter your marks (out of 100)")  
if (marks>=90 && marks<=100){
    alert("Your Grade is A");
} 
if (marks>100){
    alert("You Enter Invilde Numbers please Try between 0-100")
}
else if (marks>=80 && marks<=89){
    alert("Your Grade is B");
}
else if (marks>=70 && marks<=79){
    alert("Your Grade is C")
}
else if (marks>=60 && marks<=69){
    alert("Your Grade is D")
}
else if (marks<60){
    alert ("Your are Fail")
}
