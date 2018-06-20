
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcDate = require('./IfcDate')
const IfcText = require('./IfcText')
const IfcURIReference = require('./IfcURIReference')
const IfcIdentifier = require('./IfcIdentifier')
const IfcRelAssociatesClassification = require('./IfcRelAssociatesClassification')
const IfcClassificationReference = require('./IfcClassificationReference')
const IfcExternalInformation = require('./IfcExternalInformation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcclassification.htm
 */
module.exports = class IfcClassification extends IfcExternalInformation {
  
    constructor(name) {
        super()
		this.Name = name

        	this.Source = null  // optional
	this.Edition = null  // optional
	this.EditionDate = null  // optional
	this.Description = null  // optional
	this.Location = null  // optional
	this.ReferenceTokens = null  // optional
	this.ClassificationForObjects = null  // inverse
	this.HasReferences = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Source))
		parameters.push(BaseIfc.toStepValue(this.Edition))
		parameters.push(BaseIfc.toStepValue(this.EditionDate))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Location))
		parameters.push(BaseIfc.toStepValue(this.ReferenceTokens))

        return parameters.join()
    }
}