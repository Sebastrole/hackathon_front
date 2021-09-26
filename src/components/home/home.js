import "./home.css";

// images
import brand from './../../assets/brand.svg';
import caja from './../../assets/caja.svg';
import map from './../../assets/map.svg';
import img1scroll from './../../assets/img1scroll.svg';
import img2scroll from './../../assets/img2scroll.svg';
import img3scroll from './../../assets/img3scroll.svg';
import img4scroll from './../../assets/img4scroll.svg';
import img5scroll from './../../assets/img5scroll.svg';

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="header">
                <div className="logodiv">
                    <img src={brand} className="imglogo" alt="" />
                </div>
                <div className="centerline">
                    <div className="line">
                        s
                    </div>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Marca</a></li>
                        <li><a href="#">Recetas</a></li>
                    </ul>
                    <a href="#" className="donateButton">Dona Aquí</a>
                </div>
            </div>
            <div className="banner">
                <div className="containerimgsanduser">
                <div className="userandimgs">
                    <p className="userWelcome">
                        ¡HOLA, @nameuser!
                    </p>
                    <img src={caja} className="imgcaja" alt="" />
                    <img src={map} className="imgmap" alt="" />
                </div>
                <p className="userWelcome">
                    Nos alegra que estes interesado en conocer mas sobre tu café.
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p className="textwiththanks"> 
                    Queremos agradecerte por haberte tomado el tiempo de haber llegado <br/> a este punto, y apoyar con tu compra a las familias cafeteras del CAUCA
                    </p>
                </p>
                </div>
                <div className="origin">
                    <h1>ORIGEN</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="scrollimgs">
                    <img src={img1scroll} className="img1scroll" alt="" />
                    <img src={img2scroll} className="img2scroll" alt="" />
                    <img src={img3scroll} className="img3scroll" alt="" />
                    <img src={img4scroll} className="img4scroll" alt="" />
                    <img src={img5scroll} className="img5scroll" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;