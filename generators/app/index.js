const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts)
    }

    initializing() {
        this.log('Thanks for using yeoman')
    }

    async prompting() {
        this.answers = await this.prompt([
          {
            type: "input",
            name: "name",
            message: "Your project name"
          }
        ]);
    }

    writing() {
        this.fs.copy(
            this.sourceRoot(),
            this.destinationPath(`${this.answers.name}`)
        )
    }

    end() {
        this.log('Generate files done')
    }
}