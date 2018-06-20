
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcMaterialProperties = require('./IfcMaterialProperties')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcMaterial = require('./IfcMaterial')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcMaterialConstituentSet = require('./IfcMaterialConstituentSet')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialconstituent.htm
 */
module.exports = class IfcMaterialConstituent extends IfcMaterialDefinition {
  
    constructor(material) {
        super()
		this.Material = material

        	this.Name = null  // optional
	this.Description = null  // optional
	this.Fraction = null  // optional
	this.Category = null  // optional
	this.ToMaterialConstituentSet = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Material))
		parameters.push(BaseIfc.toStepValue(this.Fraction))
		parameters.push(BaseIfc.toStepValue(this.Category))

        return parameters.join()
    }
}