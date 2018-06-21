
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcTypeObject = require('./IfcTypeObject')
const IfcRelDefinesByTemplate = require('./IfcRelDefinesByTemplate')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcNonNegativeLengthMeasure = require('./IfcNonNegativeLengthMeasure')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcShapeAspect = require('./IfcShapeAspect')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcPreDefinedPropertySet = require('./IfcPreDefinedPropertySet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowliningproperties.htm
 */
module.exports = class IfcWindowLiningProperties extends IfcPreDefinedPropertySet {
  
    constructor(globalId) {
        super(globalId)
        	this.LiningDepth = null  // optional
	this.LiningThickness = null  // optional
	this.TransomThickness = null  // optional
	this.MullionThickness = null  // optional
	this.FirstTransomOffset = null  // optional
	this.SecondTransomOffset = null  // optional
	this.FirstMullionOffset = null  // optional
	this.SecondMullionOffset = null  // optional
	this.ShapeAspectStyle = null  // optional
	this.LiningOffset = null  // optional
	this.LiningToPanelOffsetX = null  // optional
	this.LiningToPanelOffsetY = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.LiningDepth))
		parameters.push(BaseIfc.toStepValue(this.LiningThickness))
		parameters.push(BaseIfc.toStepValue(this.TransomThickness))
		parameters.push(BaseIfc.toStepValue(this.MullionThickness))
		parameters.push(BaseIfc.toStepValue(this.FirstTransomOffset))
		parameters.push(BaseIfc.toStepValue(this.SecondTransomOffset))
		parameters.push(BaseIfc.toStepValue(this.FirstMullionOffset))
		parameters.push(BaseIfc.toStepValue(this.SecondMullionOffset))
		parameters.push(BaseIfc.toStepValue(this.ShapeAspectStyle))
		parameters.push(BaseIfc.toStepValue(this.LiningOffset))
		parameters.push(BaseIfc.toStepValue(this.LiningToPanelOffsetX))
		parameters.push(BaseIfc.toStepValue(this.LiningToPanelOffsetY))

        return parameters.join()
    }
}