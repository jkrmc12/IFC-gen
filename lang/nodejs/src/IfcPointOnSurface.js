
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcSurface = require('./IfcSurface')
const IfcParameterValue = require('./IfcParameterValue')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcPoint = require('./IfcPoint')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpointonsurface.htm
 */
module.exports = class IfcPointOnSurface extends IfcPoint {
  
    constructor(basisSurface, pointParameterU, pointParameterV) {
        super()
		this.BasisSurface = basisSurface
		this.PointParameterU = pointParameterU
		this.PointParameterV = pointParameterV

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BasisSurface))
		parameters.push(BaseIfc.toStepValue(this.PointParameterU))
		parameters.push(BaseIfc.toStepValue(this.PointParameterV))

        return parameters.join()
    }
}