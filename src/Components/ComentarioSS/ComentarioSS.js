import React from "react";
import "./ComentarioSS.css";


function Comentarioprop({comentariosSS}){
    return (
        <div className="Comentarios1">
            <div className="C1">
                <p>&nbsp;"{comentariosSS.corpo}"</p>
            </div>
        </div>
    )
}

export default Comentarioprop;