/*
jsonpath


listprint:

console.log([...new Set(         )].sort().map(c => JSON.stringify(c)).join(" | "))
*/

import { ShortcutsActionCategory } from "./Strings/ShortcutsActionCategory";
import { ShortcutsActionSubcategory } from "./Strings/ShortcutsActionSubcategory";
import { ShortcutsActionIODataType } from "./Strings/ShortcutsActionIODataType";
import { ShortcutsActionSupportedUserInterface } from "./Strings/ShortcutsActionSupportedUserInterface";
import { ShortcutsActionIconName } from "./Strings/ShortcutsActionIconName";
import { ShortcutsAppIdentifier } from "./Strings/ShortcutsAppIdentifier";
import { ShortcutsActionClass } from "./Strings/ShortcutsActionClass";
import { ShortcutsActionEnvironments } from "./Strings/ShortcutsActionEnvironments";
import { ShortcutsActionAceCommandClass } from "./Strings/ShortcutsActionAceCommandClass";

import { CoercionTypeClass } from "../../WFTypes/Types";

import { ShortcutsParameterSpec } from "./ShortcutsParameterSpec";
import { ShortcutsResourceSpec } from "./ShortcutsResourceSpec";

export type ShortcutsActionIOSpec = {
	Multiple?: boolean;
	Required?: boolean;
	Types?: ShortcutsActionIODataType[];
};

export type ShortcutsActionBaseSpec = {
	ActionClass: ShortcutsActionClass;
	ActionKeywords?: string[];
	AppIdentifier?: ShortcutsAppIdentifier;
	Category?: ShortcutsActionCategory;
	Subcategory?: ShortcutsActionSubcategory;
	Description?: {
		DescriptionNote?: string;
		DescriptionAttribution?: {
			Description: string;
			Link: {
				Text: "The Weather Channel";
				URL: "https://www.weather.com";
			};
		};
		DescriptionInput?: string;
		DescriptionSummary?: string;
		DescriptionResult?: string;
	};
	Discontinued?: boolean;
	Input?: ShortcutsActionIOSpec & { TypePassthrough?: boolean };
	Output?: ShortcutsActionIOSpec & { OutputName?: string };
	IconName?: ShortcutsActionIconName;
	InputPassthrough?: boolean;
	CreationDate?: string;
	LastModifiedDate?: string;
	Name?: string;
	Parameters?: ShortcutsParameterSpec[];
	RequiredResources?: ShortcutsResourceSpec[];
	IntentIdentifier?: string;
	UserInterfaces?: ShortcutsActionSupportedUserInterface[];
	UnsupportedEnvironments?: ShortcutsActionEnvironments[];
	ShortName?: string;
	SuggestedNever?: boolean;
	SuggestedAsInitialAction?: boolean;
	BlockInfo?: {
		Example?: string;
		Completion?: string;
	};
	AppSection?: "CloudApp" | "Pinboard";
	SettingsUI?: {
		ViewControllerClass: string;
		ShowWhenResourcesUnavailable?: boolean;
	};
	RunningUIComponentClass?: string;
	AppInfo?: "Evernote";
	OutputName?: string;
	IsDebugAction?: boolean;
	IntentName?: string;
	Discoverable?: boolean;
};

export type ShortcutsStartCallActionSpec = ShortcutsActionBaseSpec & {
	WFStartCallActionType: "FaceTime";
};

export type ShortcutsACESetSettingActionSpec = ShortcutsActionBaseSpec & {
	ACECommandClass: ShortcutsActionAceCommandClass;
	ACESettingValueKey: string;
};

export type ShortcutsCoercionActionSpec = ShortcutsActionBaseSpec & {
	CoercionItemClass: CoercionTypeClass;
};

export type ShortcutsContentItemFilterActionSpec = ShortcutsActionBaseSpec & {
	WFContentItemClass: CoercionTypeClass;
	WFContentItemDefaultProperty:
		| "Album"
		| "Artist"
		| "Body"
		| "Calendar"
		| "List"
		| "Value";
};

export type ShortcutsGetLatestPhotosActionSpec = ShortcutsActionBaseSpec & {
	WFGetLatestPhotosActionType:
		| "Photo"
		| "Screenshot"
		| "Video"
		| "Burst"
		| "Live Photo";
};

export type ShortcutsGetUpcomingCalendarItemsActionSpec = ShortcutsActionBaseSpec & {
	WFGetUpcomingItemType: 0 | 1;
};

export type ShortcutsSocialActionSpec = ShortcutsActionBaseSpec & {
	ConvertsAnimatedImagesToVideo: boolean;
	ICActionIdentifier:
		| "com.facebook.Facebook.ShareExtension"
		| "com.atebits.Tweetie2.ShareExtension";
};

export type ShortcutsContentItemPropertiesActionSpec = ShortcutsActionBaseSpec & {
	WFContentItemClass: CoercionTypeClass;
};

export type ShortcutsRemoveCalendarItemsActionSpec = ShortcutsActionBaseSpec & {
	WFCalendarItemEntityType: "Event" | "Reminder";
};

export type ShortcutsFindHealthSamplesActionSpec = ShortcutsContentItemFilterActionSpec;
export type ShortcutsToggleFlashlightActionSpec = ShortcutsACESetSettingActionSpec;
export type ShortcutsSetBrightnessActionSpec = ShortcutsACESetSettingActionSpec;
export type ShortcutsACESetWiFiActionSpec = ShortcutsACESetSettingActionSpec;

export type ShortcutsSelectContactsActionSpec = ShortcutsActionBaseSpec & {
	ContactProperties: ("Email" | "Phone")[];
};

export type ShortcutsSendMessageActionSpec = ShortcutsActionBaseSpec & {
	RateLimit: {
		Delay: number;
		Threshold: number;
		Timeout: number;
	};
};

export type ShortcutsSkipSongActionSpec = ShortcutsActionBaseSpec & {
	WFSkipSongActionMode: "Back" | "Forward";
};

export type ShortcutsTextComponentsActionSpec = ShortcutsActionBaseSpec & {
	WFTextComponentsMode: "Combine" | "Split";
};

type _ac<N extends string> = { ActionClass: N };

export type ShortcutsActionSpec =
	| ShortcutsActionBaseSpec
	| (ShortcutsStartCallActionSpec & _ac<"WFStartCallAction">)
	| (ShortcutsACESetSettingActionSpec & _ac<"WFACESetSettingAction">)
	| (ShortcutsCoercionActionSpec & _ac<"WFCoercionAction">)
	| (ShortcutsContentItemFilterActionSpec & _ac<"WFContentItemFilterAction">)
	| (ShortcutsFindHealthSamplesActionSpec & _ac<"WFFindHealthSamplesAction">)
	| (ShortcutsToggleFlashlightActionSpec & _ac<"WFToggleFlashlightAction">)
	| (ShortcutsGetLatestPhotosActionSpec & _ac<"WFGetLatestPhotosAction">)
	| (ShortcutsGetUpcomingCalendarItemsActionSpec &
			_ac<"WFGetUpcomingCalendarItemsAction">)
	| (ShortcutsSocialActionSpec & _ac<"WFSocialAction">)
	| (ShortcutsContentItemPropertiesActionSpec &
			_ac<"WFContentItemPropertiesAction">)
	| (ShortcutsRemoveCalendarItemsActionSpec &
			_ac<"WFRemoveCalendarItemsAction">)
	| (ShortcutsSelectContactsActionSpec & _ac<"WFSelectContactsAction">)
	| (ShortcutsSendMessageActionSpec & _ac<"WFSendMessageAction">)
	| (ShortcutsSetBrightnessActionSpec & _ac<"WFSetBrightnessAction">)
	| (ShortcutsSkipSongActionSpec & _ac<"WFSkipSongAction">)
	| (ShortcutsTextComponentsActionSpec & _ac<"WFTextComponentsAction">)
	| (ShortcutsACESetWiFiActionSpec & _ac<"WFACESetWiFiAction">);
