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
 
