
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcMaterial = require('./IfcMaterial')
const IfcResourceLevelRelationship = require('./IfcResourceLevelRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialrelationship.htm
 */
module.exports = class IfcMaterialRelationship extends IfcResourceLevelRelationship {
  
    constructor(relatingMaterial, relatedMaterials) {
        super()
		this.RelatingMaterial = relatingMaterial
		this.RelatedMaterials = relatedMaterials

        	this.Expression = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingMaterial))
		parameters.push(BaseIfc.toStepValue(this.RelatedMaterials))
		parameters.push(BaseIfc.toStepValue(this.Expression))

        return parameters.join()
    }
}