
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCurve = require('./IfcCurve')
const IfcParameterValue = require('./IfcParameterValue')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcPoint = require('./IfcPoint')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointoncurve.htm
 */
module.exports = class IfcPointOnCurve extends IfcPoint {
  
    constructor(basisCurve, pointParameter) {
        super()
		this.BasisCurve = basisCurve
		this.PointParameter = pointParameter

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BasisCurve))
		parameters.push(BaseIfc.toStepValue(this.PointParameter))

        return parameters.join()
    }
}