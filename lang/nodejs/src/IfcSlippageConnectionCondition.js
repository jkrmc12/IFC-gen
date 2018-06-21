
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcStructuralConnectionCondition = require('./IfcStructuralConnectionCondition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcslippageconnectioncondition.htm
 */
module.exports = class IfcSlippageConnectionCondition extends IfcStructuralConnectionCondition {
  
    constructor() {
        super()
        	this.SlippageX = null  // optional
	this.SlippageY = null  // optional
	this.SlippageZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.SlippageX))
		parameters.push(BaseIfc.toStepValue(this.SlippageY))
		parameters.push(BaseIfc.toStepValue(this.SlippageZ))

        return parameters.join()
    }
}