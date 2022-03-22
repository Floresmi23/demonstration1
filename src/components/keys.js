import Key from "./key";

function Keys(){
    const keys = 'qwertyuiopasdfghjklzxcvbnm'.split("");

    let keys_ele = keys.map((itm,idx)=>
        <Key key={idx} vl={itm}/>
    )

    return(
        <div className="keys">
            {keys_ele}
            <div className={"key submit"}>Enter</div>
            <div className={"key delete"}>Delete</div>
        </div>
    )
}

export default Keys;