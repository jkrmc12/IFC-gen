
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcClosedShell = require('./IfcClosedShell')
const IfcManifoldSolidBrep = require('./IfcManifoldSolidBrep')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfacetedbrep.htm
 */
module.exports = class IfcFacetedBrep extends IfcManifoldSolidBrep {
  
    constructor(outer) {
        super(outer)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Outer))

        return parameters.join()
    }
}