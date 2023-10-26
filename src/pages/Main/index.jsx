import React from 'react'

import { ComboBox } from '../../components/ComboBox'
import { Table } from '../../components/Table'
import { EuiPageTemplate } from '@elastic/eui'

export const Main = function () {

    return (
        <div>
            <EuiPageTemplate.Section>
                <ComboBox />
                <Table />
            </EuiPageTemplate.Section>
        </div>
    )
}
