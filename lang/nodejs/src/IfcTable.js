
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcTableRow = require('./IfcTableRow')
const IfcTableColumn = require('./IfcTableColumn')
const IfcInteger = require('./IfcInteger')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctable.htm
 */
module.exports = class IfcTable extends BaseIfc {
  
    constructor() {
        super()
        	this.Name = null  // optional
	this.Rows = null  // optional
	this.Columns = null  // optional

    Object.defineProperty(this, 'NumberOfCellsInRow', {
        get: () => {throw "Derived property logic has not been implemented for NumberOfCellsInRow."}, // derived
        set: (value) => {this.NumberOfCellsInRow = value}
    })

    Object.defineProperty(this, 'NumberOfHeadings', {
        get: () => {throw "Derived property logic has not been implemented for NumberOfHeadings."}, // derived
        set: (value) => {this.NumberOfHeadings = value}
    })

    Object.defineProperty(this, 'NumberOfDataRows', {
        get: () => {throw "Derived property logic has not been implemented for NumberOfDataRows."}, // derived
        set: (value) => {this.NumberOfDataRows = value}
    })

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Rows))
		parameters.push(BaseIfc.toStepValue(this.Columns))

        return parameters.join()
    }
}