export default function MyButton(props) {
  return (
    
    <button onClick={props.count}>count: {props.value}</button>
  );
}