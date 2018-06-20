
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
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcShapeAspect = require('./IfcShapeAspect')
const IfcPreDefinedPropertySet = require('./IfcPreDefinedPropertySet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorliningproperties.htm
 */
module.exports = class IfcDoorLiningProperties extends IfcPreDefinedPropertySet {
  
    constructor(globalId) {
        super(globalId)
        	this.LiningDepth = null  // optional
	this.LiningThickness = null  // optional
	this.ThresholdDepth = null  // optional
	this.ThresholdThickness = null  // optional
	this.TransomThickness = null  // optional
	this.TransomOffset = null  // optional
	this.LiningOffset = null  // optional
	this.ThresholdOffset = null  // optional
	this.CasingThickness = null  // optional
	this.CasingDepth = null  // optional
	this.ShapeAspectStyle = null  // optional
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
		parameters.push(BaseIfc.toStepValue(this.ThresholdDepth))
		parameters.push(BaseIfc.toStepValue(this.ThresholdThickness))
		parameters.push(BaseIfc.toStepValue(this.TransomThickness))
		parameters.push(BaseIfc.toStepValue(this.TransomOffset))
		parameters.push(BaseIfc.toStepValue(this.LiningOffset))
		parameters.push(BaseIfc.toStepValue(this.ThresholdOffset))
		parameters.push(BaseIfc.toStepValue(this.CasingThickness))
		parameters.push(BaseIfc.toStepValue(this.CasingDepth))
		parameters.push(BaseIfc.toStepValue(this.ShapeAspectStyle))
		parameters.push(BaseIfc.toStepValue(this.LiningToPanelOffsetX))
		parameters.push(BaseIfc.toStepValue(this.LiningToPanelOffsetY))

        return parameters.join()
    }
}