
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcMaterialProperties = require('./IfcMaterialProperties')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcMaterialDefinitionRepresentation = require('./IfcMaterialDefinitionRepresentation')
const IfcMaterialRelationship = require('./IfcMaterialRelationship')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterial.htm
 */
module.exports = class IfcMaterial extends IfcMaterialDefinition {
  
    constructor(name) {
        super()
		this.Name = name

        	this.Description = null  // optional
	this.Category = null  // optional
	this.HasRepresentation = null  // inverse
	this.IsRelatedWith = null  // inverse
	this.RelatesTo = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Category))

        return parameters.join()
    }
}