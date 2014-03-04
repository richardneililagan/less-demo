# less-demo

LESS demo is a web presentation deck touching on a very high level introduction
to CSS preprocessors (LESS and SASS). Samples in this presentation are written in __LESS__.

This presentation is written purely in __web technologies__ (just HTML5, CSS3 and Javascript!),
and makes use of LESS CSS for presentation styles.

Animation and positioning styles are dynamically provided by the fantastic
[impress.js](https://github.com/bartaz/impress.js/) framework by [Bartek Szopka](https://github.com/bartaz).

Feel free to clone / fork this repository for your own reference / study!

* __LESS CSS__ - http://lesscss.org
* __SASS__ - http://sass-lang.com


## Using this presentation

Viewing the code on this presentation is available to everyone.
Just browse through the code structure in this repository, no problem!

A better way to study it though is to actually run this presentation on your machine.
Check out how everything comes together and works.


### Prerequisites

To do that, you'll need the following on your machine:

#### git

> Your machine will need git to be able to efficiently work with this code repository.
(Plus, git is awesome to try out as part of a developer's toolkit!)

> [You can get the latest git version for your machine here](http://git-scm.com).

#### Node

> This project uses Node so that you can run it (as a website) on most any computer,
not just a dedicated server. To be able to run the presentation, you'll need to install
Node on your machine.

> [You can get the latest Node version for your machine here](http://nodejs.org).


### Running the presentation

In your git bash shell, get the presentation's code: (_You may want to create a folder for it first though_)

    git clone git@github.com:richardneililagan/less-demo.git

This will create a folder called `less-demo` in your computer, with some preliminary code.
To fully initialize the code, run the following:

    cd less-demo
    npm install

This will install all the prerequisites of the presentation.

Once that's done, run the following to start the web server:

    node index

You should get a message that says `App listening at port 8080.`.
This means that the server has been started successfully!

At this point, just point your favorite browser to http://localhost:8080 to run the presentation.

#### Accessing the code behind a corporate proxy

If you're behind a proxy, you might get an error when running `npm install`, as this
command might initially not be using it.

To fix this, run the following two commands to instruct `npm` to use the proxy of your choice:

    npm config --global set proxy http://your.proxy.com:port
    npm config --global set https-proxy http://your.proxy.com:port



## Code structure

The CSS and Javascript files used by this project's web pages are set up so that
the source files in `/assets` are pre-processed / pre-compiled into their respective
folders in `/pub`.

For example, `/assets/styles/src/style.less` is compiled into `/pub/styles/style.css`
and `/pub/styles/style.min.css`.

This is done using a predefined grunt task. ([More info on GruntJS here.](http://gruntjs.com))

Feel free to edit the `.less` files in `/assets` to your liking.
__Remember to compile the `.less` files to `.css`!__ :

    grunt compile-scripts

Even better, you can instruct grunt to
__watch files for changes, and automatically compile files when anything changes__:

    grunt watch

If you're savvy, you can find more information on how grunt looks at this project
by reading the code in `gruntfile.js`.

