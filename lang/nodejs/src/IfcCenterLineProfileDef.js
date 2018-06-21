
const BaseIfc = require('./BaseIfc')
const IfcProfileTypeEnum = require('./IfcProfileTypeEnum')
const IfcLabel = require('./IfcLabel')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcProfileProperties = require('./IfcProfileProperties')
const IfcBoundedCurve = require('./IfcBoundedCurve')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcArbitraryOpenProfileDef = require('./IfcArbitraryOpenProfileDef')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccenterlineprofiledef.htm
 */
module.exports = class IfcCenterLineProfileDef extends IfcArbitraryOpenProfileDef {
  
    constructor(profileType, curve, thickness) {
        super(profileType,curve)
		this.Thickness = thickness

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ProfileType))
		parameters.push(BaseIfc.toStepValue(this.ProfileName))
		parameters.push(BaseIfc.toStepValue(this.Curve))
		parameters.push(BaseIfc.toStepValue(this.Thickness))

        return parameters.join()
    }
}