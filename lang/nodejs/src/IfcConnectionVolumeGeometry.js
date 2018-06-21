
const BaseIfc = require('./BaseIfc')
const IfcClosedShell = require('./IfcClosedShell')
const IfcSolidModel = require('./IfcSolidModel')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectionvolumegeometry.htm
 */
module.exports = class IfcConnectionVolumeGeometry extends IfcConnectionGeometry {
  
    constructor(volumeOnRelatingElement) {
        super()
		this.VolumeOnRelatingElement = volumeOnRelatingElement

        	this.VolumeOnRelatedElement = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.VolumeOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.VolumeOnRelatedElement))

        return parameters.join()
    }
}