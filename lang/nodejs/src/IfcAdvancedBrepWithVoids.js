
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcClosedShell = require('./IfcClosedShell')
const IfcAdvancedBrep = require('./IfcAdvancedBrep')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcadvancedbrepwithvoids.htm
 */
module.exports = class IfcAdvancedBrepWithVoids extends IfcAdvancedBrep {
  
    constructor(outer, voids) {
        super(outer)
		this.Voids = voids

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Outer))
		parameters.push(BaseIfc.toStepValue(this.Voids))

        return parameters.join()
    }
}