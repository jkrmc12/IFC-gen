
const BaseIfc = require('./BaseIfc')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcURIReference = require('./IfcURIReference')
const IfcOrganization = require('./IfcOrganization')
const IfcPerson = require('./IfcPerson')
const IfcPersonAndOrganization = require('./IfcPersonAndOrganization')
const IfcDateTime = require('./IfcDateTime')
const IfcDate = require('./IfcDate')
const IfcDocumentConfidentialityEnum = require('./IfcDocumentConfidentialityEnum')
const IfcDocumentStatusEnum = require('./IfcDocumentStatusEnum')
const IfcRelAssociatesDocument = require('./IfcRelAssociatesDocument')
const IfcDocumentReference = require('./IfcDocumentReference')
const IfcDocumentInformationRelationship = require('./IfcDocumentInformationRelationship')
const IfcExternalInformation = require('./IfcExternalInformation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformation.htm
 */
module.exports = class IfcDocumentInformation extends IfcExternalInformation {
  
    constructor(identification, name) {
        super()
		this.Identification = identification
		this.Name = name

        	this.Description = null  // optional
	this.Location = null  // optional
	this.Purpose = null  // optional
	this.IntendedUse = null  // optional
	this.Scope = null  // optional
	this.Revision = null  // optional
	this.DocumentOwner = null  // optional
	this.Editors = null  // optional
	this.CreationTime = null  // optional
	this.LastRevisionTime = null  // optional
	this.ElectronicFormat = null  // optional
	this.ValidFrom = null  // optional
	this.ValidUntil = null  // optional
	this.Confidentiality = null  // optional
	this.Status = null  // optional
	this.DocumentInfoForObjects = null  // inverse
	this.HasDocumentReferences = null  // inverse
	this.IsPointedTo = null  // inverse
	this.IsPointer = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Purpose))
		parameters.push(BaseIfc.toStepValue(this.IntendedUse))
		parameters.push(BaseIfc.toStepValue(this.Scope))
		parameters.push(BaseIfc.toStepValue(this.Revision))
		parameters.push(BaseIfc.toStepValue(this.DocumentOwner))
		parameters.push(BaseIfc.toStepValue(this.Editors))
		parameters.push(BaseIfc.toStepValue(this.CreationTime))
		parameters.push(BaseIfc.toStepValue(this.LastRevisionTime))
		parameters.push(BaseIfc.toStepValue(this.ElectronicFormat))
		parameters.push(BaseIfc.toStepValue(this.ValidFrom))
		parameters.push(BaseIfc.toStepValue(this.ValidUntil))
		parameters.push(BaseIfc.toStepValue(this.Confidentiality))
		parameters.push(BaseIfc.toStepValue(this.Status))

        return parameters.join()
    }
}