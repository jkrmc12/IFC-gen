
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCompositeCurve = require('./IfcCompositeCurve')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsectionedspine.htm
 */
module.exports = class IfcSectionedSpine extends IfcGeometricRepresentationItem {
  
    constructor(spineCurve, crossSections, crossSectionPositions) {
        super()
		this.SpineCurve = spineCurve
		this.CrossSections = crossSections
		this.CrossSectionPositions = crossSectionPositions

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SpineCurve))
		parameters.push(BaseIfc.toStepValue(this.CrossSections))
		parameters.push(BaseIfc.toStepValue(this.CrossSectionPositions))

        return parameters.join()
    }
}