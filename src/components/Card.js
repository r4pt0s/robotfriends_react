import React from 'react';


//props OBJ way
// const Card = (props) =>{

//destructering way
const Card = ({name, email, id}) =>{

	return (

		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img alt="robots" src={`https://robohash.org/${id}?150x150`} />
			<div>
				<p>{name}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;