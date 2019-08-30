/**
 * @author empty916
 * @email [empty916@qq.com]
 * @create date 2019-08-09 17:12:36
 * @modify date 2019-08-09 17:12:36
 * @desc [description]
 */
declare type anyFn = (...arg: any[]) => any;
declare type TActions = {
    [type: string]: anyFn;
};
declare type TMaps = {
    [p: string]: (state: any) => unknown;
};
export interface StoreModule {
    state: any;
    actions: TActions;
    maps?: TMaps;
}
export interface LazyStoreModules {
    [p: string]: () => Promise<StoreModule>;
}
declare type Modules = {
    [p: string]: StoreModule;
};
export interface Store {
    createDispatch: (a: string) => (type: string, data: any) => void | Promise<any>;
    addModule: (moduleName: string, storeModule: StoreModule) => void;
    getModule: (moduleName: string) => any;
    getLazyModule: (moduleName: string) => () => Promise<StoreModule>;
    setModule: (moduleName: string, storeModule: StoreModule) => void;
    hasModule: (moduleName: string) => boolean;
    subscribe: (moduleName: string, listener: anyFn) => () => void;
    getAllModuleName: () => string[];
}
declare type TCreateStore = (modules: Modules, lazyModules: LazyStoreModules) => Store;
declare const createStore: TCreateStore;
export declare const getStoreInstance: () => Store;
export default createStore;
