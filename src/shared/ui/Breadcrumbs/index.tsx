import { Breadcrumb } from 'antd';
import {
    useLocation,
    Link
} from 'react-router-dom';

const convertToFlat = (root = '/', routeItems: any) => {
    let result = {};

    Object.keys(routeItems).forEach((routeKey) => {
        const {
            routes
        } = routeItems[routeKey];

        const {
            title,
            queryKey
        } = routeItems[routeKey];
        const pathKey = `${root}${routeKey}/`;

        result[pathKey] = title || queryKey;

        if (routes) {
            const nestedRoutes = convertToFlat(pathKey, routes);
            result = { ...result, ...nestedRoutes };
        }
    });
    return result;
};

const Breadcrumbs = ({ routes }) => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter((i) => i);

    const path = convertToFlat('/', routes);
    // @ts-ignore
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}/`;

        return {
            key: url,
            title: <Link to={url}>{path[url]}</Link>
        };
    });

    const breadcrumbItems = [
        {
            title: <Link to="/main/">Главная</Link>,
            key: 'main'
        }
    ];

    return (
        <div>
            <Breadcrumb items={breadcrumbItems || extraBreadcrumbItems} />
        </div>
    );
};

export default Breadcrumbs;