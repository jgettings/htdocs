// https://github.com/jsonresume/resume-schema
const fs = require('fs');
const resumeSchema = require('@jsonresume/schema');
const resumeObject = JSON.parse(
  fs.readFileSync('./src/data/resume.json', 'utf8'),
);
resumeSchema.validate(
  resumeObject,
  function (err, report) {
    if (err) {
      console.error('The resume was invalid:', err);
      process.exit(1);
    }
    console.log('Resume validated successfully:', report);
  },
  function (err) {
    console.error('The resume was invalid:', err);
    process.exit(1);
  },
);
