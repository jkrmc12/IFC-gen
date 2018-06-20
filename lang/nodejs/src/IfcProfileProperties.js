
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcIdentifier = require('./IfcIdentifier')
const IfcText = require('./IfcText')
const IfcProperty = require('./IfcProperty')
const IfcProfileDef = require('./IfcProfileDef')
const IfcExtendedProperties = require('./IfcExtendedProperties')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcprofileproperties.htm
 */
module.exports = class IfcProfileProperties extends IfcExtendedProperties {
  
    constructor(properties, profileDefinition) {
        super(properties)
		this.ProfileDefinition = profileDefinition

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Properties))
		parameters.push(BaseIfc.toStepValue(this.ProfileDefinition))

        return parameters.join()
    }
}