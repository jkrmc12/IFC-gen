
const BaseIfc = require('./BaseIfc')
const IfcURIReference = require('./IfcURIReference')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcClassification = require('./IfcClassification')
const IfcText = require('./IfcText')
const IfcRelAssociatesClassification = require('./IfcRelAssociatesClassification')
const IfcExternalReference = require('./IfcExternalReference')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassificationreference.htm
 */
module.exports = class IfcClassificationReference extends IfcExternalReference {
  
    constructor() {
        super()
        	this.ReferencedSource = null  // optional
	this.Description = null  // optional
	this.Sort = null  // optional
	this.ClassificationRefForObjects = null  // inverse
	this.HasReferences = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.Identification))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.ReferencedSource))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Sort))

        return parameters.join()
    }
}