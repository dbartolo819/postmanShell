const newman = require('newman');

function postmanRun(options) {
    newman.run({
        collection: options.collection,
        environment: options.environment,
        reporters: 'html',
        reporter: {
            html: {
                export: options.htmlReportDir //'./htmlResults.html'
            }
        }
    }, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });
}
module.exports.postmanRun = postmanRun