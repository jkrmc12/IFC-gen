
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCurve = require('./IfcCurve')
const IfcPoint = require('./IfcPoint')
const IfcSurface = require('./IfcSurface')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgeometricset.htm
 */
module.exports = class IfcGeometricSet extends IfcGeometricRepresentationItem {
  
    constructor(elements) {
        super()
		this.Elements = elements

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Elements))

        return parameters.join()
    }
}