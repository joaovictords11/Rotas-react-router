import BotaoPrincipal from "componentes/BotaoPrincipal"
import "componentes/PostCard/PostCard.css"
import { Link } from "react-router-dom"

const PostCard = ({ post, id }) => {
    return(
        <li key={id} className="post">
            <img 
                className="capa" 
                alt="imagem de capa do post"
                src={`/assets/posts/${post.id}/capa.png`}
            />

            <h3 className="titulo">{post.titulo}</h3>

            <Link to={`/posts/${post.id}`}>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </Link>
        </li>
    )
}

export default PostCard