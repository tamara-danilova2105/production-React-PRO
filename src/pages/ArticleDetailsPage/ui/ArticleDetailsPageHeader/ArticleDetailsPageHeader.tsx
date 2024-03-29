import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articlesDetails';
import { getCanEditArticle } from '../../model/selectors/article';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdid = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Button
                onClick={onBackToList}
                theme={ThemeButton.OUTLINE}
            >
                {t('вернуться назад')}
            </Button>

            {
                canEdid
                && (
                    <Button
                        onClick={onEditArticle}
                        theme={ThemeButton.OUTLINE}
                    >
                        {t('редактировать')}
                    </Button>
                )
            }
        </HStack>
    );
});
