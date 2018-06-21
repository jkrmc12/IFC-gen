
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
const IfcDoorPanelOperationEnum = require('./IfcDoorPanelOperationEnum')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcDoorPanelPositionEnum = require('./IfcDoorPanelPositionEnum')
const IfcShapeAspect = require('./IfcShapeAspect')
const IfcPreDefinedPropertySet = require('./IfcPreDefinedPropertySet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoorpanelproperties.htm
 */
module.exports = class IfcDoorPanelProperties extends IfcPreDefinedPropertySet {
  
    constructor(globalId, panelOperation, panelPosition) {
        super(globalId)
		this.PanelOperation = panelOperation
		this.PanelPosition = panelPosition

        	this.PanelDepth = null  // optional
	this.PanelWidth = null  // optional
	this.ShapeAspectStyle = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.PanelDepth))
		parameters.push(BaseIfc.toStepValue(this.PanelOperation))
		parameters.push(BaseIfc.toStepValue(this.PanelWidth))
		parameters.push(BaseIfc.toStepValue(this.PanelPosition))
		parameters.push(BaseIfc.toStepValue(this.ShapeAspectStyle))

        return parameters.join()
    }
}