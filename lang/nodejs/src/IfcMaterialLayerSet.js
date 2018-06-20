
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcMaterialProperties = require('./IfcMaterialProperties')
const IfcMaterialLayer = require('./IfcMaterialLayer')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayerset.htm
 */
module.exports = class IfcMaterialLayerSet extends IfcMaterialDefinition {
  
    constructor(materialLayers) {
        super()
		this.MaterialLayers = materialLayers

        	this.LayerSetName = null  // optional
	this.Description = null  // optional

    Object.defineProperty(this, 'TotalThickness', {
        get: () => {throw "Derived property logic has not been implemented for TotalThickness."}, // derived
        set: (value) => {this.TotalThickness = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.MaterialLayers))
		parameters.push(BaseIfc.toStepValue(this.LayerSetName))
		parameters.push(BaseIfc.toStepValue(this.Description))

        return parameters.join()
    }
}