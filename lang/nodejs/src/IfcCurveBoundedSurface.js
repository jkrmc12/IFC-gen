
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcSurface = require('./IfcSurface')
const IfcBoundaryCurve = require('./IfcBoundaryCurve')
const IfcBoolean = require('./IfcBoolean')
const IfcBoundedSurface = require('./IfcBoundedSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveboundedsurface.htm
 */
module.exports = class IfcCurveBoundedSurface extends IfcBoundedSurface {
  
    constructor(basisSurface, boundaries, implicitOuter) {
        super()
		this.BasisSurface = basisSurface
		this.Boundaries = boundaries
		this.ImplicitOuter = implicitOuter

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BasisSurface))
		parameters.push(BaseIfc.toStepValue(this.Boundaries))
		parameters.push(BaseIfc.toStepValue(this.ImplicitOuter))

        return parameters.join()
    }
}