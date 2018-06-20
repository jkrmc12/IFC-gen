
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcVertex = require('./IfcVertex')
const IfcLoop = require('./IfcLoop')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvertexloop.htm
 */
module.exports = class IfcVertexLoop extends IfcLoop {
  
    constructor(loopVertex) {
        super()
		this.LoopVertex = loopVertex

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.LoopVertex))

        return parameters.join()
    }
}