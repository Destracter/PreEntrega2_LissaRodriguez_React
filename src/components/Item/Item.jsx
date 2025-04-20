import { useNavigate} from "react-router-dom";

const Item = ({ product }) => {
      const navigate = useNavigate ()
      const handleClick = () => {
        navigate( '/item/$(product.id)' )
      } 
    
    return (
        <div onClick={handleClick} style={{cursor:"pointer",display:"flex",flexdirection:"column",
            alignItems:"center",border:"1px solid black",padding:10 ,margin: 10}} >
                <img style={{width:120,height:120}} src={producto.image} />
                <h3>{producto.title}</h3>
                <p>{producto.price}</p>
            </div>
    )
}

export default Item