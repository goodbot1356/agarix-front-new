import Storage from "api/storage/Storage";
import { 
  GameGameplayActionTypes, 
  IGameGameplayState, 
  SET_ANIMATION_SPEED, 
  SET_CAMERA_SPEED, 
  SET_CAMERA_STYLE, 
  SET_SPECTATOR_MODE, 
  SET_VIEWPORT, 
  SET_ZOOM_SPEED 
} from "./types";


const initState: IGameGameplayState = Storage.get().settings.game.gameplay;

export const gameGameplayReducer = (state = initState, action: GameGameplayActionTypes): IGameGameplayState => {
  switch (action.type) {
    case SET_ANIMATION_SPEED:
      return {
        ...state,
        animationSpeed: action.animationSpeed
      }
    
    case SET_ZOOM_SPEED:
      return {
        ...state,
        zoomSpeed: action.zoomSpeed
      }

    case SET_CAMERA_SPEED: 
      return {
        ...state,
        cameraSpeed: action.cameraSpeed
      }

    case SET_CAMERA_STYLE:
      return {
        ...state,
        cameraStyle: action.cameraStyle
      }

    case SET_SPECTATOR_MODE:
      return {
        ...state,
        spectatorMode: action.spectatorMode
      }

    case SET_VIEWPORT:
      return {
        ...state,
        viewport: action.viewport
      }

    default: return state;
  }
}