import { useState } from "react"

function POST(path, data) {
  return fetch(`http://localhost:5000${path}`,
  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  )
}

function Commands(props) {
  const [text, setText] = useState('Enter Command');
  const [name, setName] = useState('');

  const onChange = e => {
    setText(e.target.value)
  }

  const onClick = e => {
    e.preventDefault();
    POST('/post', {name: text}).then(
      async (resp) => {
        const json= await resp.json()
        console.log(json.name)
        setName(json.name)
      }
    )
  }

  return (
    <div>
      <form>
        <label>Enter Command:</label>
        <input placeholder={text} onChange={onChange} />
        <input type="submit" value="Send" onClick={onClick} />
      </form>
    <p>Command sent: <b>{name}</b></p>
    </div>
  )

}

export default Commands;