import Header from '../Header'

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header></Header>
            {children}
        </div>
    )
}

export const getLayout = (page) => <MainLayout>{page}</MainLayout>

export default MainLayout
