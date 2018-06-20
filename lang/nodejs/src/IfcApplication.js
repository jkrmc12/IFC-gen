
const BaseIfc = require('./BaseIfc')
const IfcOrganization = require('./IfcOrganization')
const IfcLabel = require('./IfcLabel')
const IfcIdentifier = require('./IfcIdentifier')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcapplication.htm
 */
module.exports = class IfcApplication extends BaseIfc {
  
    constructor(applicationDeveloper, version, applicationFullName, applicationIdentifier) {
        super()
		this.ApplicationDeveloper = applicationDeveloper
		this.Version = version
		this.ApplicationFullName = applicationFullName
		this.ApplicationIdentifier = applicationIdentifier

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ApplicationDeveloper))
		parameters.push(BaseIfc.toStepValue(this.Version))
		parameters.push(BaseIfc.toStepValue(this.ApplicationFullName))
		parameters.push(BaseIfc.toStepValue(this.ApplicationIdentifier))

        return parameters.join()
    }
}