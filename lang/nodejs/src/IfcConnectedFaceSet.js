
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcFace = require('./IfcFace')
const IfcTopologicalRepresentationItem = require('./IfcTopologicalRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectedfaceset.htm
 */
module.exports = class IfcConnectedFaceSet extends IfcTopologicalRepresentationItem {
  
    constructor(cfsFaces) {
        super()
		this.CfsFaces = cfsFaces

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.CfsFaces))

        return parameters.join()
    }
}