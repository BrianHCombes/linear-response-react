"use strict" 
//***********************************************************************************************************************************************************
// lr.to Console method:
// The lr.toConsole method outputs all vital view port settings to the console. 
lr.toConsole = function(sectionTitle){
  
  if(sectionTitle === undefined)sectionTitle = "No title provided";
  console.log("%c******************************************************************","color:blue");
  console.log("%c   **** lr.toConsole() Begin ****   ","color:red; font-weight:bold; background-color:yellow; border:1px solid black;");
  console.log("%c    Title:    \n   " + sectionTitle + "   ", "color:yellow; background-color:red; border:2px solid black;");
  console.log("%c******************************************************************","color:blue");
  
  console.log("%c▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼","color:#cc33ff; font-size:2.0em;");
  console.log("%c➥ " + "%cDevice width:                       " + 
              "%c" + lr.getLRp().lrDeviceWidth, "color:#cc33ff; font-size:1.2em", "color:black", "color:#cc33ff; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cDevice width property used:         " + 
              "%c" + lr.getLRp().lrDeviceWidthPropertyApplied, "color:#cc33ff; font-size:1.2em", "color:black", "color:#cc33ff; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cDevice height:                      " + 
              "%c" + lr.getLRp().lrDeviceHeight, "color:#cc33ff; font-size:1.2em", "color:black", "color:#cc33ff; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cDevice height property used:        " + 
              "%c" + lr.getLRp().lrDeviceHeightPropertyApplied, "color:#cc33ff; font-size:1.2em", "color:black", "color:#cc33ff; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cDevice height/width ratio:          " + 
              "%c" + lr.getLRp().lrDeviceRatio, "color:#cc33ff; font-size:1.2em", "color:black", "color:#cc33ff; font-weight:bold; font-size:1.2em;");
  
  console.log("%c▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼","color:red; font-size:2.0em;");
  console.log("%c➥ " + "%cWindow width:                       " + 
              "%c" + lr.getLRp().windowWidth, "color:#ff4000; font-size:1.2em", "color:black", "color:#ff4000; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cWindow width property used:         " + 
              "%c" + lr.getLRp().windowWidthPropertyApplied, "color:#ff4000; font-size:1.2em", "color:black", "color:#ff4000; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cWindow Height:                      " + 
              "%c" + lr.getLRp().windowHeight, "color:#ff4000; font-size:1.2em", "color:black", "color:#ff4000; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cWindow Height property used:        " + 
              "%c" + lr.getLRp().windowHeightPropertyApplied, "color:#ff4000; font-size:1.2em", "color:black", "color:#ff4000; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cWindow height/width ratio:          " + 
              "%c" + lr.getLRp().windowRatio, "color:#ff4000; font-size:1.2em", "color:black", "color:#ff4000; font-weight:bold; font-size:1.2em;");
  
  console.log("%c▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼","color:blue; font-size:2.0em;");
  console.log("%c➥ " + "%cLR viewport width:                  " + 
              "%c" + lr.getLRp().vpWidth, "color:blue; font-size:1.2em", "color:black", "color:blue; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR viewport max width:              " + 
              "%c" + lr.getLRp().vpMaxWidth, "color:blue; font-size:1.2em", "color:black", "color:blue; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR viewport width property used:    " +
              "%c" + lr.getLRp().vpWidthPropertyApplied, "color:blue; font-size:1.2em", "color:black", "color:blue; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR viewport height:                 " + 
              "%c" + lr.getLRp().vpHeight, "color:blue; font-size:1.2em", "color:black", "color:blue; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR viewport max height:             " + 
              "%c" + lr.getLRp().vpMaxHeight, "color:blue; font-size:1.2em", "color:black", "color:blue; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR viewport height property used:   " + 
              "%c" + lr.getLRp().vpHeightPropertyApplied, "color:blue; font-size:1.2em", "color:black", "color:blue; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR viewport height/width ratio:     " + 
              "%c" + lr.getLRp().vpRatio, "color:blue; font-size:1.2em", "color:black", "color:blue; font-weight:bold; font-size:1.2em;");
  
  console.log("%c▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼","color:#339933; font-size:2.0em;");
  console.log("%c➥ " + "%cLR range - upper point width:       " + 
              "%c" + lr.URPw, "color:#339933; font-size:1.2em;", "color:black", "color:#339933; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR range - lower point width:       " + 
              "%c" + lr.LRPw, "color:#339933; font-size:1.2em", "color:black", "color:#339933; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR range - upper point height:      " + 
              "%c" + lr.URPh, "color:#339933; font-size:1.2em", "color:black", "color:#339933; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR range - lower point height:      " + 
              "%c" + lr.LRPh, "color:#339933; font-size:1.2em", "color:black", "color:#339933; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR range - point 1 (h/w) ratio:     " + 
              "%c" + lr.RP1r, "color:#339933; font-size:1.2em", "color:black", "color:#339933; font-weight:bold; font-size:1.2em;");
  console.log("%c➥ " + "%cLR range - point 2 (h/w) ratio:     " + 
              "%c" + lr.RP2r, "color:#339933; font-size:1.2em", "color:black", "color:#339933; font-weight:bold; font-size:1.2em;");    
  
  console.log("%c******************************************************************","color:blue");
  console.log("%c   ***** lr.toConsole() End *****   ","color:red; font-weight:bold; background-color:yellow; border:1px solid black;");
  console.log("%c******************************************************************","color:blue");
};

//***********************************************************************************************************************************************************
// lr.eval method:
// The lr.eval method calculates the return CSS numeric value based on a provided viewport dimension. This is for developer purposes.
// The first 5 arguments of the arguments object are the lr.w() or lr.h() method arguments and the 6th argument is the simulated viewport dimension. 
lr.eval = function(){
  
  if(arguments.length === 6){
    
    var evalResult;
    var evalValue = arguments[5];
    arguments.length = 5;
    
    // Checks to make sure value to be evaluated is valid.
    if(evalValue <= -1 && !isNaN(evalValue)){
      console.error("ERROR!! The evaluation argument in the lr.eval() method must be greater than or equal to 0. " + evalValue + " was entered which is less than zero.");
      return undefined;
    }
    else 
    if(isNaN(evalValue)){
      console.error("ERROR!! The evaluation argument in the lr.eval() method must be a number. \""  + evalValue + "\" was entered which is a string.");
      return undefined;
    }

    // Checks to make sure the lr expression arguments are valid. The "width" argument is required but arbitrary as long as either "width" or "height" is used.
    var returnArgs = processArgs(arguments, "width"); 
    if(returnArgs === undefined){
      return undefined;
    }
    
    // Calculates the result at the given value provided. 
    GetSet().setEvalToUse(evalValue);
    evalResult = unitCalculator(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    console.log("\n\nEvaluated result at " + evalValue + " is:\n" + evalResult + "\nusing the expression:\n" +
                arguments[0], arguments[1], arguments[2], arguments[3], arguments[4] + "\n\n");
    GetSet().setEvalToUse(-1);
  }
  else
  console.error("Error! The lr.eval() method must have 6 arguments, first 5 must be the lr.w() or lr.h() expression arguments, the 6th is the evaluation value, detected " + arguments.length + " arguments.");
};



lr.wFullForm = function(){
  console.log("arguments is: " + JSON.stringify(arguments));
  var returnArgs = processArgs(arguments, "width");
  return returnArgs.result;
};

lr.wwFullForm = function(){
  console.log("arguments is: " + JSON.stringify(arguments));
  var returnArgs = processArgs(arguments, "windowWidth");
  return returnArgs.result;
};

lr.hFullForm = function(){
  console.log("arguments is: " + JSON.stringify(arguments));
  var returnArgs = processArgs(arguments, "height");
  return returnArgs.result;
};

lr.whFullForm = function(){
  console.log("arguments is: " + JSON.stringify(arguments));
  var returnArgs = processArgs(arguments, "windowHeight");
  return returnArgs.result;
};

lr.rFullForm = function(){
  console.log("arguments is: " + JSON.stringify(arguments));
  var returnArgs = processArgs(arguments, "ratio");
  return returnArgs.result;
};

lr.wrFullForm = function(){
  console.log("arguments is: " + JSON.stringify(arguments));
  var returnArgs = processArgs(arguments, "windowRatio");
  return returnArgs.result;
};



//***********************************************************************************************************************************************************
// lr.w method:
// The lr.w method sets the CSS value based on the viewport width. The arguments
// received are the hard css properties that lineate between the two specified 
// viewport ranges, the upper viewport range and the lower viewport range. 
// Typically, the method receives 5 arguments. 
// They are: (1)CSS property and/or unit, (2)upper viewport range point, 
// (3)upper range css unit value, (4)lower viewport range point, (5)lower range 
// css unit value.
// However, if 3 arguments are received, the arguments.length conditional is 
// used to fill in the missing 2 arguments. This abbreviated 3 argument option 
// streamlines the method call since the upper viewport range point and lower 
// viewport range point are often kept the same throughout the entire client 
// application.

// As of 09/16/2022:
// This lr.w method (here in C:\xampp\htdocs\Project-Linear-Response\linear-response\node_modules\linear-response-master-files\lr-main.js)
// has been upgraded to a new streamlined version for the user. 
// Case in point: There is now a 3-arg method and a 3-arg + 2n argument method.
// A few more tests and this code work will be ready for production.
let fullFormArgs;
lr.w = function(){
  fullFormArgs = ArgConversionToFullFormGradient(arguments,lr.URPw,lr.LRPw);
  var returnArgs = processArgs(fullFormArgs, "width");
  return returnArgs.result;
};


//***********************************************************************************************************************************************************
// lr.dw method:
// The lr.dw method returns response values based on the device-viewport width as defined by the 
// window.screen.availWidth property. This is not to be confused with the 
// just the viewport width which is settable and is used by the lr.w method. Often, the device-viewport width and
// the viewport width are the same unless the lr.setVPw method is used to set the viewport width to something other
// than the device width. The arguments sent are the hard css properties that lineate from one to the other between 
// the two specified device-viewport ranges.
lr.ww = function(){
  fullFormArgs = ArgConversionToFullFormGradient(arguments,lr.URPw,lr.LRPw);
  var returnArgs = processArgs(fullFormArgs, "windowWidth");
  return returnArgs.result;
};

//***********************************************************************************************************************************************************
// lr.h method:
// The arguments received are the hard css properties that are to lineate between the two specified view port ranges.
// With this method the lineation is based on viewport height
lr.h = function(){
  fullFormArgs = ArgConversionToFullFormGradient(arguments,lr.URPh,lr.LRPh);
  var returnArgs = processArgs(fullFormArgs, "height");
  return returnArgs.result;
};

//***********************************************************************************************************************************************************
// lr.dh method:
// The lr.dh method returns response values based on the device-viewport height as defined by the 
// window.innerHeight property. This is not to be confused with  
// just the settable viewport height which is used by the lr.h() method. Often, the device-viewport height and
// the viewport height are the same unless the lr.setVPh method is used to set the viewport height to something other
// than the device height. The arguments sent are the hard css properties that lineate from one to the other between 
// the two specified device-viewport ranges.
lr.wh = function(){
  fullFormArgs = ArgConversionToFullFormGradient(arguments,lr.URPh,lr.LRPh);
  var returnArgs = processArgs(fullFormArgs, "windowHeight");
  return returnArgs.result;
};

//***********************************************************************************************************************************************************
// lr.r method:
// The arguments received are the hard css properties that are to lineate between two specified view port height to width ratios.
// With this method the lineation is based on ratio of viewport height to viewport width.
lr.r = function(){
  fullFormArgs = ArgConversionToFullFormGradient(arguments,lr.RP1r,lr.RP2r);
  var returnArgs = processArgs(fullFormArgs, "ratio");
  return returnArgs.result;
};

lr.wr = function(){
  fullFormArgs = ArgConversionToFullFormGradient(arguments,lr.RP1r,lr.RP2r);
  var returnArgs = processArgs(fullFormArgs, "windowRatio");
  return returnArgs.result;
};


function ArgConversionToFullFormGradient(){
  let argArgs         = arguments[0];
  let UpperRangePoint = arguments[1];
  let LowerRangePoint = arguments[2];
  
  
  if(argArgs.length > 2){
    if(argArgs.length === 3){
      var argArrayPlaceHolder = [];   
      argArrayPlaceHolder[0] = argArgs[0];
      argArrayPlaceHolder[1] = argArgs[1];
      argArrayPlaceHolder[2] = argArgs[2];

      argArgs[0] = argArrayPlaceHolder[0];
      argArgs[1] = UpperRangePoint;
      argArgs[2] = argArrayPlaceHolder[1];
      argArgs[3] = LowerRangePoint;
      argArgs[4] = argArrayPlaceHolder[2];
      argArgs.length = 5;
      console.log("argArgs in conversion is: " + JSON.stringify(argArgs));
    }  
    else {
      let argGroup = [];
        let argIndex = 2;
        argGroup.push(argArgs[0]);
        argGroup.push(UpperRangePoint);
        argGroup.push(argArgs[1]);
        while(argIndex <= argArgs.length-3){
          argGroup.push(argArgs[argIndex]);
          argGroup.push(argArgs[argIndex+1]);
          argGroup.push(argArgs[0]);
          argGroup.push(argArgs[argIndex]);
          argGroup.push(argArgs[argIndex+1]);
          argIndex += 2;
        }
        argGroup.push(LowerRangePoint);
        argGroup.push(argArgs[argArgs.length-1]);

        for(let i=0; i<argGroup.length; i++){
          argArgs[i] = argGroup[i];
        }
        argArgs.length = argGroup.length;
    }
  }
  return argArgs;
}

// HTML and CSS based response methods
//***********************************************************************************************************************************************************

// As of 09/16/2022:
// This lr.whtml method (here in C:\xampp\htdocs\Project-Linear-Response\linear-response\node_modules\linear-response-master-files\lr-main.js)
// has been upgraded to a new streamlined version for the user. 
// Case in point: lr.whtml() now accepts streamlined 3-arguments and 3-arguments + 2n arguments.
// A few more tests and this code work will be ready for production.

// NOTE!!!!!!!!!!!!!!!!!!!!! - as of 09-17-2022
// is lr.wwhtml, whhtml, and wrhtml, needed?? Maybe not because these methods are not lineations. They are demarcations.

lr.whtml = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "width");
  return returnHTMLCSS.result;
};
lr.wwhtml = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "windowWidth");
  return returnHTMLCSS.result;
};
lr.hhtml = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "height");
  return returnHTMLCSS.result;
};
lr.whhtml = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "windowHeight");
  return returnHTMLCSS.result;
};
lr.rhtml = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "ratio");
  return returnHTMLCSS.result;
};
lr.wrhtml = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "windowRatio");
  return returnHTMLCSS.result;
};


lr.wcss = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "width");
  return returnHTMLCSS.result;
};
lr.wwcss = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "windowWidth");
  return returnHTMLCSS.result;
};
lr.hcss = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "height");
  return returnHTMLCSS.result;
};
lr.whcss = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "windowHeight");
  return returnHTMLCSS.result;
};
lr.rcss = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "ratio");
  return returnHTMLCSS.result;
};
lr.wrcss = function(){
  fullFormArgs = ArgConversionToFullFormDemark(arguments);
  var returnHTMLCSS = processHTMLCSS(fullFormArgs, "windowRatio");
  return returnHTMLCSS.result;
};

function ArgConversionToFullFormDemark(){
  let argArgs = arguments[0];
  let twoArg = true;
  let threeArg = [];
  
  // Test for even indexes having strings
  for(let n = 0; n < argArgs.length; n+=2){
    if(isNaN(argArgs[n])){}
    else{twoArg = false;};
  };
  
  // Test for odd indexes having numbers
  for(let n = 1; n < argArgs.length; n+=2){
    if(!isNaN(argArgs[n])){}
    else{twoArg = false;};
  };
  
  // Convert to 3 arg format
  if(twoArg === true){
    let twoArgIndex = 1;
    threeArg.push(argArgs[0]);
    threeArg.push(100000);
    while(twoArgIndex < argArgs.length){
      threeArg.push(argArgs[twoArgIndex]);
      threeArg.push(argArgs[twoArgIndex+1]);
      threeArg.push(argArgs[twoArgIndex]);
      twoArgIndex += 2;
    }
    threeArg.push(0);
    
    for(let i=0; i<threeArg.length; i++){
      argArgs[i] = threeArg[i];
    }
    argArgs.length = threeArg.length;
  }
  return argArgs;
};



// https://stackoverflow.com/questions/6843951/which-way-is-best-for-creating-an-object-in-javascript-is-var-necessary-befor