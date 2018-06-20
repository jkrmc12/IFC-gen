
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcPresentableText = require('./IfcPresentableText')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcTextPath = require('./IfcTextPath')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteral.htm
 */
module.exports = class IfcTextLiteral extends IfcGeometricRepresentationItem {
  
    constructor(literal, placement, path) {
        super()
		this.Literal = literal
		this.Placement = placement
		this.Path = path

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Literal))
		parameters.push(BaseIfc.toStepValue(this.Placement))
		parameters.push(BaseIfc.toStepValue(this.Path))

        return parameters.join()
    }
}