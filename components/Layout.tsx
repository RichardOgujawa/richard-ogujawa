//Props
interface Props {
    children: any, 
    GridTop?: any,
    hide?: boolean,
    innerContainer?: boolean, 
}
//MAIN COMPONENT
const Layout = ({ children, GridTop, hide, innerContainer}: Props) => {
    return (
        <>
            <div className={`${hide ? "hidden" : "grid"} complex-grid content pt-[7vh] h-[100vh] content text-col-neutral-100 bg-col-neutral-900`}>
                {/*Empty Space*/}
                <div className=''></div> 
                {/*Grid Top Content*/}
                <div className={`complex-grid-heading border border-col-neutral-250 border-b-0 border-t-0 grid ${innerContainer && "content-end place-items-center px-4 pb-6 "}`}>
                    <div className={`${innerContainer && "inner-container grid gap-1"}`}>
                        <GridTop/>
                    </div>
                </div>
                {/*Empty Space*/}
                <div className=''></div>
                {/*Empty Space*/}
                <div className='border border-col-neutral-250 border-x-0'></div>
                {/*Main Content*/}
                <main className='complex-grid-item complex-grid-list sm:grid w-full h-full justify-items-center items-center'>
                    <section className='px-4 w-full'>
                        {children}
                    </section>
                </main >
                {/*Empty Space*/}
                <div className='border border-col-neutral-250 border-x-0'></div>
                {/*Empty Space*/}
                <div className=''></div>
                {/*Footer*/}
                <footer className='complex-grid-footer w-full h-full border border-col-neutral-250 border-y-0 grid place-content-center'>
                    <span className='text-white text-sm'>&copy; 2023 </span>
                </footer>
                {/*Empty Space*/}
                <div className=''></div>
            </div>
        </>
    )
}
export default Layout
