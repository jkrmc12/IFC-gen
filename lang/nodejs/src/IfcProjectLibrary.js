
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelAssigns = require('./IfcRelAssigns')
const IfcRelNests = require('./IfcRelNests')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAggregates = require('./IfcRelAggregates')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcRepresentationContext = require('./IfcRepresentationContext')
const IfcUnitAssignment = require('./IfcUnitAssignment')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcContext = require('./IfcContext')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprojectlibrary.htm
 */
module.exports = class IfcProjectLibrary extends IfcContext {
  
    constructor(globalId) {
        super(globalId)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.LongName))
		parameters.push(BaseIfc.toStepValue(this.Phase))
		parameters.push(BaseIfc.toStepValue(this.RepresentationContexts))
		parameters.push(BaseIfc.toStepValue(this.UnitsInContext))

        return parameters.join()
    }
}