import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'http://todo-app-env-1.eba-2zgvkkwp.ap-southeast-2.elasticbeanstalk.com/'
    }
);
