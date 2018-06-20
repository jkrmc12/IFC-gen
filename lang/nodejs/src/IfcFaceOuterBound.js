
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLoop = require('./IfcLoop')
const IfcBoolean = require('./IfcBoolean')
const IfcFaceBound = require('./IfcFaceBound')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfaceouterbound.htm
 */
module.exports = class IfcFaceOuterBound extends IfcFaceBound {
  
    constructor(bound, orientation) {
        super(bound,orientation)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Bound))
		parameters.push(BaseIfc.toStepValue(this.Orientation))

        return parameters.join()
    }
}