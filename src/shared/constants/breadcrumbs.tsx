// import createAsyncTitle from '@/common/Breadcrumbs/createAsyncTitle';

// const getTitle = createAsyncTitle({entityKey: 'some'})

const breadcrumbs = {
    main: {
        title: 'Главная',
        routes: {
            credits: {
                title: 'Кредиты',
                // routes: {
                //     ':creditId': {
                //         getTitle: getTitle,
                //     }
                // }
            }
        }
    }
}

export default breadcrumbs;