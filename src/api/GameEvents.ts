import StoreLink from "api/StoreLink"
import { thunkSetFoodEnabled } from "redux/settings/theming/food/thunks";
import { setHudsShown } from "redux/UI/actions";

export const feed = () => {
  window.GameAPI?.hotkeys.feed();
}

export const macroFeed = () => {
  window.GameAPI?.hotkeys.macroFeed();
}

export const stopMacroFeed = () => {
  window.GameAPI?.hotkeys.stopFeed();
}

export const split = () => {
  window.GameAPI?.hotkeys.split();
}

export const doubleSplit = () => {
  window.GameAPI?.hotkeys.doubleSplit();
}

export const tripleSplit = () => {
  window.GameAPI?.hotkeys.tripleSplit();
}

export const splitSixteen = () => {
  window.GameAPI?.hotkeys.split16();
}

export const quickRespawn = () => {
  window.GameAPI?.hotkeys.quickRespawn();
}

export const pauseCell = () => {
  window.GameAPI?.hotkeys.pauseCell();
}

export const toggleCellHelpers = () => {
  window.GameAPI?.hotkeys.toggleCellHelpers();
}

export const toggleCellSkins  = () => {
  window.GameAPI?.hotkeys.toggleCellSkins();
}

export const toggleCellRings = () => {
  window.GameAPI?.hotkeys.toggleCellRings();
}

export const switchTabs = () => {
  window.GameAPI?.hotkeys.switchTabs();
}

export const toggleSpectatorMode = () => {
  window.GameAPI?.hotkeys.toggleFullmapViewRender();
}

export const sendCommand = (message: string) => {
  window.GameAPI?.sendCommand(message);
}

export const toggleFoodRender = () => {
  StoreLink.store.dispatch(thunkSetFoodEnabled(!StoreLink.store.getState().settings.theming.food.enabled));
}

export const toggleHuds = () => {
  StoreLink.store.dispatch(setHudsShown(!StoreLink.store.getState().UI.hudsShown));
}



export const GAME_EVENTS = {
  feed,
  macroFeed,
  stopMacroFeed,
  split,
  doubleSplit,
  tripleSplit,
  splitSixteen,
  quickRespawn,
  pauseCell,
  toggleCellHelpers,
  toggleCellSkins,
  toggleCellRings,
  switchTabs,
  toggleSpectatorMode,
  toggleFoodRender,
  toggleHuds
}