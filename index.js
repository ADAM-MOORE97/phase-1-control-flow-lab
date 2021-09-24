function scuberGreetingForFeet(someValue){
if (someValue >= 2501) {
  return 'No can do.'
} else if (someValue > 2000) { 
  return 'I will gladly take your thirty bucks.'
} else if (someValue <= 400) {
  return 'This one is on me!'
}

}




function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.': 'No go.'
}

// function switchOnCharmFromTip(tip){
//   if(tip ==='thanks for everything') {
//     return 'Bye.';
//   }
//   if (tip ==='not as generous') {
//     return 'Thank you.';
//   } 
//   if (tip ==='generous') {
//     return 'Thank you so much.';
//   } 
// }


function switchOnCharmFromTip(tip){
  switch (tip){  
    case 'generous':
      return 'Thank you so much.';
    
    case 'not as generous':
      return 'Thank you.';
      
    default:
      return 'Bye.'

}

}


// switch (switchOnCharmFromTip) {
//   case 'generous':
//     'Thank you so much.';
//   break;
//   case 'not as generous':
//      'Thank you.';
//   break;
//   default:
//      'Bye.'

// }