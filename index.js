const postman = require('./postmanJS/postmanRun')

// postman.postmanRun({
//     collection: '/Users/danielbartolo/Desktop/Example-Runs.postman_collection.json',
//     environment: '/Users/danielbartolo/Desktop/Env-Example-Run.postman_environment.json',
//     htmlReportDir: '/Users/danielbartolo/Desktop/test.html'
// })


//here is where you will export object, which will have postman.postmanRun, etc
module.exports.postmanRun = postman.postmanRun