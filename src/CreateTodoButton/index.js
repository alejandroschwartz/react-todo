import './CreateTodoButton.css';

export function CreateTodoButton() {
  const handleClick = () => {
    console.log("CLICK:::")
  }

  return (
    <button 
      className='CreateTodobutton'
      onClick={() => handleClick()}
    >
      Nuevo
    </button>
  )
}