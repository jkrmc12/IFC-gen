
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRepresentation = require('./IfcRepresentation')
const IfcRepresentationItem = require('./IfcRepresentationItem')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLogical = require('./IfcLogical')
const IfcPresentationStyle = require('./IfcPresentationStyle')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationlayerwithstyle.htm
 */
module.exports = class IfcPresentationLayerWithStyle extends IfcPresentationLayerAssignment {
  
    constructor(name, assignedItems, layerOn, layerFrozen, layerBlocked, layerStyles) {
        super(name,assignedItems)
		this.LayerOn = layerOn
		this.LayerFrozen = layerFrozen
		this.LayerBlocked = layerBlocked
		this.LayerStyles = layerStyles

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.AssignedItems))
		parameters.push(BaseIfc.toStepValue(this.Identifier))
		parameters.push(BaseIfc.toStepValue(this.LayerOn))
		parameters.push(BaseIfc.toStepValue(this.LayerFrozen))
		parameters.push(BaseIfc.toStepValue(this.LayerBlocked))
		parameters.push(BaseIfc.toStepValue(this.LayerStyles))

        return parameters.join()
    }
}