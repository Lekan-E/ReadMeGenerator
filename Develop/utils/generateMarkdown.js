// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge

  if(data.license == 'MIT'){
    badge = 'https://img.shields.io/apm/l/vim-mode'
  }else if(data.license == 'Apache'){
    bagde = 'https://img.shields.io/aur/license/android-studio'
  }else if(data.license == 'Mozilla'){
    badge = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  }else{
    badge = 'https://img.shields.io/badge/License-Perl-0298c3.svg'
  }

  const temp = 
  `# ${data.title}
  \n![licenseBadge](${badge})
  \n## Description
  \n${data.description}
  \n## Table of Contents
  \n* [Installation] [#Installation Guide]
  \n* [Usage Information] [#usage]
  \n* [Contribution] [#Contributing]
  \n* [Tests] [#Tests]
  \n* [Questions] [#Questions]
  \n* [License] [#License]
  \n## Installation-Guide
  \n${data.installation}
  \n## Usage
  \n${data.usage}
  \n## License
  \n License under ${data.license}
  \n## Contributing
  \n${data.contribution}
  \n## Tests
  \n${data.test}
  \n ## Questions
  \nLink to GitHub profile: https://github.com/${data.username}
  \nFor further questions, feel free to email me at: ${data.email}
  `;

  return temp;

}

module.exports = generateMarkdown;
