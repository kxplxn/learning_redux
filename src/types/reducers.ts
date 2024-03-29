﻿import {AppState, ErrorList, SkiDay, ResortNames} from "../types/states";
import {ErrorListAction, SetGoalAction, SkiDayAction, ResortNamesAction} from "../types/actions";
import {
    ADD_DAY,
    ADD_ERROR,
    CANCEL_FETCHING,
    CHANGE_SUGGESTIONS,
    CLEAR_ERROR, CLEAR_SUGGESTIONS,
    FETCH_RESORT_NAMES,
    REMOVE_DAY,
    SET_GOAL
} from "../constants";
import {Action, AnyAction, CombinedState, combineReducers, Reducer} from "redux";
import {goal} from "../store/reducers";

export type GoalReducer = (state : number, action : SetGoalAction) => number;
export type SkiDayReducer = (state : SkiDay, action : SkiDayAction) => SkiDay;
export type ErrorListReducer = (state : ErrorList, action : ErrorListAction) => ErrorList;
export type AllSkiDaysReducer = (state : SkiDay[], action : SkiDayAction) => SkiDay[];
export type FetchingReducer = (state : boolean, action : ResortNamesAction) => boolean;
export type SuggestionsReducer = (state : string[], action : ResortNamesAction) => string[];
export type ResortNamesReducer = Reducer<CombinedState<ResortNames>,ResortNamesAction>;
export type SingleReducer = Reducer<CombinedState<AppState>,AnyAction>;
