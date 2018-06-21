
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcOrganization = require('./IfcOrganization')
const IfcResourceLevelRelationship = require('./IfcResourceLevelRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcorganizationrelationship.htm
 */
module.exports = class IfcOrganizationRelationship extends IfcResourceLevelRelationship {
  
    constructor(relatingOrganization, relatedOrganizations) {
        super()
		this.RelatingOrganization = relatingOrganization
		this.RelatedOrganizations = relatedOrganizations

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingOrganization))
		parameters.push(BaseIfc.toStepValue(this.RelatedOrganizations))

        return parameters.join()
    }
}