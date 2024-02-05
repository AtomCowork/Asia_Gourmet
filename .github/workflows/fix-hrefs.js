import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

function fixHref(href) {
  return href.replace(/^\//, './')
}

const files = readdirSync('dist')

for (const file of files) {
  if (file.endsWith('.html')) {
    const content = readFileSync(join('dist', file), 'utf-8')
    const newContent = content.replace(/href="(\/[^"]+)"/g, (match, href) => {
      return `href="${fixHref(href)}"`
    })

    writeFileSync(join('dist', file), newContent, 'utf-8')
  }
}
