const test = require('../index')

test.postmanRun({
    collection: '/Users/danielbartolo/Desktop/Example-Runs.postman_collection.json',
    environment: '/Users/danielbartolo/Desktop/Env-Example-Run.postman_environment.json',
    htmlReportDir: '/Users/danielbartolo/Desktop/test.html'
})