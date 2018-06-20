
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcMaterialProperties = require('./IfcMaterialProperties')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcMaterial = require('./IfcMaterial')
const IfcProfileDef = require('./IfcProfileDef')
const IfcInteger = require('./IfcInteger')
const IfcMaterialProfileSet = require('./IfcMaterialProfileSet')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofile.htm
 */
module.exports = class IfcMaterialProfile extends IfcMaterialDefinition {
  
    constructor(profile) {
        super()
		this.Profile = profile

        	this.Name = null  // optional
	this.Description = null  // optional
	this.Material = null  // optional
	this.Priority = null  // optional
	this.Category = null  // optional
	this.ToMaterialProfileSet = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Material))
		parameters.push(BaseIfc.toStepValue(this.Profile))
		parameters.push(BaseIfc.toStepValue(this.Priority))
		parameters.push(BaseIfc.toStepValue(this.Category))

        return parameters.join()
    }
}