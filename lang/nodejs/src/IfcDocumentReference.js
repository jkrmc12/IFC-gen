
const BaseIfc = require('./BaseIfc')
const IfcURIReference = require('./IfcURIReference')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcText = require('./IfcText')
const IfcDocumentInformation = require('./IfcDocumentInformation')
const IfcRelAssociatesDocument = require('./IfcRelAssociatesDocument')
const IfcExternalReference = require('./IfcExternalReference')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentreference.htm
 */
module.exports = class IfcDocumentReference extends IfcExternalReference {
  
    constructor() {
        super()
        	this.Description = null  // optional
	this.ReferencedDocument = null  // optional
	this.DocumentRefForObjects = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ReferencedDocument))

        return parameters.join()
    }
}