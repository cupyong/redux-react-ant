var nodemon = require('nodemon');
var path = require('path')


nodemon({
	  script: path.join(__dirname,'/server/index.js'), 
	  ext: 'js',
	  watch: [
	    path.join(__dirname,'/server')
	  ],
    "execMap": {
      "js": "node --harmony"
    },
	
})