import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/ThemeProvider/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'

const App = () => {

    const { theme } = useTheme()

    return(
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className='content-page'>
                <SideBar/>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App