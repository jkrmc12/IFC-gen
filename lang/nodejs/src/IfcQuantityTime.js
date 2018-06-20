
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcPhysicalComplexQuantity = require('./IfcPhysicalComplexQuantity')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcTimeMeasure = require('./IfcTimeMeasure')
const IfcPhysicalSimpleQuantity = require('./IfcPhysicalSimpleQuantity')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitytime.htm
 */
module.exports = class IfcQuantityTime extends IfcPhysicalSimpleQuantity {
  
    constructor(name, timeValue) {
        super(name)
		this.TimeValue = timeValue

        	this.Formula = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.TimeValue))
		parameters.push(BaseIfc.toStepValue(this.Formula))

        return parameters.join()
    }
}