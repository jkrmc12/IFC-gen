
const BaseIfc = require('./BaseIfc')
const IfcURIReference = require('./IfcURIReference')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcText = require('./IfcText')
const IfcLanguageId = require('./IfcLanguageId')
const IfcLibraryInformation = require('./IfcLibraryInformation')
const IfcRelAssociatesLibrary = require('./IfcRelAssociatesLibrary')
const IfcExternalReference = require('./IfcExternalReference')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclibraryreference.htm
 */
module.exports = class IfcLibraryReference extends IfcExternalReference {
  
    constructor() {
        super()
        	this.Description = null  // optional
	this.Language = null  // optional
	this.ReferencedLibrary = null  // optional
	this.LibraryRefForObjects = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Language))
		parameters.push(BaseIfc.toStepValue(this.ReferencedLibrary))

        return parameters.join()
    }
}