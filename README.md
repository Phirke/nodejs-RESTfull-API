# npm install to frame a new project

# npm init -y


Step 1: Create the Required Directories
The first step involved in building a Node js REST API requires you to create directories that will contain the code for the Node js REST API.

To begin with, open the Command Line Terminal on your system and navigate to the record where you usually create your projects and build a new directory which will consist of the Node js REST API’s code

The goal here is to include all your reference code that will be used to create the Node js REST API within this directory. So, after creating this directory for the Node js REST API, create a new file called index.js within it and add the following code to it:
    // ./src/index.js 
    console.log('Hello there!'); 
After saving this file, run the following command to experiment with it:
node src
Upon running this command, you will see a ‘Hello there!’ message prompted on your screen.


Step 2: Create Your First App Express API
Now, the project you just created simply logs a latent message. As this might not add much value to your project, you can start developing your Node js REST API. Follow the steps given below to do so:

Open your command line and add the following code to it:
 # npm install body-parser cors express helmet morgan