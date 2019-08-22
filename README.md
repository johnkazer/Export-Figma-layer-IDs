This Figma plugin is intended to provide a bare-bones approach to extracting frames for use in 
state charts. By default, the plugin grabs the names and id's of each frameNode and lists them as 
an array of objects in the console and textArea, from where you can copy them. Note that there 
may be more frameNodes listed than you want - so some editing may be required. To use the id in a 
URL it may need to be escaped (e.g. '0:1' becomes '0%3A1').

Standard content from Figma:

This plugin template uses Typescript. If you are familiar with Javascript, Typescript will
look very familiar. In fact, valid Javascript code is already valid Typescript code.

Typescript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using Typescript requires a compiler to convert Typescript (code.ts) into Javascript (code.js)
for the browser to run.

To get the TypeScript compiler working:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Install the TypeScript compiler globally: `sudo npm install -g typescript`.
3. Open this directory in Visual Studio Code.
4. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "tsc: watch - tsconfig.json". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
