import React from "react";
function Result({guessValue,secretNumber}){
    // console.log(guessValue,secretNumber,"===>") for checking
    let resultValue = guessValue >  secretNumber ? 'Higher' :
                      guessValue < secretNumber ? 'Lower':
                      guessValue === secretNumber ? 'Correct' :
                      'Invalid Input'
    return(
        <>
            <h4>Your Guess is : {resultValue}</h4>
        </>
    );
}

export default Result;