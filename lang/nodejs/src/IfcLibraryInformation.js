
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcOrganization = require('./IfcOrganization')
const IfcPerson = require('./IfcPerson')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')
const IfcDateTime = require('./IfcDateTime')
const IfcURIReference = require('./IfcURIReference')
const IfcText = require('./IfcText')
const IfcRelAssociatesLibrary = require('./IfcRelAssociatesLibrary')
const IfcLibraryReference = require('./IfcLibraryReference')
const IfcExternalInformation = require('./IfcExternalInformation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryinformation.htm
 */
module.exports = class IfcLibraryInformation extends IfcExternalInformation {
  
    constructor(name) {
        super()
		this.Name = name

        	this.Version = null  // optional
	this.Publisher = null  // optional
	this.VersionDate = null  // optional
	this.Location = null  // optional
	this.Description = null  // optional
	this.LibraryInfoForObjects = null  // inverse
	this.HasLibraryReferences = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Version))
		parameters.push(BaseIfc.toStepValue(this.Publisher))
		parameters.push(BaseIfc.toStepValue(this.VersionDate))
		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Description))

        return parameters.join()
    }
}