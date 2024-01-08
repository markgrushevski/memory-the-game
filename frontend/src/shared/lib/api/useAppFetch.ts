import { createFetch } from '@vueuse/core';

export const useAppFetch = createFetch({
    baseUrl: `${import.meta.env.VITE_API}`,
    fetchOptions: {
        mode: 'cors'
    },
    options: {
        async beforeFetch({ options }) {
            /*const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ0dXBpa2lubG1AZ21haWwuY29tIiwiVXNlcklkIjoiMzgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsImV4cCI6MTcyNDkzNDA0OCwiaXNzIjoibWFwcy5iYWNrZW5kLkFwaSIsImF1ZCI6Im1hcHMuZnJvbnRlZCJ9.cZ6h84vn1brOYRmPMAlJDrEvUuVZChFXVL3IzWKFIShEl1gEUNMdyOYH5wQ0_hP9CIjHiXrG5ZGgLeYYeovDsw';*/

            if (localStorage.getItem('token')) {
                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                };
            }

            return { options };
        },
        /* async afterFetch(ctx) {
            console.log(ctx);
            /!*
             * todo
             *  Добавить глобальное появление баннера внизу с ответом после fetch
             *   isBannerShow в стор
             * *!/
            return ctx;
        }, */
        async onFetchError(ctx) {
            console.error('onFetchError\n', ctx);
            return ctx;
        },
        updateDataOnError: true
    },
    combination: 'overwrite'
});
