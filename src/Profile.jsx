import { useEffect, useState } from 'react'


export default function Profile() {
  const [ user, setUser] = useState({})
  const [ name, setName] = useState('')

useEffect(() => {
  fetch(`https://api.github.com/users/mathquente`)
  .then(response => response.json())
  .then(data => setUser(data))
}, [])

function handleUserSearch(){
  fetch(`https://api.github.com/users/${name}`)
  .then(response => response.json())
  .then(data => setUser(data))
}

  return (
    <>
      <h2>
        Procurar usuário
      </h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value) } placeholder='Digite o nome de usuário'/>
      <button onClick={handleUserSearch}>Enviar</button>
      <h1>{user?.login}</h1>
      <img
        className="avatar"
        src={user?.avatar_url}
        alt={'Photo of ' + user?.name}
      />
    </>
  );
}
