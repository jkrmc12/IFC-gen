
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcFaceBound = require('./IfcFaceBound')
const IfcTextureMap = require('./IfcTextureMap')
const IfcTopologicalRepresentationItem = require('./IfcTopologicalRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcface.htm
 */
module.exports = class IfcFace extends IfcTopologicalRepresentationItem {
  
    constructor(bounds) {
        super()
		this.Bounds = bounds

        	this.HasTextureMaps = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Bounds))

        return parameters.join()
    }
}