# Fluig-Utils - call Fluig services to do the hard work
This project is an [AngularJS](http://angularjs.org/) web app.
You can use it to quickly create multiples requests, cancel all requests, create fake company, fake users, and much more...
All you need is a Fluig instance running anywhere...

![Screen](https://viniciusmichelutti.github.io/fluig-utils/screen.png)

## Getting Started
To get you started you can simply clone this repository and install the dependencies:

### Install Dependencies
We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* You get the tools you depend upon via `npm`, the [node package manager][npm].
* You get the angular code via `bower`, a [client-side code package manager][bower].

I have preconfigured `npm` to automatically run `bower` so you can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools that you need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
this project changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application
This project is preconfigured with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/`.

### Tech
* AngularJS
* Node
* A lot of JS