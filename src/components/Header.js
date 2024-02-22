import '../App.css';

function App(props) {
  return (
   <div className='flex shoping-cart'>
    <div onClick={()=>props.handleshow(false)}>Shopping Cart App</div>
    <div onClick={()=>props.handleshow(true)}>Cart
        <sup>{props.count}</sup>
    </div>
   </div>
  );
}

export default App;