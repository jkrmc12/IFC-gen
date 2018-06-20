
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcMaterialProfileSet = require('./IfcMaterialProfileSet')
const IfcCardinalPointReference = require('./IfcCardinalPointReference')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcMaterialProfileSetUsage = require('./IfcMaterialProfileSetUsage')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilesetusagetapering.htm
 */
module.exports = class IfcMaterialProfileSetUsageTapering extends IfcMaterialProfileSetUsage {
  
    constructor(forProfileSet, forProfileEndSet) {
        super(forProfileSet)
		this.ForProfileEndSet = forProfileEndSet

        	this.CardinalEndPoint = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ForProfileSet))
		parameters.push(BaseIfc.toStepValue(this.CardinalPoint))
		parameters.push(BaseIfc.toStepValue(this.ReferenceExtent))
		parameters.push(BaseIfc.toStepValue(this.ForProfileEndSet))
		parameters.push(BaseIfc.toStepValue(this.CardinalEndPoint))

        return parameters.join()
    }
}