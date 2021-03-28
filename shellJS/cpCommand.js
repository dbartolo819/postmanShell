const { exec } = require('child_process');

try {
    if (process.argv[2] === undefined) {
      throw new Error('Provide file to be copied');
    }
    if (process.argv[3] === undefined) {
      throw new Error('Provide destination for file to be copied');
    }
  } catch (e) {
    console.error(e)
  }

exec(`cp ${process.argv[2]} ${process.argv[3]}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log("Copied Successfully!")
});