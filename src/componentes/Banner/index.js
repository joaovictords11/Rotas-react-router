import styles from './Banner.module.css'
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.jpeg"

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou João Victor, estudante de ADS na Fiap. 
                    Aqui compartilho vários conhecimentos, 
                    espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    alt='Circulo colorido'
                />

                <img 
                    className={styles.minhaFoto} 
                    src={minhaFoto}
                    alt='Foto João Victor'
                />
            </div>
        </div>
    )
}

export default Banner