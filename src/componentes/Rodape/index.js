import "componentes/Rodape/Rodape.css"
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"

const Rodape = () => {
    return(
        <footer className="rodape">
            <MarcaRegistrada/>
            <p>Desenvolvido por João.</p>
        </footer>
    )
}

export default Rodape