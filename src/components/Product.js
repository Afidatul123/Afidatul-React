export default function Product(props){
    return(
        <div
        style={{
            padding: 10,
            borderRadius: 8,
            float: "left",
            textAlign: "center",
            margin: 3
        }}
        > 
        <img src={props.image} width="200" height="160"/>
        <h2>{props.name}</h2>
        <h3>{props.price}</h3>
        <button className="button" onklik={props.onClick}>-</button>
        <button className="button" onClick={props.onClick}>+</button>
        </div>
    )
}