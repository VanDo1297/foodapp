import {StyleSheet, Dimensions} from 'react-native'

export const { width, height } = Dimensions.get('window');
export const SCREEN_WIDTH = width < height ? width : height;

export const recipeNumColums = 2;
// item recipe item size
export const RECIPE_ITEM_HEIGHT = 150;
export const RECIPE_ITEM_MARGIN = 20;

