
const BaseIfc = require('./BaseIfc')
const IfcSurfaceTexture = require('./IfcSurfaceTexture')
const IfcLabel = require('./IfcLabel')
const IfcReal = require('./IfcReal')
const IfcTextureCoordinate = require('./IfcTextureCoordinate')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinategenerator.htm
 */
module.exports = class IfcTextureCoordinateGenerator extends IfcTextureCoordinate {
  
    constructor(maps, mode) {
        super(maps)
		this.Mode = mode

        	this.Parameter = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Maps))
		parameters.push(BaseIfc.toStepValue(this.Mode))
		parameters.push(BaseIfc.toStepValue(this.Parameter))

        return parameters.join()
    }
}