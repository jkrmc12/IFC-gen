
import {BaseIfc} from "./BaseIfc"
import {IfcGloballyUniqueId} from "./IfcGloballyUniqueId.g"
import {IfcOwnerHistory} from "./IfcOwnerHistory.g"
import {IfcLabel} from "./IfcLabel.g"
import {IfcText} from "./IfcText.g"
import {IfcRelAssigns} from "./IfcRelAssigns.g"
import {IfcRelNests} from "./IfcRelNests.g"
import {IfcRelDeclares} from "./IfcRelDeclares.g"
import {IfcRelAggregates} from "./IfcRelAggregates.g"
import {IfcRelAssociates} from "./IfcRelAssociates.g"
import {IfcRelDefinesByObject} from "./IfcRelDefinesByObject.g"
import {IfcRelDefinesByType} from "./IfcRelDefinesByType.g"
import {IfcRelDefinesByProperties} from "./IfcRelDefinesByProperties.g"
import {IfcObjectPlacement} from "./IfcObjectPlacement.g"
import {IfcProductRepresentation} from "./IfcProductRepresentation.g"
import {IfcRelAssignsToProduct} from "./IfcRelAssignsToProduct.g"
import {IfcIdentifier} from "./IfcIdentifier.g"
import {IfcRelFillsElement} from "./IfcRelFillsElement.g"
import {IfcRelConnectsElements} from "./IfcRelConnectsElements.g"
import {IfcRelInterferesElements} from "./IfcRelInterferesElements.g"
import {IfcRelProjectsElement} from "./IfcRelProjectsElement.g"
import {IfcRelReferencedInSpatialStructure} from "./IfcRelReferencedInSpatialStructure.g"
import {IfcRelVoidsElement} from "./IfcRelVoidsElement.g"
import {IfcRelConnectsWithRealizingElements} from "./IfcRelConnectsWithRealizingElements.g"
import {IfcRelSpaceBoundary} from "./IfcRelSpaceBoundary.g"
import {IfcRelContainedInSpatialStructure} from "./IfcRelContainedInSpatialStructure.g"
import {IfcRelCoversBldgElements} from "./IfcRelCoversBldgElements.g"
import {IfcTendonTypeEnum} from "./IfcTendonTypeEnum.g"
import {IfcPositiveLengthMeasure} from "./IfcPositiveLengthMeasure.g"
import {IfcAreaMeasure} from "./IfcAreaMeasure.g"
import {IfcForceMeasure} from "./IfcForceMeasure.g"
import {IfcPressureMeasure} from "./IfcPressureMeasure.g"
import {IfcNormalisedRatioMeasure} from "./IfcNormalisedRatioMeasure.g"
import {IfcReinforcingElement} from "./IfcReinforcingElement.g"

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctendon.htm
 */
export class IfcTendon extends IfcReinforcingElement {
	PredefinedType : IfcTendonTypeEnum // optional
	NominalDiameter : IfcPositiveLengthMeasure // optional
	CrossSectionArea : IfcAreaMeasure // optional
	TensionForce : IfcForceMeasure // optional
	PreStress : IfcPressureMeasure // optional
	FrictionCoefficient : IfcNormalisedRatioMeasure // optional
	AnchorageSlip : IfcPositiveLengthMeasure // optional
	MinCurvatureRadius : IfcPositiveLengthMeasure // optional

    constructor(globalId : IfcGloballyUniqueId) {
        super(globalId)

    }
    getStepParameters() : string {
        var parameters = new Array<string>();
		parameters.push(this.GlobalId != null ? BaseIfc.toStepValue(this.GlobalId) : "$");
		parameters.push(this.OwnerHistory != null ? BaseIfc.toStepValue(this.OwnerHistory) : "$");
		parameters.push(this.Name != null ? BaseIfc.toStepValue(this.Name) : "$");
		parameters.push(this.Description != null ? BaseIfc.toStepValue(this.Description) : "$");
		parameters.push(this.ObjectType != null ? BaseIfc.toStepValue(this.ObjectType) : "$");
		parameters.push(this.ObjectPlacement != null ? BaseIfc.toStepValue(this.ObjectPlacement) : "$");
		parameters.push(this.Representation != null ? BaseIfc.toStepValue(this.Representation) : "$");
		parameters.push(this.Tag != null ? BaseIfc.toStepValue(this.Tag) : "$");
		parameters.push(this.SteelGrade != null ? BaseIfc.toStepValue(this.SteelGrade) : "$");
		parameters.push(BaseIfc.toStepValue(this.PredefinedType));
		parameters.push(this.NominalDiameter != null ? BaseIfc.toStepValue(this.NominalDiameter) : "$");
		parameters.push(this.CrossSectionArea != null ? BaseIfc.toStepValue(this.CrossSectionArea) : "$");
		parameters.push(this.TensionForce != null ? BaseIfc.toStepValue(this.TensionForce) : "$");
		parameters.push(this.PreStress != null ? BaseIfc.toStepValue(this.PreStress) : "$");
		parameters.push(this.FrictionCoefficient != null ? BaseIfc.toStepValue(this.FrictionCoefficient) : "$");
		parameters.push(this.AnchorageSlip != null ? BaseIfc.toStepValue(this.AnchorageSlip) : "$");
		parameters.push(this.MinCurvatureRadius != null ? BaseIfc.toStepValue(this.MinCurvatureRadius) : "$");

        return parameters.join();
    }
}