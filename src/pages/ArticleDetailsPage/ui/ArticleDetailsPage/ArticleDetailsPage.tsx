import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('комментарии')} />
            <CommentList isLoading={true} comments={[
                {
                    id: '1',
                    text: 'comment 1',
                    user: {id: '1', username: 'admin', avatar: 'https://img5.goodfon.ru/original/6016x4016/4/de/pink-background-pose-charming-woman-brown-eyes-bright-manicu.jpg'}
                },
                {
                    id: '2',
                    text: 'comment 2',
                    user: {id: '1', username: 'admin', avatar: 'https://img5.goodfon.ru/original/6016x4016/4/de/pink-background-pose-charming-woman-brown-eyes-bright-manicu.jpg'}
                }
            ]} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
