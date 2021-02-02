import { ThunkAction } from "redux-thunk";
import { AppStateType } from "redux/store";

export const SET_ANIMATION_SPEED = 'SET_ANIMATION_SPEED';
export const SET_ZOOM_SPEED = 'SET_ZOOM_SPEED';
export const SET_CAMERA_SPEED = 'SET_CAMERA_SPEED';
export const SET_CAMERA_STYLE = 'SET_CAMERA_STYLE';
export const SET_SPECTATOR_MODE = 'SET_SPECTATOR_MODE';

export type CameraStyleType = 'Default' | 'Smooth';
export type SpectatorModeType = 'Disabled' | 'Top one' | 'Full map';

export interface IGameGameplayState {
  animationSpeed: number,
  zoomSpeed: number,
  cameraSpeed: number,
  cameraStyle: CameraStyleType,
  spectatorMode: SpectatorModeType
}

interface SetAnimationSpeedAction {
  type: typeof SET_ANIMATION_SPEED,
  animationSpeed: number
}

interface SetZoomSpeedAction {
  type: typeof SET_ZOOM_SPEED,
  zoomSpeed: number
}

interface SetCameraSpeedAction {
  type: typeof SET_CAMERA_SPEED,
  cameraSpeed: number
}

interface SetCameraStyleAction {
  type: typeof SET_CAMERA_STYLE,
  cameraStyle: CameraStyleType
}

interface SetSpectatorModeAction {
  type: typeof SET_SPECTATOR_MODE,
  spectatorMode: SpectatorModeType
}

export type GameGameplayActionTypes = SetAnimationSpeedAction | SetZoomSpeedAction | SetCameraSpeedAction |
                                      SetCameraStyleAction | SetSpectatorModeAction;

export type GameGameplayThunkActionTypes = ThunkAction<void, AppStateType, unknown, GameGameplayActionTypes>;