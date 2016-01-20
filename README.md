##Website Performance Optimization portfolio project

[Deployed Project](http://andrewtdunn.github.io/)

To test the Google Page Insights of a deployed project -
[Google Page Insights](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fandrewtdunn.github.io%2F&tab=mobile)

Note: this is the development branch. The master branch only includes the contents of the dist folder.

I spent most of my time modifying the 2048 game to a star trek theme. Please play with it and let me know what you think. Its really cooler when you get to the higher levels

re: resizing pizzas. per the example in the class, just resized using percent rather than the too-complex px conversion.

I didn't do a radical redesign in the interest of time but I am working on my portfolio.

note on pizza.html. The use of the slider on the pizza resizing page is really confusing and bad ux design. There's no reason to use a slider when there are only three discrete sizes.

In main.js - optimizations per review suggestions
- uses strict mode
- scroll listener is refactored. Instead of calling updatePositions, it calls requestAnimateFrame(updatePositions), to update the scroll position at the start of each frame.
- replaces document.querySelector() with document.getElementById()
- replaces document.querySelectorAll() with document.getElementsByClassName()
- in for loop, change assign array length to a variable. **question** - is this a micro-optimization? the js compiler may not care how the array length is declared
- declares pizzaDivs outside of for loop
- adjust sin functionality to adjust pizza movement (note: more description here of the expected behavior would have been helpful, although it is hard to describe)
- creates elem variable outside of for loop
- creates movingPizzas var outside of for loop
- determines the number of rows of background pizzas by screenheight
- updates number of rows on window resize


##Dependencies for Development

Note: I tried using gulp-concat to compress the 2048 javascript files but it altered the js functionality and the game wouldn't run. Maybe there are options which I can use to configure gulp-concat.

- install node.js and npm
[install node](https://nodejs.org/en/).
[how to install npm on a mac](http://blog.teamtreehouse.com/install-node-js-npm-mac).
[how to install npm on a pc](http://blog.teamtreehouse.com/install-node-js-npm-windows).

- install devDependencies. cd to main directory (which has the gulpfile). Install each of the following packages (gulp, gulp-sass, gulp-watch, autoprefixer, browser-sync, gulp-eslint, gulp-jasmine-phantom, gulp-concat, gulp-uglify, gulp-babel, gulp-imagemin, imagemin-pngquant, gulp-gh-pages) with the following npm command:
```bash
$> npm install --save-dev package_name
```
- run gulp
```
$> gulp
```
- sass should compile on change + save and reload in browser
- html change also triggers reload
- Edit files in the **src** folder not the **dist** folder!

##Deploying to gh-pages
```bash
$> gulp dist
$> gulp deploy
```


##Testing Page Speed During Development
1. Build dist

  ```bash
  $> cd path/to/dist/folder
  $> gulp dist
  ```

1. Run on a local server

  ```bash
  $> cd path/to/dist/folder
  $> python -m SimpleHTTPServer 8080
  ```


1. Download and install ngrok to make your local server accessible remotely.

  ``` bash
  $> npm install -g ngrok
  $> cd dist
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you ("forwarding" url) and run it through [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
