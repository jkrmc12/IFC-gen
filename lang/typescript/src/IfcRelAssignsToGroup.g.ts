
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcObjectDefinition} from "./IfcObjectDefinition.g"
import {IfcObjectTypeEnum} from "./IfcObjectTypeEnum.g"
import {IfcGroup} from "./IfcGroup.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassignstogroup.htm
 */
export class IfcRelAssignsToGroup extends IfcRelAssigns {
	RelatingGroup : IfcGroup

    constructor(globalId : IfcGloballyUniqueId, relatedObjects : Array<IfcObjectDefinition>, relatingGroup : IfcGroup) {
        super(globalId,relatedObjects)

		this.RelatingGroup = relatingGroup

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.RelatedObjects != null ? BaseIfc.toStepValue(this.RelatedObjects) : "$");
		parameters.push(BaseIfc.toStepValue(this.RelatedObjectsType));
		parameters.push(this.RelatingGroup != null ? BaseIfc.toStepValue(this.RelatingGroup) : "$");

        return parameters.join();
    }
}