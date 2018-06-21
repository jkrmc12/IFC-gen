
const BaseIfc = require('./BaseIfc')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcRepresentation = require('./IfcRepresentation')
const IfcShapeAspect = require('./IfcShapeAspect')
const IfcMappedItem = require('./IfcMappedItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrepresentationmap.htm
 */
module.exports = class IfcRepresentationMap extends BaseIfc {
  
    constructor(mappingOrigin, mappedRepresentation) {
        super()
		this.MappingOrigin = mappingOrigin
		this.MappedRepresentation = mappedRepresentation

        	this.HasShapeAspects = null  // inverse
	this.MapUsage = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.MappingOrigin))
		parameters.push(BaseIfc.toStepValue(this.MappedRepresentation))

        return parameters.join()
    }
}