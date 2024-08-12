import styles from "paginas/Inicio/Inicio.module.css"
import PostCard from "componentes/PostCard"
import posts from "json/posts.json"

const Inicio = () => {
    return(
        <ul className={styles.posts}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
        </ul>      
    )
}

export default Inicio