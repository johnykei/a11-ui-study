module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: "What's component name? (ex. Header)"
      },
    ]
    return inquirer
    .prompt(questions)
    .then(answers => {
      const { name } = answers
      const path = `ui/${name}`
      return { ...answers, path }
    })
  }
};
