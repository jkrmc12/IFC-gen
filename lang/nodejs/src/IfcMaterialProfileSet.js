
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcMaterialProperties = require('./IfcMaterialProperties')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcMaterialProfile = require('./IfcMaterialProfile')
const IfcCompositeProfileDef = require('./IfcCompositeProfileDef')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofileset.htm
 */
module.exports = class IfcMaterialProfileSet extends IfcMaterialDefinition {
  
    constructor(materialProfiles) {
        super()
		this.MaterialProfiles = materialProfiles

        	this.Name = null  // optional
	this.Description = null  // optional
	this.CompositeProfile = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.MaterialProfiles))
		parameters.push(BaseIfc.toStepValue(this.CompositeProfile))

        return parameters.join()
    }
}