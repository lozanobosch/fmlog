 function FM_log(param) {
            try {
                // Attempt to call the FileMaker script
                PerformScript("FMlog", param, 1);
            } catch (error) {
                // If PerformScript is not defined or fails, log the details to the console
                //console.log("PerformScript is not available. Logging instead.");
                //console.log("Script Name:", scriptName);
                console.log("Parameters:", param);
                //console.log("Option:", option);
            }
        }

        // Define the PerformScript function if it's not provided by FileMaker
        function PerformScript(scriptName, param, option) {
            if (typeof PerformFileMakerScriptWithOption === 'function') {
                PerformFileMakerScriptWithOption(scriptName, param, option);
            } else if (typeof FileMaker !== 'undefined' && typeof FileMaker.PerformScript === 'function') {
                FileMaker.PerformScript(scriptName, param);
            } else {
                console.log(error);
            }
        }