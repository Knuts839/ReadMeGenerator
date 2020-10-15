function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
}

function renderLicenseLink(license) {
    if (license !== "None") {
        return (
            `\n* [License](#license)\n`
        )
    }
    return ''
}

function renderLicenseSection(license) {
    if (license !== "None") {
        return (
            `## License

This project is licensed under the ${license} license.`
        )
    }
    return ''
}

function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}
## Contact Information

${data.contactInformation}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Final](#finalThoughts)

* [Questions](#questions)


## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## finalThoughts 


${data.finalThoughts}


## Questions

If you have any questions about my repo, open an issue or contact me directly at ${data.email}. All my other work can be located at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;