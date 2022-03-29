import {InputLetter} from "../redux/actions/InputLetter";
import {useDispatch} from "react-redux";



function Key(props){

    const dispatch =useDispatch();

    return(
        <div className="key" onClick={()=>dispatch(InputLetter(props.vl))}>
            {props.vl}
        </div>
    )
}

export default Key;