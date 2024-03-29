
import KeyboardGameplay from 'api/Keyboard/Gameplay/KeyboardGameplay';
import Storage from 'api/storage/Storage';
import Keyboard from 'api/Keyboard/Keyboard';
import { thunkSetMenuShown } from 'redux/UI/thunks';
import { TStore } from 'redux/store';
import { initFrontCommunicationService } from './FrontCommunicationService/FrontCommunicationService';
import StoreLink from './StoreLink';
import { setInputMessageShown } from 'redux/UI/actions';
import Mouse from './Mouse/Mouse';
import DOMManipulations from './DOM/DOMManipulations';

const init = (store: TStore): void => {
  // check storage
  Storage.init(store.getState());

  // init keyboard
  initKeyboardInteractions(store);

  // init mouse
  initMouseInteractions(store);

  // init CLIENT -> FRONT communication
  initFrontCommunicationService(store);

  // save store to localStorage on every update
  store.subscribe(() => Storage.save(store.getState()));

  // set global store link
  StoreLink.set(store);

  // start game client initialization
  initGameClient();
}

const initMouseInteractions = (store: TStore) => {
  const mouse = store.getState().settings.hotkeys.mouse;

  Mouse.init({ ...mouse });
}

const initKeyboardInteractions = (store: TStore) => {
  const kb = store.getState().settings.hotkeys.keyboard;
  const commands = store.getState().settings.hotkeys.commands;

  KeyboardGameplay.init({
    feedKey: kb.feed,
    macroFeedKey: kb.macroFeed,
    splitKey: kb.split,
    doubleSplitKey: kb.doubleSplit,
    tripleSplitKey: kb.tripleSplit,
    splitSixteenKey: kb.splitSixteen,
    quickRespawnKey: kb.quickRespawn,
    pauseCellKey: kb.pauseCell,
    toggleCellHelpersKey: kb.toggleCellHelpers,
    toggleCellRingsKey: kb.toggleCellRings,
    toggleCellSkinsKey: kb.toggleCellSkins,
    switchTabsKey: kb.switchTabs,
    toggleFoodRenderKey: kb.toggleFoodRender,
    toggleSpectatorModeKey: kb.toggleSpectatorMode,
    toggleHudsKey: kb.toggleHuds,
    commands
  });

  // init menu intraction using keyboard
  Keyboard.bindFunctionToKey('down', 'Escape', () => {
    const shown = !store.getState().UI.menuShown;

    store.dispatch(thunkSetMenuShown(shown));

    DOMManipulations.lastUsedElementForUnfocus?.blur();
  });

  Keyboard.bindFunctionToKey('down', 'Enter', () => {
    if (store.getState().UI.menuShown) {
      return;
    }

    const { inputMessageShown } = store.getState().UI;

    store.dispatch(setInputMessageShown(!inputMessageShown));
    Keyboard.block = !inputMessageShown;
  });
}

const initGameClient = () => {
  const checker = setInterval(() => {
    if (window.GameAPI && typeof window.GameAPI.init === 'function') {
      clearInterval(checker);
      window.GameAPI.init();
    }
  }, 100);
}

export default init;