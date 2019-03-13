## About

Simple, static version of a personal portfolio site, just vue.js and sass. The original plan of using node.js is separated into another repo. That is for the future when I have more time.

## How to view
You need a server to view this app. Python server is recommended due to its simplicity. 

1. Get python, if you have not already.
2. Run simple server
	```
	(python 3) python -m http.server <portNo>
	(python 2) python -m SimpleHTTPServer <portNo>
	```
3. Open browser and view localhost:<portNo>

### Setup and run sass
I used sass to compile all style into one master css. 

1. Install sass
2. cd into /src/css/ 
3. run sass watcher: `sass --watch input.scss master.css`

