import React from 'react';

function CopyRightText(){
    return( <React.Fragment>
         <footer>
                        <hr/>
                        <h6 className="text-center">
                            <small>Copyright Hungry Heaven Private {new Date().getFullYear()} || All Rights Reserved</small>
                        </h6>
                    </footer>
    </React.Fragment>);
}
export default CopyRightText