
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';


interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard
                        key={comment.id}
                        className={cls.comment}
                        isLoading={isLoading}
                        comment={comment}
                    />
                ))
                : <Text text={t('комментарии отсутствуют')} />
            }
        </div>
    );
});