export interface Pagination {
    limit?: string | number,
    offset?: string | number,
}

export interface PaginateResponse {
    count: number;
    next: string;
    previous: string;
}

export interface ErrorResponse {
    message: string;
    detail?: string;
    response?: {
        data: { message: string };
        status: number;
        statusText: string;
    }
}

export interface FileProps {
    url: string;
    file_name: string;
    name?: string;
}