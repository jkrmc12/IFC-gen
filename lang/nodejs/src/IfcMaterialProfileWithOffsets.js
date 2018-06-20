
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
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcMaterialProfile = require('./IfcMaterialProfile')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilewithoffsets.htm
 */
module.exports = class IfcMaterialProfileWithOffsets extends IfcMaterialProfile {
  
    constructor(profile, offsetValues) {
        super(profile)
		this.OffsetValues = offsetValues

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Material))
		parameters.push(BaseIfc.toStepValue(this.Profile))
		parameters.push(BaseIfc.toStepValue(this.Priority))
		parameters.push(BaseIfc.toStepValue(this.Category))
		parameters.push(BaseIfc.toStepValue(this.OffsetValues))

        return parameters.join()
    }
}