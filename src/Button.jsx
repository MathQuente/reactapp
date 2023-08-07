export default function MyButton(props) {
  function handleClick() {
    props.count()
    alert('You clicked me!');
  }

  return (
    
    
    <button className="count"onClick={handleClick}>
      count: {props.value} 
      </button>
  );
}