
const BaseIfc = require('./BaseIfc')
const IfcTime = require('./IfcTime')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctimeperiod.htm
 */
module.exports = class IfcTimePeriod extends BaseIfc {
  
    constructor(startTime, endTime) {
        super()
		this.StartTime = startTime
		this.EndTime = endTime

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.StartTime))
		parameters.push(BaseIfc.toStepValue(this.EndTime))

        return parameters.join()
    }
}