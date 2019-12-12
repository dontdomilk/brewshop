

export const selectHome = (state) => state.HomeReducer;

export const selectBeers = (state) => selectHome(state).beers;