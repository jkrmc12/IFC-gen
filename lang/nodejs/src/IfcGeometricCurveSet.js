
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCurve = require('./IfcCurve')
const IfcPoint = require('./IfcPoint')
const IfcSurface = require('./IfcSurface')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcGeometricSet = require('./IfcGeometricSet')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometriccurveset.htm
 */
module.exports = class IfcGeometricCurveSet extends IfcGeometricSet {
  
    constructor(elements) {
        super(elements)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Elements))

        return parameters.join()
    }
}