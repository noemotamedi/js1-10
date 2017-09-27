/**
 * Created by h205p2 on 9/21/17.
 */

/* Noé Motamedi
    Js Problems 1-10
    9/26/17
 */


//write first method
function sleepIn(weekday,vacation) {
    var sleep_in=!weekday||vacation;
    return sleep_in;
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    var bothsmile=a_smile&&b_smile;
    var nonesmile=!a_smile&&!b_smile;
    var monkey=bothsmile||nonesmile;
    return monkey;
}

//third problem
function string_times(string,n) {
    var sum='';
while(n>0){
    sum=sum+string;
    n--;
}
return sum;
}

//fourth problem
function front_times(word,num){
    var sum='';
    while(num>0){
        sum=sum+word[0]+word[1]+word[2];
        num--;
    }
    return sum;
}

//fifth problem
function string_bits(word){
    var x=0;
    var num=word.length;
    var sum='';
    while(x<num){
        sum=sum+word[x];
        x+=2;
    }
    return sum;
}

//sixth problem
function caughtSpeeding(num,birthday){
    if(birthday==true){
        var x=5;
    }else{
        var x=0;
    }
    if(num-x<61){
       var sum=0;
    }else{
        if(num-x>81){
          var sum=2;
        }else{
            var sum=1;
        }
    }
    return sum;
}

//seventh problem
function fizzString2(num){
   var sum='';
    var x=num%3;
    var y=num%5;
    if(x!=0&&y!=0){
        sum= num+'!';
    }
      if(x==0){
          sum+='fizz';
      }
      if(y==0){
          sum+='buzz';
      }
    return sum;
}

//eighth problem
function teaParty(tea,candy){
    var sum=0;
    if(tea>=5&&candy>=5){
        sum++;
        if(tea>=2*candy||candy>=2*tea){
            sum++;
        }
    }
    return sum;
}

//ninth problem
function blackjack(x,y){
    if(x>21){
        x=0;
    }
    if(y>21){
        y=0;
    }
    if(x>=y){
        return x;
    }else{
        return y;
    }
}

//tenth problem
function loneSum(a,b,c){
    if(a==b){
        a=0;
        b=0;
    }
    if(a==c){
        a=0;
        c=0;
    }
    if(c==b){
        c=0;
        b=0;
    }
    return a+b+c;
}



function tester() {

    document.getElementById("output1").innerHTML = sleepIn(true, false);
    document.getElementById("output2").innerHTML = monkey_trouble(true, false);
    document.getElementById("output3").innerHTML = string_times('hi',3);
    document.getElementById("output4").innerHTML = front_times('choclate',4);
    document.getElementById("output5").innerHTML = string_bits('choclate');
    document.getElementById("output6").innerHTML = caughtSpeeding('67',true);
    document.getElementById("output7").innerHTML = fizzString2('8');
    document.getElementById("output8").innerHTML = teaParty(8,5);
    document.getElementById("output9").innerHTML = blackjack(8,9);
    document.getElementById("output10").innerHTML = loneSum(9,18,9);
    //test third method, etc
}
