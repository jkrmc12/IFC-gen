
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCurve = require('./IfcCurve')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcParameterValue = require('./IfcParameterValue')
const IfcBoolean = require('./IfcBoolean')
const IfcTrimmingPreference = require('./IfcTrimmingPreference')
const IfcBoundedCurve = require('./IfcBoundedCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctrimmedcurve.htm
 */
module.exports = class IfcTrimmedCurve extends IfcBoundedCurve {
  
    constructor(basisCurve, trim1, trim2, senseAgreement, masterRepresentation) {
        super()
		this.BasisCurve = basisCurve
		this.Trim1 = trim1
		this.Trim2 = trim2
		this.SenseAgreement = senseAgreement
		this.MasterRepresentation = masterRepresentation

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BasisCurve))
		parameters.push(BaseIfc.toStepValue(this.Trim1))
		parameters.push(BaseIfc.toStepValue(this.Trim2))
		parameters.push(BaseIfc.toStepValue(this.SenseAgreement))
		parameters.push(BaseIfc.toStepValue(this.MasterRepresentation))

        return parameters.join()
    }
}