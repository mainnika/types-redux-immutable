// Type definitions for redux-immutable 4.0
// Project: https://github.com/gajus/redux-immutable
// Definitions by: Pedro Pereira <https://github.com/oizie>
//                 Sebastian Sebald <https://github.com/sebald>
//                 Gavin Gregory <https://github.com/gavingregory>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Nikita Tokarchuk <https://github.com/mainnika>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ReducersMapObject, Reducer, Action } from 'redux';
import { Collection } from 'immutable';

export function combineReducers<S, A extends Action, T>(
  reducers: ReducersMapObject<S, A>,
  getDefaultState?: () => Collection.Keyed<T, S>,
): Reducer<S, A>;
export function combineReducers<S, A extends Action>(
  reducers: ReducersMapObject<S, A>,
  getDefaultState?: () => Collection.Indexed<S>,
): Reducer<S, A>;
export function combineReducers<S>(
  reducers: ReducersMapObject<S, any>,
  getDefaultState?: () => Collection.Indexed<S>,
): Reducer<S>;
