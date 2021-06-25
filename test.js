const  test = require("github-empty-commit")
const example = async () => {
  const success = await test.githubEmptyCommit({
    // The username/organization of the repository owner
    owner: 'blackstend',
    // The name of the repository
    repo: 'E-commerce_vue',
    commitMessage: 'auto build',
    ref: 'heads/master'
  })
}

example()