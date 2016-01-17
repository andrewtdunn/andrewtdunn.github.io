##Website Performance Optimization portfolio project

I spent most of my time modifying the 2048 game to a star trek theme. Please play with it and let me know what you think. Its really cooler when you get to the higher levels

re: page speed optimization. this works at +90 when I run on github.io. when I run on my localhost and use ngrok it asks for server optimizations (i.e. modifying the SimpleHTTPServer to cache image requests, etc. ) This might be outside the scope of the lesson, so I thought that if it runs ok on github.io then that is good enough.

re: page scrolling. fixed bottleneck in page scrolling by refactoring and removing the expensive sine calculation in the for loop

re: resizing pizzas. per the example in the class, just resized using percent rather than the too-complex px conversion.

I didn't do a radical redesign because it wasn't really close to anything I'd want to use as my portfolio. The use of the slider on the pizza resizing page is really confusing and bad ux design. There's no reason to use a slider when there are only three discrete sizes.


##Dependencies

1. install gulp in your project devDependencies
```bash
$> npm install --save-dev gulp
```
2. install gulp-sass
```bash
$> npm install gulp-sass
```
3. install autoprefixer
```bash
$> npm install --global postcss-cli autoprefixer`
```
4. run gulp
```
$> gulp
```

```bash
$> cd /path/to/your-project-folder
$> python -m SimpleHTTPServer 8080
```

1. Open a browser and visit localhost:8080


## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080

##Testing Page Speed
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)
