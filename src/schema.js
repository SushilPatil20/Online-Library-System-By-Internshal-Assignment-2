import * as yup from 'yup';

const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    author: yup.string().required('Author is required'),
    genre: yup.string().required('Genre is required'),
    cover: yup.string().url('Invalid URL').required('Cover image URL is required'),
});

export default schema;