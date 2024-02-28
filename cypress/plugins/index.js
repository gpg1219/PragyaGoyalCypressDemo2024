const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const mochawesome = require('mochawesome');

module.exports = (on, config) => {
  on('task', {
    async mochawesomeMerge(options) {
      const report = await merge(options);
      return report;
    },
    async mochawesomeReport(options) {
      // Generate Mochawesome report
      await generator.create(options);

      // Create Mochawesome JSON report
      const jsonReport = await mochawesome.create(options);
      console.log('Mochawesome JSON report created:', jsonReport);

      // Merge Mochawesome JSON report
      const mergedReport = await merge({
        files: [jsonReport],
      });
      console.log('Merged Mochawesome JSON report:', mergedReport);

      return mergedReport;
    },
  });
};



// const { exec } = require('child_process');
// const { merge } = require('mochawesome-merge');
// const generator = require('mochawesome-report-generator');

// module.exports = (on, config) => {
//   on('task', {
//     async mochawesomeMerge(options) {
//       const report = await merge(options);
//       return report;
//     },
//     async mochawesomeReport(options) {
//       // Generate Mochawesome report
//       await generator.create(options);

//       // Run the mochawesome reporter command after every test run
//       const command = 'npx cypress run --reporter mochawesome';
//       const { stdout, stderr } = await runCommand(command);
//       console.log('Mochawesome reporter command output:', stdout);
//       if (stderr) {
//         console.error('Error executing mochawesome reporter command:', stderr);
//       }
//     },
//   });
// };

// const runCommand = (command) => {
//   return new Promise((resolve) => {
//     exec(command, (error, stdout, stderr) => {
//       resolve({ stdout, stderr });
//     });
//   });
// };





// const { merge } = require('mochawesome-merge');
// const generator = require('mochawesome-report-generator');

// module.exports = (on, config) => {
//   on('task', {
//     async mochawesomeMerge(options) {
//       const report = await merge(options);
//       return report;
//     },
//     async mochawesomeReport(options) {
//       await generator.create(options);
//     },
//   });

//   on('after:run', () => {
//     // Run the mochawesome reporter command after every test run
//     const exec = require('child_process').exec;
//     exec('npx cypress run --reporter mochawesome', (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Error executing mochawesome reporter command: ${error}`);
//         return;
//       }
//       console.log(`Mochawesome reporter command output: ${stdout}`);
//     });
//   });
// };





  