
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcMaterialLayerSet = require('./IfcMaterialLayerSet')
const IfcLayerSetDirectionEnum = require('./IfcLayerSetDirectionEnum')
const IfcDirectionSenseEnum = require('./IfcDirectionSenseEnum')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcMaterialUsageDefinition = require('./IfcMaterialUsageDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallayersetusage.htm
 */
module.exports = class IfcMaterialLayerSetUsage extends IfcMaterialUsageDefinition {
  
    constructor(forLayerSet, layerSetDirection, directionSense, offsetFromReferenceLine) {
        super()
		this.ForLayerSet = forLayerSet
		this.LayerSetDirection = layerSetDirection
		this.DirectionSense = directionSense
		this.OffsetFromReferenceLine = offsetFromReferenceLine

        	this.ReferenceExtent = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ForLayerSet))
		parameters.push(BaseIfc.toStepValue(this.LayerSetDirection))
		parameters.push(BaseIfc.toStepValue(this.DirectionSense))
		parameters.push(BaseIfc.toStepValue(this.OffsetFromReferenceLine))
		parameters.push(BaseIfc.toStepValue(this.ReferenceExtent))

        return parameters.join()
    }
}