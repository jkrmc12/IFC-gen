
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcBoundedCurve = require('./IfcBoundedCurve')
const IfcProfileDef = require('./IfcProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryopenprofiledef.htm
 */
module.exports = class IfcArbitraryOpenProfileDef extends IfcProfileDef {
  
    constructor(profileType, curve) {
        super(profileType)
		this.Curve = curve

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Curve))

        return parameters.join()
    }
}