
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcDocumentInformation = require('./IfcDocumentInformation')
const IfcResourceLevelRelationship = require('./IfcResourceLevelRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdocumentinformationrelationship.htm
 */
module.exports = class IfcDocumentInformationRelationship extends IfcResourceLevelRelationship {
  
    constructor(relatingDocument, relatedDocuments) {
        super()
		this.RelatingDocument = relatingDocument
		this.RelatedDocuments = relatedDocuments

        	this.RelationshipType = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingDocument))
		parameters.push(BaseIfc.toStepValue(this.RelatedDocuments))
		parameters.push(BaseIfc.toStepValue(this.RelationshipType))

        return parameters.join()
    }
}