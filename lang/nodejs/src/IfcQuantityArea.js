
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcPhysicalComplexQuantity = require('./IfcPhysicalComplexQuantity')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcAreaMeasure = require('./IfcAreaMeasure')
const IfcPhysicalSimpleQuantity = require('./IfcPhysicalSimpleQuantity')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcquantityarea.htm
 */
module.exports = class IfcQuantityArea extends IfcPhysicalSimpleQuantity {
  
    constructor(name, areaValue) {
        super(name)
		this.AreaValue = areaValue

        	this.Formula = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.AreaValue))
		parameters.push(BaseIfc.toStepValue(this.Formula))

        return parameters.join()
    }
}