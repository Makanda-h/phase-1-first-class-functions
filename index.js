function receivesAFunction(morningRoutine) {
  morningRoutine();
}


function returnsANamedFunction(){
     return returnsANamedFunction;
}


function returnsAnAnonymousFunction(){
    return function(){
        console.log("morning routine")
    }
}