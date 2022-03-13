import React from 'react';
import './All.css';

function All({closeAll}){
return(
<div className="all">
	<button className="login__container__cancel" onClick={()=>{closeAll(false)}}>X</button>
	<h1>All</h1>
</div>
)
};



export default  All;