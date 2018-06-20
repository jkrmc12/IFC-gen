
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
const IfcLayerSetDirectionEnum = require('./IfcLayerSetDirectionEnum')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcMaterialLayer = require('./IfcMaterialLayer')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayerwithoffsets.htm
 */
module.exports = class IfcMaterialLayerWithOffsets extends IfcMaterialLayer {
  
    constructor(layerThickness, offsetDirection, offsetValues) {
        super(layerThickness)
		this.OffsetDirection = offsetDirection
		this.OffsetValues = offsetValues

        
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
		parameters.push(BaseIfc.toStepValue(this.OffsetDirection))
		parameters.push(BaseIfc.toStepValue(this.OffsetValues))

        return parameters.join()
    }
}