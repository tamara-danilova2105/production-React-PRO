import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments.isLoading || false;
export const getArticleCommentsIsError = (state: StateSchema) => state.articleDetailsPage?.comments.error;
