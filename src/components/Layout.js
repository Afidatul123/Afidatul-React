import Header from "./Header"
import Navigation from "./Navigation"
import PropTypes from 'prop-types'

export default function Layout(props){
    return(
        <div className="wrapper">
            <Header/>
            <Navigation/>
            <div className="page-wrapper">{props.children}</div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
  }