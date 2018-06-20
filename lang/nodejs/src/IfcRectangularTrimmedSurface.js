
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcSurface = require('./IfcSurface')
const IfcParameterValue = require('./IfcParameterValue')
const IfcBoolean = require('./IfcBoolean')
const IfcBoundedSurface = require('./IfcBoundedSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrectangulartrimmedsurface.htm
 */
module.exports = class IfcRectangularTrimmedSurface extends IfcBoundedSurface {
  
    constructor(basisSurface, u1, v1, u2, v2, usense, vsense) {
        super()
		this.BasisSurface = basisSurface
		this.U1 = u1
		this.V1 = v1
		this.U2 = u2
		this.V2 = v2
		this.Usense = usense
		this.Vsense = vsense

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BasisSurface))
		parameters.push(BaseIfc.toStepValue(this.U1))
		parameters.push(BaseIfc.toStepValue(this.V1))
		parameters.push(BaseIfc.toStepValue(this.U2))
		parameters.push(BaseIfc.toStepValue(this.V2))
		parameters.push(BaseIfc.toStepValue(this.Usense))
		parameters.push(BaseIfc.toStepValue(this.Vsense))

        return parameters.join()
    }
}