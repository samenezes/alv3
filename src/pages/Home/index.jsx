import { useState } from 'react'
import styles from './Home.module.css'
import ListaTemp from '../../components/ListaTemp'
import { Link } from 'react-router-dom'

function Home() {
    const [temperaturas, setTemps] = useState([]);
    const [AddedTemps, setAddedTemps] = useState([]);
    const [DelTemps, setDelTemps] = useState([]);
    const [temperatura, setTemp] = useState('');
    
    function AddTemp() {
        if (temp.trim() !== '') {
          settemps([...temps, { t: temp, estado: true }]);
          settemp('');
        }
      }
    
      function alterarEstadoTemp(num) {
        const novaLista = [...temps]
        novaLista[num].estado = !novaLista[num].estado;
        setTemps(novaLista);
    
        if (novaLista[num].estado) {
          const novaListaAdds = AddedTemps.filter((_, i) => i !== num);
          setAddedTemps(novaListaAdds);
        } else {
          const tempRemovida = novaLista.splice(num, 1)[0]      
          setDelTemps([...DelTemps, tempRemovida]);
        }
      }

    function DelTemp(index) {
        const novaLista = [...temps];
        novaLista.splice(index, 1);
        setTemps(novaLista);
    }

    return (
    <>
        <h1 className={styles.title}>Temperaturas</h1>

        <form className={styles.form}>
            <p className={styles.common}>Adicionar nova Temperatura</p>
            <input type="text" className={styles.inputAdd} placeholder="Digite o valor da temperatura"></input> 
            <button className={styles.btnAdd} onClick={AddTemp}>+</button> <br></br>
            <button
                type='button'
                onClick={() => {
                    setMostrarAdds(true);
                    setMostrarDels(false);
                }}
                >
                Mostrar Adicionadas
                </button>
                <Link to={'/TempAdd'}>
                <button
                type='button'
                onClick={() => {
                    setMostrarAdds(false);
                    setMostrarDels(true);
                }}
                >
                Mostrar Removidas
                </button>
            </Link>
            
        </form>
        <main>
        {temps.length > 0 &&
          mostrarAdds
            ? temps.map((temp, index) => (
                <TempList key={index} temp={temp} num={index} alterarEstadoTemp={alterarEstadoTemp} DelTemp={DelTemp}/>
              ))
            : null}
        {DelTemps.length > 0 &&
          MostrarDels
            ? DelTemps.map((temp, index) => (
                <TempList key={index} temp={temp} num={index} alterarEstadoTemp={alterarEstadoTemp} removerTarefa={DelTemp}/>
              ))
            : null}
      </main>

    </>
    )
}

export default Home