
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRepresentation = require('./IfcRepresentation')
const IfcRepresentationItem = require('./IfcRepresentationItem')
const IfcIdentifier = require('./IfcIdentifier')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerassignment.htm
 */
module.exports = class IfcPresentationLayerAssignment extends BaseIfc {
  
    constructor(name, assignedItems) {
        super()
		this.Name = name
		this.AssignedItems = assignedItems

        	this.Description = null  // optional
	this.Identifier = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.AssignedItems))
		parameters.push(BaseIfc.toStepValue(this.Identifier))

        return parameters.join()
    }
}