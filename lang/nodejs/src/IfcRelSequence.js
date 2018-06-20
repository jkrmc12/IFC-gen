
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcProcess = require('./IfcProcess')
const IfcLagTime = require('./IfcLagTime')
const IfcSequenceEnum = require('./IfcSequenceEnum')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelsequence.htm
 */
module.exports = class IfcRelSequence extends IfcRelConnects {
  
    constructor(globalId, relatingProcess, relatedProcess) {
        super(globalId)
		this.RelatingProcess = relatingProcess
		this.RelatedProcess = relatedProcess

        	this.TimeLag = null  // optional
	this.SequenceType = null  // optional
	this.UserDefinedSequenceType = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingProcess))
		parameters.push(BaseIfc.toStepValue(this.RelatedProcess))
		parameters.push(BaseIfc.toStepValue(this.TimeLag))
		parameters.push(BaseIfc.toStepValue(this.SequenceType))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedSequenceType))

        return parameters.join()
    }
}