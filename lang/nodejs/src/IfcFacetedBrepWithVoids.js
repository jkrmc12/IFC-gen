
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcClosedShell = require('./IfcClosedShell')
const IfcFacetedBrep = require('./IfcFacetedBrep')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrepwithvoids.htm
 */
module.exports = class IfcFacetedBrepWithVoids extends IfcFacetedBrep {
  
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