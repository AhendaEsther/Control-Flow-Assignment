// /Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
function days(deliveries){
  deliveries.forEach(delivery=>{
    switch(delivery){
      case "Monday":
        console.log(`${delivery} delivery is food`);
        break;
        case "Tuesday":
        console.log(`${delivery} delivery is package`);
        break;
        case "Wednesday":
          console.log(`${delivery} delivery is furniture`);
          break;
          case "Thursday":
            console.log(`${delivery} delivery is mail`);
            break;
            default:
              console.log('cancel delivery');
              break;

    }
  });
};
const deliveries=["Monday","Tuesday","Wednesday","Thursday","Friday"];
days(deliveries)

// 3.Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
function customer(age){
  for(let i=0;i<age.length;i++){
if(age[i]>=18){
  console.log('Adult')
}
else{
  console.log('minor')
}
  }
}
const age=[18,7,9,10,34,65,23,8,17,15]
customer(age)

// 4.Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
function lives(){
  let countdown=5
  while(countdown>0){
    console.log(`you have ${countdown} left`)
    countdown--;
  }
  console.log("Game over");
}
lives();


// 2.Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

function books(status){
  for(let i=0;i<status.length;i++){
    if(status[i]>0){
      console.log('Ready to lend')
    }
    else{
      console.log('checked out')
    }
  }
}
const status=[0,1,4,-8,-7,6,8]
books(status)


// 5Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.

function userfeedback(comment){
let i=0;
do{
  console.log(comment[i]);
  i++;
}while(i < comment.length);
}
const comments=['good','excellent','good experience','wow','good attempt'];
userfeedback(comments);

// 6.Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
function login(statuses){
    statuses.forEach(status=>{
        switch(status){
            case "logged in":
                console.log('welcome back!');
                break;
                default:
                    console.log('please log in');
                    break;
        }
    })

}
const statuses=['logged in','not logged in']
login(statuses)
// 7.Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".

function supportticket(priorities){
    priorities.forEach(priority=>{
        switch(priority){
            case "High":
                console.log('Access to high priority');
                break;
                case "medium":
                    console.log('Access to medium priority');
                    break;
                    case "low":
                        console.log('Access to low priority');
                        break;
                        default:
                            console.log('No access')
        }
    })
}
const priorities=['High','medium','low','quick','slow']
supportticket(priorities)
// 8.Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.


function quiz(){
    let countdown=10 
    while(countdown>0){
      console.log(`${countdown}`)
      countdown--;
    }
}
  quiz();