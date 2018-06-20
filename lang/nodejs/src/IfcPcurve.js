
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcSurface = require('./IfcSurface')
const IfcCurve = require('./IfcCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpcurve.htm
 */
module.exports = class IfcPcurve extends IfcCurve {
  
    constructor(basisSurface, referenceCurve) {
        super()
		this.BasisSurface = basisSurface
		this.ReferenceCurve = referenceCurve

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BasisSurface))
		parameters.push(BaseIfc.toStepValue(this.ReferenceCurve))

        return parameters.join()
    }
}