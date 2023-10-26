import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsData, saveSelectedPosts } from '../../features/posts/postsSlice';
import { EuiButton, EuiComboBox, EuiFlexGroup } from '@elastic/eui';

// !!! In our case, there is no need to memoize the component
const destructuringObjectData = async (posts) => {
    return await posts.map((item) => {
        //!!! Fix API structure. React does not recognize the `userId` prop on a DOM element.
        const { id, title, body } = item;

        return {
            id, title, body,
            label: `[${item.id}] ${item.title}`
        }
    });
}

export const ComboBox = function () {
    const posts = useSelector(state => state.posts.postsList);
    const dispatch = useDispatch();

    const [options, setOptions] = useState();
    const [selectedOptions, setSelected] = useState([]);

    useEffect(() => {
        dispatch(fetchPostsData());
    }, [dispatch]);

    useEffect(() => {
        destructuringObjectData(posts).then((data) => setOptions(data));
    }, [posts]);

    const onChange = (selectedOptions) => setSelected(selectedOptions);
    const onSaveSelectedList = () => dispatch(saveSelectedPosts(selectedOptions));

    return (
        <EuiFlexGroup component="span">
            <EuiComboBox
                fullWidth={true}
                aria-label="Accessible screen reader label"
                placeholder="Select or create options"
                options={options}
                selectedOptions={selectedOptions}
                onChange={onChange}
                isClearable={true}
                autoFocus
            />

            <EuiButton onClick={onSaveSelectedList}>Update Table</EuiButton>
        </EuiFlexGroup>
    );
};