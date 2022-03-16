/**
 * Created by naijun at 2022/03/11
 * Copyright (c) naijun
 *
 * PLEASE CHECK LICENSE THE LICENSE OF THE PROJECT REPOSITORY
 */

import * as EventEmitter from 'eventemitter3';

export type TypedListeners<L> = {
    [E in keyof L]: (...args: any[]) => unknown;
};

export type DefaultListeners = Record<string | symbol, (...args: unknown[]) => unknown>;

declare class TypedEmitterImpl<L extends TypedListeners<L> = DefaultListeners> {
    addListener<U extends keyof L>(event: U, listener: L[U]): this;
    removeListener<U extends keyof L>(event: U, listener: L[U]): this;
    removeAllListeners(event?: keyof L): this;
    once<U extends keyof L>(event: U, listener: L[U]): this;
    on<U extends keyof L>(event: U, listener: L[U]): this;
    off<U extends keyof L>(event: U, listener: L[U]): this;
    emit<U extends keyof L>(event: U, ...args: Parameters<L[U]>): boolean;
    eventNames<U extends keyof L>(): U[];
    listenerCount(type: keyof L): number;
    listeners<U extends keyof L>(type: U): L[U][];
}

export class TypedEmitter<L extends TypedListeners<L>>
    extends (EventEmitter as { new <L extends TypedListeners<L>>(): TypedEmitterImpl<L> })<L> {}