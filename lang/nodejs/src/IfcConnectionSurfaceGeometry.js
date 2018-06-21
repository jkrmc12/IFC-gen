
const BaseIfc = require('./BaseIfc')
const IfcFaceBasedSurfaceModel = require('./IfcFaceBasedSurfaceModel')
const IfcFaceSurface = require('./IfcFaceSurface')
const IfcSurface = require('./IfcSurface')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionsurfacegeometry.htm
 */
module.exports = class IfcConnectionSurfaceGeometry extends IfcConnectionGeometry {
  
    constructor(surfaceOnRelatingElement) {
        super()
		this.SurfaceOnRelatingElement = surfaceOnRelatingElement

        	this.SurfaceOnRelatedElement = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SurfaceOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.SurfaceOnRelatedElement))

        return parameters.join()
    }
}