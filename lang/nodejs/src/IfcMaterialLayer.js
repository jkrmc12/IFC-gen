
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcMaterialProperties = require('./IfcMaterialProperties')
const IfcMaterial = require('./IfcMaterial')
const IfcNonNegativeLengthMeasure = require('./IfcNonNegativeLengthMeasure')
const IfcLogical = require('./IfcLogical')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcInteger = require('./IfcInteger')
const IfcMaterialLayerSet = require('./IfcMaterialLayerSet')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayer.htm
 */
module.exports = class IfcMaterialLayer extends IfcMaterialDefinition {
  
    constructor(layerThickness) {
        super()
		this.LayerThickness = layerThickness

        	this.Material = null  // optional
	this.IsVentilated = null  // optional
	this.Name = null  // optional
	this.Description = null  // optional
	this.Category = null  // optional
	this.Priority = null  // optional
	this.ToMaterialLayerSet = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Material))
		parameters.push(BaseIfc.toStepValue(this.LayerThickness))
		parameters.push(BaseIfc.toStepValue(this.IsVentilated))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Category))
		parameters.push(BaseIfc.toStepValue(this.Priority))

        return parameters.join()
    }
}