import { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsData = (state: StateSchema) => state.articleDetailes?.data;
export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetailes?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetailes?.error;
