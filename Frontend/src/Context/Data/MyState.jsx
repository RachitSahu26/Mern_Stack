import myContext from "./MyContext.js";


function MyState(props) {
    return (
        <myContext.Provider>
            {
                props.children
            }

        </myContext.Provider>


    )
}


export default MyState;