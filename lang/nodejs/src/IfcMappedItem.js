
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcRepresentationMap = require('./IfcRepresentationMap')
const IfcCartesianTransformationOperator = require('./IfcCartesianTransformationOperator')
const IfcRepresentationItem = require('./IfcRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmappeditem.htm
 */
module.exports = class IfcMappedItem extends IfcRepresentationItem {
  
    constructor(mappingSource, mappingTarget) {
        super()
		this.MappingSource = mappingSource
		this.MappingTarget = mappingTarget

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.MappingSource))
		parameters.push(BaseIfc.toStepValue(this.MappingTarget))

        return parameters.join()
    }
}