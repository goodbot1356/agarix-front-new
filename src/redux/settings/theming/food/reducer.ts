import Storage from "api/storage/Storage";
import { 
  IThemingFoodState, 
  SET_FOOD_COLOR, 
  SET_FOOD_CRISP, 
  SET_FOOD_ENABLED, 
  SET_FOOD_FIRST_TAB_ENABLED, 
  SET_FOOD_GLOW, 
  SET_FOOD_GLOW_COLOR, 
  SET_FOOD_GLOW_DISTANCE, 
  SET_FOOD_GLOW_STRENGTH, 
  SET_FOOD_SECOND_TAB_ENABLED, 
  SET_FOOD_SIZE, 
  SET_FOOD_TOP_ONE_TAB_ENABLED, 
  ThemingFoodActionTypes 
} from "./types";

const initState: IThemingFoodState = Storage.get().settings.theming.food;

export const themingFoodReducer = (state = initState, action: ThemingFoodActionTypes): IThemingFoodState => {
  switch (action.type) {
    case SET_FOOD_ENABLED:
      return {
        ...state,
        enabled: action.enabled
      }

    case SET_FOOD_FIRST_TAB_ENABLED:
      return {
        ...state,
        firstTabEnabled: action.firstTabEnabled
      }

    case SET_FOOD_SECOND_TAB_ENABLED:
      return {
        ...state,
        secondTabEnabled: action.secondTabEnabled
      }

    case SET_FOOD_TOP_ONE_TAB_ENABLED:
      return {
        ...state,
        topOneTabEnabled: action.topOneTabEnabled
      }
      
    case SET_FOOD_SIZE:
      return {
        ...state,
        size: action.size
      }

    case SET_FOOD_COLOR:
      return {
        ...state,
        color: action.color
      }

    case SET_FOOD_GLOW:
      return {
        ...state,
        glow: action.glow
      }

    case SET_FOOD_GLOW_COLOR:
      return {
        ...state,
        glowColor: action.glowColor
      }

    case SET_FOOD_GLOW_DISTANCE:
      return {
        ...state,
        glowDistance: action.glowDistance
      }

    case SET_FOOD_GLOW_STRENGTH:
      return {
        ...state,
        glowStrength: action.glowStrength
      }

    case SET_FOOD_CRISP:
      return {
        ...state,
        crisp: action.crisp
      }

    default: return state;
  }
} 