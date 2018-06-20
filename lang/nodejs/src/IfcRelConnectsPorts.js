
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcPort = require('./IfcPort')
const IfcElement = require('./IfcElement')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelconnectsports.htm
 */
module.exports = class IfcRelConnectsPorts extends IfcRelConnects {
  
    constructor(globalId, relatingPort, relatedPort) {
        super(globalId)
		this.RelatingPort = relatingPort
		this.RelatedPort = relatedPort

        	this.RealizingElement = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingPort))
		parameters.push(BaseIfc.toStepValue(this.RelatedPort))
		parameters.push(BaseIfc.toStepValue(this.RealizingElement))

        return parameters.join()
    }
}