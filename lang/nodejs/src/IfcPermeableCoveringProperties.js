
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
const IfcPermeableCoveringOperationEnum = require('./IfcPermeableCoveringOperationEnum')
const IfcWindowPanelPositionEnum = require('./IfcWindowPanelPositionEnum')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcShapeAspect = require('./IfcShapeAspect')
const IfcPreDefinedPropertySet = require('./IfcPreDefinedPropertySet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpermeablecoveringproperties.htm
 */
module.exports = class IfcPermeableCoveringProperties extends IfcPreDefinedPropertySet {
  
    constructor(globalId, operationType, panelPosition) {
        super(globalId)
		this.OperationType = operationType
		this.PanelPosition = panelPosition

        	this.FrameDepth = null  // optional
	this.FrameThickness = null  // optional
	this.ShapeAspectStyle = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.OperationType))
		parameters.push(BaseIfc.toStepValue(this.PanelPosition))
		parameters.push(BaseIfc.toStepValue(this.FrameDepth))
		parameters.push(BaseIfc.toStepValue(this.FrameThickness))
		parameters.push(BaseIfc.toStepValue(this.ShapeAspectStyle))

        return parameters.join()
    }
}