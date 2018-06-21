
const BaseIfc = require('./BaseIfc')
const IfcRecurrenceTypeEnum = require('./IfcRecurrenceTypeEnum')
const IfcDayInMonthNumber = require('./IfcDayInMonthNumber')
const IfcDayInWeekNumber = require('./IfcDayInWeekNumber')
const IfcMonthInYearNumber = require('./IfcMonthInYearNumber')
const IfcInteger = require('./IfcInteger')
const IfcTimePeriod = require('./IfcTimePeriod')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrecurrencepattern.htm
 */
module.exports = class IfcRecurrencePattern extends BaseIfc {
  
    constructor(recurrenceType) {
        super()
		this.RecurrenceType = recurrenceType

        	this.DayComponent = null  // optional
	this.WeekdayComponent = null  // optional
	this.MonthComponent = null  // optional
	this.Position = null  // optional
	this.Interval = null  // optional
	this.Occurrences = null  // optional
	this.TimePeriods = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.RecurrenceType))
		parameters.push(BaseIfc.toStepValue(this.DayComponent))
		parameters.push(BaseIfc.toStepValue(this.WeekdayComponent))
		parameters.push(BaseIfc.toStepValue(this.MonthComponent))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Interval))
		parameters.push(BaseIfc.toStepValue(this.Occurrences))
		parameters.push(BaseIfc.toStepValue(this.TimePeriods))

        return parameters.join()
    }
}