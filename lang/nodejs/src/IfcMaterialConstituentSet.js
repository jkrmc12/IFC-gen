
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcMaterialProperties = require('./IfcMaterialProperties')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcMaterialConstituent = require('./IfcMaterialConstituent')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialconstituentset.htm
 */
module.exports = class IfcMaterialConstituentSet extends IfcMaterialDefinition {
  
    constructor() {
        super()
        	this.Name = null  // optional
	this.Description = null  // optional
	this.MaterialConstituents = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.MaterialConstituents))

        return parameters.join()
    }
}