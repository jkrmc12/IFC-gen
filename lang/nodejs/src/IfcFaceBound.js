
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLoop = require('./IfcLoop')
const IfcBoolean = require('./IfcBoolean')
const IfcTopologicalRepresentationItem = require('./IfcTopologicalRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacebound.htm
 */
module.exports = class IfcFaceBound extends IfcTopologicalRepresentationItem {
  
    constructor(bound, orientation) {
        super()
		this.Bound = bound
		this.Orientation = orientation

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Bound))
		parameters.push(BaseIfc.toStepValue(this.Orientation))

        return parameters.join()
    }
}