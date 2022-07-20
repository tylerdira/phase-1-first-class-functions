function receivesAFunction(Spy){
    Spy();
}

function returnsANamedFunction(){
    return function namedFunction(){

    }
}

function returnsAnAnonymousFunction(){
    return () => console.log("This is an anonymous function.")
}