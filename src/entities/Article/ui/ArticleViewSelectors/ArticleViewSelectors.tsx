import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from 'entities/Article/model/consts/consts';
import cls from './ArticleViewSelectors.module.scss';

interface ArticleViewSelectorsProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void,
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelectors = memo((props: ArticleViewSelectorsProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelectors, {}, [className])}>
            {
                viewTypes.map((viewTupe) => (
                    <Button
                        key={viewTupe.view}
                        theme={ThemeButton.CLEAR}
                        onClick={onClick(viewTupe.view)}
                    >
                        <Icon
                            Svg={viewTupe.icon}
                            className={classNames('', { [cls.notSelected]: viewTupe.view === view })}
                        />
                    </Button>
                ))
            }
        </div>
    );
});
