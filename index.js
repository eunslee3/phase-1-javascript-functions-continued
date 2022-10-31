function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(work = "This Monday, I will go to the office.") {
    if(work === "work from home") {
        return "This Monday, I will work from home."
    }
    else {
        return work;
    }
}

function wrapAdjective (wrap = "*") {
    return function (adjective = "special") {
        return `You are ${wrap}${adjective}${wrap}!`
    }
    //`${wrap}${adjective}${wrap}!`
}
let result = wrapAdjective("*");