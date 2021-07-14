/* eslint-disable no-console */
const execa = require('execa')
const fs = require('fs')
;(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages-1'])
    // eslint-disable-next-line no-console
    console.log('Building started...')
    await execa('npm', ['run', 'build'])
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build'
    await execa('git', ['--work-tree', folderName, 'add', '--all'])
    await execa('git', [
      '--work-tree',
      folderName,
      'commit',
      '-m',
      'gh-pages-1'
    ])
    console.log('Pushing to gh-pages-1...')
    await execa('git', ['push', 'origin', 'HEAD:gh-pages-1', '--force'])
    await execa('rm', ['-r', folderName])
    await execa('git', ['checkout', '-f', 'master'])
    await execa('git', ['branch', '-D', 'gh-pages-1'])
    console.log('Successfully deployed, check your settings')
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message)
    process.exit(1)
  }
})()
