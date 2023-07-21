export function TodoItem(props) {
    return(
      <li>
        <div style={{ display:"flex" }}> 
          <span> V </span>
          <p>{props.item}</p>
          <span> X </span>
        </div>
      </li>
    )
}