// import { createStore, compose, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import thunk from "redux-thunk";
// import axios from "axios";

// import { rootReducer } from "./root-reducer";
// import * as api from "../config"

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['theme'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(persistedReducer, composeEnhancers(
//   applyMiddleware(
//     thunk.withExtraArgument({
//       client: axios,
//       api,
//     })
//   )
// ));

// export { store };
// export const persistor = persistStore(store);