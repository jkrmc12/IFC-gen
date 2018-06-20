
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcPlane = require('./IfcPlane')
const IfcCurve = require('./IfcCurve')
const IfcBoundedSurface = require('./IfcBoundedSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurveboundedplane.htm
 */
module.exports = class IfcCurveBoundedPlane extends IfcBoundedSurface {
  
    constructor(basisSurface, outerBoundary, innerBoundaries) {
        super()
		this.BasisSurface = basisSurface
		this.OuterBoundary = outerBoundary
		this.InnerBoundaries = innerBoundaries

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BasisSurface))
		parameters.push(BaseIfc.toStepValue(this.OuterBoundary))
		parameters.push(BaseIfc.toStepValue(this.InnerBoundaries))

        return parameters.join()
    }
}