Install the latest version of the local Ionic CLI installed by typing the command:

npm install -g ionic@latest

To start a new Ionic project, type the command:

ionic start myapp --type ionic1

Now go into the newly created myapp directory, and you will see directory called www inside.

Delete everything inside of the www folder, move all files and folders from this folder into the www folder. 

Next, move the directory called SCSS-MOVEME up one directory, and rename it to scss. This directory should now sit side-by-side with the www directory.

Now, run the command npm install from directly inside the myapp folder. This will install gulp.js and a few handy tasks, such as gulp-sass and gulp-minify-css.

Finally, in the ionic.config.json file, add the JavaScript property "gulpStartupTasks": ["sass", "watch"].

If you are using Cordova plugins in your app, these will need to be installed for your local project. For every Cordova plugin you were using, type the command:

ionic plugin add [cordova-plugin-name]

ionic serve

