import React from 'react';
import { useSelector } from 'react-redux';
import { EuiBasicTable } from '@elastic/eui';

export const Table = function () {
    const selectedPosts = useSelector(state => state.posts.postsSelected);

    const columns = [
        {
            field: 'id',
            name: 'ID',
            width: '10%',
        },
        {
            field: 'title',
            name: 'Title',
            truncateText: true,
        },
        // {
        //     field: 'body',
        //     name: 'Body',
        //     mobileOptions: {
        //         width: '100%'
        //     },
        //     width: '50%',
        // },
    ];

    const getRowProps = (post) => {
        const { id } = post;
        return {
            'data-test-subj': `row-${id}`,
            className: 'customRowClass',
            onClick: () => { },
        };
    };

    const getCellProps = (
        post,
        column
    ) => {
        const { id } = post;
        const { field } = column;
        return {
            className: 'customCellClass',
            'data-test-subj': `cell-${id}-${String(field)}`,
            textOnly: true,
        };
    };

    return (
        <EuiBasicTable
            tableCaption="Demo of EuiBasicTable"
            items={selectedPosts}
            rowHeader="firstName"
            columns={columns}
            rowProps={getRowProps}
            cellProps={getCellProps}
        />
    );
};