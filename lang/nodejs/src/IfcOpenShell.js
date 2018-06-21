
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcFace = require('./IfcFace')
const IfcConnectedFaceSet = require('./IfcConnectedFaceSet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcopenshell.htm
 */
module.exports = class IfcOpenShell extends IfcConnectedFaceSet {
  
    constructor(cfsFaces) {
        super(cfsFaces)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.CfsFaces))

        return parameters.join()
    }
}