//write a custom java script action to build and publish a nuget package to github packages. 
// The action should be triggered on push to main branch and should use the GITHUB_TOKEN secret for authentication. The action should also include steps to build the project, pack the nuget package, and publish it to github packages. The action should be defined in a file called index.js in the .github/actions/build directory of the repository.

//index.js
const { exec } = require('child_process');

exec('dotnet build', (err, stdout, stderr) => {
  if (err) {
    console.error(`Build failed: ${stderr}`);
    process.exit(1);
  }
    console.log(`Build succeeded: ${stdout}`);
    exec('dotnet pack --output ./nupkg', (err, stdout, stderr) => {
        if (err) {
            console.error(`Pack failed: ${stderr}`);
            process.exit(1);
        }
        console.log(`Pack succeeded: ${stdout}`);
    });
});