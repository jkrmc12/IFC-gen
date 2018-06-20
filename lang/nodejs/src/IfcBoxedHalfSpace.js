
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcSurface = require('./IfcSurface')
const IfcBoolean = require('./IfcBoolean')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcBoundingBox = require('./IfcBoundingBox')
const IfcHalfSpaceSolid = require('./IfcHalfSpaceSolid')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboxedhalfspace.htm
 */
module.exports = class IfcBoxedHalfSpace extends IfcHalfSpaceSolid {
  
    constructor(baseSurface, agreementFlag, enclosure) {
        super(baseSurface,agreementFlag)
		this.Enclosure = enclosure

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BaseSurface))
		parameters.push(BaseIfc.toStepValue(this.AgreementFlag))
		parameters.push(BaseIfc.toStepValue(this.Enclosure))

        return parameters.join()
    }
}