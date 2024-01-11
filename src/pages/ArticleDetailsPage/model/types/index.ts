import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationSchema";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}