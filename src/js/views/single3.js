import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single3 = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="container-fluid">
						<div className="row">
						<div className="col-sm-3 col-md-6 col-lg-4" style={{ backgroundColor: 'lightgray'}}>
						
									<img src="..." className="img-fluid rounded-start" alt="..." />
															
						</div>
						<div className="col-sm-9 col-md-6 col-lg-8">
						{ <h5 className="card-title">{store.vehiculos[params.theid].name}</h5> }
										<p className="card-text">It is a long established fact that a reader will be 
											distracted by the readable content of a page when looking at its layout. 
											The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, 
											sometimes by accident, sometimes on purpose (injected humour and the like)..</p>
										<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>			
							</div>
					</div>
					<div className="row">
						<div className="col-md-12" style={{textAlign:'center'}}>
								<p id="lineRed" style={{ borderBottom: 'solid', borderColor:'red', marginTop: '10px' }}></p>
								<span className="display-8" style={{ float: 'left', color:'red', margin:'20px' }}>Name:<br></br> {store.vehiculos[params.theid].name}</span>
								<span className="display-8" style={{ float: 'left', color:'red', margin:'20px' }}>model:<br></br> {store.vehiculos[params.theid].model}</span>
								<span className="display-8" style={{ float: 'left', color:'red', margin:'20px' }}>vehicle_class: <br></br>{store.vehiculos[params.theid].vehicle_class}</span>
								<span className="display-8" style={{ float: 'left', color:'red', margin:'20px' }}>manufacturer: <br></br>{store.vehiculos[params.theid].manufacturer}</span>
								<span className="display-8" style={{ float: 'left', color:'red', margin:'20px' }}>cost_in_credits:<br></br> {store.vehiculos[params.theid].cost_in_credits}</span>
								<span className="display-8" style={{ float: 'left', color:'red', margin:'20px' }}>length: <br></br>{store.vehiculos[params.theid].length}</span>
								
					
							</div>
					</div>
					<Link to="/">
						<span className="btn btn-success btn-lg" href="#" role="button">
							Home
						</span>
					</Link>
					</div>
		</div>
	);
};

Single3.propTypes = {
	match: PropTypes.object
};
