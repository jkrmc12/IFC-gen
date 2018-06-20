
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
const IfcSectionReinforcementProperties = require('./IfcSectionReinforcementProperties')
const IfcPreDefinedPropertySet = require('./IfcPreDefinedPropertySet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementdefinitionproperties.htm
 */
module.exports = class IfcReinforcementDefinitionProperties extends IfcPreDefinedPropertySet {
  
    constructor(globalId, reinforcementSectionDefinitions) {
        super(globalId)
		this.ReinforcementSectionDefinitions = reinforcementSectionDefinitions

        	this.DefinitionType = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.DefinitionType))
		parameters.push(BaseIfc.toStepValue(this.ReinforcementSectionDefinitions))

        return parameters.join()
    }
}