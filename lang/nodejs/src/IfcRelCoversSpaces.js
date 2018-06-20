
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcSpace = require('./IfcSpace')
const IfcCovering = require('./IfcCovering')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelcoversspaces.htm
 */
module.exports = class IfcRelCoversSpaces extends IfcRelConnects {
  
    constructor(globalId, relatingSpace, relatedCoverings) {
        super(globalId)
		this.RelatingSpace = relatingSpace
		this.RelatedCoverings = relatedCoverings

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingSpace))
		parameters.push(BaseIfc.toStepValue(this.RelatedCoverings))

        return parameters.join()
    }
}