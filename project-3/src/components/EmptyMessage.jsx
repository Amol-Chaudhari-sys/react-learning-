const EmptyMessage = (props) => {
    let {items} = props;
    
    return (<>
        {items.length ===0 && <h3>i am little more hungery </h3>}
         {items.length === 0 ? <h1>I am still Hungery </h1> : null }
        </>
    );

};

export default EmptyMessage;
