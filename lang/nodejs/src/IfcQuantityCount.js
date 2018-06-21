
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcPhysicalComplexQuantity = require('./IfcPhysicalComplexQuantity')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcCountMeasure = require('./IfcCountMeasure')
const IfcPhysicalSimpleQuantity = require('./IfcPhysicalSimpleQuantity')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantitycount.htm
 */
module.exports = class IfcQuantityCount extends IfcPhysicalSimpleQuantity {
  
    constructor(name, countValue) {
        super(name)
		this.CountValue = countValue

        	this.Formula = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.CountValue))
		parameters.push(BaseIfc.toStepValue(this.Formula))

        return parameters.join()
    }
}