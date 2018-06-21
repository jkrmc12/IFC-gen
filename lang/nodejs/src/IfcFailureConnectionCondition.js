
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcForceMeasure = require('./IfcForceMeasure')
const IfcStructuralConnectionCondition = require('./IfcStructuralConnectionCondition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfailureconnectioncondition.htm
 */
module.exports = class IfcFailureConnectionCondition extends IfcStructuralConnectionCondition {
  
    constructor() {
        super()
        	this.TensionFailureX = null  // optional
	this.TensionFailureY = null  // optional
	this.TensionFailureZ = null  // optional
	this.CompressionFailureX = null  // optional
	this.CompressionFailureY = null  // optional
	this.CompressionFailureZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TensionFailureX))
		parameters.push(BaseIfc.toStepValue(this.TensionFailureY))
		parameters.push(BaseIfc.toStepValue(this.TensionFailureZ))
		parameters.push(BaseIfc.toStepValue(this.CompressionFailureX))
		parameters.push(BaseIfc.toStepValue(this.CompressionFailureY))
		parameters.push(BaseIfc.toStepValue(this.CompressionFailureZ))

        return parameters.join()
    }
}