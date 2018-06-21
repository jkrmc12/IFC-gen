
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcPhysicalComplexQuantity = require('./IfcPhysicalComplexQuantity')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcPhysicalSimpleQuantity = require('./IfcPhysicalSimpleQuantity')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitylength.htm
 */
module.exports = class IfcQuantityLength extends IfcPhysicalSimpleQuantity {
  
    constructor(name, lengthValue) {
        super(name)
		this.LengthValue = lengthValue

        	this.Formula = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.LengthValue))
		parameters.push(BaseIfc.toStepValue(this.Formula))

        return parameters.join()
    }
}