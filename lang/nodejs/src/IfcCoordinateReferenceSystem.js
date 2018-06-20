
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcIdentifier = require('./IfcIdentifier')
const IfcCoordinateOperation = require('./IfcCoordinateOperation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccoordinatereferencesystem.htm
 */
module.exports = class IfcCoordinateReferenceSystem extends BaseIfc {
  
    constructor(name) {
        super()
		this.Name = name

        	this.Description = null  // optional
	this.GeodeticDatum = null  // optional
	this.VerticalDatum = null  // optional
	this.HasCoordinateOperation = null  // inverse

    }
}