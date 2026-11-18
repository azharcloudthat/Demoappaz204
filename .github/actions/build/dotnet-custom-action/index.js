const { execSync } = require('child_process');

 function run(command) {
     execSync(command, { stdio: 'inherit' });
 }
 try {
    const configuration = process.env.INPUT_CONFIGURATION || 'Release';
    run('dotnet restore');
    run(`dotnet build --configuration ${configuration}`);
    run(`dotnet test --configuration ${configuration}`);
 } catch (error) {
     console.error(error);
     console.error('Build failed');
 }
