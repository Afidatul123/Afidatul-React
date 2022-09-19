//import {Link} from 'react-router-dom'
export default function Header(){
  return (
    <header className="navbar navbar-expand-md bg-blue d-print-none"
    style={{
      background: " pink"
    }}
    >
      <div className="container-xl">
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3" align="left"
        style={{
          color: "grey"
        }}
        >
            <img
              src="https://www.pngmart.com/files/15/Cream-Bun-Cake-PNG-Image.png"
              width="55"
              height="45"
              alt='Tabler'
              background= 'transparant'
            />
           Afida's Cake
        </h1> 
      </div>
      
    </header>
  )
}