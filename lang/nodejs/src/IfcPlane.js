
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcElementarySurface = require('./IfcElementarySurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcplane.htm
 */
module.exports = class IfcPlane extends IfcElementarySurface {
  
    constructor(position) {
        super(position)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Position))

        return parameters.join()
    }
}