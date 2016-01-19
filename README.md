##Website Performance Optimization portfolio project

I spent most of my time modifying the 2048 game to a star trek theme. Please play with it and let me know what you think. Its really cooler when you get to the higher levels

re: page speed optimization. this works at +90 when I run on github.io. when I run on my localhost and use ngrok it asks for server optimizations (i.e. modifying the SimpleHTTPServer to cache image requests, etc. ) This might be outside the scope of the lesson, so I thought that if it runs ok on github.io then that is good enough.

re: page scrolling. fixed bottleneck in page scrolling by refactoring and removing the expensive sine calculation in the for loop

re: resizing pizzas. per the example in the class, just resized using percent rather than the too-complex px conversion.

I didn't do a radical redesign because it wasn't really close to anything I'd want to use as my portfolio. The use of the slider on the pizza resizing page is really confusing and bad ux design. There's no reason to use a slider when there are only three discrete sizes.

In main.js - optimizations perk review suggestions
- uses strict mode
- scroll listener is refactored. Instead of calling updatePositions, it calls requestAnimateFrame(updatePositions), to update the scroll position at the start of each frame.
- replaces document.querySelector() with document.getElementById()
- replaces document.querySelectorAll() with document.getElementsByClassName()
- in for loop, change assign array length to a variable. question though - is this a micro-optimization? the js compiler may not care how the array length is declared
- declares pizzaDivs outside of for loop
- adjust sin functionality to adjust pizza movement (note: more instruction here of the expected behavior would have been helpful)
- creates elem variable outside of for loop
- creates moving pizzas outside of for loop
- determines the number of rows of background pizzas by screenheight
- updates number of rows on window resize


##Dependencies

- install node.js and npm
```bash
- [how to install npm on a mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)
- [how to install npm on a pc](http://blog.teamtreehouse.com/install-node-js-npm-windows)
```
- install gulp in your project devDependencies
```bash
$> npm install --save-dev gulp
```
- install gulp-sass
```bash
$> npm install --save-dev gulp-sass
```
- install gulp-watch
```bash
$> npm install --save-dev gulp-watch
```
- install autoprefixer
```bash
$> npm install --save-dev autoprefixer
```
- install browser-sync
```bash
$> npm install browser-sync --save-dev
```
- install gulp-eslint
```bash
$> npm install gulp-eslint
```
- run gulp
```
$> gulp
```
- sass should compile on change + save and reload in browser
- open a browser and visit localhost:8080

when sass files are edited, css files are compiled. refreshing the browser makes the changes visible.


##Testing Page Speed
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)
