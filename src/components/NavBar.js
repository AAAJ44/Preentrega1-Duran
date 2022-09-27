import Cartwidget from './CartWidget'

function NavBar(){
    return(
    <div>
        <h2>VintageTshirt</h2>
        <ul>
            <li><a href='default.asp'>Inicio</a></li>
            <li><a href='about.asp'>Nosotros</a></li>
            <li><a href='contact.asp'>Contacto</a></li>
        </ul>
        <Cartwidget />  
    </div> 
        )
        
        
}

export default NavBar;