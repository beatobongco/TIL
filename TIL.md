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
 * Remove useless docker images `docker rmi $(docker images -f 'dangling=true' -q)`

## 5/1/2015
 * set a `key` of an object in one line in `ES6` ```[`${prop}`]: value```
 * JS: study `.bind` and `.apply` 
 * React convention of expansions, always expand before passing new props so you can override `<div {...this.props}`

## 5/6/2015
 * Here is an example on how to clean up old containers that are weeks old. `docker ps -a | grep 'weeks ago' | awk '{print $1}' | xargs --no-run-if-empty docker rm`
 * `docker machine` allows you to access your docker containers in remote places like Digital Ocean. Just do `$(docker-machine env <name>)` and do docker operations as normal
 * You can ssh into a docker machine like so: `docker-machine ssh radar`
 * using `scp`: Copy the file "foobar.txt" from a remote host to the local host `$ scp your_username@remotehost.edu:foobar.txt /some/local/directory` Copy the file "foobar.txt" from the local host to a remote host `$ scp foobar.txt your_username@remotehost.edu:/some/remote/directory`
 * using `scp` in `docker-machine` `scp -i ~/.docker/machine/machines/radar/id_rsa dump.sql.gz root@$(docker-machine ip radar):~` Explanation: copy a file from your docker machine without logging on to said machine using ssh keys. `scp -i <identity file/rsa id path> <from file path host:filepath> <to file path host:filepath>`

## 5/12/2015
 * REACT: You can pass `children` as props to DOM elements. ex. `<Dialog children=(<p>Yolo</p>) />`

##  5/18/2015
 * http://makerbook.net/ for awesome resources for creatives

## 5/19/2015
 * Beautiful icons http://bitshadow.github.io/iconate/
 * TIL a downfall for using shortcircuits e.g. `var x = myVal1 || myVal2` because if `myVal1 = 0` and you DO want to get 0, you will get `myVal2` instead.
 * https://webmaker.org/en-US/tools <-- awesome shit for beginners!
 * Joseph Campbell's hero with a thousand faces... "Full circle we come, from the tomb of the womb to the womb of the tomb, a brief enigmatic journey into the realm of the solid world, only to melt away like the substance of a dream."
 
## 5/20/2015
 * http://drill.apache.org/ <-- best bet for querying noSQL dbs. Looks really cool 
 * http://www.typegenius.com/ font pairing! finally!

## 5/21/2015
 * You Suck At Photoshop -> WATCH IT YOU FUCKING NEED ITTTTT
 * Content-aware shit or "how to fill in the blanks" Use case: making a perfect square Instagram image from a landscape one
   * step 1: resize canvas
   * step 2: look for parts in photo that could be extended (like iron man's rope)
   * step 3: move the photo there
   * step 4: select empty space that was left
   * step 5: press DELETE or right click on the selection
   * step 6: press `fill`
   * step 7: select `content-aware`
   * step 8: wtf???? profit!!!
 
## 5/22/2015
 * horror movies wew https://imgur.com/gallery/KIZLc

## 5/28/2015
 * startup traction http://submit.co/

## 6/16/2015
 * https://developers.google.com/speed/public-dns/
 * Run something in docker machine (OK to close terminal)
   * `$(docker-machine env blah)`
   * `docker-compose run -d web python script.py`
   * `docker logs -f radar_web_run_2`
 * http://youmightnotneedjquery.com/
 
## 6/17/2015
 * Don't you forget to keep moving forward https://acidheroes.wordpress.com/2015/06/01/6855/
 * There are two kinds of people in the world: those who move forward, and those stand still.

## 6/22/2015
 * http://waitbutwhy.com/2014/06/taming-mammoth-let-peoples-opinions-run-life.html
 * Mounting volumes baby `docker run -d --env-file .env -v /root/dump:/usr/src/app/dump --env PYTHONUNBUFFERED=1 radar_web  python script.py`

## 6/25/2015
 * Animated fonts: http://animography.net/collections
 * CMD LINE https://github.com/jlevy/the-art-of-command-line

## 6/26/2015
 * https://github.com/getify/You-Dont-Know-JS

## 6/29/2015
 * https://github.com/MojoJolo/textteaser
 * https://docs.docker.com/compose/django/

## 6/30/2015
 * http://t4t5.github.io/sweetalert/

## 7/1/2015
 * http://blog.instavest.com/three-useful-python-libraries-for-startups
 * Koans for software dev http://thecodelesscode.com/

## 7/7/2016
 * Desiderata, always relevant http://zenpencils.com/comic/desiderata/
 * Stage entire working tree: (meaning it will remove deleted files also from remote) `git add -u :/`
 * material design lite http://www.getmdl.io/

## 7/9/2015
 * Beginnging with go resource https://sourcegraph.com/blog/live/gophercon2015/123565059490
 * Virtual office Philippines http://www.voffice.com.ph/

## 7/14/2015
 * Reset git to remote: `git fetch origin && git reset --hard origin/master`

## 7/15/2015
 * One day I'll visit Tuvalu + http://www.dailymail.co.uk/travel/travel_news/article-2779663/Inside-10-visited-countries-world.html
 * https://www.youtube.com/watch?v=rQVpmAGBccQ
 * http://www.buzzfeed.com/patricksmith/13-of-the-worlds-loneliest-islands-you-will-never-visit#.dcLzDEMG8

## 7/16/2015
 * Swallow your pride https://imcreator.com <-- could use for BKT
 * Or keep your pride and use this baby http://www.getmdl.io/

## 7/18/2015
 * https://www.youtube.com/channel/UCPPg3rzfDNko5GjU8qxu9iQ Climbing DVD which was not included in the Kindle version of the self coached climber

## 7/21/2015:
 * If serving on `nginx` during development, don't forget to add `127.0.0.1 www.something.com` to your hosts file in `C:\Windows\System32\drivers\etc`

## 7/23/2015
 * Dan Harmon story embryo http://www.wired.com/2011/09/mf_harmon/

## 8/10/2015
 * http://www.ukclimbing.com/articles/page.php?id=3694

## 8/11/2015
 * if you run into trouble w/ relative imports `python -m radar/tests/local_test` http://stackoverflow.com/questions/11536764/attempted-relative-import-in-non-package-even-with-init-py

## 8/12/2015
 * https://github.com/seatgeek/fuzzywuzzy fuzzy search
 * Get all tags, put in choices array
 * `>>> choices = ["Atlanta Falcons", "New York Jets", "New York Giants", "Dallas Cowboys"]`
 * `>>> process.extract("new york jets", choices, limit=2)`
 * `[('New York Jets', 100), ('New York Giants', 78)]`
 * mock data https://www.mockaroo.com/

## 8/16/2015
 * https://github.com/flowjs/flow.js <-- resumeable file uploads
 * https://github.com/facebook/flow <-- typechecking for js

## 8/27/2015
 * If you get weird content mismatch errors, try making sure that time on both your server/virtual machine and host is the same.

## 8/30/2015
 * Google sheets as database https://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
 * Mirror: https://gist.github.com/beatobongco/6c07a5637510bf16e006
 * Tools > Script Editor
 * Paste
 * Deploy as web app
 * Run setup
 * Copy script URL and post there

## 9/1/2015
 * Configure server time `dpkg-reconfigure tzdata`

## 9/2/2015
 * Good perspective (live, but dont live to feed the beast): http://www.lindsredding.com/2012/03/11/a-overdue-lesson-in-perspective/

## 9/7/2015
 * https://github.com/krisk/Fuse JS fuzzy search, good for client side

## 9/16/2015
 * beautiful hover animations http://ianlunn.github.io/Hover/
 * remove filter while scaling CSS3 animations `-webkit-filter: blur(0);
  -ms-filter: blur(0);
  filter: blur(0);`

## 9/18/2015
 * Don't forget to add gzip types to Nginx make site faster esp for React! `gzip_types text/plain text/html text/css application/json application/javascript application/x-javascript text/javascript text/xml application/xml application/rss+xml application/atom+xml application/rdf+xml;`
 * f(**args) Python unpack arguments splat https://docs.python.org/2/tutorial/controlflow.html#unpacking-argument-lists
 
## 9/24/2015
 * Making a fucking PEM https://www.digicert.com/ssl-support/pem-ssl-creation.htm DONT FORGET, .key of your server goes on TOP!

## 10/2/2015
 * http://zenorocha.github.io/clipboard.js/ CLIPBOARD
 * non atomic redis delete `redis-cli KEYS "prefix:*" | xargs redis-cli DEL`

## 10/9/2015
 * copy from docker container to host docker cp <containerId>:/file/path/within/container /host/path/target 

## 10/16/2015
 * http://ready.mobi/
 * github.com/relax/relax

## 11/11/2015
 * http://thehustle.co/the-richest-entrepreneurs-say-you-need-to-write-better
 * Write better: http://www.hemingwayapp.com/

## 11/12/2015
 * Questions to ask before startup https://medium.com/swlh/the-startup-framework-to-validate-your-idea-before-you-spend-1-5c475a3bbd6f
 * I need this as my life motto https://medium.com/life-learning/never-tell-people-what-you-do-124be62f0751

## 11/18/2015
 * https://www.youtube.com/watch?v=2BpGMKtoB4Y what not to do. super interesting tho 

## 11/23/2015
 * small business accounting software https://www.xero.com/

## 11/25/2015
 * BRAND BUILDING: http://firstround.com/review/three-moves-every-startup-founder-must-make-to-build-a-brand-that-matters/

## 11/30/2015
 * Explains my ideology on building software https://simple.wikipedia.org/wiki/Occam%27s_razor

## 12/3/2015
 * beknontho categories http://getthinglist.co/

## 12/6/2015
 * Really good HTML5 site templates http://html5up.net/

## 12/7/2015
 * `kill %1` kill first job put in bg. Super useful for killing simpleHTTPservers that exit wrong.

## 12/10/2015
 * iOS 8-like transforms (good for images and shiite) https://github.com/Rich-Harris/ramjet
 * Blurry DOM probs? No prob! http://keithclark.co.uk/articles/gpu-text-rendering-in-webkit/
 * DISTRUPTIVE INNOVATION https://hbr.org/2015/12/what-is-disruptive-innovation

## 1/14/2016
 * http://getmwf.com/ Microsoft Web Framework - clean, simple design
 * https://gasket.io/ Google sheets as frontend

## 1/18/2016
 * Pretty print curled JSON by `| python -m json.tool`
 * Good docker hygiene http://blog.yohanliyanage.com/2015/05/docker-clean-up-after-yourself/
 * Where's all my space?? `ncdu` is the shiz http://unix.stackexchange.com/questions/125429/tracking-down-where-disk-space-has-gone-on-linux
 * Get the most out of physical raw material http://svgnest.com/

## 1/20/2016
 * MySQL remote access: http://www.cyberciti.biz/tips/how-do-i-enable-remote-access-to-mysql-database-server.html
 * `service mysql stop/start` works better than restart

## 1/21/2016
 * Cron jobs! Can't believe didn't know how to use /noob https://help.ubuntu.com/community/CronHowto

## 1/26/2016
 * Novella that might help with design http://www.fastcodesign.com/3045202/wanted/the-classic-novella-iflatland-i-finally-gets-the-design-makeover-it-deserves

## 1/27/2016
 * ```Asking someone to change deep-seated beliefs like political or religious viewpoints is asking them to run a mental marathon, and the vast majority of people cannot be bothered. Often only the youth, with healthy energetic minds stay in a state of flux in their viewpoints.``` http://robrhinehart.com/?p=570
 * The right way to start building a product: http://www.themacro.com/articles/2016/01/minimum-viable-product-process/
 * Beautiful reason why we work on web: https://remysharp.com/2016/01/20/why-i-love-working-with-the-web
 * Study this during free time! jQuery original source with dev commentary! http://genius.it/5113970/ejohn.org/files/jquery-original.html 
 * Nice flex based grid system http://leejordan.github.io/reflex/docs/

## 2/1/2016
 * https://www.udacity.com/course/intro-to-statistics--st101
 * Find details under TIL/2016-2-1.md

## 2/3/2016
 * The best UI design I have ever seen http://fantasy.co/work
 * Super useful article about inline-block http://designshack.net/articles/css/whats-the-deal-with-display-inline-block/

## 2/4/2016
 * Answer 1: Tooltip prop in html, Answer 2: CSS only tooltip! http://stackoverflow.com/questions/7117073/how-to-add-a-tooltip-to-a-div


## 2/7/2016
 * SQL for humans! https://github.com/kennethreitz/records
 * Lessons from a failed startup https://medium.com/@producthunt/the-rise-and-fall-of-everest-the-app-b0d2e6cb594c#.bcodfg894

## 2/10/2016
 * Philosophical concepts in an interesting format https://www.reddit.com/r/psycho_alpaca/comments/3qoyve/wp_ever_since_you_were_born_youve_possessed_the/
 * `The worst word you can be called as an entrepreneur is timid.` http://www.businessinsider.com/dating-a-model-taught-me-about-opportunity-2014-11

## 2/16/2016
 * AI for robotics! Udacity is fucking awesome. https://www.udacity.com/course/artificial-intelligence-for-robotics--cs373

## 2/19/2016
 * SUPER SIMPLE APIS! <3 This + flask or whatever https://github.com/timothycrosley/hug

## 2/22/106
 * `argv` in python gets args after running script like script_name, arg1, arg2, arg3 = argv `python script.py blah blah blah`
 * Probability distributions see 2016-2-22.md
