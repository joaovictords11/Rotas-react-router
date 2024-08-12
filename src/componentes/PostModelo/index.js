import styles from "./PostModelo.module.css"

const PostModelo = ({ fotoCapa, titulo, children }) => {
    return(
        <section className={styles.postModeloContainer}>
            <div 
                className={styles.fotoCapa} 
                style={{backgroundImage: `url(${fotoCapa})`}}>
            </div>

            <h2>{titulo}</h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </section>
    )
}

export default PostModelo