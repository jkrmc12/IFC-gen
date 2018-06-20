
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcSectionTypeEnum = require('./IfcSectionTypeEnum')
const IfcProfileDef = require('./IfcProfileDef')
const IfcPreDefinedProperties = require('./IfcPreDefinedProperties')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionproperties.htm
 */
module.exports = class IfcSectionProperties extends IfcPreDefinedProperties {
  
    constructor(sectionType, startProfile) {
        super()
		this.SectionType = sectionType
		this.StartProfile = startProfile

        	this.EndProfile = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SectionType))
		parameters.push(BaseIfc.toStepValue(this.StartProfile))
		parameters.push(BaseIfc.toStepValue(this.EndProfile))

        return parameters.join()
    }
}