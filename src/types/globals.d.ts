declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}

declare interface NodeModule {
  hot?: { accept: (path: string, callback: () => void) => void };
}
