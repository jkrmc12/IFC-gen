
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcSurfaceSide = require('./IfcSurfaceSide')
const IfcExternallyDefinedSurfaceStyle = require('./IfcExternallyDefinedSurfaceStyle')
const IfcSurfaceStyleLighting = require('./IfcSurfaceStyleLighting')
const IfcSurfaceStyleRefraction = require('./IfcSurfaceStyleRefraction')
const IfcSurfaceStyleShading = require('./IfcSurfaceStyleShading')
const IfcSurfaceStyleWithTextures = require('./IfcSurfaceStyleWithTextures')
const IfcPresentationStyle = require('./IfcPresentationStyle')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestyle.htm
 */
module.exports = class IfcSurfaceStyle extends IfcPresentationStyle {
  
    constructor(side, styles) {
        super()
		this.Side = side
		this.Styles = styles

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Side))
		parameters.push(BaseIfc.toStepValue(this.Styles))

        return parameters.join()
    }
}