
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcClosedShell = require('./IfcClosedShell')
const IfcOpenShell = require('./IfcOpenShell')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcGeometricRepresentationItem = require('./IfcGeometricRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshellbasedsurfacemodel.htm
 */
module.exports = class IfcShellBasedSurfaceModel extends IfcGeometricRepresentationItem {
  
    constructor(sbsmBoundary) {
        super()
		this.SbsmBoundary = sbsmBoundary

        
    Object.defineProperty(this, 'Dim', {
        get: () => {throw "Derived property logic has not been implemented for Dim."}, // derived
        set: (value) => {this.Dim = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SbsmBoundary))

        return parameters.join()
    }
}