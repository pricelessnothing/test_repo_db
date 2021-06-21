import path from 'path'
import simpleGit from 'simple-git'

const fs = require('fs')

export { push, init }

let git
let baseDir

function push(filename, data) {
  const fullname = path.resolve(baseDir, filename)
  fs.writeFileSync(fullname, data)
  git.add(fullname)
  git.commit(`updated ${filename}, ${new Date().toString()}`)
  git.push()
}

function init() {
  baseDir = path.resolve(__dirname, 'sitemaps')

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir)
  }

  git = simpleGit(baseDir)
  git.clone(
    'https://pricelessnothing:uduvuresy7556@github.com/pricelessnothing/test_actual_repo.git',
    baseDir,
  )
}
