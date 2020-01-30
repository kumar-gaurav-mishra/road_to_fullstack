import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector([selectShop], shop => shop.collections);

export const selectCollection = collectionUrlParams => createSelector([selectShopCollection], collections => collections[collectionUrlParams]);
