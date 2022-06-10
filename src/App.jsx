import './App.css'
import Twitter from './Twitter'

function App() {

  const perfils = [
    {
      nome: "SpaceX",
      user: "@SpaceX",
      foto: "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"  
    },
    {
      nome: "NASA",
      user: "@NASA",
      foto: "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB.jpg"  
    },
    {
      nome: "Jeff Bezos",
      user: "@JeffBezos",
      foto: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"  
    },
  ]

  return (
    <div>
      <h1>Talvez Você Curta</h1>

      {perfils.map( (perfil) => {
        return <Twitter nome={perfil.nome} foto = {perfil.foto} user = {perfil.user} />
      } 
      )}
      <br></br>
      <a href="#">Mostrar Mais</a>
    </div>
  )
}

export default App