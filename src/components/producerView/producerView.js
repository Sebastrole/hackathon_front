import React from 'react';
import './producerView.css'
import brand from './../../assets/brand.svg';

const ProducerView = () => {
    return ( 
        <div id="producerViewContainer">
            <div className="header">
                <div className="logodiv">
                    <img src={brand} className="imglogo" alt="" />
                </div>
                <div className="centerline">
                    <div className="line">
                        
                    </div>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">[ Productor ]</a></li>
                        <li><a href="#">Recetas</a></li>
                    </ul>
                    <a href="#" className="donateButton">Dona Aquí</a>
                </div>
            </div>
        </div>
     );
}
 
export default ProducerView;