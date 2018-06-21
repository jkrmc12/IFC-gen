
const BaseIfc = require('./BaseIfc')
const IfcRelAssociatesMaterial = require('./IfcRelAssociatesMaterial')
const IfcMaterialProfileSet = require('./IfcMaterialProfileSet')
const IfcCardinalPointReference = require('./IfcCardinalPointReference')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcMaterialUsageDefinition = require('./IfcMaterialUsageDefinition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialprofilesetusage.htm
 */
module.exports = class IfcMaterialProfileSetUsage extends IfcMaterialUsageDefinition {
  
    constructor(forProfileSet) {
        super()
		this.ForProfileSet = forProfileSet

        	this.CardinalPoint = null  // optional
	this.ReferenceExtent = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ForProfileSet))
		parameters.push(BaseIfc.toStepValue(this.CardinalPoint))
		parameters.push(BaseIfc.toStepValue(this.ReferenceExtent))

        return parameters.join()
    }
}