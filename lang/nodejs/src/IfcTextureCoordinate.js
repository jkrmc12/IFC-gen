
const BaseIfc = require('./BaseIfc')
const IfcSurfaceTexture = require('./IfcSurfaceTexture')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturecoordinate.htm
 */
module.exports = class IfcTextureCoordinate extends IfcPresentationItem {
  
    constructor(maps) {
        super()
		this.Maps = maps

        
    }
}