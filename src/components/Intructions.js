import "./Info.css"

function Instructions() {
    return (
        <div className="header">
            <h1>Instructions</h1>
            <div className='heading'>
                <h2 className='inline'>
                    Input your name and the food you want to bring (optional to input food items)
                </h2>
                <h2 className='inline'> 
                    Input the month and day as a number
                </h2>
                <h2 className='inline'>
                    Please contact us at ___@gmail.com for more information on how to get involved.

                </h2>
            </div>
        </div>
    );
}

export default Instructions;
