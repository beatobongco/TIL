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
f
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

## 2/22/2016
 * `argv` in python gets args after running script like script_name, arg1, arg2, arg3 = argv `python script.py blah blah blah`
 * Probability dipstributions see 2016-2-22.md

## 2/25/2016
 * Accelerated Mobile Pages (!!) https://github.com/ampproject/amphtml

## 2/26/2016
 * "First principles" or how to make hard decisions. A good explanation of stick to the facts https://medium.com/@mmccue/the-most-powerful-lesson-i-ve-ever-learned-in-business-4d89e95ab250#.4cpr824je

## 3/1/2016
 * Small JS lib for onboarding apps! http://introjs.com/
 * React Slides https://github.com/FormidableLabs/spectacle

## 3/2/2016
 * Revisit react basics http://courses.reactjsprogram.com/courses/reactjsfundamentals
 * Easy lazyloading images in vanilla js https://github.com/aFarkas/lazysizes

## 3/3/2016
 * DEEP LEARNING https://www.udacity.com/course/viewer#!/c-ud730/l-6370362152/m-6379811815
 * ADVANCED PYTHON https://www.udacity.com/courses/cs212

## 3/8/2016
 * capture the screen, face, voice and all the touches/clicks on a device, and then automatically upload it to your dashboard for you to view, collaborate, and share. https://lookback.io/

## 3/9/2016
 * Static render React https://github.com/necolas/react-native-web
 * Configurable React Stateless Functional UI Components https://github.com/jxnblk/rebass
 * REACT EVERYWHERE WOO https://github.com/necolas/react-native-web
 * CSS to use for your next project http://www.basscss.com/
 * Brent Jackson's reading list! Front End + UX right up my alley!! http://jxnblk.com/reading-list/

## 3/16/2016
 * How to get and choose clients https://medium.com/@letsworkshop/david-ogilvy-s-20-unconventional-rules-for-getting-clients-319f9abed7d5

## 3/17/2016
 * Super awesome free fonts!! http://open-foundry.com/hot30

## 3/20/2016
 * Easy signups, would be nice to copy https://magicsignup.com/

## 3/25/2016
 * VIRTUAL CREDIT CARDS! https://privacy.com/

## 3/29/2016
 * Daily top 10 Hacker News! http://www.daemonology.net/hn-daily/

## 4/2/2016
 * Forming a pyramid base in climbing http://www.climbstrong.com/articles/20140501

## 4/6/2016
 * Github post commit hooks http://oli.jp/2011/github-pages-workflow/ Don't forget to `chmod +x .git/hooks/post-commit`

## 4/13/2016
 * Messeger platform - bots for facebook https://messengerplatform.fb.com/
 * Wit AI Natural language for devs https://wit.ai/
 * /usr/bin/env: node: No such file or directory FIX `ln -s /usr/bin/nodejs /usr/bin/node`
 * `flex: none;` This is equivalent to flex: 0 0 auto. It sizes the item according to its width/height properties, but makes it fully inflexible. This is similar to flex: initial except it is not allowed to shrink, even in an overflow situation. Super useful for divs with no content and background image. https://css-tricks.com/almanac/properties/f/flex/#article-header-id-4
 * TODO: Make a tutorial for flex. Remember: `display: flex;`, `flex: 1`, `overflow: auto or hidden;` are your 3 key css properties to modify to get awesome scaling apps.

## 4/25/2016
 * Do stuff on a previous page with `window.opener`! https://mathiasbynens.github.io/rel-noopener/

## 5/2/2016
 * CSS: The `~` combinator separates two selectors and matches the second element only if it is preceded by the first, and both share a common parent.

## 5/4/2016
 * Minimalist CSS framework + looks quite nice https://milligram.github.io
 * A lot of interesting CSS effects here https://github.com/h5bp/Effeckt.css
 * Best simple CSS tooltips http://kushagragour.in/lab/hint/
 * Super awesome CSS fw based on flexbox https://github.com/jgthms/bulma

## 5/5/2016
 * docker logs take up a lotta space (like gigs) why not delete them? `truncate -s 0 /var/lib/docker/containers/*/*-json.log`
 * Pretty + quick CSS spinners http://projects.lukehaas.me/css-loaders/

## 5/10/2016
 * Clean way of preloading via CSS only
 ```
 #preload {
		background: url(../img/move.gif) no-repeat -9999px -9999px;
	}
	```

## 5/17/2016
 * Client side JS notebook. Super beautiful! https://github.com/JoelOtter/kajero
 * Find images visual center http://javier.xyz/visual-center/

## 5/18/2016
 * Create flaks project: http://getflakes.com/ + Flask to create awesome as shit dumb UI and allow programmers to type super little shit but get a great dumb UI. ADD to Flaks: https://github.com/ankane/blazer
 * Awesome JS dates, good for cohort https://date-fns.org/

## 5/25/2016
 * Dedicated events db (could replace bitmapist!) http://traildb.io/

## 5/31/2016
 * 4 startup interview questions https://medium.com/lightspeed-venture-partners/most-tech-interviews-suck-the-only-4-questions-that-matter-1a71181ef4d4#.2bmsec417

## 6/1/2016
 * Beautiful short book on typography and design https://drive.google.com/open?id=0BwLflDF52HU6OUM5N2Y1RThDaHM
 * Nice to teach bite sized concepts. This one is for redux https://github.com/rstacruz/pocket-explainer
 * Beautiful pixelart http://saymygame.com/

## 6/3/2016
 * UI in movies! Great to study! http://www.pushing-pixels.org/fui/

## 6/7/2016
 * Can make awesome stuff with this! http://googlecreativelab.github.io/anypixel/ UI KATA!

## 6/20/2016
 * Intent and not permission, good for a distributed startup with non-drones https://m.signalvnoise.com/if-you-ask-for-my-permission-you-wont-have-my-permission-9d8bb4f9c940#.akg8ihtj3
 * LE BEST LANDING http://cuberto.com/

## 6/22/2016
 * Extra input like combobox and datepicker http://alexkuz.github.io/react-input-enhancements/

## 6/27/2016
 * Material design dark hex shades https://material-design.storage.googleapis.com/publish/material_v_8/material_ext_publish/0Bx4BSt6jniD7VHFTNDBGODlvakk/style_color_themes_dark1.png

## 6/28/2016
 * Advice to startups to get off venture capital https://skift.com/2016/01/02/how-we-got-off-the-addiction-to-venture-capital-and-created-our-own-way-to-profits/
 * A "WOW!" animation library anime.js https://github.com/juliangarnier/anime http://codepen.io/collection/XLebem/

## 7/5/2016
 * Better than wow.js because its free and also performant and lightweight. Triggers animation on scroll https://github.com/terwanerik/ScrollTrigger
 * Less than 1kb parallax library https://github.com/dixonandmoe/rellax

## 7/7/2016
 * Do things in pure CSS! https://github.com/NamPNQ/You-Dont-Need-Javascript

## 7/18/2016
 * Animate your favicon! http://lab.ejci.net/favico.js/

## 7/29/2016
 * In love with Vue.js http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/ http://blog.evanyou.me/2015/12/20/vuejs-2015-in-review/
 * Evan You: `“Progressive Framework” - we can scale up the framework’s complexity incrementally, only when the project’s inherent complexity demands it.`
 * Make address usable again / kill process that is using the address `sudo fuser -k 80/tcp`
 * Super pretty answer to What is Web Design http://jgthms.com/web-design-in-4-minutes/
 * Really pretty HTML CSS tutorials http://marksheet.io/

## 8/4/2016
 * Amazing frontend portfolio! http://www.nerval.ch/

## 8/18/2016
 * For frontend design, more efficient to use CSS instead of writing more JS http://www.heydonworks.com/article/on-writing-less-damn-code

## 8/26/2016
 * Vitaly Friedman is prettty awesome for frontend stuff https://www.youtube.com/watch?v=U4xd2ZwMOIk

## 9/2/2016
 * In Chrome dev console, one can highlight an element and type in console $1 to reference that element and do shit to it.

## 9/9/2016
 * To remove directories, run `git clean -f -d` or `git clean -fd`.

## 10/5/2016
 * Learned a lot setting up Ubuntu on Thinkpad x260. Skylake does not play well with Ubuntu. Use powertop and put on all tunables. Make sure deeper p states are used. https://wiki.archlinux.org/index.php/powertop
 * http://askubuntu.com/questions/112705/how-do-i-make-powertop-changes-permanent

## 10/6/2016
 * Enable ThinkPad fingerprint reader http://www.thinkwiki.org/wiki/How_to_enable_integrated_fingerprint_reader_with_fprint

## 10/12/2016
 * http://jazcash.com/a-javascript-journey-with-only-six-characters/
 * Invest in durable knowledge, not all knowledge is equal and some have longer "half-lives" http://www.bennorthrop.com/Essays/2016/reflections-of-an-old-programmer.php

## 10/15/2016
 * http://youmightnotneedjs.com/

## 10/16/2016
 * https://juokaz.com/blog/becoming-a-cto
 * Ask HN: Good books on UI (for sure long half-life, its design) https://news.ycombinator.com/item?id=12711060
 * Reminds me of Beknowntho https://shift.newco.co/what-50-buys-you-at-huaqiangbei-the-worlds-most-fascinating-electronics-market-f0384d9fca32#.sijgrtodz
 * Good list of programming books http://www.billthelizard.com/2008/12/books-programmers-dont-really-read.html
 * Ask HN YouTube channel for devs https://news.ycombinator.com/item?id=12702651

## 10/18/2016
 * Collection of articles, videos, and resources made by designers at Facebook. http://facebook.design/
 * DIY design education https://medium.com/facebook-design/a-diy-design-education-218a4a2d340f#.vx2rupab2
 * Icons in pure css. Awesome! http://cssicon.space/#/

## 10/23/2016
 * Fun APIs to play with https://www.reddit.com/r/webdev/comments/3wrswc/what_are_some_fun_apis_to_play_with/
 * Nice static website generator https://gohugo.io/
 * Manually curated collection of resources for frontend web developers. https://frontend.directory/p

## 10/24/2016
 * 40 Key Computer Science Concepts Explained In Layman’s Terms http://carlcheo.com/compsci
 * EXTREMELY USEFUL COLOR PALETTE THINGY https://coolors.co
 * Awesome HN comments, lots of stuff about startups, hiring, code http://danluu.com/hn-comments/

## 10/29/2016
 * Fix chrome screen tearing http://askubuntu.com/questions/766725/annoying-flickering-in-16-04-lts-chrome

## 10/30/2016
 * Great blog on startups. Article of how to de-risk https://codingvc.com/how-to-de-risk-a-startup/
 * The case for being bored, wandering around to walk, perhaps meditation. Limiting TV, computer and internet use (only a certain time where wifi is available) https://www.weforum.org/agenda/2016/09/being-bored-is-good-for-children-and-adults-this-is-why/

## 10/31/2016
 * Better fonts on Ubuntu http://www.webupd8.org/2013/06/better-font-rendering-in-linux-with.html

## 11/1/2016
 * This is how to do SEO! https://www.indiehackers.com/businesses/instapainting
 * `try to take a known working category and try to invent 20% of it, rather than 90%. Apple didn’t invent the smartphone, the MP3 player, or the computer, and yet they are super innovative and successful. You don’t have to invent a new product category either, and it’s easier to get to product/market fit when you have a baseline competitor to compete against.` http://andrewchen.co/after-the-techcrunch-bump-life-in-the-trough-of-sorrow/

## 11/10/2016
 * Data viz! https://datastudio.google.com

## 11/14/2016
 * React UI Toolkit http://blueprintjs.com/
 * Good startup ideas http://www.defmacro.org/2015/02/25/startup-ideas.html
 * Great way to run a software development company. https://dev.to/isaacandsuch/developer-driven-development/

## 11/15/2016
 * Interesting small projects to do to improve! Great for UI-Kata work https://github.com/karan/Projects#web

## 11/21/2016
 * Use css pointer events to make something not clickable and make it not block elements under it http://caniuse.com/pointer-events/embed/ https://developer.mozilla.org/en/docs/Web/CSS/pointer-events

## 11/29/2016
 * TIL: When using redis from a docker image (or redis in general actually) remember to do the following on the host server...

   - set the Linux kernel overcommit memory setting to 1 by `sysctl vm.overcommit_memory=1` and adding `vm.overcommit_memory = 1` to `/etc/sysctl.conf`. The default is 0. Redis background save may fail under low memory condition. (This is what I assume the original problem was about)
   - Increase max connections so a TCP setting can be enforced. Set `sysctl net.core.somaxconn=65535` and add ti `sysctl.conf`
   - Disable Transparent Huge Pages (THP). If enabled (by default) this will create latency and memory usage issues with Redis. Run `echo never > /sys/kernel/mm/transparent_hugepage/enabled`.
 * Lessons for the future perhaps https://www.technologyreview.com/s/602961/four-lessons-for-silicon-valley-from-its-first-startup/?utm_campaign=socialflow&utm_source=facebook&utm_medium=post
 * `git diff --cached <filename>` see changes of file

## 12/1/2016
 * Scaling up as a startup CEO https://blog.ycombinator.com/the-second-job-of-a-startup-ceo/

## 12/2/2016
 * Learn math one day, will be useful for dev. Discrete math and algos http://steve-yegge.blogspot.com/2006/03/math-for-programmers.html
 * Argument for designer + dev. Skill mastery diminishing returns, better to work on areas with larger return thus multi-discipline. http://www.forbes.com/sites/quora/2013/06/27/the-myth-of-the-myth-of-the-unicorn-designer/#1d627d783504
 * https://irondavy.quora.com/Designers-Will-Code

## 12/5/2016
 * Billing made easy https://plasso.com/billing
 * json on the command line http://200ok.ch/jq-my-new-favorite-tool-to-work-with-json-on-the-command-line/index.html
 * HTTP client for redis https://github.com/nicolasff/webdis
 * Firebase bindings for Vue https://github.com/vuejs/vuefire
 * Make phone apps with vue https://github.com/vuejs/vue-touch

## 12/6/2016
 * Cut mp3's online. Very useful. http://mp3cut.net/
 * Next time I need js client and server sync https://pouchdb.com/
 * Hot sync 2 redis https://github.com/stickermule/rump

## 12/8/2016
 * I want to learn how to create miniamlist assets of my own, ala flaticons. https://www.gimp.org/tutorials/Creating_Icons/
 * How to ship side projects http://blog.andyjiang.com/how-to-ship-side-projects/
 * Idea: CRUD-tacular. A template for extremely quick client-side-only app with user management on localforage. Kinda like a superwireframe to test concepts quickly. Not meant for real app building. Bonus if you can make data persist somehow. Includes forms and viewing of forms.
 * AESOP - A picture book blog thing like the nytimes sometimes posts that allows mobile scrolling and fading in and out of pictures that remain centered. **PRIORITY**

## 12/8/2016
 * HN people talk about side projects with passive income https://news.ycombinator.com/item?id=13150144
 * Potential startup ideas https://news.ycombinator.com/item?id=13139638
 * HN on how to supercharge code https://news.ycombinator.com/item?id=13142372

## 12/14/2016
 * Rule of Silence can be applied to UX. Only what's necessary. http://www.linfo.org/rule_of_silence.html

## 12/16/2016
 * Add a subdomain to a flask static route https://github.com/insynchq/web/issues/338
 * Shoulda totally used this waaaaay back. Flask decorators http://flask.pocoo.org/docs/0.11/patterns/viewdecorators/

## 12/20/2016
 * How to start a real business https://stripe.com/atlas/guide

## 12/21/2016
 * READ OTHER PEOPLE'S CODE https://changelog.com/posts/one-sure-fire-way-to-improve-your-coding
 * Best practical guide on starting a SaaS https://medium.com/@cliffordoravec/the-epic-guide-to-bootstrapping-a-saas-startup-from-scratch-by-yourself-part-1-4d834e1df8c1#.elp95ovw5

## 12/22/2016
 * Great layman explanation of deep learning http://www.nytimes.com/2016/12/14/magazine/the-great-ai-awakening.html?_r=0

## 12/25/2016
 * MERRY XMAS
 * Education about AI and why it might not be as scary as we think http://idlewords.com/talks/superintelligence.htm

## 1/2/2017
 * HAPPY NEW YEAR
 * Validating demand https://www.upupgrow.com/blog/2016/12/20/how-to-validate-demand-for-your-product
 * Communities with 1m users https://en.wikipedia.org/wiki/List_of_virtual_communities_with_more_than_1_million_users
 * Guide to deep learning http://yerevann.com/a-guide-to-deep-learning/
 * Principles - Ray Dalio https://www.principles.com/ https://principlesbydalio.com/

## 1/4/2017
 * Being mentally + physically challenged helps your mind stay healthy even as you age. Ties in with Talent Code (deep practice) and Dalio (being in a constant state of discomfort) http://www.nytimes.com/2016/12/31/opinion/sunday/how-to-become-a-superager.html?smid=fb-share&_r=0
 * Hangboarding for Power Endrance + Endurance http://www.rockandice.com/rock-climbing-training/hangboarding-for-endurance-not-just-for-power

## 1/7/2017
 * Developer marketing guide https://www.devmarketingguide.com/
 * Shopping cart platform for any website https://snipcart.com/

## 1/11/2017
 * Proof that email marketing is the way https://www.campaignmonitor.com/company/annual-report/2016/
 * http://githubengineering.com/moving-persistent-data-out-of-redis/

## 1/13/2017
 * https://medium.com/swlh/mediums-best-design-writing-of-2016-68de5ed2b7d9
 * Nice! Simple web design should be identifiable in a 9x9 grid https://medium.com/swlh/9x9-pixels-the-world-s-smallest-website-s-82c9e46a9fd0#.3fsg9kidg
 * Nice color pairings! Use picker in photoshop! http://www.vanschneider.com/colors/

## 1/18/2017
 * EICAR test string https://en.wikipedia.org/wiki/EICAR_test_file
 * List of naughty strings https://github.com/minimaxir/big-list-of-naughty-strings
 * Finish stuff! Even if not perfect! http://www.jacksimpson.co/finishing-being-productive-busy/
 * Be wary of zones of death/line of death on browser https://textslashplain.com/2017/01/14/the-line-of-death/
 * Historical radio broadcasts http://radio.garden/history
 * Random youtube videos with small views http://astronaut.io/

## 1/24/2017
 * https://danluu.com/programming-blogs/
 * https://danluu.com/programming-books/
 * One day I'd love to make programmatic electronic music visualizations, or interactive art
 * https://blog.framer.com/a-story-of-a-designer-conquering-mathematics-d0fd4585f0ba#.yyswavqs1
 * Or perhaps create short movies http://zulko.github.io/moviepy/
 * https://www.michaelfogleman.com/

## 1/25/2017
 * You can code Gnome shit in js using `gjs`! https://wiki.gnome.org/action/show/Projects/Gjs
 * Battlecode https://www.battlecode.org/
 * http://codedoodl.es/
 * Exactly what I want to make: https://github.com/mattdesl/audiograph.xyz
 * This too:http://2013.jsconf.asia/blog/2013/11/8/jsconfasia-2013-mrdoob-ricardo-cabello-framejs
 * Visualizations of electronic tracks, reactive to sound and movement of the crowd
 * https://en.wikipedia.org/wiki/VJing`
 * https://en.wikipedia.org/wiki/Demoscene
 * Get mp3 from youtube https://github.com/jcalazan/youtube-audio-dl
 * Curated list of materials for audioviz https://github.com/willianjusten/awesome-audio-visualization
 * https://github.com/unconed/ThreeAudio.js
 * http://raathigesh.com/Audio-Visualization-with-Web-Audio-and-ThreeJS/
 * https://devart.withgoogle.com

## 1/29/2017
 * Upload image, choose paint, it will color for you. Machine learning!! http://paintschainer.preferred.tech/
   ```
 	L1 = [1, 28, 36]
	L2 = [2, 57, 9]
	for x in map(min, L1, L2):
	  print(x)
	//output: [1, 28, 9]
   ```

## 1/31/2017
 * Learn to touchtype: Add to routine: http://www.speedcoder.net/lessons/ !!!
 * http://zty.pe/

## 2/7/2017
 * Get updated with master easily!
   `git fetch origin master`
   `git rebase origin/master`
 * `git clean -f` remove new uncommitted files

## 2/8/2017
 * Cards to bust through creative blocks https://en.wikipedia.org/wiki/Oblique_Strategies
 * https://www.gitbook.com/book/frontendmasters/front-end-handbook-2017/details
 * https://css-tricks.com/examples/ShapesOfCSS/

## 2/9/2017
 * http://www.dev-books.com/
 * https://danluu.com/web-bloat/
 * http://danluu.com/octopress-speedup/
 * http://idlewords.com/talks/website_obesity.htm
 * MET artworks can be downloaded at high res, public domain! http://www.metmuseum.org/art/collection

## 2/10/2017
 * TUNAY NA BAYANI https://ulapph-corporation.appspot.com/?checkHTTPS=yes
 * https://www.jpeg.io/ compress images!

## 2/13/2017
 * https://testmysite.thinkwithgoogle.com

## 2/15/2017
 * Good resources for beginners and those who wish to review HTML basics http://htmlreference.io/ https://internetingishard.com
 * https://illustrated-algorithms.now.sh/

## 2/16/2017
 * http://code-poetry.com/ Think about doing this with js
 * Algorithms https://www.khanacademy.org/computing/computer-science/algorithms/

## 2/17/2017
 * Useful sublime shortcuts
 * `ctrl+p` go to filename in proj
 * `ctrl+r` go to symbol etc in file
 * `ctrl+p <filename> @` go to file then to symbol, etc
 * `ctrl+g` go to line number
 * `ctrl+alt+p` switch project
 * `alt+shift+[1..4]` number of columns
 * `ctrl+w` close a file
 * `ctrl+enter` add newline after this one
 * `ctrl+ [ or ]` un/indent lines

## 2/18/2017
 * https://www.twilio.com/blog/2017/02/an-easy-way-to-read-and-write-to-a-google-spreadsheet-in-python.html

## 2/20/2017
 * Good indiehacker template https://www.indiehackers.com/businesses/cronitor https://blog.cronitor.io/the-jit-startup-bb1a13381b0#.8n62hp3cd
 * https://www.khanacademy.org/partner-content/pixar/storytelling
 * https://techcrunch.com/2017/02/18/co-founder-conflict/
 * http://nautil.us/issue/17/big-bangs/how-i-rewired-my-brain-to-become-fluent-in-math

## 2/23/2017
 * To read https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/

## 2/25/2017
 * https://paddle.com/
 * https://techcrunch.com/2016/09/28/paddle-banks-3-2m-for-an-ecommerce-platform-targeting-saas-startups/
 * https://stunning.co/

## 2/26/2017
 * NEED!! Use for testing instead of nightmare js https://github.com/bnx05/pytest-selenium
 * http://www.omgubuntu.co.uk/2016/08/peek-desktop-gif-screen-recorder-linux

## 2/27/2017
 * Awesome language exercises http://exercism.io/
 * To read https://www.scientificamerican.com/article/will-democracy-survive-big-data-and-artificial-intelligence/

## 3/3/2017
 * Careful what you type in terminal. `history | grep`

## 3/4/2017
 * https://qz.com/884448/every-successful-relationship-is-successful-for-the-same-exact-reasons/
 * Mythical 10x programmer http://antirez.com/news/112
 * http://startupclass.samaltman.com/
 * http://playbook.samaltman.com/

## 3/7/2017
 * PERFECT!!!
 * http://leafletjs.com/examples/geojson/
 * http://leafletjs.com/examples.html
 * !!!!!!!!!!!!!!!!! https://blog.ycombinator.com/onlineclass/

## 3/8/2017
 * Coding screencasts done interestingly https://scrimba.com/
 * math for computer science https://courses.csail.mit.edu/6.042/spring17/mcs.pdf
 * Beautifully done art game that shows philosophical views using snake https://pippinbarr.github.io/SNAKISMS/ Check out his blog also for cool art games!
 * Work on beatobongco.com/TheGame !
 * http://www.newyorker.com/magazine/2017/02/27/why-facts-dont-change-our-minds
 * [Personal interview process](https://github.com/beatobongco/TIL/day_notes/2017-3-8_interview.md)

## 3/10/2017
 * Giving someone ssh access, just add to `~/.ssh/authorized_keys`

## 3/13/2017
 * Greedy algorithms are basically: 1. sort via a metric, 2. get the top ranking ones that fit into constraints
 * mysql can be bound to address. Just edit `/etc/mysql/my.cnf` look for `bind-address`
 * When creating mysql users, you can define from which hosts they can connect

## 3/14/2017
 * Template for future UI kata blog posts https://medium.freecodecamp.com/how-to-talk-about-your-side-projects-18b96f192817#.b9u9nljlp
