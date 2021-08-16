
//Ao invés de {props.texto}, se colocarmos {props.children}, poderemos ter uma tag de fechamento <Item> </Item>
const Item = ({children})=> {
    return (
        <>
            <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
                 {children} 
            </a>
        </>
    )
}

export default Item;