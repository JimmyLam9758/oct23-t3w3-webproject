// Declare JS data that we want to store
let cssThemes = [

];

let pageTheme = "dark";

/**
 * Retrieve, assign, and return the latest stored CSS theme list from the browser localstorage.
 * 
 * @returns Array of objects
 */
function getStoredCssThemes(){
    // Update the CssTheme array
    let rawJsonStringCssThemes = localStorage.getItem("cssThemes");
    cssThemes = JSON.parse(rawJsonStringCssThemes);
    // return the updated data
    return cssThemes;
}

/**
 * Retrieve, assign, and return the latest stored page theme from the browser localstorage.
 * 
 * @returns String. Should be "light" or "dark".
 */
function getStoraedPageTheme(){
    pageTheme = localStorage.getItem("pageTheme")
    return pageTheme;
}


// Create/Update localstorage 
function setCssThemesToStorage(){
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem("cssThemes", dataAsJsonString);
}

/*
cssThemes = [
    {
        name: "blah blah 100",
        hex: "000000"
    },
    {
        name: "blah blah 100",
        hex: "000000"
    }
]
"[[Object object], [Object object]]"
JSON.stringify(cssThemes);
"[{'name':'blah blah 100', 'hex': '000000'}, {'name':'blah blah 100', 'hex': '000000'}]""
*/

// Delete localstorage
