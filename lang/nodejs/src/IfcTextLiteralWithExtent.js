
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcPresentableText = require('./IfcPresentableText')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcTextPath = require('./IfcTextPath')
const IfcPlanarExtent = require('./IfcPlanarExtent')
const IfcBoxAlignment = require('./IfcBoxAlignment')
const IfcTextLiteral = require('./IfcTextLiteral')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextliteralwithextent.htm
 */
module.exports = class IfcTextLiteralWithExtent extends IfcTextLiteral {
  
    constructor(literal, placement, path, extent, boxAlignment) {
        super(literal,placement,path)
		this.Extent = extent
		this.BoxAlignment = boxAlignment

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Literal))
		parameters.push(BaseIfc.toStepValue(this.Placement))
		parameters.push(BaseIfc.toStepValue(this.Path))
		parameters.push(BaseIfc.toStepValue(this.Extent))
		parameters.push(BaseIfc.toStepValue(this.BoxAlignment))

        return parameters.join()
    }
}