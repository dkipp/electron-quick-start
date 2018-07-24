// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// https://github.com/crilleengvall/electron-tutorial-app/blob/master/assets/js/menu.js

function importSectionsToDOM() {
  const links = document.querySelectorAll('link[rel="import"]')
  Array.prototype.forEach.call(links, function (link) {
    let template = link.import.querySelector('.section-template')
    let clone = document.importNode(template.content, true)
    document.querySelector('#content').appendChild(clone)
  })
}

importSectionsToDOM();