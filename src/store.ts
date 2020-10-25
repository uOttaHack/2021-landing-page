import create from "zustand";

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

type State = {
  analytics: firebase.analytics.Analytics | undefined;
  initAnalytics: () => Promise<void>;
  firestore: firebase.firestore.Firestore;
  isNavOverlayOpen: boolean;
  setNavOverlayOpen: (isOpen: boolean) => void;
};

const useStore = create<State>((set, get) => ({
  analytics: undefined,
  initAnalytics: async () => {
    if (!get().analytics) {
      let isSupported: boolean;

      try {
        isSupported = await firebase.analytics.isSupported();
      } catch (error) {
        isSupported = false;
      }

      if (firebaseConfig.measurementId && isSupported) {
        set({ analytics: firebase.analytics() });
      }
    }
  },
  firestore: firebase.firestore(),
  isNavOverlayOpen: false,
  setNavOverlayOpen: (isOpen) => set({ isNavOverlayOpen: isOpen }),
}));

export default useStore;
