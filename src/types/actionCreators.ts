﻿import {
    AddDayAction,
    ErrorListAction,
    SetGoalAction,
    RemoveDayAction,
    ResortNamesAction,
    SkiDayAction,
    AddErrorAction,
    ClearSuggestionsAction, ChangeSuggestionsAction, ClearErrorAction
} from "./actions";
import {Action, ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppState} from "./states";

export type AddDayActionCreator = (
    resort : string,
    date : string, 
    powder? : boolean, 
    backcountry? : boolean
) => AddDayAction;

export type RemoveDayActionCreator = (date : string) => RemoveDayAction;

export type SetGoalActionCreator = (goal : number) => SetGoalAction;

export type ClearSuggestionsActionCreator = () => ClearSuggestionsAction;

export type ChangeSuggestionsActionCreator = (suggestions : string[]) => ChangeSuggestionsAction;

export type AddErrorActionCreator = (error : string) => AddErrorAction;

export type ClearErrorActionCreator = (i : number) => ClearErrorAction;

