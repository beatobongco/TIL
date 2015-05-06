# TIL
A small list of shit I learned.

## 4/8/2015
 * `docker-compose up --no-deps <container name>` - Using docker, if you have images of a database don't keep on using `docker-compose up db`. It might cause weird shit to happen to your database. Instead for example, if you have images: web and db do `docker-compose up --no-deps web` to put web up but not disturb your db.

 * Aliases - aliases are a cool way to make your life easier. Edit ~/.bashrc with your favorite text editor and make shorcuts like `alias dcp='docker-compose'` to type in `dcp` instead of `docker-compose`
 
 * Restoring a dockerized database from a local .sql file
   * `cd` to where your .sql file is located
   * Mount your pwd inside the db container ```docker run --rm -ti -v `pwd`:<where you want to place shit> --link <db container>:db postgres bash```
   * Go to path where sql file is and `gunzip`
   * Finally `psql -hdb -U <username> -W < backup.sql`
 
 * Run a docker container `docker-compose run --rm <container> <cmd>` 

## 4/9/2015
 * Style console.log! Useful for teaching javascript! https://github.com/adamschwartz/log
 * Resources for icons!
   * https://thenounproject.com/
   * http://www.flaticon.com/
 * Little stylistic additions
   * wow.js http://mynameismatthieu.com/WOW/ https://github.com/matthieua/WOW
   * http://daneden.github.io/animate.css/
   * https://github.com/julianshapiro/velocity
 * Sublime ES6 definition https://github.com/Benvie/JavaScriptNext.tmLanguage
 * ??? I dunno what this was http://tympanus.net/
 * http://gtmetrix.com/ --> speed testing
 * http://www.browseemall.com/ --> cross browser testing
 * Learn typescript one day please http://www.typescriptlang.org/
 * Look for npm modules! `npm ls <module` 
 * Solid presentations https://github.com/bartaz/impress.js/blob/master/index.html
 * JS style guide https://github.com/airbnb/javascript

## 4/15/2015
 * cookie-js
 * `docker exec` runs a new subprocess in a container and `docker-compose run` runs a new instance/container 
 * visionmedia's `superagent`
 * http://semantic-ui.com/
 * Elementary OS -> http://itsfoss.com/things-todo-elementary-os-freya/
 * foreground processes can be disowned, follow the command with `&` and `disown` and to stop it find the process with `ps-aux` and then `kill` it

## 4/17/2015
 * press `t` in github -> quick repo search
 * `docker cp {CONTAINER}:{PATH} {HOSTDIR}` ex `docker cp 59244e24ab80:/usr/local/mysql/radar.sql /home/beato/Desktop/sqlbackup`

## 4/18/2015
 * http://ricostacruz.com/cheatsheets/react.html

## 4/20/2015
 * http://howtocenterincss.com/
 
## 4/22/2015
 * https://www.youtube.com/watch?v=vtJ0C0UHFfE Peter Thiel: What's the valuation of your company? Think of the valuation not as a premium on the past but a discount to the future. The way one should pitch the value of the company by explaining why it will be worth much more in the future so investors will be getting in at a point much cheaper than 1 or 2 years later.
 * Cofounder equity calculator: http://foundrs.com/ 
 
## 4/28/2015
 * Invert transparency. Just takes a little effort http://graphicdesign.stackexchange.com/questions/22275/how-to-invert-pixels-with-alpha-values
 * Material design call to action http://kushagragour.in/lab/ctajs/

## 4/30/2015
 * `document.getElementById('youridhere').scrollIntoView();` one line, no third party, xbrowser
 * Add methods to "classes" in JS by `var x = new Class(); x.newMethod = function(x) { ... }`
 * Email length in db is best limited to `320` characters
 * `docker rmi $(docker images -f 'dangling=true' -q)`

## 5/1/2015
 * set a `key` of an object in one line in `ES6` ```[`${prop}`]: value```
 * JS: study `.bind` and `.apply` 
 * React convention of expansions, always expand before passing new props so you can override `<div {...this.props}`
