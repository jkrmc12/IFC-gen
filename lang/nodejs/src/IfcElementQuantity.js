
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcTypeObject = require('./IfcTypeObject')
const IfcRelDefinesByTemplate = require('./IfcRelDefinesByTemplate')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')
const IfcQuantitySet = require('./IfcQuantitySet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcelementquantity.htm
 */
module.exports = class IfcElementQuantity extends IfcQuantitySet {
  
    constructor(globalId, quantities) {
        super(globalId)
		this.Quantities = quantities

        	this.MethodOfMeasurement = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.MethodOfMeasurement))
		parameters.push(BaseIfc.toStepValue(this.Quantities))

        return parameters.join()
    }
}