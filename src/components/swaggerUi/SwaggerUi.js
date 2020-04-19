import React, { Component }  from 'react'
import { SwaggerUIContainer } from './SwaggerUI.css'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import swagger from '../../apiDescription/swagger.json'

class SwaggerUIDisplay extends Component {
    render() {
        return (
            <SwaggerUIContainer>
                <SwaggerUI 
                    spec={swagger}
                />
            </SwaggerUIContainer>
        )
    }

}

export { SwaggerUIDisplay } 