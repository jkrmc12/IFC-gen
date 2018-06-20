
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcCurve = require('./IfcCurve')
const IfcParameterValue = require('./IfcParameterValue')
const IfcDirection = require('./IfcDirection')
const IfcSweptAreaSolid = require('./IfcSweptAreaSolid')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcfixedreferencesweptareasolid.htm
 */
module.exports = class IfcFixedReferenceSweptAreaSolid extends IfcSweptAreaSolid {
  
    constructor(sweptArea, directrix, fixedReference) {
        super(sweptArea)
		this.Directrix = directrix
		this.FixedReference = fixedReference

        	this.StartParam = null  // optional
	this.EndParam = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.SweptArea))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Directrix))
		parameters.push(BaseIfc.toStepValue(this.StartParam))
		parameters.push(BaseIfc.toStepValue(this.EndParam))
		parameters.push(BaseIfc.toStepValue(this.FixedReference))

        return parameters.join()
    }
}