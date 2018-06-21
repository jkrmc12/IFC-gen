
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcReinforcingBarRoleEnum = require('./IfcReinforcingBarRoleEnum')
const IfcSectionProperties = require('./IfcSectionProperties')
const IfcReinforcementBarProperties = require('./IfcReinforcementBarProperties')
const IfcPreDefinedProperties = require('./IfcPreDefinedProperties')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionreinforcementproperties.htm
 */
module.exports = class IfcSectionReinforcementProperties extends IfcPreDefinedProperties {
  
    constructor(longitudinalStartPosition, longitudinalEndPosition, reinforcementRole, sectionDefinition, crossSectionReinforcementDefinitions) {
        super()
		this.LongitudinalStartPosition = longitudinalStartPosition
		this.LongitudinalEndPosition = longitudinalEndPosition
		this.ReinforcementRole = reinforcementRole
		this.SectionDefinition = sectionDefinition
		this.CrossSectionReinforcementDefinitions = crossSectionReinforcementDefinitions

        	this.TransversePosition = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.LongitudinalStartPosition))
		parameters.push(BaseIfc.toStepValue(this.LongitudinalEndPosition))
		parameters.push(BaseIfc.toStepValue(this.TransversePosition))
		parameters.push(BaseIfc.toStepValue(this.ReinforcementRole))
		parameters.push(BaseIfc.toStepValue(this.SectionDefinition))
		parameters.push(BaseIfc.toStepValue(this.CrossSectionReinforcementDefinitions))

        return parameters.join()
    }
}