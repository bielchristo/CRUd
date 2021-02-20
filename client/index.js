function handleClick(){
  // value from the input box
  let message = document.getElementById('message-input').value
  let list = document.getElementsByTagName('ul')[0]
  let note = document.createElement('li')
  note.innerHTML = message
  list.appendChild(note)

  fetch('/', {
    method: 'POST',
    body: JSON.stringify({ message }),
    header: {
      'Content-type': 'application/json',
    }
  })
  .then((data) => data.json())
  .then((data) => console.log('POST: ', data))
  .catch((err) => console.log('error in POST: ', err))

}
