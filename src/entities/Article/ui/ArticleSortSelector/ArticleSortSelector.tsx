import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import cls from './ArticleSortSelector.module.scss';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { ArticlesSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticlesSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticlesSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort} = props;
    const { t } = useTranslation('article');

    const orderOptoins = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        },
    ], [t]);

    const sortFieldOptoins = useMemo<SelectOption<ArticlesSortField>[]>(() => [
        {
            value: ArticlesSortField.CREATED,
            content: t('дата создания')
        },
        {
            value: ArticlesSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticlesSortField.CREATED,
            content: t('просмотрам')
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                options={sortFieldOptoins}
                label={t('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOptoins}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
};
