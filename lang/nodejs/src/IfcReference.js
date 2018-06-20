
const BaseIfc = require('./BaseIfc')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcInteger = require('./IfcInteger')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreference.htm
 */
module.exports = class IfcReference extends BaseIfc {
  
    constructor() {
        super()
        	this.TypeIdentifier = null  // optional
	this.AttributeIdentifier = null  // optional
	this.InstanceName = null  // optional
	this.ListPositions = null  // optional
	this.InnerReference = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.TypeIdentifier))
		parameters.push(BaseIfc.toStepValue(this.AttributeIdentifier))
		parameters.push(BaseIfc.toStepValue(this.InstanceName))
		parameters.push(BaseIfc.toStepValue(this.ListPositions))
		parameters.push(BaseIfc.toStepValue(this.InnerReference))

        return parameters.join()
    }
}