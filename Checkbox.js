const fs = require('fs')

fs.readFile('my-file.txt', 'utf8', (err, data) => {
  if (err) throw err
  
  // Split the data on newline characters to create an array of strings
  const items = data.split('\n')

  // Loop over the array of strings and create a checkbox for each item
  items.forEach((item) => {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.value = item
    document.body.appendChild(checkbox)
  })
})
