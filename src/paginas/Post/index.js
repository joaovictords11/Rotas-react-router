import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo"
import ReactMarkdown from "react-markdown"
import "./Post.css"
import NaoEncontrada from "paginas/NaoEncontrada"
import PaginaPadrao from "componentes/PaginaPadrao"
import PostCard from "componentes/PostCard"

const Post = () => {

    const parametros = useParams()
    
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NaoEncontrada/>
    }

    const postsRecomendados = posts
        .filter(post => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return(
        <PaginaPadrao>
            <PostModelo 
                titulo={post.titulo} 
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h3 className="tituloOutrosPosts">Outros posts que você pode gostar:</h3>

                <ul className="postsRecomendados">
                    {postsRecomendados.map((post) => (
                        <PostCard key={post.id} post={post}/>
                    ))}
                </ul>

            </PostModelo>
        </PaginaPadrao>
    )
}

export default Post