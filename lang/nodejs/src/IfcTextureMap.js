
const BaseIfc = require('./BaseIfc')
const IfcSurfaceTexture = require('./IfcSurfaceTexture')
const IfcTextureVertex = require('./IfcTextureVertex')
const IfcFace = require('./IfcFace')
const IfcTextureCoordinate = require('./IfcTextureCoordinate')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturemap.htm
 */
module.exports = class IfcTextureMap extends IfcTextureCoordinate {
  
    constructor(maps, vertices, mappedTo) {
        super(maps)
		this.Vertices = vertices
		this.MappedTo = mappedTo

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Maps))
		parameters.push(BaseIfc.toStepValue(this.Vertices))
		parameters.push(BaseIfc.toStepValue(this.MappedTo))

        return parameters.join()
    }
}