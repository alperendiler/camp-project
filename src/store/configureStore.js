import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export function configureStore() {
  const middleware = []; // Özel middleware'leri buraya ekleyin
  const enhancer = composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(rootReducer, enhancer);

  // Özel store düzenlemelerini buraya ekleyebilirsiniz
  // Örnek: store.dispatch, store.getState gibi fonksiyonlar üzerinde değişiklik yapabilirsiniz.

  return store;
}