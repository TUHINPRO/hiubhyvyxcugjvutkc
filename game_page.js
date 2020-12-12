player_1name=localStorage.getItem("player_1name");
player_2name=localStorage.getItem("player_2name");

player_score=0;
player2_score=0;

document.getElementById("player_1name").innerHTML=player_1name+":";
document.getElementById("player_2name").innerHTML=player_2name+":";

document.getElementById("player_score").innerHTML=player_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn -"+ player_1name;
document.getElementById("player_answer").innerHTML="Answer Turn -" + player_2name;

function send() {
words=document.getElementById("word").value;
lowercase=words.toLowerCase();
console.log("lowercase:"+lowercase);

charat1=lowercase.charAt(1);
console.log(charat1);

length=Math.floor(lowercase.length/2);
charat2=lowercase.charAt(length);
console.log(charat2);

length2=lowercase.length-1;
charat3=lowercase.charAt(length2);
console.log(charat3);

x=lowercase.replace(charat1,"_");
y=x.replace(charat2,"_");
z=y.replace(charat3,"_");
console.log(z);

questionword="<h4 id='worddisplay'> Q."+z+"</h4>" ;
inputbox="<br> answer: <input type='text'id='inputcheckbox'>";
checkbutton="<br><br> <button class=btn btn-info onclick='check()'>CHECK IT</button>"

row=questionword+inputbox+checkbutton;

document.getElementById('output').innerHTML=row;

document.getElementById("word").value="";

}
questionturn="player1";
answerturn="player2";
function check() {
    getanswer=document.getElementById("inputcheckbox").value;
    answer=getanswer.toLowerCase();
    console.log(answer);
     
    if (answer==lowercase) {
        if (answerturn=='player1') {
            player_score=player_score+1;
            document.getElementById("player_score").innerHTML=player_score;
            

        }
        else {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
   if (questionturn=="player1") {
       questionturn="player2"
       document.getElementById("player_question").innerHTML="questionturn-"+player_2name;
 }
 else {
     questionturn="player1"
     document.getElementById("player_question").innerHTML="questionturn-"+player_1name;
 }
 if (answerturn=="player1") {
    answerturn="player2"
    document.getElementById("player_answer").innerHTML="answerturn-"+player_2name;
}
else {
  answerturn="player1"
  document.getElementById("player_answer").innerHTML="answerturn-"+player_1name;
}
document.getElementById("output").innerHTML="";
}
