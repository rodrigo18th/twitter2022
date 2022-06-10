import Butao from './butao';
import './Twitter.css';

function Twitter({foto, nome, user}){

    return(
        <div className="container">
            <div className='perfil'>
            <img className='imagem' src={foto}/>

            {nome && <p className="texto"> <strong>{nome}</strong> 
            <br></br><span>{user}</span> </p>}
            </div>
            <Butao/>
        </div>
    );
}

export default Twitter;