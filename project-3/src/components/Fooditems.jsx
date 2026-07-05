import Items from "./Item";
const Fooditems = (props ) => {
    let {items} = props;
  
  return (<><ul className="list-group">
        {items.map((item) => (
            <Items key={item} fooditem= {item}></Items>
        ))}
      </ul>
      </>  
  );
};
export default Fooditems;
