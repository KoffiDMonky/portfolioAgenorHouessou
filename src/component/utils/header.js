import React, {useState} from 'react';
import "./utils.css";

function Header(props){

    const [item, setItem] = useState('presentation')
    
    const itemListener = (param) => {

        setItem(param)
    }

    props.modifierBody(item);

    return (
        <div className='header'>
            <div className='titre'><span className='text-color'>Agénor H</span>OUESSOU</div>
                <ul className='navbar'>
                    <li className='navbar-item active' onPress={itemListener('presentation')}><span className='cercle enable'></span><span>Présentation</span></li>
                    <li className='navbar-item' onPress={itemListener('competences')}><span className='cercle'></span>Compétences</li>
                    <li className='navbar-item'><span className='cercle'></span>Expériences</li>
                    <li className='navbar-item'><span className='cercle'></span>Formations</li>
                    <li className='navbar-item'><span className='cercle'></span>Passions</li>
                    <li className='navbar-item'><span className='cercle'></span>Portfolio</li>
                    <li className='navbar-item'><span className='cercle'></span>Contact</li>
                </ul>
        </div>
    );
}

export default Header;
