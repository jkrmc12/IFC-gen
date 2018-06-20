
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcCurve = require('./IfcCurve')
const IfcArbitraryClosedProfileDef = require('./IfcArbitraryClosedProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcarbitraryprofiledefwithvoids.htm
 */
module.exports = class IfcArbitraryProfileDefWithVoids extends IfcArbitraryClosedProfileDef {
  
    constructor(profileType, outerCurve, innerCurves) {
        super(profileType,outerCurve)
		this.InnerCurves = innerCurves

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.OuterCurve))
		parameters.push(BaseIfc.toStepValue(this.InnerCurves))

        return parameters.join()
    }
}