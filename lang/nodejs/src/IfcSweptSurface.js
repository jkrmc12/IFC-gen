
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcProfileDef = require('./IfcProfileDef')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcSurface = require('./IfcSurface')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsweptsurface.htm
 */
module.exports = class IfcSweptSurface extends IfcSurface {
  
    constructor(sweptCurve) {
        super()
		this.SweptCurve = sweptCurve

        	this.Position = null  // optional

    }
}